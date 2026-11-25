"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/theme";
import { useLang, LANGS, LANG_META } from "@/components/i18n";
import { cn } from "@/lib/utils";

/** Light/dark toggle. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "grid h-9 w-9 place-items-center rounded-full text-ink/80 transition-colors hover:bg-[color-mix(in_srgb,var(--color-ink)_8%,transparent)] hover:text-ink",
        className,
      )}
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 14.5A8 8 0 019.5 4a7 7 0 100 16 8 8 0 0010.5-5.5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

/** Language picker across the six UN languages. */
export function LangMenu({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change language"
        className="flex h-9 items-center gap-1.5 rounded-full px-2.5 text-ink/80 transition-colors hover:bg-[color-mix(in_srgb,var(--color-ink)_8%,transparent)] hover:text-ink"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        <span className="text-[13px] font-medium">{LANG_META[lang].short}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute end-0 top-[calc(100%+8px)] z-50 min-w-[160px] overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] py-1 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]"
        >
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              role="menuitemradio"
              aria-checked={l === lang}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-[14px] transition-colors hover:bg-[var(--color-surface)]",
                l === lang ? "text-ink" : "text-ink/75",
              )}
            >
              <span dir={l === "ar" ? "rtl" : "ltr"}>{LANG_META[l].name}</span>
              {l === lang && (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 6.5"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
