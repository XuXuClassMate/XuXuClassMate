"use client";

/* Bar widths animate from a live fetch (external source) by design. */
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useRef, useState } from "react";

const GW = "https://docker-hub-pull-counter.vercel.app";
const USER = "xuxuclassmate";

type Row = { name: string; count: number };

const FALLBACK: Row[] = [
  { name: "dameng", count: 41949 },
  { name: "highgo", count: 26957 },
  { name: "kingbase", count: 2654 },
  { name: "trading-assistant", count: 2297 },
  { name: "testcase-generator", count: 1839 },
];

/** Horizontal bar chart of the top Docker images by pull count (live). */
export function StatBars({ limit = 6 }: { limit?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<Row[]>(FALLBACK);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
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
    fetch(`${GW}/api/user/top-repos?username=${USER}&limit=${limit}`, { signal: ac.signal })
      .then((r) => r.json())
      .then((d) => {
        const reps = Array.isArray(d?.repositories) ? d.repositories : [];
        const next: Row[] = reps
          .map((r: { name: string; pullCount: number }) => ({
            name: r.name,
            count: Number(r.pullCount) || 0,
          }))
          .filter((r: Row) => r.count > 0);
        if (next.length && !ac.signal.aborted) setRows(next);
      })
      .catch(() => {});
    return () => ac.abort();
  }, [limit]);

  const max = Math.max(...rows.map((r) => r.count), 1);

  return (
    <div ref={ref} className="space-y-3.5">
      {rows.map((r) => (
        <div key={r.name} className="flex items-center gap-4">
          <span className="w-28 shrink-0 truncate font-mono text-[13px] text-muted" dir="ltr">
            {r.name}
          </span>
          <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--color-ink)_8%,transparent)]" aria-hidden="true">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[var(--color-accent)] transition-[width] duration-[1100ms] ease-out"
              style={{ width: shown ? `${Math.max(3, (r.count / max) * 100)}%` : "0%" }}
            />
          </div>
          <span className="w-16 shrink-0 text-right font-mono text-[13px] font-medium text-ink" dir="ltr">
            {r.count.toLocaleString("en-US")}
          </span>
        </div>
      ))}
    </div>
  );
}
