"use client";

/* This provider intentionally syncs React state from the browser (an external
   source) on mount, which is the correct pattern here. */
/* eslint-disable react-hooks/set-state-in-effect */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/** The six official UN languages. */
export type Lang = "en" | "zh" | "ar" | "fr" | "ru" | "es";

export const LANGS: Lang[] = ["en", "zh", "ar", "fr", "ru", "es"];

/** Native display name + short badge for each language. */
export const LANG_META: Record<Lang, { name: string; short: string }> = {
  en: { name: "English", short: "EN" },
  zh: { name: "中文", short: "中" },
  ar: { name: "العربية", short: "ع" },
  fr: { name: "Français", short: "FR" },
  ru: { name: "Русский", short: "RU" },
  es: { name: "Español", short: "ES" },
};

/** BCP-47 tag for the <html lang> attribute. */
const HTML_LANG: Record<Lang, string> = {
  en: "en",
  zh: "zh-CN",
  ar: "ar",
  fr: "fr",
  ru: "ru",
  es: "es",
};

/** A string in every supported language (all required, so none is missed). */
export type Localized = Record<Lang, string>;

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const I18nContext = createContext<I18nCtx | null>(null);

function isLang(v: string | null): v is Lang {
  return !!v && (LANGS as string[]).includes(v);
}

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("lang");
    if (isLang(saved)) return saved;
  } catch {}
  const nav = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
  const prefix = nav.split("-")[0];
  return isLang(prefix) ? (prefix as Lang) : "en";
}

function applyLangAttrs(l: Lang) {
  const root = document.documentElement;
  root.lang = HTML_LANG[l];
  root.dir = l === "ar" ? "rtl" : "ltr";
}

/**
 * Language defaults to the browser (navigator.language) and can be switched at
 * runtime without a reload. The server/static render uses "en"; the client
 * resolves the real language on mount — the same trade-off as theme.
 */
export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const l = detectLang();
    setLangState(l);
    applyLangAttrs(l);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
    applyLangAttrs(l);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLang must be used within I18nProvider");
  return ctx;
}

/** Returns a picker for Localized values, for use inside client components. */
export function useTx() {
  const { lang } = useLang();
  return (l: Localized) => l[lang] ?? l.en;
}

/**
 * Inline localized text node. Keeps pages as server components — only the leaf
 * text is client-rendered from language context.
 */
export function T(props: Localized) {
  const { lang } = useLang();
  return <>{props[lang] ?? props.en}</>;
}

/** Locale-aware date, matching the site language. */
export function LocalDate({ iso }: { iso: string }) {
  const { lang } = useLang();
  const formatted = new Date(iso + "T00:00:00Z").toLocaleDateString(HTML_LANG[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
  return <>{formatted}</>;
}
