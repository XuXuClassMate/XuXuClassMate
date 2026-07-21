export type MetricId =
  | "clawhub:ai-testcase-generator"
  | "clawhub:trading-assistant-core"
  | "docker:dameng"
  | "docker:highgo";

export const CLAWHUB_SKILLS = {
  "ai-testcase-generator": {
    slug: "ai-testcase-generator",
    url: "https://clawhub.ai/xuxuclassmate/ai-testcase-generator",
  },
  "trading-assistant-core": {
    slug: "trading-assistant-core",
    url: "https://clawhub.ai/xuxuclassmate/trading-assistant-core",
  },
} as const;

/** Fallback values used when live APIs are unavailable. */
export const METRIC_FALLBACKS: Record<MetricId, number> = {
  "clawhub:ai-testcase-generator": 703,
  "clawhub:trading-assistant-core": 907,
  "docker:dameng": 29793,
  "docker:highgo": 16871,
};

export type MetricsMap = Record<MetricId, number>;

export function formatMetric(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "0";
  if (value >= 10_000) {
    const thousands = value / 1000;
    const rounded =
      value >= 100_000 ? Math.round(thousands) : Math.round(thousands * 10) / 10;
    return `${String(rounded).replace(/\.0$/, "")}k+`;
  }
  return String(Math.round(value));
}

async function fetchJson(url: string, timeoutMs = 8000): Promise<unknown> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} for ${url}`);
    }
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

function clawhubDownloads(payload: unknown): number | null {
  if (!payload || typeof payload !== "object") return null;
  const skill = (payload as { skill?: { stats?: { downloads?: unknown } } })
    .skill;
  const downloads = skill?.stats?.downloads;
  return typeof downloads === "number" && Number.isFinite(downloads)
    ? downloads
    : null;
}

function dockerPulls(payload: unknown): number | null {
  if (!payload || typeof payload !== "object") return null;
  const pulls = (payload as { pull_count?: unknown }).pull_count;
  return typeof pulls === "number" && Number.isFinite(pulls) ? pulls : null;
}

export async function fetchLiveMetrics(): Promise<Partial<MetricsMap>> {
  const entries = await Promise.allSettled([
    fetchJson(
      `https://clawhub.ai/api/v1/skills/${CLAWHUB_SKILLS["ai-testcase-generator"].slug}`,
    ).then((json) => {
      const value = clawhubDownloads(json);
      if (value == null) throw new Error("missing downloads");
      return ["clawhub:ai-testcase-generator", value] as const;
    }),
    fetchJson(
      `https://clawhub.ai/api/v1/skills/${CLAWHUB_SKILLS["trading-assistant-core"].slug}`,
    ).then((json) => {
      const value = clawhubDownloads(json);
      if (value == null) throw new Error("missing downloads");
      return ["clawhub:trading-assistant-core", value] as const;
    }),
    fetchJson("https://hub.docker.com/v2/repositories/xuxuclassmate/dameng/").then(
      (json) => {
        const value = dockerPulls(json);
        if (value == null) throw new Error("missing pulls");
        return ["docker:dameng", value] as const;
      },
    ),
    fetchJson("https://hub.docker.com/v2/repositories/xuxuclassmate/highgo/").then(
      (json) => {
        const value = dockerPulls(json);
        if (value == null) throw new Error("missing pulls");
        return ["docker:highgo", value] as const;
      },
    ),
  ]);

  const live: Partial<MetricsMap> = {};
  for (const entry of entries) {
    if (entry.status === "fulfilled") {
      live[entry.value[0]] = entry.value[1];
    }
  }
  return live;
}

let metricsPromise: Promise<MetricsMap> | null = null;

export async function getMetrics(): Promise<MetricsMap> {
  if (!metricsPromise) {
    metricsPromise = fetchLiveMetrics()
      .then((live) => ({ ...METRIC_FALLBACKS, ...live }))
      .catch(() => ({ ...METRIC_FALLBACKS }));
  }
  return metricsPromise;
}

export function resolveMetric(
  metrics: MetricsMap,
  metricId: MetricId | undefined,
  fallbackValue: string,
): string {
  if (!metricId) return fallbackValue;
  return formatMetric(metrics[metricId] ?? METRIC_FALLBACKS[metricId]);
}
