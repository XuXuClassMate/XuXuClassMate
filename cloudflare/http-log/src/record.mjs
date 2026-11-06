const REDACTED = new Set([
  "cookie",
  "set-cookie",
  "authorization",
  "proxy-authorization",
  "cf-access-jwt-assertion",
]);
const URL_HEADERS = new Set(["referer", "location"]);
const MAX_HEADERS = 60;
const MAX_VALUE = 300;

export function requestPath(url) {
  const path = url.pathname || "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function headerValue(name, value) {
  const key = name.toLowerCase();
  if (REDACTED.has(key)) return "[redacted]";
  let next = String(value ?? "");
  if (URL_HEADERS.has(key)) next = next.split("?")[0]?.split("#")[0] ?? "";
  if (next.length > MAX_VALUE) next = `${next.slice(0, MAX_VALUE)}…`;
  return next;
}

export function splitHeaders(headers) {
  const client = [];
  const edge = [];
  for (const [name, value] of headers) {
    const key = name.toLowerCase();
    const row = [key, headerValue(key, value)];
    if (key.startsWith("cf-")) edge.push(row);
    else client.push(row);
    if (client.length + edge.length >= MAX_HEADERS) break;
  }
  return { client, edge };
}

export function responseHeaders(headers) {
  const rows = [];
  for (const [name, value] of headers) {
    rows.push([name.toLowerCase(), headerValue(name, value)]);
    if (rows.length >= MAX_HEADERS) break;
  }
  return rows;
}

export async function recordExchange(db, request, response) {
  if (!db) return;
  const url = new URL(request.url);
  const requestHeaders = splitHeaders(request.headers);
  const recordedResponse = responseHeaders(response.headers);
  await db
    .prepare(
      `INSERT INTO http_log (ts, host, method, path, status, protocol, request_headers, response_headers)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      new Date().toISOString(),
      url.hostname,
      request.method || "GET",
      requestPath(url),
      response.status || 0,
      request.cf?.httpProtocol || "",
      JSON.stringify(requestHeaders),
      JSON.stringify(recordedResponse),
    )
    .run();
  await db
    .prepare(
      `DELETE FROM http_log
       WHERE id NOT IN (SELECT id FROM http_log ORDER BY id DESC LIMIT 200)`,
    )
    .run();
}
