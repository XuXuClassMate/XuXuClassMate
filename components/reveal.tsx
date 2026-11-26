"use client";

/* Reveal syncs from IntersectionObserver / reduced-motion (external sources). */
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Restrained, once-only scroll reveal: a small fade + rise as a block enters
 * view. Hidden state and transition live in globals.css under
 * prefers-reduced-motion: no-preference, so reduced-motion viewers (and the
 * static HTML, before hydration marks it in) simply see the content.
 */
export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const Tag = as;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const revealNow = () => setShown(true);
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 767px)").matches
    ) {
      revealNow();
      return;
    }

    // 已经在视口里就立刻显示,不等 IO。iOS 上 observer 经常要滚动才回调。
    const rect = el.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      revealNow();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          revealNow();
          io.disconnect();
        }
      },
      // threshold 0 + 向外扩 root,避免大区块永远达不到可见阈值。
      { threshold: 0, rootMargin: "80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("reveal", shown && "is-in", className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
