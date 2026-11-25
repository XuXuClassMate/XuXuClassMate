"use client";

/* Count-up syncs from a live fetch (external source) by design. */
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useTx } from "@/components/i18n";

const GW = "https://docker-hub-pull-counter.vercel.app";
const USER = "xuxuclassmate";
const CLAW = "https://clawhub.ai/api/v1/skills/";
// The owner-scoped skill slugs on ClawHub (summed live for total downloads).
const CLAW_SLUGS = [
  "skill-publishing",
  "free-api-discovery",
  "feishu-setup-troubleshooting",
  "ai-testcase-generator",
  "stock-monitor-fixed",
  "stock-analysis-fixed",
  "test-master-fixed",
  "trading-assistant-core",
  "whisper-voice-transcription",
  "custom-mail-skill",
];

type Stats = {
  pulls: number;
  images: number;
  apiCalls: number;
  monthDelta: number;
  clawDownloads: number;
  clawSkills: number;
  history: number[];
};

// Last-known values, so the section is never empty (SSR / no-JS / fetch fail).
const FALLBACK: Stats = {
  pulls: 85285,
  images: 13,
  apiCalls: 4811,
  monthDelta: 6762,
  clawDownloads: 10868,
  clawSkills: 10,
  history: [
    78523, 79009, 79482, 79647, 80016, 80499, 80812, 81148, 81637, 82200,
    82800, 83400, 84100, 84700, 85285,
  ],
};

function useCountUp(target: number, run: boolean, reduce: boolean) {
  const [n, setN] = useState(reduce ? target : 0);
  const fromRef = useRef(0);
  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setN(target);
      fromRef.current = target;
      return;
    }
    const from = fromRef.current;
    let raf = 0;
    const start = performance.now();
    const dur = 1000;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      const val = Math.round(from + (target - from) * e);
      setN(val);
      fromRef.current = val;
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, reduce]);
  return n;
}

function Sparkline({ values, className }: { values: number[]; className?: string }) {
  if (values.length < 2) return null;
  const w = 220;
  const h = 60;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / span) * (h - 6) - 3;
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `0,${h} ${line} ${w},${h}`;
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <polygon points={area} fill="var(--color-accent)" opacity="0.1" />
      <polyline
        points={line}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx={pts[pts.length - 1][0]}
        cy={pts[pts.length - 1][1]}
        r="2.5"
        fill="var(--color-accent)"
      />
    </svg>
  );
}

export function LiveStats() {
  const tx = useTx();
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  const [data, setData] = useState<Stats>(FALLBACK);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const ac = new AbortController();
    const sig = ac.signal;
    const jsonOf = (u: string) => fetch(u, { signal: sig }).then((r) => r.json());

    (async () => {
      // Docker + gateway stats
      const docker = (async () => {
        const [s, g, h] = await Promise.all([
          jsonOf(`${GW}/api/user/stats?username=${USER}`),
          jsonOf(`${GW}/api/stats`),
          jsonOf(`${GW}/api/user/history?username=${USER}`),
        ]);
        const points: number[] = Array.isArray(h?.points)
          ? h.points.map((p: { totalPulls: number }) => p.totalPulls)
          : [];
        return {
          pulls: Number(s?.totalPulls) || FALLBACK.pulls,
          images: Number(s?.repositoryCount) || FALLBACK.images,
          apiCalls: Number(g?.totalCalls) || FALLBACK.apiCalls,
          monthDelta:
            points.length > 1 ? points[points.length - 1] - points[0] : FALLBACK.monthDelta,
          history: points.length > 1 ? points : FALLBACK.history,
        };
      })();

      // ClawHub: sum downloads across the owner's skills
      const claw = (async () => {
        const settled = await Promise.allSettled(
          CLAW_SLUGS.map((slug) => jsonOf(`${CLAW}${slug}`)),
        );
        let total = 0;
        let count = 0;
        for (const r of settled) {
          if (r.status !== "fulfilled") continue;
          const d = r.value;
          if (
            d?.owner?.handle === USER &&
            typeof d?.skill?.stats?.downloads === "number"
          ) {
            total += d.skill.stats.downloads;
            count += 1;
          }
        }
        return count > 0
          ? { clawDownloads: total, clawSkills: count }
          : { clawDownloads: FALLBACK.clawDownloads, clawSkills: FALLBACK.clawSkills };
      })();

      const [d, c] = await Promise.all([docker, claw]);
      if (sig.aborted) return;
      setData({ ...d, ...c });
      setLive(true);
    })().catch(() => {
      /* keep fallback */
    });

    return () => ac.abort();
  }, []);

  const pulls = useCountUp(data.pulls, run, reduce);
  const images = useCountUp(data.images, run, reduce);
  const apiCalls = useCountUp(data.apiCalls, run, reduce);
  const delta = useCountUp(data.monthDelta, run, reduce);
  const claw = useCountUp(data.clawDownloads, run, reduce);
  const fmt = (n: number) => n.toLocaleString("en-US");

  const small = [
    {
      value: fmt(claw),
      label: tx({ en: "ClawHub downloads", zh: "ClawHub 下载量", ar: "تنزيلات ClawHub", fr: "Téléchargements ClawHub", ru: "Загрузки ClawHub", es: "Descargas de ClawHub" }),
      sub: `${data.clawSkills} ${tx({ en: "skills", zh: "个技能", ar: "مهارات", fr: "compétences", ru: "навыков", es: "habilidades" })}`,
    },
    {
      value: fmt(images),
      label: tx({ en: "Public images", zh: "公开镜像", ar: "صور عامة", fr: "Images publiques", ru: "Публичных образов", es: "Imágenes públicas" }),
    },
    {
      value: fmt(apiCalls),
      label: tx({ en: "API calls served", zh: "API 调用量", ar: "طلبات API مُخدّمة", fr: "Appels API servis", ru: "Обработано API-запросов", es: "Llamadas API servidas" }),
    },
  ];

  return (
    <section className="bg-[var(--color-surface)]">
      <div ref={ref} className="container-ap py-28">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            {live && (
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-70 motion-safe:animate-ping" />
            )}
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${live ? "bg-[#34c759]" : "bg-muted"}`}
            />
          </span>
          <p className="eyebrow" style={{ marginTop: 0 }}>
            {tx({ en: "Live", zh: "实时数据", ar: "مباشر", fr: "En direct", ru: "Вживую", es: "En vivo" })}
          </p>
        </div>
        <h2 className="display-2 mt-3 max-w-[20ch]">
          {tx({
            en: "Proof, in real numbers.",
            zh: "用真实数据说话。",
            ar: "دليلٌ بأرقام حقيقية.",
            fr: "La preuve, en chiffres réels.",
            ru: "Доказательство — в реальных цифрах.",
            es: "La prueba, en números reales.",
          })}
        </h2>
        <p className="lead mt-4 max-w-[48ch]">
          {tx({
            en: "Pulled live from Docker Hub and ClawHub through the open API gateway.",
            zh: "经由开放 API 网关,实时取自 Docker Hub 与 ClawHub。",
            ar: "مسحوبة مباشرةً من Docker Hub وClawHub عبر بوابة الواجهة المفتوحة.",
            fr: "Récupéré en direct depuis Docker Hub et ClawHub via la passerelle API ouverte.",
            ru: "Получено вживую из Docker Hub и ClawHub через открытый API-шлюз.",
            es: "Obtenido en vivo desde Docker Hub y ClawHub a través de la pasarela API abierta.",
          })}
        </p>

        <div className="mt-12 space-y-6">
          {/* Featured: Docker pulls + sparkline */}
          <article className="card-ap rounded-[var(--radius-ap)] bg-[var(--color-bg)] p-8 md:flex md:items-center md:justify-between md:gap-12">
            <div>
              <div className="text-[clamp(44px,6.4vw,76px)] font-semibold leading-none tracking-tight text-ink">
                {fmt(pulls)}
              </div>
              <p className="mt-3 text-[17px] text-muted">
                {tx({ en: "Docker pulls", zh: "Docker 拉取次数", ar: "عمليات سحب Docker", fr: "Pulls Docker", ru: "Docker-загрузок", es: "Pulls de Docker" })}
              </p>
              <p className="mt-1 font-mono text-[12px] text-[#34c759]">
                +{fmt(delta)} ·{" "}
                {tx({ en: "last 30 days", zh: "近 30 天", ar: "آخر 30 يوماً", fr: "30 derniers jours", ru: "за 30 дней", es: "últimos 30 días" })}
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:w-[48%]">
              <Sparkline values={data.history} className="h-[72px] w-full" />
            </div>
          </article>

          {/* Supporting stats */}
          <div className="grid gap-6 sm:grid-cols-3">
            {small.map((s) => (
              <article
                key={s.label}
                className="card-ap flex flex-col justify-center rounded-[var(--radius-ap)] bg-[var(--color-bg)] p-8"
              >
                <div className="text-[clamp(34px,4vw,48px)] font-semibold leading-none tracking-tight text-ink">
                  {s.value}
                </div>
                <p className="mt-3 text-[16px] text-muted">{s.label}</p>
                {s.sub && <p className="mt-1 font-mono text-[12px] text-muted">{s.sub}</p>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
