type MetricsPayload = {
  "clawhub:ai-testcase-generator": number;
  "clawhub:trading-assistant-core": number;
  "docker:dameng": number;
  "docker:highgo": number;
  updatedAt: string;
};

const FALLBACKS: Omit<MetricsPayload, "updatedAt"> = {
  "clawhub:ai-testcase-generator": 703,
  "clawhub:trading-assistant-core": 907,
  "docker:dameng": 29793,
  "docker:highgo": 16871,
};

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

export async function onRequestGet(): Promise<Response> {
  const [testcase, trading, dameng, highgo] = await Promise.all([
    readDownloads("ai-testcase-generator"),
    readDownloads("trading-assistant-core"),
    readPulls("dameng"),
    readPulls("highgo"),
  ]);

  const payload: MetricsPayload = {
    "clawhub:ai-testcase-generator":
      testcase ?? FALLBACKS["clawhub:ai-testcase-generator"],
    "clawhub:trading-assistant-core":
      trading ?? FALLBACKS["clawhub:trading-assistant-core"],
    "docker:dameng": dameng ?? FALLBACKS["docker:dameng"],
    "docker:highgo": highgo ?? FALLBACKS["docker:highgo"],
    updatedAt: new Date().toISOString(),
  };

  return Response.json(payload, {
    headers: {
      // Always revalidate on visit/refresh so the site shows current installs.
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
