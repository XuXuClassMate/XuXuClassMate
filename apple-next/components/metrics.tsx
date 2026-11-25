"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type Metric = { value: number; suffix?: string; label: string };

const METRICS: Metric[] = [
  { value: 56, label: "Reviewed test cases per run" },
  { value: 90, suffix: "%", label: "Default review bar" },
  { value: 4, label: "Databases, one pull away" },
];

function useCountUp(target: number, run: boolean, reduce: boolean) {
  const [n, setN] = useState(reduce ? target : 0);
  useEffect(() => {
    if (!run || reduce) {
      setN(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, reduce]);
  return n;
}

export function Metrics() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

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
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-[var(--color-surface)]">
      <div ref={ref} className="container-ap grid gap-10 py-24 sm:grid-cols-3">
        {METRICS.map((m) => (
          <Stat key={m.label} m={m} run={run} reduce={reduce} />
        ))}
      </div>
    </section>
  );
}

function Stat({ m, run, reduce }: { m: Metric; run: boolean; reduce: boolean }) {
  const n = useCountUp(m.value, run, reduce);
  return (
    <div className="text-center">
      <div className="text-[clamp(44px,6vw,72px)] font-semibold leading-none tracking-tight text-ink">
        {n}
        {m.suffix}
      </div>
      <p className="mt-3 text-[17px] text-muted">{m.label}</p>
    </div>
  );
}
