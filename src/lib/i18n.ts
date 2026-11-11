import { homeSurface } from "../content/chrome";
import { LOCALES, OG_LOCALE } from "../content/locales";
import { getNote as getNoteFromContent } from "../content/notes";
import { en } from "../content/en";
import { zh } from "../content/zh";
import type {
  CaseSlug,
  Locale,
  LocaleCopy,
  NoteSlug,
  PageId,
} from "../content/types";

export const SITE_ORIGIN = "https://www.xuxuclassmate.com";

function withSurface(locale: Locale): LocaleCopy {
  const t = homeSurface(locale);
  return {
    ...en,
    languageSwitch: t.language,
    languageSwitchHint: t.language,
    menuLabel: t.menu,
    skipToContent: t.skip,
    themeToggle: t.theme,
    themeToLight: t.themeLight,
    themeToDark: t.themeDark,
    copyEmail: t.copyEmail,
    copiedEmail: t.copied,
    contactLabel: t.contactLabel,
    contactHint: t.contactHint,
    nav: {
      ...en.nav,
      products: t.products,
      engineering: t.engineering,
      about: t.about,
      notes: t.notes,
      blog: t.notes,
      openSource: t.openSource,
      innonestx: t.openSource,
    },
    home: {
      ...en.home,
      footerDesc: t.footerDesc,
      title: t.homeTitle,
      description: t.homeDescription,
    },
    meta: {
      ...en.meta,
      home: {
        ...en.meta.home,
        title: t.homeTitle,
        description: t.homeDescription,
        ogTitle: t.homeTitle,
      },
    },
  };
}

const catalogs: Record<Locale, LocaleCopy> = {
  en,
  zh,
  es: withSurface("es"),
  hi: withSurface("hi"),
  ar: withSurface("ar"),
  pt: withSurface("pt"),
  fr: withSurface("fr"),
  ru: withSurface("ru"),
  ja: withSurface("ja"),
  de: withSurface("de"),
};

export function getCopy(locale: Locale = "en"): LocaleCopy {
  return catalogs[locale] ?? en;
}

export { LOCALES, OG_LOCALE };

export function getCase(locale: Locale, slug: CaseSlug) {
  return getCopy(locale).work.cases.find((entry) => entry.slug === slug);
}

export function getNote(locale: Locale, slug: NoteSlug | string) {
  return getNoteFromContent(locale, slug);
}

const LOCALE_PATTERN = LOCALES.join("|");

function cleanPath(path: string): string {
  if (path.endsWith(".html")) path = path.slice(0, -5);
  if (path === "/index" || path === "/en" || path === "/en/index") return "/";
  for (const code of LOCALES) {
    if (code === "en") continue;
    if (path === `/${code}` || path === `/${code}/index`) return `/${code}/`;
  }
  return path;
}

/** Public path for a page. Root `/` is the English home. */
export function pageHref(locale: Locale, page: PageId): string {
  if (page === "home") return locale === "en" ? "/" : `/${locale}/`;
  if (page === "notes") return `/${locale}/blog`;
  if (page === "innonestx") return `/${locale}/open-source`;
  return `/${locale}/${page}`;
}

export function caseHref(locale: Locale, slug: CaseSlug): string {
  return `/${locale}/work/${slug}`;
}

export function noteHref(locale: Locale, slug: NoteSlug): string {
  return `/${locale}/blog/${slug}`;
}

/** English canonical path (`/` or `/en/...`) for any localized URL. */
export function englishPath(pathname: string): string {
  const trimmed =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const path = cleanPath(trimmed);
  if (path === "/" || LOCALES.some((code) => path === `/${code}/` || path === `/${code}`)) {
    return "/";
  }
  const match = path.match(new RegExp(`^/(${LOCALE_PATTERN})(/.*)?$`));
  if (!match) return path.startsWith("/") ? path : `/${path}`;
  const rest = match[2] ?? "/";
  if (rest === "/" || rest === "") return "/";
  return `/en${rest.startsWith("/") ? rest : `/${rest}`}`;
}

/** Same page in another language. English home stays `/`. */
export function hrefForLocale(pathname: string, locale: Locale): string {
  const enPath = englishPath(pathname);
  if (enPath === "/") return pageHref(locale, "home");
  if (locale === "en") return enPath;
  return `/${locale}${enPath.slice(3)}`;
}

export function canonicalPath(locale: Locale, page: PageId): string {
  return pageHref(locale, page);
}

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function hreflangLinks(
  page: PageId,
  caseSlug?: CaseSlug,
  noteSlug?: NoteSlug,
): { hreflang: string; href: string }[] {
  const pathFor = (code: Locale) =>
    absoluteUrl(
      caseSlug
        ? caseHref(code, caseSlug)
        : noteSlug
          ? noteHref(code, noteSlug)
          : pageHref(code, page),
    );
  const enHref = pathFor("en");
  return [
    ...LOCALES.map((code) => ({ hreflang: code, href: pathFor(code) })),
    { hreflang: "x-default", href: enHref },
  ];
}

export function jsonLdGraph(
  locale: Locale,
  page: PageId,
  caseSlug?: CaseSlug,
  noteSlug?: NoteSlug,
) {
  const copy = getCopy(locale);
  const caseStudy = caseSlug ? getCase(locale, caseSlug) : undefined;
  const note = noteSlug ? getNote(locale, noteSlug) : undefined;
  const meta =
    caseStudy?.meta ??
    note?.meta ??
    copy.meta[page] ??
    copy.meta.home;
  const pageUrl = absoluteUrl(
    caseSlug
      ? caseHref(locale, caseSlug)
      : noteSlug
        ? noteHref(locale, noteSlug)
        : canonicalPath(locale, page),
  );
  const lang = locale;

  const person = {
    "@type": "Person",
    "@id": `${SITE_ORIGIN}/#person`,
    name: "XuXuClassMate",
    alternateName: ["xuxuclassmate"],
    url: SITE_ORIGIN,
    jobTitle: "QA Engineer / SDET / AI Testing",
    description: meta.description,
    image: absoluteUrl("/images/og-default.jpg"),
    sameAs: [
      "https://github.com/XuXuClassMate",
      "https://hub.docker.com/u/xuxuclassmate",
      "https://clawhub.ai/xuxuclassmate",
      "https://medium.com/@xuxuclassmate",
    ],
    knowsAbout: [
      "QA Engineer",
      "SDET",
      "Test Automation Engineer",
      "Test Automation",
      "AI Testing",
      "AI Test Automation",
      "Playwright",
      "API Testing",
      "Performance Testing",
      "Docker Testing",
      "Test Infrastructure",
      "AI Test Case Generation",
      "CI/CD",
      "Full-Stack E2E Testing",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    name: "XuXuClassMate",
    url: SITE_ORIGIN,
    inLanguage: ["en", "zh"],
    publisher: { "@id": `${SITE_ORIGIN}/#person` },
  };

  const webPage = {
    "@type":
      page === "about"
        ? "ProfilePage"
        : note
          ? "Article"
          : "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
    about: { "@id": `${SITE_ORIGIN}/#person` },
    inLanguage: lang,
    ...(note
      ? {
          headline: note.title,
          author: { "@id": `${SITE_ORIGIN}/#person` },
        }
      : {}),
    ...(page === "about"
      ? { mainEntity: { "@id": `${SITE_ORIGIN}/#person` } }
      : {}),
  };

  const graph: Record<string, unknown>[] = [person, website, webPage];

  if (caseStudy) {
    const github = caseStudy.proof?.github ?? caseStudy.links[0]?.href;
    if (github && caseStudy.status !== "upcoming") {
      graph.push({
        "@type": "SoftwareSourceCode",
        "@id": `${pageUrl}#code`,
        name: caseStudy.title,
        description: caseStudy.overview ?? caseStudy.description,
        codeRepository: github,
        programmingLanguage: caseStudy.techStack,
        author: { "@id": `${SITE_ORIGIN}/#person` },
        url: pageUrl,
      });
    } else {
      graph.push({
        "@type": "CreativeWork",
        "@id": `${pageUrl}#work`,
        name: caseStudy.title,
        description: caseStudy.overview ?? caseStudy.description,
        author: { "@id": `${SITE_ORIGIN}/#person` },
        url: pageUrl,
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export type { CaseSlug, Locale, NoteSlug, PageId, LocaleCopy };
