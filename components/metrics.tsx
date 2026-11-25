"use client";

/* The count-up animation syncs from props on mount by design. */
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useTx, type Localized } from "@/components/i18n";

type Metric = { value: number; suffix?: string; label: Localized };

const METRICS: Metric[] = [
  {
    value: 56,
    label: {
      en: "Reviewed test cases per run",
      zh: "每次运行评审的用例数",
      ar: "حالات اختبار مُراجَعة لكل تشغيل",
      fr: "Cas de test relus par exécution",
      ru: "Проверенных тест-кейсов за запуск",
      es: "Casos de prueba revisados por ejecución",
    },
  },
  {
    value: 90,
    suffix: "%",
    label: {
      en: "Default review bar",
      zh: "默认评审线",
      ar: "حدّ المراجعة الافتراضي",
      fr: "Seuil de revue par défaut",
      ru: "Порог проверки по умолчанию",
      es: "Umbral de revisión por defecto",
    },
  },
  {
    value: 4,
    label: {
      en: "Databases, one pull away",
      zh: "一键拉取的数据库",
      ar: "قواعد بيانات على بُعد سحبة واحدة",
      fr: "Des bases à une commande",
      ru: "Базы данных в одну команду",
      es: "Bases de datos a un pull",
    },
  },
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
          <Stat key={m.label.en} m={m} run={run} reduce={reduce} />
        ))}
      </div>
    </section>
  );
}

function Stat({ m, run, reduce }: { m: Metric; run: boolean; reduce: boolean }) {
  const n = useCountUp(m.value, run, reduce);
  const tx = useTx();
  return (
    <div className="text-center">
      <div className="text-[clamp(44px,6vw,72px)] font-semibold leading-none tracking-tight text-ink">
        {n}
        {m.suffix}
      </div>
      <p className="mt-3 text-[17px] text-muted">{tx(m.label)}</p>
    </div>
  );
}
