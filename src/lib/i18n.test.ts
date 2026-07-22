import { describe, expect, it } from "vitest";
import {
  absoluteUrl,
  canonicalPath,
  caseHref,
  getCase,
  getNote,
  hreflangLinks,
  jsonLdGraph,
  languageHref,
  noteHref,
  pageHref,
} from "./i18n";

describe("i18n paths", () => {
  it("maps home and section routes", () => {
    expect(pageHref("en", "home")).toBe("/");
    expect(pageHref("zh", "home")).toBe("/zh/index.html");
    expect(pageHref("en", "learn")).toBe("/en/learn.html");
    expect(pageHref("zh", "work")).toBe("/zh/work.html");
    expect(pageHref("en", "notes")).toBe("/en/notes.html");
    expect(pageHref("en", "blog")).toBe("/en/blog.html");
    expect(pageHref("en", "about")).toBe("/en/about.html");
    expect(pageHref("en", "innonestx")).toBe("/en/innonestx.html");
  });

  it("maps case study routes", () => {
    expect(caseHref("en", "testcase-generator")).toBe(
      "/en/work/testcase-generator.html",
    );
    expect(caseHref("zh", "docker-suite")).toBe("/zh/work/docker-suite.html");
  });

  it("maps note routes", () => {
    expect(noteHref("en", "domestic-db-docker-qa")).toBe(
      "/en/blog/domestic-db-docker-qa.html",
    );
    expect(noteHref("zh", "clawhub-skill-shipping")).toBe(
      "/zh/blog/clawhub-skill-shipping.html",
    );
  });

  it("switches language the same way as the legacy site", () => {
    expect(languageHref("en", "home")).toBe("/zh/index.html");
    expect(languageHref("zh", "home")).toBe("/");
    expect(languageHref("en", "life")).toBe("/zh/life.html");
    expect(languageHref("zh", "learn")).toBe("/en/learn.html");
  });

  it("builds canonicals for root and locale homes", () => {
    expect(canonicalPath("en", "home", true)).toBe("/");
    expect(canonicalPath("en", "home", false)).toBe("/en/");
    expect(canonicalPath("zh", "home")).toBe("/zh/");
    expect(canonicalPath("en", "learn")).toBe("/en/learn");
    expect(absoluteUrl("/en/life")).toBe(
      "https://www.xuxuclassmate.com/en/life",
    );
  });

  it("builds hreflang alternates", () => {
    const root = hreflangLinks("en", "home", true);
    expect(root).toEqual([
      { hreflang: "en", href: "https://www.xuxuclassmate.com/en/" },
      { hreflang: "zh", href: "https://www.xuxuclassmate.com/zh/" },
      { hreflang: "x-default", href: "https://www.xuxuclassmate.com/" },
    ]);

    const work = hreflangLinks("zh", "work");
    expect(work.find((l) => l.hreflang === "en")?.href).toBe(
      "https://www.xuxuclassmate.com/en/work",
    );
  });

  it("builds JSON-LD graph with person and webpage", () => {
    const graph = jsonLdGraph("en", "home", true);
    expect(graph["@context"]).toBe("https://schema.org");
    expect(graph["@graph"].length).toBeGreaterThanOrEqual(3);
    expect(graph["@graph"][0]).toMatchObject({ "@type": "Person" });
    expect(graph["@graph"][2]).toMatchObject({
      "@type": "WebPage",
      url: "https://www.xuxuclassmate.com/",
    });
  });

  it("adds SoftwareSourceCode for case studies with repos", () => {
    const graph = jsonLdGraph("en", "work", false, "automation-framework");
    expect(
      graph["@graph"].some((node) => node["@type"] === "SoftwareSourceCode"),
    ).toBe(true);
  });

  it("resolves case studies in both locales", () => {
    expect(getCase("en", "trading-assistant")?.title).toBe(
      "Trading Assistant Core",
    );
    expect(getCase("zh", "testcase-generator")?.slug).toBe(
      "testcase-generator",
    );
    expect(getCase("en", "globalpulse")?.slug).toBe("globalpulse");
    expect(getCase("zh", "docker-hub-api-gateway")?.title).toBe(
      "Docker Hub API Gateway",
    );
    expect(getCase("en", "testcase-generator")?.tradeoffs?.length).toBeGreaterThan(
      0,
    );
  });

  it("resolves notes in both locales", () => {
    expect(getNote("en", "domestic-db-docker-qa")?.title).toContain("Dameng");
    expect(getNote("zh", "clawhub-skill-shipping")?.slug).toBe(
      "clawhub-skill-shipping",
    );
    expect(
      getNote("en", "clawhub-skill-shipping")?.sections.length,
    ).toBeGreaterThan(5);
    expect(getNote("en", "domestic-db-docker-qa")?.proof).toContain("54k+");
  });
});
