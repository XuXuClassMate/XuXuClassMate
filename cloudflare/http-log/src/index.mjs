import { recordExchange } from "./record.mjs";

export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request);
    if (env.LOGS) ctx.waitUntil(recordExchange(env.LOGS, request, response).catch(() => {}));
    return response;
  },
};
