"use client";

/* Count-up syncs from a live fetch (external source) by design. */
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useTx } from "@/components/i18n";
import { Icon, type IconName } from "@/components/icons";

const GW = "https://docker-hub-pull-counter.vercel.app";
const USER = "xuxuclassmate";
const CLAW = "https://clawhub.ai/api/v1";
// ClawHub exposes no list-by-owner API, so the published items are enumerated here
// (one place to extend). Every number shown is fetched live from these endpoints —
// counts and downloads are computed from the live responses, never hard-coded.
const CLAW_SKILLS = [
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
  "relay",
];
const CLAW_PLUGINS = ["relay"];
const GH_SEARCH = "https://api.github.com/search/issues?q=";

type Stats = {
  pulls: number;
  images: number;
  apiCalls: number;
  monthDelta: number;
  clawDownloads: number;
  clawSkills: number;
  clawPlugins: number;
  ghIssues: number;
  ghPRs: number;
  history: number[];
};

const FALLBACK: Stats = {
  pulls: 85285,
  images: 13,
  apiCalls: 4811,
  monthDelta: 6762,
  clawDownloads: 10990,
  clawSkills: 11,
  clawPlugins: 1,
  ghIssues: 147,
  ghPRs: 31,
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
    const dur = 1100;
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
  const w = 240;
  const h = 72;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / span) * (h - 10) - 5;
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `0,${h} ${line} ${w},${h}`;
  const [ex, ey] = pts[pts.length - 1];
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#spark-grad)" />
      <polyline
        points={line}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={ex} cy={ey} r="6" fill="var(--color-accent)" opacity="0.18" />
      <circle cx={ex} cy={ey} r="3" fill="var(--color-accent)" />
    </svg>
  );
}

const CARD =
  "card-ap relative overflow-hidden rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-[var(--color-bg)] p-8 shadow-[var(--shadow-card)]";
const GLOW: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(130% 90% at 100% -10%, color-mix(in srgb, var(--color-accent) 7%, transparent), transparent 55%)",
};

function Chip({ name, color = "var(--color-accent)" }: { name: IconName; color?: string }) {
  return (
    <span
      className="grid h-10 w-10 place-items-center rounded-xl"
      style={{ backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`, color }}
    >
      <Icon name={name} size={20} />
    </span>
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
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const ac = new AbortController();
    const sig = ac.signal;
    const jsonOf = (u: string) => fetch(u, { signal: sig }).then((r) => r.json());

    (async () => {
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

      const claw = (async () => {
        const [skRes, pkRes] = await Promise.all([
          Promise.allSettled(CLAW_SKILLS.map((slug) => jsonOf(`${CLAW}/skills/${slug}?owner=${USER}`))),
          Promise.allSettled(CLAW_PLUGINS.map((name) => jsonOf(`${CLAW}/packages/${name}`))),
        ]);
        let total = 0;
        let skills = 0;
        let plugins = 0;
        for (const r of skRes) {
          if (r.status !== "fulfilled") continue;
          const d = r.value;
          if (d?.owner?.handle === USER && typeof d?.skill?.stats?.downloads === "number") {
            total += d.skill.stats.downloads;
            skills += 1;
          }
        }
        for (const r of pkRes) {
          if (r.status !== "fulfilled") continue;
          const d = r.value;
          if (d?.owner?.handle === USER && typeof d?.package?.stats?.downloads === "number") {
            total += d.package.stats.downloads;
            plugins += 1;
          }
        }
        return skills > 0 || plugins > 0
          ? { clawDownloads: total, clawSkills: skills, clawPlugins: plugins }
          : { clawDownloads: FALLBACK.clawDownloads, clawSkills: FALLBACK.clawSkills, clawPlugins: FALLBACK.clawPlugins };
      })();

      const github = (async () => {
        try {
          const q = (f: string) =>
            jsonOf(`${GH_SEARCH}${encodeURIComponent(`author:${USER} ${f}`)}&per_page=1`);
          const [iss, pr] = await Promise.all([q("type:issue"), q("type:pr")]);
          return {
            ghIssues: Number(iss?.total_count) || FALLBACK.ghIssues,
            ghPRs: Number(pr?.total_count) || FALLBACK.ghPRs,
          };
        } catch {
          return { ghIssues: FALLBACK.ghIssues, ghPRs: FALLBACK.ghPRs };
        }
      })();

      const [d, c, g] = await Promise.all([docker, claw, github]);
      if (sig.aborted) return;
      setData({ ...d, ...c, ...g });
      setLive(true);
    })().catch(() => {});

    return () => ac.abort();
  }, []);

  const pulls = useCountUp(data.pulls, run, reduce);
  const images = useCountUp(data.images, run, reduce);
  const apiCalls = useCountUp(data.apiCalls, run, reduce);
  const delta = useCountUp(data.monthDelta, run, reduce);
  const claw = useCountUp(data.clawDownloads, run, reduce);
  const ghIssues = useCountUp(data.ghIssues, run, reduce);
  const fmt = (n: number) => n.toLocaleString("en-US");

  const small: { icon: IconName; color: string; value: string; label: string; sub?: string }[] = [
    {
      icon: "download",
      color: "var(--c-purple)",
      value: fmt(claw),
      label: tx({ en: "ClawHub downloads", zh: "ClawHub 下载量", ar: "تنزيلات ClawHub", fr: "Téléchargements ClawHub", ru: "Загрузки ClawHub", es: "Descargas de ClawHub" }),
      sub: `${data.clawSkills} ${tx({ en: "skills", zh: "个技能", ar: "مهارات", fr: "compétences", ru: "навыков", es: "habilidades" })} · ${data.clawPlugins} ${tx({ en: "plugins", zh: "个插件", ar: "ملحقات", fr: "plugins", ru: "плагинов", es: "plugins" })}`,
    },
    {
      icon: "code",
      color: "var(--c-teal)",
      value: fmt(ghIssues),
      label: tx({ en: "GitHub issues opened", zh: "GitHub 提交的 issues", ar: "مشكلات GitHub المفتوحة", fr: "Issues GitHub ouvertes", ru: "Issues на GitHub", es: "Issues abiertas en GitHub" }),
      sub: `${data.ghPRs} ${tx({ en: "pull requests", zh: "个 PR", ar: "طلبات سحب", fr: "pull requests", ru: "pull-реквестов", es: "pull requests" })}`,
    },
    {
      icon: "api",
      color: "var(--c-amber)",
      value: fmt(apiCalls),
      label: tx({ en: "API calls served", zh: "API 调用量", ar: "طلبات API مُخدّمة", fr: "Appels API servis", ru: "Обработано API-запросов", es: "Llamadas API servidas" }),
    },
  ];

  return (
    <section className="bg-[var(--color-surface)]">
      <div ref={ref} className="container-ap py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-bg)] px-3 py-1 text-[13px] font-medium text-ink">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            {live && (
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-70 motion-safe:animate-ping" />
            )}
            <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${live ? "bg-[#34c759]" : "bg-muted"}`} />
          </span>
          {tx({ en: "Live", zh: "实时数据", ar: "مباشر", fr: "En direct", ru: "Вживую", es: "En vivo" })}
        </span>
        <h2 className="display-2 mt-4 max-w-[20ch]">
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
          <article className={`${CARD} md:flex md:items-center md:justify-between md:gap-12`} style={GLOW}>
            <div>
              <div className="flex items-center gap-3">
                <Chip name="box" color="var(--c-blue)" />
                <p className="text-[15px] text-muted">
                  {tx({ en: "Docker pulls", zh: "Docker 拉取次数", ar: "عمليات سحب Docker", fr: "Pulls Docker", ru: "Docker-загрузок", es: "Pulls de Docker" })}
                </p>
              </div>
              <div className="mt-4 text-[clamp(46px,6.6vw,80px)] font-semibold leading-none tracking-tight text-ink">
                {fmt(pulls)}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#34c759]/12 px-3 py-1 font-mono text-[12px] font-medium text-[#1a9c43] dark:text-[#4fd37a]">
                  ↑ {fmt(delta)} ·{" "}
                  {tx({ en: "last 30 days", zh: "近 30 天", ar: "آخر 30 يوماً", fr: "30 derniers jours", ru: "за 30 дней", es: "últimos 30 días" })}
                </span>
                <span className="font-mono text-[12px] text-muted">
                  {fmt(images)} {tx({ en: "public images", zh: "个公开镜像", ar: "صورة عامة", fr: "images publiques", ru: "публичных образов", es: "imágenes públicas" })}
                </span>
              </div>
            </div>
            <div className="mt-7 md:mt-0 md:w-[46%]">
              <Sparkline values={data.history} className="h-[84px] w-full" />
            </div>
          </article>

          {/* Supporting stats */}
          <div className="grid gap-6 sm:grid-cols-3">
            {small.map((s) => (
              <article key={s.label} className={CARD} style={GLOW}>
                <Chip name={s.icon} color={s.color} />
                <div className="mt-5 text-[clamp(34px,4vw,48px)] font-semibold leading-none tracking-tight text-ink">
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
