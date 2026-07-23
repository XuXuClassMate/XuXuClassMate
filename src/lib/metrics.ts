import {
  DOCKER_METRIC_REPOS,
  dockerGatewayCallsUrl,
  dockerTopReposUrl,
  dockerUserStatsUrl,
  parseTopReposPulls,
  parseUserStats,
} from "./docker-gateway";

export type MetricId =
  | "clawhub:ai-testcase-generator"
  | "clawhub:trading-assistant-core"
  | "clawhub:total-downloads"
  | "docker:dameng"
  | "docker:highgo"
  | "docker:kingbase"
  | "docker:tidb"
  | "docker:testcase-generator"
  | "docker:total-pulls"
  | "docker:repo-count"
  | "npm:testcase-generator"
  | "api:gateway-calls";

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

/** @deprecated Prefer DOCKER_METRIC_REPOS from ./docker-gateway. */
export const DOCKER_REPOS = DOCKER_METRIC_REPOS;

export const NPM_PACKAGES = {
  "testcase-generator": {
    name: "@classmatexuxu/testcase-generator",
    /** First publish day on npm (UTC). */
    since: "2026-04-02",
    url: "https://www.npmjs.com/package/@classmatexuxu/testcase-generator",
  },
} as const;

/** Fallback values used when live APIs are unavailable. */
export const METRIC_FALLBACKS: Record<MetricId, number> = {
  "clawhub:ai-testcase-generator": 709,
  "clawhub:trading-assistant-core": 908,
  "clawhub:total-downloads": 1617,
  "docker:dameng": 29795,
  "docker:highgo": 16873,
  "docker:kingbase": 1613,
  "docker:tidb": 943,
  "docker:testcase-generator": 899,
  "docker:total-pulls": 53935,
  "docker:repo-count": 12,
  "npm:testcase-generator": 139,
  "api:gateway-calls": 501,
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

function npmRangeTotal(payload: unknown): number | null {
  if (!payload || typeof payload !== "object") return null;
  const downloads = (payload as { downloads?: unknown }).downloads;
  if (!Array.isArray(downloads)) return null;
  let total = 0;
  for (const day of downloads) {
    if (!day || typeof day !== "object") continue;
    const count = (day as { downloads?: unknown }).downloads;
    if (typeof count === "number" && Number.isFinite(count)) {
      total += count;
    }
  }
  return total;
}

function utcToday(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function fetchLiveMetrics(): Promise<Partial<MetricsMap>> {
  const pairJobs: Promise<
    | readonly [MetricId, number]
    | ReadonlyArray<readonly [MetricId, number]>
  >[] = [
    ...(Object.keys(CLAWHUB_SKILLS) as (keyof typeof CLAWHUB_SKILLS)[]).map(
      (key) =>
        fetchJson(
          `https://clawhub.ai/api/v1/skills/${CLAWHUB_SKILLS[key].slug}`,
        ).then((json) => {
          const value = clawhubDownloads(json);
          if (value == null) throw new Error("missing downloads");
          return [`clawhub:${key}` as MetricId, value] as const;
        }),
    ),
    // All Docker pull counts come from docker-hub-pull-counter.vercel.app only.
    Promise.all([
      fetchJson(dockerTopReposUrl()),
      fetchJson(dockerUserStatsUrl()),
    ]).then(([topRepos, userStatsRaw]) => {
      const repos = parseTopReposPulls(topRepos);
      const userStats = parseUserStats(userStatsRaw);
      const pairs: Array<readonly [MetricId, number]> = [];
      for (const repo of DOCKER_METRIC_REPOS) {
        const pulls = repos[repo];
        if (pulls != null) {
          pairs.push([`docker:${repo}` as MetricId, pulls]);
        }
      }
      if (userStats.totalPulls != null) {
        pairs.push(["docker:total-pulls", userStats.totalPulls]);
      }
      if (userStats.repositoryCount != null) {
        pairs.push(["docker:repo-count", userStats.repositoryCount]);
      }
      if (pairs.length === 0) throw new Error("missing docker gateway data");
      return pairs;
    }),
    ...(Object.keys(NPM_PACKAGES) as (keyof typeof NPM_PACKAGES)[]).map(
      async (key) => {
        const pkg = NPM_PACKAGES[key];
        const end = utcToday();
        const json = await fetchJson(
          `https://api.npmjs.org/downloads/range/${pkg.since}:${end}/${encodeURIComponent(pkg.name)}`,
        );
        const value = npmRangeTotal(json);
        if (value == null) throw new Error("missing npm downloads");
        return [`npm:${key}` as MetricId, value] as const;
      },
    ),
    fetchJson(dockerGatewayCallsUrl()).then((json) => {
      if (!json || typeof json !== "object") throw new Error("bad api stats");
      const total = (json as { totalCalls?: unknown }).totalCalls;
      if (typeof total !== "number" || !Number.isFinite(total)) {
        throw new Error("missing totalCalls");
      }
      return ["api:gateway-calls" as MetricId, total] as const;
    }),
  ];

  const entries = await Promise.allSettled(pairJobs);
  const live: Partial<MetricsMap> = {};
  for (const entry of entries) {
    if (entry.status !== "fulfilled") continue;
    const value = entry.value;
    if (Array.isArray(value) && typeof value[0] === "string") {
      live[value[0] as MetricId] = value[1] as number;
    } else if (Array.isArray(value)) {
      for (const pair of value as Array<readonly [MetricId, number]>) {
        live[pair[0]] = pair[1];
      }
    }
  }
  return live;
}

let metricsPromise: Promise<MetricsMap> | null = null;

export async function getMetrics(): Promise<MetricsMap> {
  if (!metricsPromise) {
    metricsPromise = fetchLiveMetrics()
      .then((live) => {
        const merged = { ...METRIC_FALLBACKS, ...live };
        merged["clawhub:total-downloads"] =
          merged["clawhub:ai-testcase-generator"] +
          merged["clawhub:trading-assistant-core"];
        return merged;
      })
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
