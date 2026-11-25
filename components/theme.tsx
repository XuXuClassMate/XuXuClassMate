"use client";

/* This provider intentionally syncs React state from the DOM/system (an
   external source) on mount, which is the correct pattern here. */
/* eslint-disable react-hooks/set-state-in-effect */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

type ThemeCtx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeCtx | null>(null);

/**
 * Theme is applied as a `dark` class on <html> by the inline no-flash script in
 * the document head (so there is no light flash before hydration). This provider
 * only mirrors that into React state and persists explicit user choices.
 *
 * Default follows the browser (prefers-color-scheme). If the user hasn't made an
 * explicit choice, we keep following the system live.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;
    setThemeState(root.classList.contains("dark") ? "dark" : "light");

    // Follow the system while there is no explicit saved preference.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystem = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("theme");
      } catch {}
      if (saved === "light" || saved === "dark") return;
      const next: Theme = mq.matches ? "dark" : "light";
      root.classList.toggle("dark", next === "dark");
      setThemeState(next);
    };
    mq.addEventListener("change", onSystem);
    return () => mq.removeEventListener("change", onSystem);
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    const root = document.documentElement;
    root.classList.toggle("dark", t === "dark");
    try {
      localStorage.setItem("theme", t);
    } catch {}
  };

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
