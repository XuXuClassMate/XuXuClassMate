/** ClawHub owner-scoped download metrics. */

export const CLAWHUB_OWNER_HANDLE = "xuxuclassmate";
export const CLAWHUB_SITE_ORIGIN = "https://clawhub.ai";

/**
 * Public Convex deployment used by clawhub.ai for publisher catalog queries.
 * Prefer this over HTML OG tags — it lists every published skill under the handle.
 */
export const CLAWHUB_CONVEX_QUERY_URL =
  "https://wry-manatee-359.convex.cloud/api/query";

/** Featured skills still exposed as individual homepage / case-study metrics. */
export const CLAWHUB_FEATURED_SKILLS = {
  "ai-testcase-generator": {
    slug: "ai-testcase-generator",
    url: `${CLAWHUB_SITE_ORIGIN}/${CLAWHUB_OWNER_HANDLE}/ai-testcase-generator`,
  },
  "trading-assistant-core": {
    slug: "trading-assistant-core",
    url: `${CLAWHUB_SITE_ORIGIN}/${CLAWHUB_OWNER_HANDLE}/trading-assistant-core`,
  },
  "custom-mail": {
    slug: "custom-mail",
    url: `${CLAWHUB_SITE_ORIGIN}/${CLAWHUB_OWNER_HANDLE}/custom-mail`,
  },
} as const;

export type ClawhubFeaturedSlug = keyof typeof CLAWHUB_FEATURED_SKILLS;

export type ClawhubOwnerMetrics = {
  totalDownloads: number;
  bySlug: Record<string, number>;
  skillCount: number;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

function slugFromHref(href: unknown, owner: string): string | null {
  if (typeof href !== "string" || !href) return null;
  const normalized = href.replace(/^https?:\/\/clawhub\.ai/i, "");
  const match = normalized.match(
    new RegExp(`^/${owner}/(?:skills/)?([a-z0-9][a-z0-9-]*)$`, "i"),
  );
  return match?.[1]?.toLowerCase() ?? null;
}

/** Parse `downloads=N` from clawhub profile OG / Twitter image URLs. */
export function parseProfileOgDownloads(html: string): number | null {
  const match = html.match(/downloads=(\d+)/i);
  if (!match) return null;
  const value = Number(match[1]);
  return Number.isFinite(value) ? value : null;
}

export function parseSkillDownloadsPayload(payload: unknown): number | null {
  const root = asRecord(payload);
  const skill = asRecord(root?.skill);
  const stats = asRecord(skill?.stats);
  const downloads = stats?.downloads;
  return typeof downloads === "number" && Number.isFinite(downloads)
    ? downloads
    : null;
}

/**
 * Parse Convex `publishers:listPublishedPage` result into per-slug downloads.
 */
export function parsePublishedPage(
  payload: unknown,
  owner: string = CLAWHUB_OWNER_HANDLE,
): { items: Array<{ slug: string; downloads: number }>; isDone: boolean; continueCursor: string | null } | null {
  const root = asRecord(payload);
  if (!root) return null;
  const value = asRecord(root.value) ?? root;
  const page = value.page;
  if (!Array.isArray(page)) return null;

  const items: Array<{ slug: string; downloads: number }> = [];
  for (const entry of page) {
    const row = asRecord(entry);
    if (!row) continue;
    if (row.kind != null && row.kind !== "skill") continue;
    const downloads = row.downloads;
    if (typeof downloads !== "number" || !Number.isFinite(downloads)) continue;
    const slug =
      slugFromHref(row.href, owner) ??
      (typeof row.slug === "string" ? row.slug.toLowerCase() : null);
    if (!slug) continue;
    items.push({ slug, downloads });
  }

  const continueCursor =
    typeof value.continueCursor === "string" && value.continueCursor
      ? value.continueCursor
      : null;
  const isDone = value.isDone === true || !continueCursor;

  return { items, isDone, continueCursor };
}

export function summarizeOwnerDownloads(
  items: Array<{ slug: string; downloads: number }>,
): ClawhubOwnerMetrics {
  const bySlug: Record<string, number> = {};
  let totalDownloads = 0;
  for (const item of items) {
    bySlug[item.slug] = (bySlug[item.slug] ?? 0) + item.downloads;
    totalDownloads += item.downloads;
  }
  return {
    totalDownloads,
    bySlug,
    skillCount: Object.keys(bySlug).length,
  };
}

async function convexQuery(
  path: string,
  args: Record<string, unknown>,
  timeoutMs = 8000,
): Promise<unknown | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(CLAWHUB_CONVEX_QUERY_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path, args: [args], format: "json" }),
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Live catalog of every public skill under the owner handle (paginated). */
export async function fetchOwnerPublishedSkills(
  owner: string = CLAWHUB_OWNER_HANDLE,
): Promise<ClawhubOwnerMetrics | null> {
  const collected: Array<{ slug: string; downloads: number }> = [];
  let cursor: string | null = null;

  for (let page = 0; page < 20; page += 1) {
    const payload = await convexQuery("publishers:listPublishedPage", {
      handle: owner,
      kind: "skill",
      sort: "downloads",
      paginationOpts: {
        numItems: 50,
        cursor,
      },
    });
    const parsed = parsePublishedPage(payload, owner);
    if (!parsed) return collected.length ? summarizeOwnerDownloads(collected) : null;
    collected.push(...parsed.items);
    if (parsed.isDone) break;
    cursor = parsed.continueCursor;
    if (!cursor) break;
  }

  return collected.length ? summarizeOwnerDownloads(collected) : null;
}

export async function fetchProfileOgDownloads(
  owner: string = CLAWHUB_OWNER_HANDLE,
): Promise<number | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(`${CLAWHUB_SITE_ORIGIN}/${owner}`, {
      signal: controller.signal,
      headers: { Accept: "text/html" },
    });
    if (!response.ok) return null;
    return parseProfileOgDownloads(await response.text());
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchSkillDownloads(
  slug: string,
  owner: string = CLAWHUB_OWNER_HANDLE,
): Promise<number | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const url = new URL(`${CLAWHUB_SITE_ORIGIN}/api/v1/skills/${encodeURIComponent(slug)}`);
    url.searchParams.set("ownerHandle", owner);
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return null;
    return parseSkillDownloadsPayload(await response.json());
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Owner-wide ClawHub downloads: catalog sum first, profile OG fallback.
 * Featured slugs are filled from the catalog when present, else skill API.
 */
export async function fetchOwnerClawhubMetrics(
  owner: string = CLAWHUB_OWNER_HANDLE,
): Promise<Partial<ClawhubOwnerMetrics> & { bySlug: Record<string, number> }> {
  const catalog = await fetchOwnerPublishedSkills(owner);
  const bySlug: Record<string, number> = { ...(catalog?.bySlug ?? {}) };

  const featuredSlugs = Object.keys(CLAWHUB_FEATURED_SKILLS) as ClawhubFeaturedSlug[];
  await Promise.all(
    featuredSlugs.map(async (slug) => {
      if (bySlug[slug] != null) return;
      const value = await fetchSkillDownloads(slug, owner);
      if (value != null) bySlug[slug] = value;
    }),
  );

  let totalDownloads = catalog?.totalDownloads ?? null;
  if (totalDownloads == null) {
    totalDownloads = await fetchProfileOgDownloads(owner);
  }
  if (totalDownloads == null) {
    const values = Object.values(bySlug);
    totalDownloads = values.length ? values.reduce((sum, n) => sum + n, 0) : null;
  }

  return {
    ...(totalDownloads != null ? { totalDownloads } : {}),
    ...(catalog?.skillCount != null ? { skillCount: catalog.skillCount } : {}),
    bySlug,
  };
}
