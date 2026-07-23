type MetricsPayload = {
  "clawhub:ai-testcase-generator": number;
  "clawhub:trading-assistant-core": number;
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

const GATEWAY_ORIGIN = "https://docker-hub-pull-counter.vercel.app";
const CACHE_TTL_SECONDS = 600;
const LAST_GOOD_URL = "https://metrics.internal/last-good";
const NPM_TESTCASE = {
  name: "@classmatexuxu/testcase-generator",
  since: "2026-04-02",
} as const;

async function readDownloads(slug: string): Promise<number | null> {
  const response = await fetch(`https://clawhub.ai/api/v1/skills/${slug}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) return null;
  const data = (await response.json()) as {
    skill?: { stats?: { downloads?: number } };
  };
  const value = data.skill?.stats?.downloads;
  return typeof value === "number" ? value : null;
}

async function readPulls(repo: string): Promise<number | null> {
  const response = await fetch(
    `https://hub.docker.com/v2/repositories/xuxuclassmate/${repo}/`,
    { headers: { Accept: "application/json" } },
  );
  if (!response.ok) return null;
  const data = (await response.json()) as { pull_count?: number };
  return typeof data.pull_count === "number" ? data.pull_count : null;
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

async function readGatewayUserStats(): Promise<{
  pulls: number | null;
  repos: number | null;
}> {
  const response = await fetch(
    `${GATEWAY_ORIGIN}/api/user/stats?username=xuxuclassmate`,
    { headers: { Accept: "application/json" } },
  );
  if (!response.ok) return { pulls: null, repos: null };
  const data = (await response.json()) as {
    totalPulls?: number;
    repositoryCount?: number;
  };
  return {
    pulls: typeof data.totalPulls === "number" ? data.totalPulls : null,
    repos: typeof data.repositoryCount === "number" ? data.repositoryCount : null,
  };
}

async function readGatewayCalls(): Promise<number | null> {
  const response = await fetch(`${GATEWAY_ORIGIN}/api/stats`, {
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
  const [
    testcase,
    trading,
    dameng,
    highgo,
    kingbase,
    tidb,
    testcaseDocker,
    testcaseNpm,
    userStats,
    apiCalls,
  ] = await Promise.all([
    readDownloads("ai-testcase-generator"),
    readDownloads("trading-assistant-core"),
    readPulls("dameng"),
    readPulls("highgo"),
    readPulls("kingbase"),
    readPulls("tidb"),
    readPulls("testcase-generator"),
    readNpmDownloads(NPM_TESTCASE.name, NPM_TESTCASE.since),
    readGatewayUserStats(),
    readGatewayCalls(),
  ]);

  const liveHits = [
    testcase,
    trading,
    dameng,
    highgo,
    kingbase,
    tidb,
    testcaseDocker,
    testcaseNpm,
    userStats.pulls,
    userStats.repos,
    apiCalls,
  ].filter((value) => value != null).length;

  const testcaseValue = testcase ?? FALLBACKS["clawhub:ai-testcase-generator"];
  const tradingValue = trading ?? FALLBACKS["clawhub:trading-assistant-core"];

  return {
    liveHits,
    payload: {
      "clawhub:ai-testcase-generator": testcaseValue,
      "clawhub:trading-assistant-core": tradingValue,
      "clawhub:total-downloads": testcaseValue + tradingValue,
      "docker:dameng": dameng ?? FALLBACKS["docker:dameng"],
      "docker:highgo": highgo ?? FALLBACKS["docker:highgo"],
      "docker:kingbase": kingbase ?? FALLBACKS["docker:kingbase"],
      "docker:tidb": tidb ?? FALLBACKS["docker:tidb"],
      "docker:testcase-generator":
        testcaseDocker ?? FALLBACKS["docker:testcase-generator"],
      "docker:total-pulls":
        userStats.pulls ?? FALLBACKS["docker:total-pulls"],
      "docker:repo-count":
        userStats.repos ?? FALLBACKS["docker:repo-count"],
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
