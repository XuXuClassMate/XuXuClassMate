type MiddlewareContext = {
  request: Request;
  next: () => Promise<Response>;
};

const PRIMARY_HOST = "www.xuxuclassmate.com";

/** Hostnames that should permanently collapse onto www. */
const LEGACY_HOSTS = new Set(["old.xuxuclassmate.com", "xuxuclassmate.com"]);

/** Probe / retired paths — 410 so Search Console stops classifying them as redirects. */
const GONE_PATHS = new Set([
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

function gone(): Response {
  return new Response("Gone", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}

export async function onRequest(context: MiddlewareContext): Promise<Response> {
  const url = new URL(context.request.url);
  const { pathname, hostname } = url;

  if (GONE_PATHS.has(pathname)) {
    return gone();
  }

  // Collapse legacy hosts (old. / apex) onto the www canonical host.
  if (LEGACY_HOSTS.has(hostname)) {
    const target = new URL(url.toString());
    target.protocol = "https:";
    target.hostname = PRIMARY_HOST;
    return Response.redirect(target.toString(), 301);
  }

  return context.next();
}
