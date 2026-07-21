export type MetricId =
  | "clawhub:ai-testcase-generator"
  | "clawhub:trading-assistant-core"
  | "docker:dameng"
  | "docker:highgo"
  | "docker:kingbase"
  | "docker:tidb";

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

export const DOCKER_REPOS = ["dameng", "highgo", "kingbase", "tidb"] as const;

/** Fallback values used when live APIs are unavailable. */
export const METRIC_FALLBACKS: Record<MetricId, number> = {
  "clawhub:ai-testcase-generator": 703,
  "clawhub:trading-assistant-core": 907,
  "docker:dameng": 29793,
  "docker:highgo": 16871,
  "docker:kingbase": 1610,
  "docker:tidb": 941,
};

export type MetricsMap = Record<MetricId, number>;

export function formatMetric(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "0";
  if (value >= 1000) {
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
  const clawhubJobs = (
    Object.keys(CLAWHUB_SKILLS) as (keyof typeof CLAWHUB_SKILLS)[]
  ).map((key) =>
    fetchJson(`https://clawhub.ai/api/v1/skills/${CLAWHUB_SKILLS[key].slug}`).then(
      (json) => {
        const value = clawhubDownloads(json);
        if (value == null) throw new Error("missing downloads");
        return [`clawhub:${key}` as MetricId, value] as const;
      },
    ),
  );

  const dockerJobs = DOCKER_REPOS.map((repo) =>
    fetchJson(`https://hub.docker.com/v2/repositories/xuxuclassmate/${repo}/`).then(
      (json) => {
        const value = dockerPulls(json);
        if (value == null) throw new Error("missing pulls");
        return [`docker:${repo}` as MetricId, value] as const;
      },
    ),
  );

  const entries = await Promise.allSettled([...clawhubJobs, ...dockerJobs]);
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
