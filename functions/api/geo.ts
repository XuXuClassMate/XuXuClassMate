import { LOCALES } from "../../src/content/locales";
import type { Locale } from "../../src/content/types";

type PagesContext = {
  request: Request;
};

const INTL_LOCALE: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hans",
  es: "es",
  hi: "hi",
  ar: "ar",
  pt: "pt",
  fr: "fr",
  ru: "ru",
  ja: "ja",
  de: "de",
};

function corsHeaders(request: Request): HeadersInit {
  const origin = request.headers.get("Origin");
  if (!origin) return {};
  try {
    const url = new URL(origin);
    if (url.hostname === "xuxuclassmate.com" || url.hostname.endsWith(".xuxuclassmate.com")) {
      return {
        "Access-Control-Allow-Origin": origin,
        Vary: "Origin",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      };
    }
  } catch {
    /* ignore */
  }
  return {};
}

export function regionDisplayName(country: string, lang: Locale): string {
  try {
    return new Intl.DisplayNames([INTL_LOCALE[lang]], { type: "region" }).of(country) ?? country;
  } catch {
    return country;
  }
}

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function parseLangParam(request: Request): Locale | null {
  const raw = new URL(request.url).searchParams.get("lang")?.trim().toLowerCase() || "";
  return isLocale(raw) ? raw : null;
}

function langFromAcceptLanguage(request: Request): Locale {
  const accept = request.headers.get("Accept-Language") || "en";
  const primary = accept.split(",")[0]?.trim().toLowerCase() || "en";
  const code = primary.split("-")[0] || "en";
  if (code === "zh") return "zh";
  return isLocale(code) ? code : "en";
}

export async function onRequest(context: PagesContext): Promise<Response> {
  const cors = corsHeaders(context.request);

  if (context.request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }

  const country = context.request.headers.get("CF-IPCountry")?.trim() || "";

  const jsonHeaders = {
    ...cors,
    "Cache-Control": "private, no-store",
    "Content-Type": "application/json; charset=utf-8",
  };

  if (!country || country === "XX" || country === "T1") {
    return Response.json({ country: null, names: null, name: null }, { headers: jsonHeaders });
  }

  const names = Object.fromEntries(
    LOCALES.map((code) => [code, regionDisplayName(country, code)]),
  ) as Record<Locale, string>;

  const lang = parseLangParam(context.request) ?? langFromAcceptLanguage(context.request);

  return Response.json({ country, names, name: names[lang] }, { headers: jsonHeaders });
}
