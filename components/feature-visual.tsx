/**
 * A light, refined "product surface" beside each feature chapter. Four distinct
 * motifs cycle by index so a product's chapters never read identical — inputs,
 * a generated list, a review score, and an export chart — each in its own hue.
 * Original UI motifs (not real screenshots). Server component, theme-aware.
 */

const HUES = ["var(--c-blue)", "var(--c-purple)", "var(--c-teal)", "var(--c-amber)"];
const ROW =
  "rounded-lg border border-black/5 bg-white/70 p-3 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]";

function Body({ motif, hue }: { motif: number; hue: string }) {
  if (motif === 0) {
    // Inputs dropped in
    const tags = ["DOC", "IMG", "TXT"];
    return (
      <div className="flex flex-1 flex-col justify-center gap-3 p-6">
        {tags.map((t) => (
          <div key={t} className={`flex items-center gap-3 ${ROW}`}>
            <span
              className="rounded-md px-2 py-1 font-mono text-[10px] font-semibold"
              style={{ backgroundColor: `color-mix(in srgb, ${hue} 16%, transparent)`, color: hue }}
            >
              {t}
            </span>
            <span className="h-2 flex-1 rounded-full bg-black/10 dark:bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#34c759]" />
          </div>
        ))}
      </div>
    );
  }

  if (motif === 1) {
    // Generated list with priority pills
    const rows = [
      { p: "P0", w: "78%" },
      { p: "P1", w: "64%" },
      { p: "P2", w: "70%" },
    ];
    return (
      <div className="flex flex-1 flex-col justify-center gap-3 p-6">
        {rows.map((r) => (
          <div key={r.p} className={ROW}>
            <div className="flex items-center justify-between">
              <span className="h-2.5 w-14 rounded-full" style={{ backgroundColor: hue, opacity: 0.75 }} />
              <span
                className="rounded-full px-2 py-0.5 text-[9px] font-medium text-white"
                style={{ backgroundColor: hue }}
              >
                {r.p}
              </span>
            </div>
            <span className="mt-2.5 block h-2 rounded-full bg-black/10 dark:bg-white/15" style={{ width: r.w }} />
          </div>
        ))}
      </div>
    );
  }

  if (motif === 2) {
    // Review scorecard
    const rows = [94, 91, 92];
    return (
      <div className="flex flex-1 flex-col justify-center gap-4 p-6">
        <div className="text-center">
          <span className="text-[40px] font-semibold leading-none tracking-tight text-ink">92</span>
          <span className="text-[18px] text-muted"> / 100</span>
        </div>
        <div className="space-y-2">
          {rows.map((s, i) => (
            <div key={i} className={`flex items-center gap-3 ${ROW}`}>
              <span
                className="grid h-5 w-5 place-items-center rounded-full text-[11px]"
                style={{ backgroundColor: `color-mix(in srgb, ${hue} 18%, transparent)`, color: hue }}
              >
                ✓
              </span>
              <span className="h-2 flex-1 rounded-full bg-black/10 dark:bg-white/15" />
              <span className="font-mono text-[11px] text-muted">{s}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // motif 3 — export / bar chart
  const bars = [46, 72, 58, 88, 64];
  return (
    <div className="flex flex-1 items-end gap-2.5 px-7 pb-8 pt-4">
      {bars.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t-md"
          style={{
            height: `${h}%`,
            background: `linear-gradient(to top, ${hue}, color-mix(in srgb, ${hue} 55%, transparent))`,
          }}
        />
      ))}
    </div>
  );
}

export function FeatureVisual({ index, label }: { index: number; label: string }) {
  const motif = index % 4;
  const hue = HUES[motif];

  return (
    <div className="relative flex aspect-[4/3] flex-col overflow-hidden rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-[linear-gradient(165deg,#f6f8fc,#e7edf6)] dark:bg-[linear-gradient(165deg,#1a1a1d,#0b0b0c)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(90% 70% at 82% -8%, color-mix(in srgb, ${hue} 20%, transparent), transparent 60%)`,
        }}
      />
      <div className="relative flex items-center gap-1.5 border-b border-black/5 px-4 py-3 dark:border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/15" />
        <span className="ml-2 font-mono text-[11px] text-muted">{label}</span>
      </div>
      <div className="relative flex flex-1">
        <Body motif={motif} hue={hue} />
      </div>
    </div>
  );
}
