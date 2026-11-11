import { describe, expect, it } from "vitest";
import {
  absoluteUrl,
  canonicalPath,
  caseHref,
  getCase,
  getNote,
  hreflangLinks,
  jsonLdGraph,
  noteHref,
  pageHref,
} from "./i18n";

describe("i18n paths", () => {
  it("maps home and section routes", () => {
    expect(pageHref("en", "home")).toBe("/");
    expect(pageHref("en", "learn")).toBe("/en/learn");
    expect(pageHref("en", "work")).toBe("/en/work");
    expect(pageHref("en", "notes")).toBe("/en/blog");
    expect(pageHref("en", "blog")).toBe("/en/blog");
    expect(pageHref("en", "about")).toBe("/en/about");
    expect(pageHref("en", "innonestx")).toBe("/en/open-source");
    expect(pageHref("en", "open-source")).toBe("/en/open-source");
    expect(pageHref("en", "playground")).toBe("/en/playground");
    expect(pageHref("en", "now")).toBe("/en/now");
    expect(pageHref("zh", "home")).toBe("/zh/");
    expect(pageHref("zh", "about")).toBe("/zh/about");
    expect(pageHref("es", "home")).toBe("/es/");
    expect(pageHref("ja", "work")).toBe("/ja/work");
  });

  it("maps case study routes", () => {
    expect(caseHref("en", "testcase-generator")).toBe(
      "/en/work/testcase-generator",
    );
    expect(caseHref("en", "docker-suite")).toBe("/en/work/docker-suite");
  });

  it("maps note routes", () => {
    expect(noteHref("en", "enterprise-db-docker-qa")).toBe(
      "/en/blog/enterprise-db-docker-qa",
    );
    expect(noteHref("en", "clawhub-skill-shipping")).toBe(
      "/en/blog/clawhub-skill-shipping",
    );
  });

  it("builds canonicals for root and locale homes", () => {
    expect(canonicalPath("en", "home")).toBe("/");
    expect(canonicalPath("en", "learn")).toBe("/en/learn");
    expect(absoluteUrl("/en/learn")).toBe(
      "https://www.xuxuclassmate.com/en/learn",
    );
  });

  it("builds hreflang alternates", () => {
    const root = hreflangLinks("home");
    expect(root.find((item) => item.hreflang === "en")?.href).toBe(
      "https://www.xuxuclassmate.com/",
    );
    expect(root.find((item) => item.hreflang === "zh")?.href).toBe(
      "https://www.xuxuclassmate.com/zh/",
    );
    expect(root.find((item) => item.hreflang === "es")?.href).toBe(
      "https://www.xuxuclassmate.com/es/",
    );
    expect(root.find((item) => item.hreflang === "x-default")?.href).toBe(
      "https://www.xuxuclassmate.com/",
    );
    expect(root).toHaveLength(11);

    const work = hreflangLinks("work");
    expect(work.find((l) => l.hreflang === "en")?.href).toBe(
      "https://www.xuxuclassmate.com/en/work",
    );
  });

  it("builds JSON-LD graph with person and webpage", () => {
    const graph = jsonLdGraph("en", "home");
    expect(graph["@context"]).toBe("https://schema.org");
    expect(graph["@graph"].length).toBeGreaterThanOrEqual(3);
    expect(graph["@graph"][0]).toMatchObject({ "@type": "Person" });
    expect(graph["@graph"][2]).toMatchObject({
      "@type": "WebPage",
      url: "https://www.xuxuclassmate.com/",
    });
  });

  it("adds SoftwareSourceCode for case studies with repos", () => {
    const graph = jsonLdGraph("en", "work", "automation-framework");
    expect(
      graph["@graph"].some((node) => node["@type"] === "SoftwareSourceCode"),
    ).toBe(true);
  });

  it("resolves case studies", () => {
    expect(getCase("en", "trading-assistant")?.title).toBe(
      "Trading Assistant Core",
    );
    expect(getCase("en", "testcase-generator")?.slug).toBe("testcase-generator");
    expect(getCase("en", "globalpulse")?.slug).toBe("globalpulse");
    expect(getCase("en", "testcase-generator")?.tradeoffs?.length).toBeGreaterThan(
      0,
    );
  });

  it("resolves notes", () => {
    expect(getNote("en", "enterprise-db-docker-qa")?.title).toContain("Dameng");
    expect(getNote("en", "clawhub-skill-shipping")?.slug).toBe(
      "clawhub-skill-shipping",
    );
    expect(
      getNote("en", "clawhub-skill-shipping")?.sections.length,
    ).toBeGreaterThan(5);
    expect(getNote("en", "enterprise-db-docker-qa")?.proof).toContain("54k+");
    expect(getNote("en", "ai-testcase-generator-multimodal")?.category).toBe(
      "AI Testing",
    );
    expect(getNote("en", "playwright-e2e-framework")?.title).toContain(
      "Playwright",
    );
  });
});
