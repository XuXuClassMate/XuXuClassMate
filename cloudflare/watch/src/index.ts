import { recordExchange } from "../../http-log/src/record.mjs";
import {
  buildDashboard,
  parseRange,
  seriesDimension,
  windowFor,
  type GroupRow,
  type RangeKey,
  type RecentRow,
  type ThreatRow,
} from "./transform";

interface LogDb {
  prepare(query: string): {
    bind(...values: unknown[]): {
      all<T>(): Promise<{ results?: T[] }>;
      run(): Promise<unknown>;
    };
  };
}

interface Env {
  ASSETS: { fetch(input: Request): Promise<Response> };
  CF_API_TOKEN: string;
  ZONE_ID: string;
  ALLOWED_EMAIL: string;
  LOGS?: LogDb;
}

type WaitUntil = { waitUntil(promise: Promise<unknown>): void };

type GqlData = {
  viewer?: { zones?: ZoneSlice[] };
};

type ZoneSlice = {
  series?: GroupRow[];
  hosts?: GroupRow[];
  countries?: GroupRow[];
  statuses?: GroupRow[];
  browsers?: GroupRow[];
  cache?: GroupRow[];
  paths?: GroupRow[];
  daily?: GroupRow[];
  visitors?: GroupRow[];
  recent?: RecentRow[];
  logs?: RecentRow[];
  threats?: ThreatRow[];
  actions?: GroupRow[];
  events?: ThreatRow[];
  secrets?: GroupRow[];
  repos?: GroupRow[];
  wordpress?: GroupRow[];
  php?: GroupRow[];
  admin?: GroupRow[];
  xmlrpc?: GroupRow[];
  phpmyadmin?: GroupRow[];
  actuator?: GroupRow[];
  aws?: GroupRow[];
  cgi?: GroupRow[];
};

const CACHE_VERSION = "9";
const PROBE_ALIASES = ["secrets", "repos", "wordpress", "php", "admin", "xmlrpc", "phpmyadmin", "actuator", "aws", "cgi"] as const;
const CACHE_SECONDS = 60;

export default {
  async fetch(request: Request, env: Env, ctx: WaitUntil): Promise<Response> {
    const response = await route(request, env, ctx);
    if (env.LOGS) ctx.waitUntil(recordExchange(env.LOGS, request, response).catch(() => {}));
    return response;
  },
};

async function route(request: Request, env: Env, ctx: WaitUntil): Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname === "/logout") return logout();
  if (url.pathname === "/api/dashboard") return dashboard(request, env, ctx);
  if (url.pathname === "/api/http") return httpLog(request, env);
  if (url.pathname.startsWith("/api/")) return json({ error: "没有这个接口" }, 404);
  return env.ASSETS.fetch(request);
}

async function httpLog(request: Request, env: Env): Promise<Response> {
  if (request.method !== "GET") return json({ error: "只接受 GET" }, 405);
  const denied = authorize(request, env);
  if (denied) return denied;
  if (!env.LOGS) return json({ entries: [] });
  const listed = await env.LOGS.prepare(
    `SELECT ts, host, method, path, status, protocol, request_headers, response_headers
     FROM http_log ORDER BY id DESC LIMIT 100`,
  ).bind().all<{
    ts: string;
    host: string;
    method: string;
    path: string;
    status: number;
    protocol: string;
    request_headers: string;
    response_headers: string;
  }>();
  const entries = (listed.results ?? []).map((row) => {
    const requestHeaders = parseHeaderGroups(row.request_headers);
    return {
      time: row.ts,
      host: row.host,
      method: row.method,
      path: row.path,
      status: row.status,
      protocol: row.protocol,
      request: requestHeaders.client,
      edge: requestHeaders.edge,
      response: parseHeaderRows(row.response_headers),
      sampled: false,
    };
  });
  return json({ entries });
}

function parseHeaderGroups(value: string): { client: [string, string][]; edge: [string, string][] } {
  try {
    const parsed = JSON.parse(value) as { client?: [string, string][]; edge?: [string, string][] };
    return { client: parsed.client ?? [], edge: parsed.edge ?? [] };
  } catch {
    return { client: [], edge: [] };
  }
}

function parseHeaderRows(value: string): [string, string][] {
  try {
    const parsed = JSON.parse(value) as [string, string][];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function logout(): Response {
  const headers = new Headers();
  headers.set("Location", "https://xuxuclassmate.cloudflareaccess.com/cdn-cgi/access/logout");
  headers.set("Cache-Control", "no-store");
  headers.append("Set-Cookie", "CF_Authorization=; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=0");
  headers.append("Set-Cookie", "CF_AppSession=; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=0");
  return new Response(null, { status: 302, headers });
}

async function dashboard(request: Request, env: Env, ctx: WaitUntil): Promise<Response> {
  if (request.method !== "GET") return json({ error: "只接受 GET" }, 405);
  const denied = authorize(request, env);
  if (denied) return denied;
  if (!env.CF_API_TOKEN || !env.ZONE_ID) {
    return json({ error: "分析凭据还没有配置" }, 503);
  }

  const range = parseRange(new URL(request.url).searchParams.get("range"));
  const cache = (caches as unknown as { default: Cache }).default;
  const cacheKey = new Request(`https://watch.xuxuclassmate.com/internal/${CACHE_VERSION}/${range}`);
  const cached = await cache.match(cacheKey);
  if (cached) {
    return json(await cached.json(), 200);
  }

  try {
    const payload = await loadDashboard(env, range);
    const response = json(payload, 200);
    ctx.waitUntil(
      cache.put(
        cacheKey,
        new Response(JSON.stringify(payload), {
          headers: { "Cache-Control": `public, max-age=${CACHE_SECONDS}` },
        }),
      ),
    );
    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "读取 Cloudflare 分析失败";
    return json({ error: message }, 502);
  }
}

function authorize(request: Request, env: Env): Response | null {
  const email = (request.headers.get("Cf-Access-Authenticated-User-Email") || "").trim().toLowerCase();
  const allowed = env.ALLOWED_EMAIL.split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
  if (!email || (allowed.length > 0 && !allowed.includes(email))) {
    return json({ error: "需要通过 Cloudflare Access 登录" }, 401);
  }
  return null;
}

async function loadDashboard(env: Env, range: RangeKey) {
  const now = new Date();
  const span = windowFor(range, now);
  const variables = {
    zoneTag: env.ZONE_ID,
    start: span.start,
    end: span.end,
    startDate: span.startDate,
    endDate: span.endDate,
  };
  const [overview, activity, security, requestLogs] = await Promise.all([
    graphql<GqlData>(env.CF_API_TOKEN, overviewQuery(seriesDimension(range)), variables),
    loadActivity(env.CF_API_TOKEN, variables),
    loadSecurity(env.CF_API_TOKEN, variables),
    loadRequestLogs(env.CF_API_TOKEN, variables),
  ]);
  const zone = overview.viewer?.zones?.[0];
  if (!zone) throw new Error("这个 Zone 没有返回分析数据");
  const activityZone = activity.data?.viewer?.zones?.[0];

  return buildDashboard({
    range,
    from: span.start,
    to: span.end,
    generatedAt: now.toISOString(),
    series: zone.series ?? [],
    hosts: zone.hosts ?? [],
    countries: zone.countries ?? [],
    statuses: zone.statuses ?? [],
    browsers: zone.browsers ?? [],
    cache: zone.cache ?? [],
    paths: zone.paths ?? [],
    daily: zone.daily ?? [],
    probes: security.probes,
    actions: security.actions,
    visitors: activityZone?.visitors ?? [],
    recent: activityZone?.recent ?? [],
    logs: requestLogs.logs,
    threats: security.events,
    activityError: [activity.error, requestLogs.error].filter(Boolean).join(" "),
    securityError: security.error,
  });
}

async function loadActivity(
  token: string,
  variables: Record<string, string>,
): Promise<{ data?: GqlData; error?: string }> {
  try {
    return { data: await graphql<GqlData>(token, activityQuery(true), variables) };
  } catch (error) {
    const message = error instanceof Error ? error.message : "访客明细读取失败";
    if (!/content type|contentType|unknown field/i.test(message)) {
      return { error: friendlyActivityError(message) };
    }
    try {
      return { data: await graphql<GqlData>(token, activityQuery(false), variables) };
    } catch (retryError) {
      const retryMessage = retryError instanceof Error ? retryError.message : message;
      return { error: friendlyActivityError(retryMessage) };
    }
  }
}

async function loadSecurity(
  token: string,
  variables: Record<string, string>,
): Promise<{ probes: GroupRow[]; actions: GroupRow[]; events: ThreatRow[]; error?: string }> {
  try {
    return packSecurity(await graphql<GqlData>(token, scanQuery(true), variables));
  } catch (error) {
    const message = error instanceof Error ? error.message : "扫描明细读取失败";
    try {
      return packSecurity(await graphql<GqlData>(token, scanQuery(false), variables));
    } catch (retryError) {
      const retryMessage = retryError instanceof Error ? retryError.message : message;
      return { probes: [], actions: [], events: [], error: friendlySecurityError(retryMessage) };
    }
  }
}

function packSecurity(data: GqlData): { probes: GroupRow[]; actions: GroupRow[]; events: ThreatRow[] } {
  const zone = data.viewer?.zones?.[0];
  const probes = PROBE_ALIASES.flatMap((alias) => zone?.[alias] ?? []);
  return {
    probes,
    actions: zone?.actions ?? [],
    events: zone?.events ?? [],
  };
}

function friendlySecurityError(message: string): string {
  if (/does not have access|authz/i.test(message)) {
    return "当前套餐读不到部分扫描字段，流量汇总仍然可用。";
  }
  return "扫描明细暂时没有读到，流量汇总仍然可用。";
}

async function loadRequestLogs(
  token: string,
  variables: Record<string, string>,
): Promise<{ logs: RecentRow[]; error?: string }> {
  try {
    const data = await graphql<GqlData>(token, logsQuery(), variables);
    return { logs: data.viewer?.zones?.[0]?.logs ?? [] };
  } catch (error) {
    const message = error instanceof Error ? error.message : "请求日志读取失败";
    console.error(message);
    return { logs: [], error: /does not have access|authz/i.test(message) ? "当前套餐读不到请求日志，流量汇总仍然可用。" : "请求日志暂时没有读到，流量汇总仍然可用。" };
  }
}

function logsQuery(): string {
  return `query WatchLogs($zoneTag: string, $start: Time, $end: Time) {
    viewer {
      zones(filter: { zoneTag: $zoneTag }) {
        logs: httpRequestsAdaptive(
          limit: 100
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball" }
          orderBy: [datetime_DESC]
        ) {
          datetime
          clientIP
          clientAsn
          clientASNDescription
          clientCountryName
          clientDeviceType
          clientRequestHTTPHost
          clientRequestPath
          clientRequestHTTPMethodName
          clientRequestScheme
          clientRequestHTTPProtocol
          clientSSLProtocol
          userAgent
          userAgentBrowser
          userAgentOS
          edgeResponseStatus
          edgeResponseContentTypeName
          originResponseStatus
          cacheStatus
          securityAction
          securitySource
        }
      }
    }
  }`;
}

function friendlyActivityError(message: string): string {
  if (/does not have access|authz/i.test(message)) {
    return "当前套餐读不到部分访客字段，流量汇总仍然可用。";
  }
  return "访客明细暂时没有读到，流量汇总仍然可用。";
}

async function graphql<T>(token: string, query: string, variables: Record<string, string>): Promise<T> {
  const response = await fetch("https://api.cloudflare.com/client/v4/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!response.ok) {
    throw new Error(`Cloudflare 分析接口返回 ${response.status}`);
  }
  const body = (await response.json()) as { data?: T; errors?: { message?: string }[] };
  if (body.errors?.length) {
    throw new Error(body.errors.map((item) => item.message || "GraphQL 错误").join(" "));
  }
  if (!body.data) throw new Error("Cloudflare 分析接口没有返回数据");
  return body.data;
}

function overviewQuery(seriesDim: "datetimeHour" | "date"): string {
  const order = seriesDim === "datetimeHour" ? "datetimeHour_ASC" : "date_ASC";
  return `query WatchOverview($zoneTag: string, $start: Time, $end: Time, $startDate: Date, $endDate: Date) {
    viewer {
      zones(filter: { zoneTag: $zoneTag }) {
        series: httpRequestsAdaptiveGroups(
          limit: 240
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball" }
          orderBy: [${order}]
        ) {
          count
          avg { sampleInterval }
          sum { edgeResponseBytes visits }
          dimensions { ${seriesDim} }
        }
        hosts: httpRequestsAdaptiveGroups(
          limit: 20
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball" }
          orderBy: [count_DESC]
        ) {
          count
          avg { sampleInterval }
          sum { edgeResponseBytes visits }
          dimensions { clientRequestHTTPHost }
        }
        countries: httpRequestsAdaptiveGroups(
          limit: 12
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball" }
          orderBy: [count_DESC]
        ) {
          count
          avg { sampleInterval }
          dimensions { clientCountryName }
        }
        statuses: httpRequestsAdaptiveGroups(
          limit: 12
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball" }
          orderBy: [count_DESC]
        ) {
          count
          avg { sampleInterval }
          dimensions { edgeResponseStatus }
        }
        browsers: httpRequestsAdaptiveGroups(
          limit: 8
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball" }
          orderBy: [count_DESC]
        ) {
          count
          avg { sampleInterval }
          dimensions { userAgentBrowser }
        }
        cache: httpRequestsAdaptiveGroups(
          limit: 10
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball" }
          orderBy: [count_DESC]
        ) {
          count
          avg { sampleInterval }
          dimensions { cacheStatus }
        }
        paths: httpRequestsAdaptiveGroups(
          limit: 20
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball" }
          orderBy: [count_DESC]
        ) {
          count
          avg { sampleInterval }
          dimensions { clientRequestHTTPHost clientRequestPath }
        }
        daily: httpRequests1dGroups(
          limit: 40
          filter: { date_geq: $startDate, date_leq: $endDate }
          orderBy: [date_ASC]
        ) {
          dimensions { date }
          sum { requests bytes cachedRequests threats pageViews }
          uniq { uniques }
        }
      }
    }
  }`;
}

function activityQuery(htmlOnly: boolean): string {
  const content = htmlOnly ? ', edgeResponseContentTypeName: "html"' : "";
  return `query WatchActivity($zoneTag: string, $start: Time, $end: Time) {
    viewer {
      zones(filter: { zoneTag: $zoneTag }) {
        visitors: httpRequestsAdaptiveGroups(
          limit: 30
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball" }
          orderBy: [count_DESC]
        ) {
          count
          avg { sampleInterval }
          sum { visits edgeResponseBytes }
          dimensions { clientIP clientCountryName userAgentBrowser userAgentOS clientDeviceType }
        }
        recent: httpRequestsAdaptive(
          limit: 40
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball"${content} }
          orderBy: [datetime_DESC]
        ) {
          datetime
          clientIP
          clientCountryName
          clientRequestHTTPHost
          clientRequestPath
          clientRequestHTTPMethodName
          edgeResponseStatus
          cacheStatus
          userAgentBrowser
          userAgentOS
          securityAction
          clientDeviceType
        }
      }
    }
  }`;
}

function scanQuery(includeEvents: boolean): string {
  const probes = [
    ["secrets", "%/.env%"],
    ["repos", "%/.git%"],
    ["wordpress", "%wp-%"],
    ["php", "%.php%"],
    ["admin", "%/admin%"],
    ["xmlrpc", "%xmlrpc%"],
    ["phpmyadmin", "%phpmyadmin%"],
    ["actuator", "%actuator%"],
    ["aws", "%/.aws%"],
    ["cgi", "%cgi-bin%"],
  ].map(([alias, pattern]) => `${alias}: httpRequestsAdaptiveGroups(
          limit: 25
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball", clientRequestPath_like: "${pattern}" }
          orderBy: [count_DESC]
        ) {
          count
          avg { sampleInterval }
          dimensions { clientRequestHTTPHost clientRequestPath }
        }`).join("\n");
  const events = includeEvents ? `
        events: firewallEventsAdaptive(
          limit: 40
          filter: { datetime_geq: $start, datetime_leq: $end, action_in: ["block", "challenge", "jschallenge", "managed_challenge"] }
          orderBy: [datetime_DESC]
        ) {
          datetime
          action
          source
          clientIP
          clientCountryName
          clientAsn
          clientRequestHTTPHost
          clientRequestPath
          clientRequestHTTPMethodName
          description
          edgeResponseStatus
        }` : "";
  return `query WatchScans($zoneTag: string, $start: Time, $end: Time) {
    viewer {
      zones(filter: { zoneTag: $zoneTag }) {
        ${probes}
        actions: httpRequestsAdaptiveGroups(
          limit: 40
          filter: { datetime_geq: $start, datetime_leq: $end, requestSource: "eyeball", securityAction_in: ["block", "challenge", "jschallenge", "managed_challenge"] }
          orderBy: [count_DESC]
        ) {
          count
          avg { sampleInterval }
          dimensions { clientRequestHTTPHost securityAction }
        }
        ${events}
      }
    }
  }`;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
      "X-Frame-Options": "DENY",
    },
  });
}
