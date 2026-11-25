import type { ReactNode } from "react";

/**
 * Content wrapper. Deliberately NOT a per-section fade-in: Apple pages don't
 * fade every block on scroll, and scattered scroll reveals read as generated.
 * Motion is spent where it counts — the hero entrance and the one GSAP-pinned
 * chapter — so this renders its children plainly and always visible.
 *
 * Kept as a component (with the same API) so sections stay declarative and a
 * single, intentional reveal can be reintroduced later in one place.
 */
export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}
