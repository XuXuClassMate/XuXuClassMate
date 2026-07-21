import { en } from "../content/en";
import { zh } from "../content/zh";
import type { Locale, LocaleCopy, PageId } from "../content/types";

export const SITE_ORIGIN = "https://www.xuxuclassmate.com";
export const CONTACT_EMAIL = "mail@xuxuclassmate.com";

const catalogs: Record<Locale, LocaleCopy> = { en, zh };

export function getCopy(locale: Locale): LocaleCopy {
  return catalogs[locale];
}

/** Public path for a page. Root `/` is the English home (same as legacy). */
export function pageHref(locale: Locale, page: PageId): string {
  if (page === "home") {
    return locale === "zh" ? "/zh/index.html" : "/";
  }
  return `/${locale}/${page}.html`;
}

export function languageHref(locale: Locale, page: PageId): string {
  const twin: Locale = locale === "en" ? "zh" : "en";
  if (page === "home" && twin === "en") {
    return "/";
  }
  return pageHref(twin, page);
}

export function canonicalPath(locale: Locale, page: PageId, rootHome = false): string {
  if (page === "home") {
    if (rootHome) return "/";
    return locale === "zh" ? "/zh/index.html" : "/en/index.html";
  }
  return pageHref(locale, page);
}

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function hreflangLinks(
  _locale: Locale,
  page: PageId,
  rootHome = false,
): { hreflang: string; href: string }[] {
  if (page === "home" && rootHome) {
    return [
      { hreflang: "en", href: absoluteUrl("/en/") },
      { hreflang: "zh", href: absoluteUrl("/zh/") },
      { hreflang: "x-default", href: absoluteUrl("/") },
    ];
  }

  const enPath = page === "home" ? "/en/index.html" : pageHref("en", page);
  const zhPath = page === "home" ? "/zh/index.html" : pageHref("zh", page);

  return [
    { hreflang: "en", href: absoluteUrl(enPath) },
    { hreflang: "zh", href: absoluteUrl(zhPath) },
    { hreflang: "x-default", href: absoluteUrl(enPath) },
  ];
}

export type { Locale, PageId, LocaleCopy };
