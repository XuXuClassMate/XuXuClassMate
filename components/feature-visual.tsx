/**
 * A light, refined "product surface" used beside product feature copy.
 * Original UI motif (window chrome + skeleton rows + one accent row) — not a
 * real screenshot and not any third-party product's UI. Server component.
 */
export function FeatureVisual({
  index,
  label,
}: {
  index: number;
  label: string;
}) {
  // Vary the row layout a little per feature so chapters don't read identical.
  const rows = [
    [72, 40],
    [56, 64],
    [64, 32],
    [48, 56],
  ][index % 4];

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-ap)] border border-[var(--color-line)] bg-[linear-gradient(165deg,#f6f8fc,#e7edf6)] dark:bg-[linear-gradient(165deg,#1a1a1d,#0b0b0c)]">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(90%_70%_at_82%_-8%,rgba(0,113,227,0.12),transparent_60%)] dark:[background:radial-gradient(90%_70%_at_82%_-8%,rgba(41,151,255,0.18),transparent_60%)]" />

      <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-3 dark:border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/10 dark:bg-white/15" />
        <span className="ml-2 font-mono text-[11px] text-muted">{label}</span>
      </div>

      <div className="space-y-3 p-6">
        {[0, 1, 2].map((r) => (
          <div
            key={r}
            className="rounded-lg border border-black/5 bg-white/70 p-3.5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="flex items-center justify-between">
              <span
                className="h-2.5 rounded-full bg-[var(--color-accent)]/70"
                style={{ width: `${rows[0] - r * 6}px` }}
              />
              <span className="h-2 w-6 rounded-full bg-black/10 dark:bg-white/15" />
            </div>
            <span
              className="mt-2.5 block h-2 rounded-full bg-black/10 dark:bg-white/15"
              style={{ width: `${rows[1] + r * 10}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
