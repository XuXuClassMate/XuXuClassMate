type MetricsPayload = {
  "clawhub:ai-testcase-generator": number;
  "clawhub:trading-assistant-core": number;
  "docker:dameng": number;
  "docker:highgo": number;
  "docker:kingbase": number;
  "docker:tidb": number;
  updatedAt: string;
};

const FALLBACKS: Omit<MetricsPayload, "updatedAt"> = {
  "clawhub:ai-testcase-generator": 703,
  "clawhub:trading-assistant-core": 907,
  "docker:dameng": 29793,
  "docker:highgo": 16871,
  "docker:kingbase": 1610,
  "docker:tidb": 941,
};

/** Edge cache TTL for live metrics (seconds). */
const CACHE_TTL_SECONDS = 600;

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

async function buildPayload(): Promise<MetricsPayload> {
  const [testcase, trading, dameng, highgo, kingbase, tidb] = await Promise.all([
    readDownloads("ai-testcase-generator"),
    readDownloads("trading-assistant-core"),
    readPulls("dameng"),
    readPulls("highgo"),
    readPulls("kingbase"),
    readPulls("tidb"),
  ]);

  return {
    "clawhub:ai-testcase-generator":
      testcase ?? FALLBACKS["clawhub:ai-testcase-generator"],
    "clawhub:trading-assistant-core":
      trading ?? FALLBACKS["clawhub:trading-assistant-core"],
    "docker:dameng": dameng ?? FALLBACKS["docker:dameng"],
    "docker:highgo": highgo ?? FALLBACKS["docker:highgo"],
    "docker:kingbase": kingbase ?? FALLBACKS["docker:kingbase"],
    "docker:tidb": tidb ?? FALLBACKS["docker:tidb"],
    updatedAt: new Date().toISOString(),
  };
}

function jsonResponse(payload: MetricsPayload, hit: boolean): Response {
  return Response.json(payload, {
    headers: {
      "Cache-Control": `public, s-maxage=${CACHE_TTL_SECONDS}, max-age=60`,
      "Access-Control-Allow-Origin": "*",
      "X-Metrics-Cache": hit ? "HIT" : "MISS",
    },
  });
}

type PagesContext = {
  request: Request;
  waitUntil: (promise: Promise<unknown>) => void;
};

export async function onRequestGet(context: PagesContext): Promise<Response> {
  const cacheKey = new Request(new URL(context.request.url).toString(), {
    method: "GET",
  });

  try {
    const cacheStorage = caches as CacheStorage & { default: Cache };
    const cache = cacheStorage.default;
    const cached = await cache.match(cacheKey);
    if (cached) {
      const headers = new Headers(cached.headers);
      headers.set("X-Metrics-Cache", "HIT");
      return new Response(cached.body, {
        status: cached.status,
        headers,
      });
    }

    const payload = await buildPayload();
    const response = jsonResponse(payload, false);
    context.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch {
    const payload = await buildPayload();
    return jsonResponse(payload, false);
  }
}
