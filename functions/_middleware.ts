type MiddlewareContext = {
  request: Request;
  next: () => Promise<Response>;
};

const PRIMARY_HOST = "www.xuxuclassmate.com";

/** Hostnames that should permanently collapse onto www. */
const LEGACY_HOSTS = new Set(["old.xuxuclassmate.com", "xuxuclassmate.com"]);

const EN_HOME_ALIASES = new Set(["/en", "/en/", "/en/index.html"]);

/** Probe / junk paths discovered in Search Console — always land on clean `/`. */
const JUNK_HOME_PATHS = new Set([
  "/index2",
  "/index2.html",
  "/index3",
  "/index3.html",
  "/s",
  "/s/",
]);

function redirectTo(originUrl: string, pathname: string, dropSearch = false): Response {
  const target = new URL(pathname, originUrl);
  if (dropSearch) target.search = "";
  return Response.redirect(target.toString(), 301);
}

export async function onRequest(context: MiddlewareContext): Promise<Response> {
  const url = new URL(context.request.url);
  const { pathname, hostname } = url;

  // Collapse legacy hosts (old. / apex) onto the www canonical host.
  if (LEGACY_HOSTS.has(hostname)) {
    const target = new URL(url.toString());
    target.protocol = "https:";
    target.hostname = PRIMARY_HOST;
    if (JUNK_HOME_PATHS.has(pathname) || EN_HOME_ALIASES.has(pathname)) {
      target.pathname = "/";
      target.search = "";
    }
    return Response.redirect(target.toString(), 301);
  }

  if (EN_HOME_ALIASES.has(pathname)) {
    return redirectTo(url.origin, "/", true);
  }

  // Drop junk query strings (e.g. /s?wd=…) so Google does not keep alternate URLs.
  if (JUNK_HOME_PATHS.has(pathname)) {
    return redirectTo(url.origin, "/", true);
  }

  return context.next();
}
