import { describe, expect, it } from "vitest";
import {
  absoluteUrl,
  canonicalPath,
  languageHref,
  pageHref,
} from "./i18n";

describe("i18n paths", () => {
  it("maps home and section routes", () => {
    expect(pageHref("en", "home")).toBe("/");
    expect(pageHref("zh", "home")).toBe("/zh/index.html");
    expect(pageHref("en", "learn")).toBe("/en/learn.html");
    expect(pageHref("zh", "work")).toBe("/zh/work.html");
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
});
