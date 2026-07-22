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
export const CONTACT_EMAIL = "mail@xuxuclassmate.com";

const catalogs: Record<Locale, LocaleCopy> = { en, zh };

export function getCopy(locale: Locale): LocaleCopy {
  return catalogs[locale];
}

export function getCase(locale: Locale, slug: CaseSlug) {
  return getCopy(locale).work.cases.find((entry) => entry.slug === slug);
}

export function getNote(locale: Locale, slug: NoteSlug | string) {
  return getNoteFromContent(locale, slug);
}

/** Public path for a page. Root `/` is the English home (same as legacy). */
export function pageHref(locale: Locale, page: PageId): string {
  if (page === "home") {
    return locale === "zh" ? "/zh/index.html" : "/";
  }
  return `/${locale}/${page}.html`;
}

export function caseHref(locale: Locale, slug: CaseSlug): string {
  return `/${locale}/work/${slug}.html`;
}

export function noteHref(locale: Locale, slug: NoteSlug): string {
  return `/${locale}/blog/${slug}.html`;
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
    return locale === "zh" ? "/zh/" : "/en/";
  }
  return `/${locale}/${page}`;
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

  const enPath = page === "home" ? "/en/" : `/en/${page}`;
  const zhPath = page === "home" ? "/zh/" : `/zh/${page}`;

  return [
    { hreflang: "en", href: absoluteUrl(enPath) },
    { hreflang: "zh", href: absoluteUrl(zhPath) },
    { hreflang: "x-default", href: absoluteUrl(enPath) },
  ];
}

export function jsonLdGraph(
  locale: Locale,
  page: PageId,
  rootHome = false,
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
      ? `/${locale}/work/${caseSlug}`
      : noteSlug
        ? `/${locale}/blog/${noteSlug}`
        : canonicalPath(locale, page, rootHome),
  );
  const isZh = locale === "zh";

  const person = {
    "@type": "Person",
    "@id": `${SITE_ORIGIN}/#person`,
    name: isZh ? "旭旭同学" : "XuXuClassMate",
    alternateName: isZh
      ? ["XuXuClassMate", "xuxuclassmate"]
      : ["旭旭同学", "xuxuclassmate"],
    url: SITE_ORIGIN,
    email: CONTACT_EMAIL,
    jobTitle: isZh
      ? "QA / SDET / AI Testing Engineer"
      : "QA Engineer / SDET / AI Testing Engineer",
    description: meta.description,
    image: absoluteUrl("/images/og-default.jpg"),
    sameAs: [
      "https://github.com/XuXuClassMate",
      "https://hub.docker.com/u/xuxuclassmate",
      "https://clawhub.ai/xuxuclassmate",
      "https://medium.com/@xuxuclassmate",
      "https://blog.csdn.net/XuXuClassMate",
    ],
    knowsAbout: isZh
      ? [
          "QA Engineer",
          "SDET",
          "Test Automation",
          "API Testing",
          "Performance Testing",
          "Playwright",
          "AI Testing",
          "Docker",
          "CI/CD",
          "Full-Stack E2E",
        ]
      : [
          "QA Engineer",
          "SDET",
          "Test Automation Engineer",
          "API Automation Testing",
          "Performance Testing",
          "Playwright",
          "AI Testing Engineer",
          "Docker",
          "CI/CD",
          "Full-Stack E2E Testing",
        ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    name: isZh ? "旭旭同学" : "XuXuClassMate",
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
    inLanguage: locale,
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
