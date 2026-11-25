/**
 * Animated aurora backdrop — three drifting, blurred color fields that read as a
 * soft gradient. Theme-aware (richer in dark), masked to fade before content, and
 * motion-safe (holds still under prefers-reduced-motion). Pure CSS, decorative.
 */
export function Aurora({ className }: { className?: string }) {
  return (
    <div className={`aurora ${className ?? ""}`} aria-hidden="true">
      <span className="a1" />
      <span className="a2" />
      <span className="a3" />
    </div>
  );
}
