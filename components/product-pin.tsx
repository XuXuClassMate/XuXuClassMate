"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTx, useLang, type Localized } from "@/components/i18n";
import { cn } from "@/lib/utils";

try {
  gsap.registerPlugin(ScrollTrigger);
  // iOS 地址栏伸缩会反复触发 resize,打断 scrub;忽略视觉视口抖动。
  if (typeof window !== "undefined") {
    ScrollTrigger.config({ ignoreMobileResize: true });
  }
} catch {
  // ScrollTrigger 在部分 iOS WebView 初始化失败时,不要拖垮整页 hydration。
}

const STEPS: { k: string; title: Localized; body: Localized }[] = [
  {
    k: "01",
    title: {
      en: "Bring the requirement",
      zh: "带来需求",
      ar: "أحضر المتطلب",
      fr: "Apportez l'exigence",
      ru: "Принесите требование",
      es: "Trae el requisito",
    },
    body: {
      en: "Drop in a PDF, a screenshot, or a plain spec. Acceptance criteria are read before a single case is written.",
      zh: "丢进一份 PDF、一张截图或一段文档。在写下第一条用例之前,先读懂验收标准。",
      ar: "أسقِط ملف PDF أو لقطة شاشة أو مواصفات بسيطة. تُقرأ معايير القبول قبل كتابة أي حالة.",
      fr: "Déposez un PDF, une capture ou une simple spécification. Les critères d'acceptation sont lus avant d'écrire le moindre cas.",
      ru: "Добавьте PDF, скриншот или простую спецификацию. Критерии приёмки читаются до написания первого кейса.",
      es: "Suelta un PDF, una captura o una especificación simple. Los criterios de aceptación se leen antes de escribir un solo caso.",
    },
  },
  {
    k: "02",
    title: {
      en: "AI drafts the cases",
      zh: "AI 起草用例",
      ar: "الذكاء الاصطناعي يصيغ الحالات",
      fr: "L'IA rédige les cas",
      ru: "ИИ составляет кейсы",
      es: "La IA redacta los casos",
    },
    body: {
      en: "Structured cases with steps, expected results, and priority — grounded in the requirement, not invented.",
      zh: "结构化用例,含步骤、预期结果与优先级——源自需求,而非凭空生成。",
      ar: "حالات منظّمة بخطوات ونتائج متوقعة وأولوية — مستندة إلى المتطلب لا مُختلَقة.",
      fr: "Des cas structurés avec étapes, résultats attendus et priorité — ancrés dans l'exigence, non inventés.",
      ru: "Структурированные кейсы с шагами, ожидаемыми результатами и приоритетом — на основе требования, а не выдуманные.",
      es: "Casos estructurados con pasos, resultados esperados y prioridad — basados en el requisito, no inventados.",
    },
  },
  {
    k: "03",
    title: {
      en: "People review",
      zh: "人来评审",
      ar: "مراجعة بشرية",
      fr: "Revue humaine",
      ru: "Люди проверяют",
      es: "Revisión humana",
    },
    body: {
      en: "QA, dev, and product score coverage, logic, and clarity. Only a set that clears the bar ships.",
      zh: "QA、研发与产品对覆盖度、逻辑与清晰度打分。只有达标的用例集才会交付。",
      ar: "يقيّم فريق الجودة والتطوير والمنتج التغطية والمنطق والوضوح. لا يُسلَّم إلا ما يتجاوز الحدّ.",
      fr: "QA, dev et produit notent la couverture, la logique et la clarté. Seul un ensemble qui passe la barre est livré.",
      ru: "QA, разработка и продукт оценивают покрытие, логику и ясность. Поставляется только набор, прошедший порог.",
      es: "QA, desarrollo y producto puntúan la cobertura, la lógica y la claridad. Solo se entrega un conjunto que supera el umbral.",
    },
  },
  {
    k: "04",
    title: {
      en: "Export where teams work",
      zh: "导出到团队协作的地方",
      ar: "صدّر حيث تعمل الفرق",
      fr: "Exportez là où les équipes travaillent",
      ru: "Экспорт туда, где работают команды",
      es: "Exporta donde trabajan los equipos",
    },
    body: {
      en: "One reviewed set, three artifacts: Excel, Markdown, and XMind. Same scenarios, different surfaces.",
      zh: "一份评审过的用例集,三种产物:Excel、Markdown 与 XMind。同样的场景,不同的载体。",
      ar: "مجموعة مُراجَعة واحدة، وثلاثة مخرجات: Excel وMarkdown وXMind. نفس السيناريوهات بواجهات مختلفة.",
      fr: "Un ensemble relu, trois formats : Excel, Markdown et XMind. Mêmes scénarios, surfaces différentes.",
      ru: "Один проверенный набор, три формата: Excel, Markdown и XMind. Те же сценарии, разные поверхности.",
      es: "Un conjunto revisado, tres formatos: Excel, Markdown y XMind. Mismos escenarios, distintas superficies.",
    },
  },
];

const L = {
  aria: {
    en: "How the generator works",
    zh: "生成器的工作方式",
    ar: "كيف يعمل المولّد",
    fr: "Comment fonctionne le générateur",
    ru: "Как работает генератор",
    es: "Cómo funciona el generador",
  },
  eyebrow: {
    en: "AI Test Case Generator",
    zh: "AI 测试用例生成器",
    ar: "مولّد حالات الاختبار بالذكاء الاصطناعي",
    fr: "Générateur de cas de test IA",
    ru: "ИИ-генератор тест-кейсов",
    es: "Generador de casos de prueba con IA",
  },
  heading: {
    en: "From a requirement to a reviewed set.",
    zh: "从一份需求,到一份评审过的用例集。",
    ar: "من متطلب إلى مجموعة مُراجَعة.",
    fr: "D'une exigence à un ensemble relu.",
    ru: "От требования к проверенному набору.",
    es: "De un requisito a un conjunto revisado.",
  },
  ready: { en: "ready", zh: "就绪", ar: "جاهز", fr: "prêt", ru: "готово", es: "listo" },
  passed: {
    en: "Passed review bar",
    zh: "通过评审线",
    ar: "تجاوز حدّ المراجعة",
    fr: "Barre de revue franchie",
    ru: "Порог проверки пройден",
    es: "Umbral de revisión superado",
  },
  exported: {
    en: "exported",
    zh: "已导出",
    ar: "تم التصدير",
    fr: "exporté",
    ru: "экспортировано",
    es: "exportado",
  },
} satisfies Record<string, Localized>;

export function ProductPin() {
  const root = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const tx = useTx();
  // 滚动叠化叙事。减弱动态效果 / RTL 时改成普通竖排(绝对定位叠层会溢到上一屏)。
  // 窄屏同样启用:改用 CSS sticky 后不再依赖 GSAP pin,手机滑动也能切步骤。
  const [pin, setPin] = useState(false);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const decide = () => setPin(!reduce && lang !== "ar");
    decide();
    window.addEventListener("resize", decide);
    return () => window.removeEventListener("resize", decide);
  }, [lang]);

  // 用 CSS sticky 代替 GSAP pin。ScrollTrigger 的 pin 会 position:fixed，
  // 宽度一旦丢失，中文按 min-content 收成 1em，标题就会竖排盖住首屏。
  useLayoutEffect(() => {
    if (!pin) return;
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".pin-step");
      const visuals = gsap.utils.toArray<HTMLElement>(".pin-vis");
      const total = panels.length;

      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const navH =
        getComputedStyle(document.documentElement).getPropertyValue("--nav-h").trim() ||
        "48px";
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-track",
          // 避开顶部固定导航,否则 iOS 上 start 会被挡住,第一步叠化不触发。
          start: `top top+=${navH}`,
          end: "bottom bottom",
          // 触控跟手,桌面保留一点惯性。
          scrub: coarse ? true : 0.6,
          invalidateOnRefresh: true,
        },
      });

      // 第 0 步保持可见：fromTo(autoAlpha:0) 会在 timeline 0 把首屏文案隐掉。
      panels.forEach((panel, i) => {
        if (i === 0) {
          if (total > 1) tl.to(panel, { autoAlpha: 0, y: -40, duration: 0.5 }, 0.5);
          return;
        }
        tl.fromTo(
          panel,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          i,
        );
        if (i !== total - 1)
          tl.to(panel, { autoAlpha: 0, y: -40, duration: 0.5 }, i + 0.5);
      });

      visuals.forEach((vis, i) => {
        if (i === 0) {
          if (total > 1) tl.to(vis, { autoAlpha: 0, y: -24, duration: 0.5 }, 0.5);
          return;
        }
        tl.fromTo(
          vis,
          { autoAlpha: 0, y: 24, scale: 0.98 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.5 },
          i,
        );
        if (i !== total - 1)
          tl.to(vis, { autoAlpha: 0, y: -24, duration: 0.5 }, i + 0.5);
      });
    }, el);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener("orientationchange", refresh);
    return () => {
      window.removeEventListener("orientationchange", refresh);
      ctx.revert();
    };
  }, [pin, lang]);

  return (
    <section
      ref={root}
      id="generator"
      className="bg-panel text-panel-ink"
      aria-label={tx(L.aria)}
    >
      {/* pin-track 拉高滚动距离；pin-stage 用 sticky 钉在视口里，始终占满父级宽度。 */}
      <div
        className={cn("pin-track", pin && "pin-track-active")}
        style={
          pin
            ? ({ ["--pin-pages"]: String(STEPS.length + 1) } as CSSProperties)
            : undefined
        }
      >
        <div
          className={cn(
            "pin-stage flex w-full bg-panel",
            pin
              ? "pin-stage-active sticky top-[var(--nav-h)] items-start md:items-center"
              : "items-center",
          )}
        >
          <div className="container-ap grid w-full items-center gap-6 py-8 md:grid-cols-2 md:gap-12 md:py-14">
          {/* Copy / steps */}
          <div>
            <p className="eyebrow" style={{ color: "#5ac8fa" }}>
              {tx(L.eyebrow)}
            </p>
            <h2 className="display-2 mt-3 text-panel-ink">{tx(L.heading)}</h2>

            {/* pin 时绝对叠层,一次只露一步;关掉则竖排全部展开。 */}
            <div className={cn("relative mt-5 md:mt-9", pin && "min-h-[128px] md:min-h-[180px]")}>
              {STEPS.map((s, i) => (
                <div
                  key={s.k}
                  className={cn("pin-step", pin ? "absolute inset-0" : "mb-8")}
                  style={
                    pin
                      ? { opacity: i === 0 ? 1 : 0, visibility: i === 0 ? "visible" : "hidden" }
                      : undefined
                  }
                >
                  <span className="pin-num font-mono text-[13px] text-[#5ac8fa]">
                    {s.k}
                  </span>
                  <h3 className="mt-2 text-[22px] font-semibold tracking-tight text-panel-ink md:text-[24px]">
                    {tx(s.title)}
                  </h3>
                  <p className="mt-2 max-w-[42ch] text-[16px] leading-relaxed text-panel-muted md:text-[17px]">
                    {tx(s.body)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: one surface per step, cross-fading in lockstep with the copy */}
          <div
            className={cn(
              "relative w-full overflow-hidden",
              pin && "h-[min(36dvh,300px)] md:h-auto md:aspect-[4/3]",
            )}
          >
            {STEPS.map((s, i) => (
              <div
                key={s.k}
                className={cn("pin-vis h-full", pin ? "absolute inset-0" : "mb-5")}
                style={
                  pin
                    ? { opacity: i === 0 ? 1 : 0, visibility: i === 0 ? "visible" : "hidden" }
                    : undefined
                }
              >
                <StepVisual index={i} />
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Per-step surfaces (not real screenshots; original UI motifs) ---- */

function Shell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[var(--radius-ap)] border border-white/10 bg-[linear-gradient(160deg,#17171a,#0b0b0c)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-[11px] text-[#a1a1a6]">{label}</span>
      </div>
      <div className="flex-1 p-5">{children}</div>
    </div>
  );
}

function StepVisual({ index }: { index: number }) {
  const tx = useTx();

  if (index === 0) {
    // Bring the requirement — dropped inputs (filenames stay as-is)
    const inputs = [
      { icon: "PDF", name: "login-flow.pdf", tint: "#ff6f6f" },
      { icon: "IMG", name: "wireframe.png", tint: "#5ac8fa" },
      { icon: "TXT", name: "acceptance.md", tint: "#6fd39a" },
    ];
    return (
      <Shell label="requirement">
        <div className="flex h-full flex-col justify-center gap-3">
          {inputs.map((f) => (
            <div
              key={f.icon}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg font-mono text-[10px] font-semibold"
                style={{ background: `${f.tint}22`, color: f.tint }}
              >
                {f.icon}
              </span>
              <span className="text-[14px] text-[#f5f5f7]">{f.name}</span>
              <span className="ml-auto font-mono text-[11px] text-[#a1a1a6]">
                {tx(L.ready)}
              </span>
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  if (index === 1) {
    // AI drafts the cases — generated rows
    const rows = [
      { id: "TC-01", p: "P0", w: "82%" },
      { id: "TC-02", p: "P1", w: "68%" },
      { id: "TC-03", p: "P2", w: "74%" },
      { id: "TC-04", p: "P1", w: "60%" },
    ];
    return (
      <Shell label="draft">
        <div className="flex h-full flex-col justify-center gap-2.5">
          {rows.map((r) => (
            <div
              key={r.id}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] text-[#5ac8fa]">{r.id}</span>
                <span className="rounded-full bg-[#2997ff] px-2 py-0.5 text-[10px] font-medium text-white">
                  {r.p}
                </span>
              </div>
              <span
                className="mt-2 block h-2 rounded-full bg-white/15"
                style={{ width: r.w }}
              />
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  if (index === 2) {
    // People review — scorecard
    const reviewers: { who: Localized; score: number }[] = [
      { who: { en: "QA", zh: "QA", ar: "الجودة", fr: "QA", ru: "QA", es: "QA" }, score: 94 },
      { who: { en: "Dev", zh: "研发", ar: "التطوير", fr: "Dev", ru: "Разработка", es: "Desarrollo" }, score: 91 },
      { who: { en: "Product", zh: "产品", ar: "المنتج", fr: "Produit", ru: "Продукт", es: "Producto" }, score: 92 },
    ];
    return (
      <Shell label="review">
        <div className="flex h-full flex-col justify-center gap-4">
          <div className="text-center">
            <div className="text-[44px] font-semibold leading-none tracking-tight text-[#f5f5f7]">
              92
              <span className="text-[22px] text-[#a1a1a6]"> / 100</span>
            </div>
            <p className="mt-1.5 text-[12px] font-medium text-[#6fd39a]">
              {tx(L.passed)}
            </p>
          </div>
          <div className="space-y-2">
            {reviewers.map((r) => (
              <div
                key={r.who.en}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#6fd39a]/20 text-[11px] text-[#6fd39a]">
                  ✓
                </span>
                <span className="text-[13px] text-[#f5f5f7]">{tx(r.who)}</span>
                <span className="ml-auto font-mono text-[12px] text-[#a1a1a6]">
                  {r.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  // index === 3 — Export artifacts (format names stay as-is)
  const exports = [
    { name: "Excel", ext: ".xlsx", tint: "#6fd39a" },
    { name: "Markdown", ext: ".md", tint: "#5ac8fa" },
    { name: "XMind", ext: ".xmind", tint: "#c08cff" },
  ];
  return (
    <Shell label="export">
      <div className="flex h-full flex-col justify-center gap-3">
        {exports.map((f) => (
          <div
            key={f.name}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5"
          >
            <span
              className="h-8 w-8 shrink-0 rounded-lg"
              style={{ background: `${f.tint}33`, border: `1px solid ${f.tint}66` }}
            />
            <span className="text-[14px] text-[#f5f5f7]">{f.name}</span>
            <span className="font-mono text-[11px] text-[#a1a1a6]">{f.ext}</span>
            <span className="ml-auto font-mono text-[11px] text-[#6fd39a]">
              {tx(L.exported)}
            </span>
          </div>
        ))}
      </div>
    </Shell>
  );
}
