"use client";

/* Count-up syncs from a live fetch (external source) by design. */
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useLang, useTx } from "@/components/i18n";
import { formatCompactCount, formatCount } from "@/lib/format-number";
import { Icon, type IconName } from "@/components/icons";

const GW = "https://open.xuxuclassmate.com";
// All stats (Docker + ClawHub + GitHub) are aggregated and cached in Redis by the
// gateway (/api/portfolio); the site just pulls the latest value — no recomputation.

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
  scans30d: number;
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
  // 浏览量接口会先写入再返回,比 portfolio 慢。给一个接近现值的垫底,避免卡片从 0 空转。
  pageViews: 573000,
  scans30d: 400960,
  history: [
    78523, 79009, 79482, 79647, 80016, 80499, 80812, 81148, 81637, 82200,
    82800, 83400, 84100, 84700, 85285,
  ],
};

function useCountUp(target: number, run: boolean, reduce: boolean) {
  // 静态导出的 HTML 就要带出垫底数字。从 0 起跳时,iOS 若 JS 没挂上会永远显示 0。
  const [n, setN] = useState(target);
  const fromRef = useRef(target);
  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setN(target);
      fromRef.current = target;
      return;
    }
    let from = fromRef.current;
    if (from === target) return;
    // 浏览量这种大数若从 0 滚到几十万,「万」档会连跳一秒,旁边的小数字早已停住。
    // 从终值附近起跳,只播最后一截,观感和其他指标一致。
    if (from === 0 && target >= 10_000) {
      from = Math.round(target * 0.92);
      fromRef.current = from;
      setN(from);
    }
    const span = Math.abs(target - from);
    const dur = span >= 10_000 ? 520 : 1100;
    let raf = 0;
    const start = performance.now();
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
  const { lang } = useLang();
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<Stats>(FALLBACK);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    const sig = ac.signal;
    // 上次浏览量先画出来,不必等会写入的 /api/views。
    try {
      const cached = Number(sessionStorage.getItem("stat-page-views"));
      if (cached > 0) setData((d) => ({ ...d, pageViews: cached }));
    } catch {
      /* private mode */
    }

    // portfolio 走 Redis 缓存,views 每次要落盘,拆开请求,浏览量不再拖住其他指标。
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
          scans30d: scans > 0 ? scans : d.scans30d,
        }));
      })
      .catch(() => {});

    return () => ac.abort();
  }, []);

  // 不等 IntersectionObserver。iOS Chrome 上 IO 经常不回调,数字会一直停在 0。
  const pulls = useCountUp(data.pulls, true, reduce);
  const images = useCountUp(data.images, true, reduce);
  const apiCalls = useCountUp(data.apiCalls, true, reduce);
  const delta = useCountUp(data.monthDelta, true, reduce);
  const claw = useCountUp(data.clawDownloads, true, reduce);
  const ghIssues = useCountUp(data.ghIssues, true, reduce);
  const views = useCountUp(data.pageViews, true, reduce);
  const scans = useCountUp(data.scans30d, true, reduce);
  // 大数字卡:满百万再缩写,保留「真实数字」观感;小卡更窄,满一万就缩。
  const fmtHero = (n: number) => formatCompactCount(n, lang, 1_000_000);
  const fmt = (n: number) => formatCompactCount(n, lang, 10_000);

  const small: {
    icon: IconName;
    color: string;
    value: string;
    exact: string;
    label: string;
    sub?: string;
  }[] = [
    {
      icon: "download",
      color: "var(--c-purple)",
      value: fmt(claw),
      exact: formatCount(data.clawDownloads, lang),
      label: tx({ en: "ClawHub downloads", zh: "ClawHub 下载量", ar: "تنزيلات ClawHub", fr: "Téléchargements ClawHub", ru: "Загрузки ClawHub", es: "Descargas de ClawHub" }),
      sub: `${data.clawSkills} ${tx({ en: data.clawSkills === 1 ? "skill" : "skills", zh: "个技能", ar: "مهارات", fr: data.clawSkills === 1 ? "compétence" : "compétences", ru: "навыков", es: data.clawSkills === 1 ? "habilidad" : "habilidades" })} · ${data.clawPlugins} ${tx({ en: data.clawPlugins === 1 ? "plugin" : "plugins", zh: "个插件", ar: "ملحقات", fr: "plugin" + (data.clawPlugins === 1 ? "" : "s"), ru: "плагинов", es: "plugin" + (data.clawPlugins === 1 ? "" : "s") })}`,
    },
    {
      icon: "code",
      color: "var(--c-teal)",
      value: fmt(ghIssues),
      exact: formatCount(data.ghIssues, lang),
      label: tx({ en: "GitHub issues opened", zh: "GitHub 提交的 issues", ar: "مشكلات GitHub المفتوحة", fr: "Issues GitHub ouvertes", ru: "Issues на GitHub", es: "Issues abiertas en GitHub" }),
      sub: `${data.ghPRs} ${tx({ en: data.ghPRs === 1 ? "pull request" : "pull requests", zh: "个 PR", ar: "طلبات سحب", fr: data.ghPRs === 1 ? "pull request" : "pull requests", ru: "pull-реквестов", es: data.ghPRs === 1 ? "pull request" : "pull requests" })}`,
    },
    {
      icon: "api",
      color: "var(--c-amber)",
      value: fmt(apiCalls),
      exact: formatCount(data.apiCalls, lang),
      label: tx({ en: "API calls served", zh: "API 调用量", ar: "طلبات API مُخدّمة", fr: "Appels API servis", ru: "Обработано API-запросов", es: "Llamadas API servidas" }),
    },
    {
      icon: "analytics",
      color: "var(--c-pink)",
      value: fmt(views),
      exact: formatCount(data.pageViews, lang),
      label: tx({ en: "Page views", zh: "页面浏览量", ar: "مشاهدات الصفحة", fr: "Pages vues", ru: "Просмотров страниц", es: "Vistas de página" }),
    },
    {
      icon: "permissions",
      color: "var(--c-indigo)",
      value: fmt(scans),
      exact: formatCount(data.scans30d, lang),
      label: tx({ en: "Malicious scans blocked", zh: "恶意扫描拦截", ar: "عمليات فحص خبيثة محظورة", fr: "Scans malveillants bloqués", ru: "Заблокировано сканирований", es: "Escaneos maliciosos bloqueados" }),
      sub: tx({ en: "last 30 days · all domains", zh: "近 30 天 · 全部域名", ar: "آخر 30 يوماً · كل النطاقات", fr: "30 derniers jours · tous domaines", ru: "за 30 дней · все домены", es: "últimos 30 días · todos los dominios" }),
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
              <div
                className="mt-4 text-[clamp(46px,6.6vw,80px)] font-semibold leading-none tracking-tight text-ink tabular-nums"
                title={formatCount(data.pulls, lang)}
                dir="ltr"
              >
                {fmtHero(pulls)}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#34c759]/12 px-3 py-1 font-mono text-[12px] font-medium text-[#1a9c43] dark:text-[#4fd37a]">
                  ↑ {fmt(delta)} ·{" "}
                  {tx({ en: "last 30 days", zh: "近 30 天", ar: "آخر 30 يوماً", fr: "30 derniers jours", ru: "за 30 дней", es: "últimos 30 días" })}
                </span>
                <span className="font-mono text-[12px] text-muted">
                  {fmt(images)} {tx({ en: data.images === 1 ? "public image" : "public images", zh: "个公开镜像", ar: "صورة عامة", fr: data.images === 1 ? "image publique" : "images publiques", ru: "публичных образов", es: data.images === 1 ? "imagen pública" : "imágenes públicas" })}
                </span>
              </div>
            </div>
            <div className="mt-7 md:mt-0 md:w-[46%]">
              <Sparkline values={data.history} className="h-[84px] w-full" />
            </div>
          </article>

          {/* Supporting stats */}
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-5">
            {small.map((s) => (
              <article key={s.label} className={CARD.replace("p-8", "p-5")} style={GLOW}>
                <Chip name={s.icon} color={s.color} />
                <div
                  className="mt-5 truncate text-[clamp(24px,2.2vw,32px)] font-semibold leading-none tracking-tight text-ink tabular-nums"
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
