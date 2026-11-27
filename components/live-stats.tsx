"use client";

/* Count-up runs once on mount and retargets in-flight as the live fetch lands,
   so numbers sweep up a single time to their final value — never stuck at 0,
   never a second climb when the second request returns. */
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useLang, useTx } from "@/components/i18n";
import { formatCompactCount, formatCount } from "@/lib/format-number";
import { Icon, type IconName } from "@/components/icons";

const GW = "https://open.xuxuclassmate.com";
// All stats (Docker + ClawHub + GitHub + page views + security) are aggregated and
// cached in Redis by the gateway; the site just pulls the latest value.

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

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
  pageViews: number;
  pvLast30d: number;
  pvHistory: number[];
  scans30d: number;
  history: number[];
};

// Fallbacks sit CLOSE to the live values so static HTML (no-JS / SEO / iOS) shows
// real-looking numbers, and the single count-up retargets to the fetched value
// without any visible jump.
const FALLBACK: Stats = {
  pulls: 86600,
  images: 14,
  apiCalls: 6200,
  monthDelta: 7460,
  clawDownloads: 11000,
  clawSkills: 11,
  clawPlugins: 1,
  ghIssues: 147,
  ghPRs: 33,
  pageViews: 686000,
  pvLast30d: 238000,
  pvHistory: [
    1690, 4390, 1170, 3450, 4770, 6530, 4140, 7330, 11400, 9290, 7750, 7150,
    3470, 6000, 4310, 6660, 6180, 5460, 8710, 19160, 8960, 7020, 7850, 6970,
    6340, 5810, 9830, 14060, 28510, 14550,
  ],
  scans30d: 400960,
  history: [
    79009, 79352, 79482, 79567, 79647, 79871, 80016, 80343, 80499, 80679,
    80812, 80926, 81148, 81474, 81637, 81895, 82080, 82293, 82570, 82848,
    83104, 83332, 83661, 84109, 84390, 84569, 84846, 85135, 85636, 86471,
  ],
};

// One count-up, on mount: 0 -> target with ease-out. `targetRef` is read every
// frame, so when a fetch updates the target mid-sweep the animation glides to the
// new value instead of restarting. After it lands, late updates snap silently.
// It must NEVER get stuck at 0: rAF is paused in background tabs, so when the tab
// is hidden (or motion is reduced) we skip straight to the final value, and a
// setTimeout backstop guarantees the end value even if rAF never ticks.
function useCountUp(target: number, reduce: boolean) {
  const [n, setN] = useState(target); // SSR / first paint = fallback (never a bare 0)
  const targetRef = useRef(target);
  targetRef.current = target;
  const done = useRef(false);

  useIsoLayoutEffect(() => {
    const finish = () => {
      done.current = true;
      setN(targetRef.current);
    };
    const hidden = typeof document !== "undefined" && document.visibilityState === "hidden";
    if (reduce || hidden) {
      finish();
      return;
    }
    const dur = 1600;
    const t0 = performance.now();
    setN(0); // set before first paint (layout effect) — no flash of the fallback
    let raf = 0;
    const safety = window.setTimeout(finish, dur + 500); // rAF-throttle backstop
    const onHide = () => {
      if (document.visibilityState === "hidden") finish();
    };
    document.addEventListener("visibilitychange", onHide);
    const tick = (t: number) => {
      if (done.current) return;
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setN(Math.round(targetRef.current * e));
      if (p < 1) raf = requestAnimationFrame(tick);
      else finish();
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      document.removeEventListener("visibilitychange", onHide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keep in sync with a late/updated value once the sweep has finished (no re-run)
  useEffect(() => {
    if (done.current) setN(targetRef.current);
  }, [target]);

  return n;
}

function Sparkline({
  values,
  className,
  color = "var(--color-accent)",
  gradId = "spark-grad",
}: {
  values: number[];
  className?: string;
  color?: string;
  gradId?: string;
}) {
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
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${gradId})`} />
      <polyline
        points={line}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={ex} cy={ey} r="6" fill={color} opacity="0.18" />
      <circle cx={ex} cy={ey} r="3" fill={color} />
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

const HERO_NUM =
  "mt-5 text-[clamp(44px,5.6vw,76px)] font-semibold leading-[0.95] tracking-tight text-ink tabular-nums";

export function LiveStats() {
  const tx = useTx();
  const { lang } = useLang();
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<Stats>(FALLBACK);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    const sig = ac.signal;
    try {
      const cached = Number(sessionStorage.getItem("stat-page-views"));
      if (cached > 0) setData((d) => ({ ...d, pageViews: cached }));
    } catch {
      /* private mode */
    }

    fetch(`${GW}/api/portfolio`, { signal: sig })
      .then((r) => r.json())
      .then((p) => {
        if (sig.aborted || !p) return;
        const healthy = Number(p.clawSkills) > 0 || Number(p.pulls) > 0;
        if (!healthy) return;
        const hist = Array.isArray(p.history)
          ? p.history.map(Number).filter(Number.isFinite)
          : [];
        setData((d) => ({
          ...d,
          pulls: Number(p.pulls) || d.pulls,
          images: Number(p.images) || d.images,
          apiCalls: Number(p.apiCalls) || d.apiCalls,
          monthDelta: Number(p.monthDelta) || d.monthDelta,
          history: hist.length > 1 ? hist : d.history,
          clawDownloads: Number(p.clawDownloads) || d.clawDownloads,
          clawSkills: Number(p.clawSkills) || d.clawSkills,
          clawPlugins: Number(p.clawPlugins) || d.clawPlugins,
          ghIssues: Number(p.ghIssues) || d.ghIssues,
          ghPRs: Number(p.ghPRs) || d.ghPRs,
        }));
        setLive(true);
      })
      .catch(() => {});

    fetch(`${GW}/api/views`, { signal: sig })
      .then((r) => r.json())
      .then((v) => {
        if (sig.aborted || !v) return;
        const views = Number(v.total) || 0;
        const scans = Number(v.scans30d) || 0;
        const last30 = Number(v.last30d) || 0;
        const pvHist = Array.isArray(v.history)
          ? v.history.map(Number).filter(Number.isFinite)
          : [];
        if (views > 0) {
          try {
            sessionStorage.setItem("stat-page-views", String(views));
          } catch {
            /* ignore */
          }
        }
        setData((d) => ({
          ...d,
          pageViews: views > 0 ? views : d.pageViews,
          pvLast30d: last30 > 0 ? last30 : d.pvLast30d,
          pvHistory: pvHist.length > 1 ? pvHist : d.pvHistory,
          scans30d: scans > 0 ? scans : d.scans30d,
        }));
      })
      .catch(() => {});

    return () => ac.abort();
  }, []);

  const pulls = useCountUp(data.pulls, reduce);
  const images = useCountUp(data.images, reduce);
  const apiCalls = useCountUp(data.apiCalls, reduce);
  const delta = useCountUp(data.monthDelta, reduce);
  const claw = useCountUp(data.clawDownloads, reduce);
  const ghIssues = useCountUp(data.ghIssues, reduce);
  const views = useCountUp(data.pageViews, reduce);
  const pvLast30 = useCountUp(data.pvLast30d, reduce);
  const scans = useCountUp(data.scans30d, reduce);

  const fmtHero = (n: number) => formatCompactCount(n, lang, 1_000_000);
  const fmt = (n: number) => formatCompactCount(n, lang, 10_000);

  const t = {
    live: tx({ en: "Live", zh: "实时数据", ar: "مباشر", fr: "En direct", ru: "Вживую", es: "En vivo" }),
    title: tx({ en: "Proof, in real numbers.", zh: "用真实数据说话。", ar: "دليلٌ بأرقام حقيقية.", fr: "La preuve, en chiffres réels.", ru: "Доказательство — в реальных цифрах.", es: "La prueba, en números reales." }),
    sub: tx({
      en: "Pulled live through the open API gateway — Docker Hub, ClawHub, GitHub, and traffic across every domain.",
      zh: "经由开放 API 网关实时汇总:Docker Hub、ClawHub、GitHub,以及所有域名的访问量。",
      ar: "مسحوبة مباشرةً عبر بوابة الـAPI المفتوحة — من Docker Hub وClawHub وGitHub، وحركة المرور عبر كل النطاقات.",
      fr: "Récupéré en direct via la passerelle API ouverte — Docker Hub, ClawHub, GitHub et le trafic de tous les domaines.",
      ru: "Собрано вживую через открытый API-шлюз — Docker Hub, ClawHub, GitHub и трафик по всем доменам.",
      es: "Obtenido en vivo a través de la pasarela API abierta — Docker Hub, ClawHub, GitHub y el tráfico de todos los dominios.",
    }),
    dockerPulls: tx({ en: "Docker pulls", zh: "Docker 拉取次数", ar: "عمليات سحب Docker", fr: "Pulls Docker", ru: "Docker-загрузок", es: "Pulls de Docker" }),
    pageViews: tx({ en: "Page views", zh: "页面浏览量", ar: "مشاهدات الصفحة", fr: "Pages vues", ru: "Просмотров страниц", es: "Vistas de página" }),
    last30: tx({ en: "last 30 days", zh: "近 30 天", ar: "آخر 30 يوماً", fr: "30 derniers jours", ru: "за 30 дней", es: "últimos 30 días" }),
    today: tx({ en: "today", zh: "今日", ar: "اليوم", fr: "aujourd'hui", ru: "сегодня", es: "hoy" }),
    allDomains: tx({ en: "across all domains", zh: "覆盖全部域名", ar: "عبر كل النطاقات", fr: "sur tous les domaines", ru: "по всем доменам", es: "en todos los dominios" }),
    publicImages: tx({ en: data.images === 1 ? "public image" : "public images", zh: "个公开镜像", ar: "صورة عامة", fr: data.images === 1 ? "image publique" : "images publiques", ru: "публичных образов", es: data.images === 1 ? "imagen pública" : "imágenes públicas" }),
  };

  const small: {
    icon: IconName;
    color: string;
    value: string;
    exact: string;
    label: string;
    sub?: string;
  }[] = [
    {
      icon: "permissions",
      color: "var(--c-indigo)",
      value: fmt(scans),
      exact: formatCount(data.scans30d, lang),
      label: tx({ en: "Malicious scans blocked", zh: "恶意扫描拦截", ar: "عمليات فحص خبيثة محظورة", fr: "Scans malveillants bloqués", ru: "Заблокировано сканирований", es: "Escaneos maliciosos bloqueados" }),
      sub: `${t.last30} · ${t.allDomains}`,
    },
    {
      icon: "download",
      color: "var(--c-purple)",
      value: fmt(claw),
      exact: formatCount(data.clawDownloads, lang),
      label: tx({ en: "ClawHub downloads", zh: "ClawHub 下载量", ar: "تنزيلات ClawHub", fr: "Téléchargements ClawHub", ru: "Загрузки ClawHub", es: "Descargas de ClawHub" }),
      sub: `${data.clawSkills} ${tx({ en: data.clawSkills === 1 ? "skill" : "skills", zh: "个技能", ar: "مهارات", fr: data.clawSkills === 1 ? "compétence" : "compétences", ru: "навыков", es: data.clawSkills === 1 ? "habilidad" : "habilidades" })} · ${data.clawPlugins} ${tx({ en: data.clawPlugins === 1 ? "plugin" : "plugins", zh: "个插件", ar: "ملحقات", fr: "plugin" + (data.clawPlugins === 1 ? "" : "s"), ru: "плагинов", es: "plugin" + (data.clawPlugins === 1 ? "" : "s") })}`,
    },
    {
      icon: "api",
      color: "var(--c-amber)",
      value: fmt(apiCalls),
      exact: formatCount(data.apiCalls, lang),
      label: tx({ en: "API calls served", zh: "API 调用量", ar: "طلبات API مُخدّمة", fr: "Appels API servis", ru: "Обработано API-запросов", es: "Llamadas API servidas" }),
    },
    {
      icon: "code",
      color: "var(--c-teal)",
      value: fmt(ghIssues),
      exact: formatCount(data.ghIssues, lang),
      label: tx({ en: "GitHub issues opened", zh: "GitHub 提交的 issues", ar: "مشكلات GitHub المفتوحة", fr: "Issues GitHub ouvertes", ru: "Issues на GitHub", es: "Issues abiertas en GitHub" }),
      sub: `${data.ghPRs} ${tx({ en: data.ghPRs === 1 ? "pull request" : "pull requests", zh: "个 PR", ar: "طلبات سحب", fr: data.ghPRs === 1 ? "pull request" : "pull requests", ru: "pull-реквестов", es: data.ghPRs === 1 ? "pull request" : "pull requests" })}`,
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
          {t.live}
        </span>
        <h2 className="display-2 mt-4 max-w-[20ch]">{t.title}</h2>
        <p className="lead mt-4 max-w-[54ch]">{t.sub}</p>

        <div className="mt-12 space-y-6">
          {/* Two headline cards: page-view scale + Docker momentum */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Page views — the biggest number */}
            <article className={`${CARD} flex flex-col`} style={GLOW}>
              <div className="flex items-center gap-3">
                <Chip name="analytics" color="var(--c-pink)" />
                <p className="text-[15px] text-muted">{t.pageViews}</p>
              </div>
              <div className={HERO_NUM} title={formatCount(data.pageViews, lang)} dir="ltr">
                {fmtHero(views)}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#34c759]/12 px-3 py-1 font-mono text-[12px] font-medium text-[#1a9c43] dark:text-[#4fd37a]">
                  ↑ {fmt(pvLast30)} · {t.last30}
                </span>
                <span className="font-mono text-[12px] text-muted">{t.allDomains}</span>
              </div>
              <div className="mt-auto pt-6">
                <Sparkline values={data.pvHistory} color="var(--c-pink)" gradId="spark-pv" className="h-[80px] w-full" />
              </div>
            </article>

            {/* Docker pulls — momentum + sparkline */}
            <article className={`${CARD} flex flex-col`} style={GLOW}>
              <div className="flex items-center gap-3">
                <Chip name="box" color="var(--c-blue)" />
                <p className="text-[15px] text-muted">{t.dockerPulls}</p>
              </div>
              <div className={HERO_NUM} title={formatCount(data.pulls, lang)} dir="ltr">
                {fmtHero(pulls)}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#34c759]/12 px-3 py-1 font-mono text-[12px] font-medium text-[#1a9c43] dark:text-[#4fd37a]">
                  ↑ {fmt(delta)} · {t.last30}
                </span>
                <span className="font-mono text-[12px] text-muted">
                  {fmt(images)} {t.publicImages}
                </span>
              </div>
              <div className="mt-auto pt-6">
                <Sparkline values={data.history} className="h-[80px] w-full" />
              </div>
            </article>
          </div>

          {/* Supporting stats, ordered by magnitude */}
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {small.map((s) => (
              <article key={s.label} className={CARD.replace("p-8", "p-6")} style={GLOW}>
                <Chip name={s.icon} color={s.color} />
                <div
                  className="mt-5 truncate text-[clamp(26px,2.4vw,36px)] font-semibold leading-none tracking-tight text-ink tabular-nums"
                  title={s.exact}
                  dir="ltr"
                >
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
