type PagesContext = {
  request: Request;
};

export type GeoLang = "en" | "zh";

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

export function regionDisplayName(country: string, lang: GeoLang): string {
  const locale = lang === "zh" ? "zh-Hans" : "en";
  try {
    return new Intl.DisplayNames([locale], { type: "region" }).of(country) ?? country;
  } catch {
    return country;
  }
}

function parseLangParam(request: Request): GeoLang | null {
  const raw = new URL(request.url).searchParams.get("lang")?.trim().toLowerCase();
  if (raw === "zh" || raw === "en") return raw;
  return null;
}

function langFromAcceptLanguage(request: Request): GeoLang {
  const accept = request.headers.get("Accept-Language") || "en";
  const primary = accept.split(",")[0]?.trim().toLowerCase() || "en";
  if (primary.startsWith("zh")) return "zh";
  return "en";
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

  const names = {
    en: regionDisplayName(country, "en"),
    zh: regionDisplayName(country, "zh"),
  };

  const langParam = parseLangParam(context.request);
  const name = langParam ? names[langParam] : names[langFromAcceptLanguage(context.request)];

  return Response.json({ country, names, name }, { headers: jsonHeaders });
}
