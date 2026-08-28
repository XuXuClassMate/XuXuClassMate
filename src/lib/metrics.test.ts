import { describe, expect, it } from "vitest";
import {
  parseProfileOgDownloads,
  parsePublishedPage,
  parseSkillDownloadsPayload,
  summarizeOwnerDownloads,
} from "./clawhub";
import { formatMetric, resolveMetric, METRIC_FALLBACKS } from "./metrics";
import { parseTopReposPulls, parseUserStats } from "./docker-gateway";

describe("formatMetric", () => {
  it("keeps small counts exact", () => {
    expect(formatMetric(907)).toBe("907");
    expect(formatMetric(703)).toBe("703");
  });

  it("compacts large counts", () => {
    expect(formatMetric(1610)).toBe("1.6k+");
    expect(formatMetric(7301)).toBe("7.3k+");
    expect(formatMetric(16871)).toBe("16.9k+");
    expect(formatMetric(29793)).toBe("29.8k+");
  });
});

describe("resolveMetric", () => {
  it("uses live map when present", () => {
    const metrics = { ...METRIC_FALLBACKS, "clawhub:trading-assistant-core": 1200 };
    expect(resolveMetric(metrics, "clawhub:trading-assistant-core", "900+")).toBe(
      "1.2k+",
    );
  });

  it("falls back to static value without metric id", () => {
    expect(resolveMetric(METRIC_FALLBACKS, undefined, "42")).toBe("42");
  });
});

describe("clawhub owner parsers", () => {
  it("reads downloads from profile OG image URLs", () => {
    expect(
      parseProfileOgDownloads(
        '<meta property="og:image" content="https://clawhub.ai/og/profile?handle=xuxuclassmate&amp;downloads=7301"/>',
      ),
    ).toBe(7301);
  });

  it("reads skill API downloads", () => {
    expect(
      parseSkillDownloadsPayload({
        skill: { stats: { downloads: 868 } },
      }),
    ).toBe(868);
  });

  it("sums every skill on a published page", () => {
    const parsed = parsePublishedPage({
      status: "success",
      value: {
        isDone: true,
        continueCursor: "",
        page: [
          {
            kind: "skill",
            downloads: 1098,
            href: "/xuxuclassmate/trading-assistant-core",
          },
          {
            kind: "skill",
            downloads: 868,
            href: "/xuxuclassmate/ai-testcase-generator",
          },
          {
            kind: "skill",
            downloads: 95,
            href: "/xuxuclassmate/custom-mail-old",
          },
        ],
      },
    });
    expect(parsed?.items).toHaveLength(3);
    expect(summarizeOwnerDownloads(parsed!.items)).toEqual({
      totalDownloads: 2061,
      skillCount: 3,
      bySlug: {
        "trading-assistant-core": 1098,
        "ai-testcase-generator": 868,
        "custom-mail-old": 95,
      },
    });
  });
});

describe("docker gateway parsers", () => {
  it("reads pullCount from top-repos payload", () => {
    expect(
      parseTopReposPulls({
        repositories: [
          { name: "dameng", pullCount: 29951 },
          { name: "testcase-generator", pullCount: 902 },
          { name: "other", pullCount: 1 },
        ],
      }),
    ).toEqual({
      dameng: 29951,
      "testcase-generator": 902,
    });
  });

  it("reads user stats totals", () => {
    expect(
      parseUserStats({ totalPulls: 55097, repositoryCount: 12 }),
    ).toEqual({ totalPulls: 55097, repositoryCount: 12 });
  });
});
