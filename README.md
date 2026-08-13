# XuXuClassMate

Bilingual personal site for **XuXuClassMate** — QA engineer building AI testing tools, OpenClaw agent skills, and reusable Docker test environments.

- Site: https://www.xuxuclassmate.com
- Pulse: https://pulse.xuxuclassmate.com/
- Stack: [Astro](https://astro.build) 7 (static) → Cloudflare Pages

[![Docker Hub stats](https://docker-hub-pull-counter.vercel.app/api/docker-stats?username=xuxuclassmate)](https://hub.docker.com/u/xuxuclassmate)

## Requirements

- Node.js 22+

## Scripts

```bash
npm ci
npm run dev          # local dev server
npm run build        # generate sitemap + Astro build
npm run preview      # preview production build (static only)
npm run check        # Astro type check
npm run lint         # ESLint
npm test             # Vitest unit tests
npm run test:e2e     # Playwright smoke tests (builds first)
npm run check:links  # smoke-check critical external URLs
npm run images       # compress life photos + emit WebP
npm run deploy       # build + wrangler pages deploy
```

Live metrics (ClawHub downloads / Docker Hub pulls) are embedded at build time, then refreshed on page load via `GET /api/metrics` (browser `max-age=60`, edge `s-maxage=600`, with last-good stale fallback).

## Project layout

- `src/content/` — EN/ZH copy, shared project catalog (`projects.ts`), case studies, and notes
- `src/components/` — page shells and shared UI
- `src/pages/` — routes (`/`, `/en/*`, `/zh/*`, case studies, notes)
- `src/styles/` — modular CSS (`base`, `hero`, `home`, `work`, `life`, `learn`, `case`, `notes`, …)
- `functions/api/metrics.ts` — live metrics endpoint for Cloudflare Pages
- `public/_redirects` / `public/_headers` — Cloudflare Pages routing & security headers
- `public/fonts/` — self-hosted Outfit + IBM Plex Mono

## Deploy

```bash
npm run deploy
```

Uses `wrangler.jsonc` (`pages_build_output_dir: dist`). Ensure Cloudflare credentials are configured for Wrangler.

## License

MIT — see [LICENSE](LICENSE).
