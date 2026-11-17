import { describe, expect, it } from "vitest";
import { slashRewrite } from "./slash-rewrite";

describe("slashRewrite", () => {
  it("serves bare locale roots from their directory index", () => {
    expect(slashRewrite("/en")).toBe("/en/");
    expect(slashRewrite("/zh")).toBe("/zh/");
    expect(slashRewrite("/es")).toBe("/es/");
    expect(slashRewrite("/ja")).toBe("/ja/");
  });

  it("leaves the locale directory index alone", () => {
    expect(slashRewrite("/en/")).toBeNull();
    expect(slashRewrite("/zh/")).toBeNull();
    expect(slashRewrite("/")).toBeNull();
  });

  it("drops the trailing slash on file-format pages", () => {
    expect(slashRewrite("/en/about/")).toBe("/en/about");
    expect(slashRewrite("/zh/work/")).toBe("/zh/work");
    expect(slashRewrite("/en/blog/")).toBe("/en/blog");
    expect(slashRewrite("/en/notes/")).toBe("/en/notes");
  });

  it("does not rewrite assets or extensionless canonical pages", () => {
    expect(slashRewrite("/en/about")).toBeNull();
    expect(slashRewrite("/images/logo.svg/")).toBeNull();
    expect(slashRewrite("/api/geo/")).toBeNull();
    expect(slashRewrite("/_astro/app.css/")).toBeNull();
  });
});
