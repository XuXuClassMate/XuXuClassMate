"use client";

import { useEffect, useState } from "react";
import { useTx, type Localized } from "@/components/i18n";

const GW = "https://docker-hub-pull-counter.vercel.app";
const USER = "xuxuclassmate";
const CLAW = "https://clawhub.ai/api/v1/skills/";
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

type Kind = "docker-pulls" | "api-calls" | "claw-total" | "claw-skill";

async function fetchValue(kind: Kind, slug: string | undefined, signal: AbortSignal) {
  const json = (u: string) => fetch(u, { signal }).then((r) => r.json());
  if (kind === "docker-pulls") {
    const s = await json(`${GW}/api/user/stats?username=${USER}`);
    return Number(s?.totalPulls) || null;
  }
  if (kind === "api-calls") {
    const g = await json(`${GW}/api/stats`);
    return Number(g?.totalCalls) || null;
  }
  if (kind === "claw-skill" && slug) {
    const d = await json(`${CLAW}${slug}`);
    return d?.owner?.handle === USER ? Number(d?.skill?.stats?.downloads) || null : null;
  }
  if (kind === "claw-total") {
    const settled = await Promise.allSettled(CLAW_SLUGS.map((s) => json(`${CLAW}${s}`)));
    let total = 0;
    let ok = 0;
    for (const r of settled) {
      if (r.status !== "fulfilled") continue;
      const d = r.value;
      if (d?.owner?.handle === USER && typeof d?.skill?.stats?.downloads === "number") {
        total += d.skill.stats.downloads;
        ok += 1;
      }
    }
    return ok > 0 ? total : null;
  }
  return null;
}

/**
 * A compact single live metric pill (number + label), fetched client-side with
 * a last-known fallback so it is never empty.
 */
export function LiveStat({
  kind,
  slug,
  fallback,
  label,
  className,
}: {
  kind: Kind;
  slug?: string;
  fallback: number;
  label: Localized;
  className?: string;
}) {
  const tx = useTx();
  const [value, setValue] = useState(fallback);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    fetchValue(kind, slug, ac.signal)
      .then((v) => {
        if (v != null && !ac.signal.aborted) {
          setValue(v);
          setLive(true);
        }
      })
      .catch(() => {});
    return () => ac.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind, slug]);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2 text-[14px] ${className ?? ""}`}
    >
      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
        {live && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-70 motion-safe:animate-ping" />
        )}
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${live ? "bg-[#34c759]" : "bg-muted"}`}
        />
      </span>
      <strong className="font-semibold text-ink" dir="ltr">
        {value.toLocaleString("en-US")}
      </strong>
      <span className="text-muted">{tx(label)}</span>
    </span>
  );
}
