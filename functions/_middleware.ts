type MiddlewareContext = {
  request: Request;
  next: () => Promise<Response>;
};

const PRIMARY_HOST = "www.xuxuclassmate.com";

/** Hostnames that should permanently collapse onto www. */
const LEGACY_HOSTS = new Set(["old.xuxuclassmate.com", "xuxuclassmate.com"]);

/**
 * Probe / retired paths. HTTP 410 stays in Search Console as "Not found (404)"
 * and fails validation. A 200 with noindex leaves that bucket.
 */
const RETIRED_PATHS = new Set([
  "/index2",
  "/index2.html",
  "/index3",
  "/index3.html",
  "/s",
  "/s/",
  "/life.html",
  "/en/life",
  "/en/life.html",
  "/zh/life",
  "/zh/life.html",
]);

/** Extensionless aliases whose HTML canonical points at a different URL. */
const RENAMED_ALIASES = new Set([
  "/en/blog/domestic-db-docker-qa",
  "/zh/blog/domestic-db-docker-qa",
  "/en/experience",
  "/zh/experience",
  "/en/innonestx",
  "/zh/innonestx",
]);

function isAliasPath(pathname: string): boolean {
  if (pathname.endsWith(".html")) return true;
  if (pathname === "/en" || pathname === "/en/") return true;
  if (pathname === "/en/notes" || pathname.startsWith("/en/notes/")) return true;
  if (pathname === "/zh/notes" || pathname.startsWith("/zh/notes/")) return true;
  return RENAMED_ALIASES.has(pathname);
}

function retired(): Response {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="robots" content="noindex, nofollow" />
<title>Not available</title>
</head>
<body><p>This address is not available.</p></body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

/** Drop cross-URL canonicals so Google stops calling the response an alternate page. */
export function stripIndexingHints(html: string): string {
  let out = html.replace(
    /<meta\s+name=["']robots["']\s+content=["'][^"']*["']\s*\/?>/gi,
    '<meta name="robots" content="noindex, follow" />',
  );
  if (!/name=["']robots["']/i.test(out)) {
    out = out.replace(
      /<\/head>/i,
      '<meta name="robots" content="noindex, follow" /></head>',
    );
  }
  return out.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "");
}

async function asNoindex(response: Response): Promise<Response> {
  const headers = new Headers();
  const type = response.headers.get("content-type");
  if (type) headers.set("content-type", type);
  headers.set("X-Robots-Tag", "noindex, follow");
  headers.set("Cache-Control", "public, max-age=300");
  if (response.status !== 200 || !type?.includes("text/html")) {
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
  const html = stripIndexingHints(await response.text());
  return new Response(html, { status: 200, headers });
}

export async function onRequest(context: MiddlewareContext): Promise<Response> {
  const url = new URL(context.request.url);
  const { pathname, hostname } = url;

  if (RETIRED_PATHS.has(pathname)) {
    return retired();
  }

  // Serve the www document on legacy hosts without a 301, and mark it noindex.
  // http:// still 301s at the Cloudflare edge (Always Use HTTPS) before this runs.
  if (LEGACY_HOSTS.has(hostname)) {
    const target = new URL(url.toString());
    target.protocol = "https:";
    target.hostname = PRIMARY_HOST;
    const upstream = await fetch(target.toString(), {
      redirect: "manual",
      headers: {
        "User-Agent": context.request.headers.get("user-agent") ?? "Mozilla/5.0",
        Accept: context.request.headers.get("accept") ?? "text/html",
      },
    });
    return asNoindex(upstream);
  }

  const response = await context.next();
  if (isAliasPath(pathname) && response.status === 200) {
    return asNoindex(response);
  }
  return response;
}
