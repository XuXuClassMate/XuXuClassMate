type PagesContext = {
  request: Request;
};

export async function onRequest(context: PagesContext): Promise<Response> {
  const country = context.request.headers.get("CF-IPCountry")?.trim() || "";
  const accept = context.request.headers.get("Accept-Language") || "en";
  const locale = accept.split(",")[0]?.trim() || "en";

  if (!country || country === "XX" || country === "T1") {
    return Response.json(
      { country: null, name: null },
      {
        headers: {
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
        "Cache-Control": "private, no-store",
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
}
