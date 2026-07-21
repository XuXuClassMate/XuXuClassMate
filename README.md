# XuXuClassMate

Bilingual personal site for **XuXuClassMate / 旭旭同学** — QA engineer building AI testing tools, OpenClaw agent skills, and reusable Docker test environments.

- Site: https://www.xuxuclassmate.com
- Stack: [Astro](https://astro.build) 7 (static) → Cloudflare Pages

## Requirements

- Node.js 22+

## Scripts

```bash
npm ci
npm run dev          # local dev server
npm run build        # generate sitemap + Astro build
npm run preview      # preview production build
npm run check        # Astro type check
npm run lint         # ESLint
npm test             # Vitest unit tests
npm run test:e2e     # Playwright smoke tests (builds first)
npm run deploy       # build + wrangler pages deploy
```

## Project layout

- `src/content/` — EN/ZH copy and case studies
- `src/components/` — page shells and shared UI
- `src/pages/` — routes (`/`, `/en/*`, `/zh/*`, case studies)
- `public/_redirects` / `public/_headers` — Cloudflare Pages routing & security headers
- `public/fonts/` — self-hosted Outfit + IBM Plex Mono

## Deploy

```bash
npm run deploy
```

Uses `wrangler.jsonc` (`pages_build_output_dir: dist`). Ensure Cloudflare credentials are configured for Wrangler.

## License

MIT — see [LICENSE](LICENSE).
