import { getNote as getNoteFromContent } from "../content/notes";
import { en } from "../content/en";
import type {
  CaseSlug,
  Locale,
  LocaleCopy,
  NoteSlug,
  PageId,
} from "../content/types";

export const SITE_ORIGIN = "https://www.xuxuclassmate.com";

export function getCopy(_locale?: Locale): LocaleCopy {
  return en;
}

export function getCase(locale: Locale, slug: CaseSlug) {
  return getCopy("en").work.cases.find((entry) => entry.slug === slug);
}

export function getNote(locale: Locale, slug: NoteSlug | string) {
  return getNoteFromContent("en", slug);
}

/** Public path for a page. Root `/` is the English home. */
export function pageHref(locale: Locale, page: PageId): string {
  if (page === "home") return "/";
  if (page === "notes") return "/en/blog";
  if (page === "innonestx") return "/en/open-source";
  return `/en/${page}`;
}

export function caseHref(locale: Locale, slug: CaseSlug): string {
  return `/en/work/${slug}`;
}

export function noteHref(locale: Locale, slug: NoteSlug): string {
  return `/en/blog/${slug}`;
}

export function canonicalPath(locale: Locale, page: PageId): string {
  if (page === "home") return "/";
  if (page === "notes") return "/en/blog";
  if (page === "innonestx") return "/en/open-source";
  return `/en/${page}`;
}

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function hreflangLinks(
  page: PageId,
): { hreflang: string; href: string }[] {
  const resolved =
    page === "home"
      ? "/"
      : page === "notes"
        ? "/en/blog"
        : page === "innonestx"
          ? "/en/open-source"
          : `/en/${page}`;
  const href = absoluteUrl(resolved === "/" ? "/" : resolved);
  return [
    { hreflang: "en", href },
    { hreflang: "x-default", href },
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
      ? `/en/work/${caseSlug}`
      : noteSlug
        ? `/en/blog/${noteSlug}`
        : canonicalPath(locale, page),
  );

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
    inLanguage: ["en"],
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
    inLanguage: "en",
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
