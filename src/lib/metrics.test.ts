import { describe, expect, it } from "vitest";
import { formatMetric, resolveMetric, METRIC_FALLBACKS } from "./metrics";

describe("formatMetric", () => {
  it("keeps small counts exact", () => {
    expect(formatMetric(907)).toBe("907");
    expect(formatMetric(703)).toBe("703");
  });

  it("compacts large counts", () => {
    expect(formatMetric(16871)).toBe("16.9k+");
    expect(formatMetric(29793)).toBe("29.8k+");
  });
});

describe("resolveMetric", () => {
  it("uses live map when present", () => {
    const metrics = { ...METRIC_FALLBACKS, "clawhub:trading-assistant-core": 1200 };
    expect(resolveMetric(metrics, "clawhub:trading-assistant-core", "900+")).toBe(
      "1200",
    );
  });

  it("falls back to static value without metric id", () => {
    expect(resolveMetric(METRIC_FALLBACKS, undefined, "42")).toBe("42");
  });
});
