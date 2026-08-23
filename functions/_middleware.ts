type MiddlewareContext = {
  request: Request;
  next: () => Promise<Response>;
};

const EN_HOME_ALIASES = new Set(["/en", "/en/", "/en/index.html"]);

export async function onRequest(context: MiddlewareContext): Promise<Response> {
  const { pathname } = new URL(context.request.url);

  if (EN_HOME_ALIASES.has(pathname)) {
    const target = new URL("/", context.request.url);
    return Response.redirect(target.toString(), 301);
  }

  return context.next();
}
