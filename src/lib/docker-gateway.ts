/** Sole source for Docker pull / repo stats on this site. */
export const DOCKER_GATEWAY_ORIGIN =
  "https://docker-hub-pull-counter.vercel.app";

export const DOCKER_NAMESPACE = "xuxuclassmate";

export const DOCKER_METRIC_REPOS = [
  "dameng",
  "highgo",
  "kingbase",
  "tidb",
  "testcase-generator",
] as const;

export type DockerMetricRepo = (typeof DOCKER_METRIC_REPOS)[number];

export function dockerUserStatsUrl(
  username: string = DOCKER_NAMESPACE,
): string {
  return `${DOCKER_GATEWAY_ORIGIN}/api/user/stats?username=${encodeURIComponent(username)}`;
}

export function dockerTopReposUrl(
  username: string = DOCKER_NAMESPACE,
  limit = 20,
): string {
  return `${DOCKER_GATEWAY_ORIGIN}/api/user/top-repos?username=${encodeURIComponent(username)}&limit=${limit}`;
}

export function dockerRepoDetailsUrl(
  repo: string,
  namespace: string = DOCKER_NAMESPACE,
): string {
  return `${DOCKER_GATEWAY_ORIGIN}/api/repo/details?namespace=${encodeURIComponent(namespace)}&repo=${encodeURIComponent(repo)}`;
}

export function dockerStatsCardUrl(
  username: string = DOCKER_NAMESPACE,
  repo?: string,
): string {
  const base = `${DOCKER_GATEWAY_ORIGIN}/api/docker-stats?username=${encodeURIComponent(username)}`;
  return repo ? `${base}&repo=${encodeURIComponent(repo)}` : base;
}

export function dockerGatewayCallsUrl(): string {
  return `${DOCKER_GATEWAY_ORIGIN}/api/stats`;
}

/** Parse `/api/user/top-repos` into repo → pullCount. */
export function parseTopReposPulls(
  payload: unknown,
): Partial<Record<DockerMetricRepo, number>> {
  if (!payload || typeof payload !== "object") return {};
  const repositories = (payload as { repositories?: unknown }).repositories;
  if (!Array.isArray(repositories)) return {};

  const wanted = new Set<string>(DOCKER_METRIC_REPOS);
  const out: Partial<Record<DockerMetricRepo, number>> = {};

  for (const entry of repositories) {
    if (!entry || typeof entry !== "object") continue;
    const name = (entry as { name?: unknown }).name;
    const pullCount = (entry as { pullCount?: unknown }).pullCount;
    if (typeof name !== "string" || !wanted.has(name)) continue;
    if (typeof pullCount !== "number" || !Number.isFinite(pullCount)) continue;
    out[name as DockerMetricRepo] = pullCount;
  }

  return out;
}

export function parseUserStats(payload: unknown): {
  totalPulls: number | null;
  repositoryCount: number | null;
} {
  if (!payload || typeof payload !== "object") {
    return { totalPulls: null, repositoryCount: null };
  }
  const data = payload as {
    totalPulls?: unknown;
    repositoryCount?: unknown;
  };
  return {
    totalPulls:
      typeof data.totalPulls === "number" && Number.isFinite(data.totalPulls)
        ? data.totalPulls
        : null,
    repositoryCount:
      typeof data.repositoryCount === "number" &&
      Number.isFinite(data.repositoryCount)
        ? data.repositoryCount
        : null,
  };
}
