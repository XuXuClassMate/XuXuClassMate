"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    k: "01",
    title: "Bring the requirement",
    body: "Drop in a PDF, a screenshot, or a plain spec. Acceptance criteria are read before a single case is written.",
  },
  {
    k: "02",
    title: "AI drafts the cases",
    body: "Structured cases with steps, expected results, and priority — grounded in the requirement, not invented.",
  },
  {
    k: "03",
    title: "People review",
    body: "QA, dev, and product score coverage, logic, and clarity. Only a set that clears the bar ships.",
  },
  {
    k: "04",
    title: "Export where teams work",
    body: "One reviewed set, three artifacts: Excel, Markdown, and XMind. Same scenarios, different surfaces.",
  },
];

export function ProductPin() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".pin-step");
      const total = panels.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-stage",
          start: "top top",
          end: () => "+=" + window.innerHeight * total,
          pin: true,
          scrub: 0.6,
        },
      });

      panels.forEach((panel, i) => {
        const num = panel.querySelector(".pin-num");
        tl.fromTo(
          panel,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          i,
        );
        if (i !== total - 1)
          tl.to(panel, { autoAlpha: 0, y: -40, duration: 0.5 }, i + 0.5);
        if (num)
          tl.fromTo(
            ".pin-visual",
            { "--p": i / (total - 1) } as gsap.TweenVars,
            { "--p": (i + 1) / (total - 1), duration: 1 },
            i,
          );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="generator"
      className="bg-ink text-ink-invert"
      aria-label="How the generator works"
    >
      <div className="pin-stage flex min-h-screen items-center">
        <div className="container-ap grid w-full items-center gap-12 py-20 md:grid-cols-2">
          {/* Copy / steps */}
          <div>
            <p className="eyebrow" style={{ color: "#5ac8fa" }}>
              AI Test Case Generator
            </p>
            <h2 className="display-2 mt-3 text-ink-invert">
              From a requirement to a reviewed set.
            </h2>

            {/* Desktop: stacked pinned steps; mobile: all shown */}
            <div className="relative mt-10 min-h-[200px]">
              {STEPS.map((s, i) => (
                <div
                  key={s.k}
                  className="pin-step md:absolute md:inset-0 mb-10 md:mb-0"
                  style={{ opacity: i === 0 ? 1 : undefined }}
                >
                  <span className="pin-num font-mono text-[13px] text-[#5ac8fa]">
                    {s.k}
                  </span>
                  <h3 className="mt-2 text-[24px] font-semibold tracking-tight text-ink-invert">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[42ch] text-[17px] leading-relaxed text-muted-invert">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="pin-visual relative aspect-[4/3] overflow-hidden rounded-[var(--radius-ap)] border border-white/10 [--p:0]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at calc(20% + var(--p,0)*60%) calc(18% + var(--p,0)*50%), #1f6feb55, transparent 60%), radial-gradient(100% 90% at 85% 90%, #22c3e633, transparent 55%), linear-gradient(160deg,#141414,#0b0b0c)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-mono text-[13px] text-muted-invert">
                requirement → cases → review → export
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
