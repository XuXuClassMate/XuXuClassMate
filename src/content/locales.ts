import type { Locale } from "./types";

/** English is the default. The other nine are the next most widely used web languages. */
export const LOCALES = [
  "en",
  "zh",
  "es",
  "hi",
  "ar",
  "pt",
  "fr",
  "ru",
  "ja",
  "de",
] as const satisfies readonly Locale[];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  es: "Español",
  hi: "हिन्दी",
  ar: "العربية",
  pt: "Português",
  fr: "Français",
  ru: "Русский",
  ja: "日本語",
  de: "Deutsch",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
  es: "es_ES",
  hi: "hi_IN",
  ar: "ar_AR",
  pt: "pt_BR",
  fr: "fr_FR",
  ru: "ru_RU",
  ja: "ja_JP",
  de: "de_DE",
};

export function textDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** Body copy that only exists in English and Chinese. */
export function contentLocale(locale: Locale): "en" | "zh" {
  return locale === "zh" ? "zh" : "en";
}
