import { describe, expect, it } from "vitest";
import { formatMetric, resolveMetric, METRIC_FALLBACKS } from "./metrics";
import { parseTopReposPulls, parseUserStats } from "./docker-gateway";

describe("formatMetric", () => {
  it("keeps small counts exact", () => {
    expect(formatMetric(907)).toBe("907");
    expect(formatMetric(703)).toBe("703");
  });

  it("compacts large counts", () => {
    expect(formatMetric(1610)).toBe("1.6k+");
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
