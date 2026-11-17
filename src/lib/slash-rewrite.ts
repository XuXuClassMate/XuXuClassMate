import { LOCALES } from "../content/locales";

const LOCALE_ROOTS = new Set<string>(LOCALES);

/**
 * Pages 308s a locale directory to its trailing-slash form, and a file-format
 * page with a trailing slash back to the extensionless URL. Those redirects
 * stay in Search Console as "Page with redirect". Rewrite them internally so
 * the original URL is HTTP 200.
 */
export function slashRewrite(pathname: string): string | null {
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_astro/") ||
    pathname.startsWith("/cdn-cgi/") ||
    pathname.startsWith("/images/")
  ) {
    return null;
  }
  if (pathname === "/" || pathname === "") return null;

  const parts = pathname.split("/").filter(Boolean);
  if (pathname.endsWith("/")) {
    if (parts.length === 1 && LOCALE_ROOTS.has(parts[0]!)) return null;
    const last = parts[parts.length - 1] ?? "";
    if (last.includes(".")) return null;
    return pathname.slice(0, -1);
  }
  if (parts.length === 1 && LOCALE_ROOTS.has(parts[0]!)) return `${pathname}/`;
  return null;
}
