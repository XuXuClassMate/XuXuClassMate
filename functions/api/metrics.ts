import {
  CLAWHUB_FEATURED_SKILLS,
  CLAWHUB_OWNER_HANDLE,
  fetchOwnerClawhubMetrics,
  fetchSkillDownloads,
} from "../lib/clawhub";
import {
  DOCKER_GATEWAY_ORIGIN,
  DOCKER_METRIC_REPOS,
  dockerGatewayCallsUrl,
  dockerTopReposUrl,
  dockerUserStatsUrl,
  parseTopReposPulls,
  parseUserStats,
  type DockerMetricRepo,
} from "../lib/docker-gateway";

type MetricsPayload = {
  "clawhub:ai-testcase-generator": number;
  "clawhub:trading-assistant-core": number;
  "clawhub:custom-mail": number;
  "clawhub:total-downloads": number;
  "docker:dameng": number;
  "docker:highgo": number;
  "docker:kingbase": number;
  "docker:tidb": number;
  "docker:testcase-generator": number;
  "docker:total-pulls": number;
  "docker:repo-count": number;
  "npm:testcase-generator": number;
  "api:gateway-calls": number;
  updatedAt: string;
};

const FALLBACKS: Omit<MetricsPayload, "updatedAt"> = {
  "clawhub:ai-testcase-generator": 868,
  "clawhub:trading-assistant-core": 1098,
  "clawhub:custom-mail": 95,
  "clawhub:total-downloads": 7301,
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

const CACHE_TTL_SECONDS = 600;
const LAST_GOOD_URL = "https://metrics.internal/last-good";
const NPM_TESTCASE = {
  name: "@classmatexuxu/testcase-generator",
  since: "2026-04-02",
} as const;

async function readDockerMetrics(): Promise<{
  repos: Partial<Record<DockerMetricRepo, number>>;
  totalPulls: number | null;
  repositoryCount: number | null;
}> {
  const [topReposResponse, userStatsResponse] = await Promise.all([
    fetch(dockerTopReposUrl(), { headers: { Accept: "application/json" } }),
    fetch(dockerUserStatsUrl(), { headers: { Accept: "application/json" } }),
  ]);

  const repos =
    topReposResponse.ok
      ? parseTopReposPulls(await topReposResponse.json())
      : {};
  const userStats = userStatsResponse.ok
    ? parseUserStats(await userStatsResponse.json())
    : { totalPulls: null, repositoryCount: null };

  return {
    repos,
    totalPulls: userStats.totalPulls,
    repositoryCount: userStats.repositoryCount,
  };
}

async function readNpmDownloads(
  name: string,
  since: string,
): Promise<number | null> {
  const end = new Date().toISOString().slice(0, 10);
  const response = await fetch(
    `https://api.npmjs.org/downloads/range/${since}:${end}/${encodeURIComponent(name)}`,
    { headers: { Accept: "application/json" } },
  );
  if (!response.ok) return null;
  const data = (await response.json()) as {
    downloads?: Array<{ downloads?: number }>;
  };
  if (!Array.isArray(data.downloads)) return null;
  return data.downloads.reduce((sum, day) => {
    const count = day.downloads;
    return typeof count === "number" && Number.isFinite(count)
      ? sum + count
      : sum;
  }, 0);
}

async function readGatewayCalls(): Promise<number | null> {
  const response = await fetch(dockerGatewayCallsUrl(), {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) return null;
  const data = (await response.json()) as { totalCalls?: number };
  return typeof data.totalCalls === "number" ? data.totalCalls : null;
}

type BuildResult = {
  payload: MetricsPayload;
  liveHits: number;
};

async function buildPayload(): Promise<BuildResult> {
  const [clawhub, docker, testcaseNpm, apiCalls] = await Promise.all([
    fetchOwnerClawhubMetrics(CLAWHUB_OWNER_HANDLE),
    readDockerMetrics(),
    readNpmDownloads(NPM_TESTCASE.name, NPM_TESTCASE.since),
    readGatewayCalls(),
  ]);

  const featuredSlugs = Object.keys(CLAWHUB_FEATURED_SKILLS) as Array<
    keyof typeof CLAWHUB_FEATURED_SKILLS
  >;
  const featuredEntries = await Promise.all(
    featuredSlugs.map(async (slug) => {
      const fromCatalog = clawhub.bySlug[slug];
      if (fromCatalog != null) return [slug, fromCatalog] as const;
      const live = await fetchSkillDownloads(slug);
      return [slug, live] as const;
    }),
  );
  const featuredBySlug = Object.fromEntries(featuredEntries) as Record<
    (typeof featuredSlugs)[number],
    number | null
  >;
  const featuredValues = featuredSlugs.map((slug) => featuredBySlug[slug]);

  const testcaseValue =
    featuredBySlug["ai-testcase-generator"] ??
    FALLBACKS["clawhub:ai-testcase-generator"];
  const tradingValue =
    featuredBySlug["trading-assistant-core"] ??
    FALLBACKS["clawhub:trading-assistant-core"];
  const customMailValue =
    featuredBySlug["custom-mail"] ?? FALLBACKS["clawhub:custom-mail"];
  const totalDownloads =
    clawhub.totalDownloads ??
    (featuredValues.every((v) => v != null)
      ? featuredValues.reduce((sum, n) => sum + (n ?? 0), 0)
      : FALLBACKS["clawhub:total-downloads"]);

  const liveHits = [
    clawhub.totalDownloads,
    ...featuredValues,
    ...DOCKER_METRIC_REPOS.map((repo) => docker.repos[repo]),
    docker.totalPulls,
    docker.repositoryCount,
    testcaseNpm,
    apiCalls,
  ].filter((value) => value != null).length;

  return {
    liveHits,
    payload: {
      "clawhub:ai-testcase-generator": testcaseValue,
      "clawhub:trading-assistant-core": tradingValue,
      "clawhub:custom-mail": customMailValue,
      "clawhub:total-downloads": totalDownloads,
      "docker:dameng": docker.repos.dameng ?? FALLBACKS["docker:dameng"],
      "docker:highgo": docker.repos.highgo ?? FALLBACKS["docker:highgo"],
      "docker:kingbase":
        docker.repos.kingbase ?? FALLBACKS["docker:kingbase"],
      "docker:tidb": docker.repos.tidb ?? FALLBACKS["docker:tidb"],
      "docker:testcase-generator":
        docker.repos["testcase-generator"] ??
        FALLBACKS["docker:testcase-generator"],
      "docker:total-pulls":
        docker.totalPulls ?? FALLBACKS["docker:total-pulls"],
      "docker:repo-count":
        docker.repositoryCount ?? FALLBACKS["docker:repo-count"],
      "npm:testcase-generator":
        testcaseNpm ?? FALLBACKS["npm:testcase-generator"],
      "api:gateway-calls": apiCalls ?? FALLBACKS["api:gateway-calls"],
      updatedAt: new Date().toISOString(),
    },
  };
}

function jsonResponse(
  payload: MetricsPayload,
  hit: boolean,
  stale = false,
): Response {
  return Response.json(payload, {
    headers: {
      "Cache-Control": `public, s-maxage=${CACHE_TTL_SECONDS}, max-age=60`,
      "Access-Control-Allow-Origin": "*",
      "X-Metrics-Cache": hit ? "HIT" : "MISS",
      "X-Metrics-Stale": stale ? "1" : "0",
      "X-Docker-Gateway": DOCKER_GATEWAY_ORIGIN,
    },
  });
}

type PagesContext = {
  request: Request;
  waitUntil: (promise: Promise<unknown>) => void;
};

function getCache(): Cache | null {
  try {
    const cacheStorage = caches as CacheStorage & { default?: Cache };
    return cacheStorage.default ?? null;
  } catch {
    return null;
  }
}

export async function onRequestGet(context: PagesContext): Promise<Response> {
  const cacheKey = new Request(new URL(context.request.url).toString(), {
    method: "GET",
  });
  const lastGoodKey = new Request(LAST_GOOD_URL, { method: "GET" });
  const cache = getCache();

  try {
    if (cache) {
      const cached = await cache.match(cacheKey);
      if (cached) {
        const headers = new Headers(cached.headers);
        headers.set("X-Metrics-Cache", "HIT");
        return new Response(cached.body, {
          status: cached.status,
          headers,
        });
      }
    }

    const { payload, liveHits } = await buildPayload();

    if (liveHits === 0 && cache) {
      const lastGood = await cache.match(lastGoodKey);
      if (lastGood) {
        const headers = new Headers(lastGood.headers);
        headers.set("X-Metrics-Cache", "MISS");
        headers.set("X-Metrics-Stale", "1");
        return new Response(lastGood.body, {
          status: lastGood.status,
          headers,
        });
      }
    }

    const response = jsonResponse(payload, false, liveHits === 0);
    if (cache) {
      context.waitUntil(
        Promise.all([
          cache.put(cacheKey, response.clone()),
          liveHits > 0
            ? cache.put(lastGoodKey, response.clone())
            : Promise.resolve(),
        ]),
      );
    }
    return response;
  } catch {
    if (cache) {
      const lastGood = await cache.match(lastGoodKey);
      if (lastGood) {
        const headers = new Headers(lastGood.headers);
        headers.set("X-Metrics-Cache", "MISS");
        headers.set("X-Metrics-Stale", "1");
        return new Response(lastGood.body, {
          status: lastGood.status,
          headers,
        });
      }
    }
    const { payload } = await buildPayload().catch(() => ({
      payload: {
        ...FALLBACKS,
        updatedAt: new Date().toISOString(),
      } satisfies MetricsPayload,
      liveHits: 0,
    }));
    return jsonResponse(payload, false, true);
  }
}
