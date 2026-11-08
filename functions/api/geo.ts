type PagesContext = {
  request: Request;
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

export async function onRequest(context: PagesContext): Promise<Response> {
  const cors = corsHeaders(context.request);

  if (context.request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }

  const country = context.request.headers.get("CF-IPCountry")?.trim() || "";
  const accept = context.request.headers.get("Accept-Language") || "en";
  const locale = accept.split(",")[0]?.trim() || "en";

  if (!country || country === "XX" || country === "T1") {
    return Response.json(
      { country: null, name: null },
      {
        headers: {
          ...cors,
          "Cache-Control": "private, no-store",
          "Content-Type": "application/json; charset=utf-8",
        },
      },
    );
  }

  let name = country;
  try {
    const display = new Intl.DisplayNames([locale], { type: "region" });
    name = display.of(country) ?? country;
  } catch {
    name = country;
  }

  return Response.json(
    { country, name },
    {
      headers: {
        ...cors,
        "Cache-Control": "private, no-store",
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
}
