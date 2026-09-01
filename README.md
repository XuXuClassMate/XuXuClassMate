# XuXuClassMate

Bilingual personal site and engineering portfolio for **XuXuClassMate** — QA Engineer / SDET focused on AI testing, test automation, Docker test infrastructure, and OpenClaw agent skills.

**Live:** [www.xuxuclassmate.com](https://www.xuxuclassmate.com) · English `/en/*` · 中文 `/zh/*`

[![Docker Hub stats](https://docker-hub-pull-counter.vercel.app/api/docker-stats?username=xuxuclassmate)](https://hub.docker.com/u/xuxuclassmate)

---

## What this is

This repository powers the public site at **xuxuclassmate.com**. It is not a single app demo — it is a content-driven portfolio that ties together shipped tools, case studies, and long-form engineering notes under one brand.

The site is built for people who care about **how QA and SDET work actually ships**: multimodal AI test generation, enterprise database Docker images, Playwright E2E, API automation, performance testing, and agent skills on ClawHub.

### Highlights

- **Bilingual by design** — parallel EN/ZH routes, shared project catalog, locale-aware metadata and hreflang
- **Live proof metrics** — Docker Hub pulls and ClawHub skill downloads refresh on the homepage via `/api/metrics`
- **Project catalog** — grouped showcase (Quality Engineering · Developer Infrastructure · AI / Agent) with deep-dive case study pages
- **Engineering notes** — field guides on Docker testing, Playwright, Locust, AI agents in QA, and ClawHub skill shipping
- **Static-first** — Astro 7 static output, self-hosted fonts, sitemap generation, security headers, and redirect rules baked in
- **Tested** — Vitest unit tests and Playwright smoke tests on critical routes and redirects

---

## Featured work (on the site)

| Area | Projects |
|------|----------|
| **Quality Engineering** | [AI Test Case Generator](https://github.com/InnoNestX/testcase-generator) · [Test DB Docker Suite](https://hub.docker.com/u/xuxuclassmate) · [Java API Automation](https://github.com/XuXuClassMate/My_Test_JAProject) · [Full-stack E2E](https://github.com/XuXuClassMate) |
| **Developer Infrastructure** | [GlobalPulse](https://github.com/InnoNestX/GlobalPulse) · [Custom Mail](https://github.com/InnoNestX/Custom-Mail) · [Docker Hub API Gateway](https://github.com/InnoNestX/docker-hub-pull-counter) |
| **AI / Agent** | [Trading Assistant Core](https://github.com/InnoNestX/trading-assistant) · OpenClaw skills on [ClawHub](https://clawhub.ai/xuxuclassmate) |

Related live services: [GlobalPulse](https://pulse.xuxuclassmate.com/) · [Custom Mail](https://mail.xuxuclassmate.com)

Open-source org: [InnoNestX on GitHub](https://github.com/InnoNestX)

---

## Tech stack

- [Astro](https://astro.build) 7 — static site generation
- TypeScript — content types, metrics helpers, shared catalog
- Cloudflare Pages — hosting, edge middleware, `/api/metrics` function
- Vitest + Playwright — unit and smoke coverage
- Self-hosted [Outfit](https://fonts.google.com/specimen/Outfit) + [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)

---

## Local development

**Requirements:** Node.js 22+

```bash
npm ci
npm run dev          # local dev server
npm run build        # generate sitemap + Astro build
npm run preview      # preview production build
npm run check        # Astro type check
npm run lint         # ESLint
npm test             # Vitest unit tests
npm run test:e2e     # Playwright smoke tests (builds first)
npm run check:links  # smoke-check critical external URLs
npm run images       # compress large JPEGs + emit WebP (if targets set)
```

Homepage metrics are embedded at build time, then refreshed in the browser via `GET /api/metrics` (short browser cache, longer edge cache, stale fallback on upstream failure). ClawHub totals aggregate every public skill under the `xuxuclassmate` namespace.

---

## Repository layout

```
src/content/          EN/ZH copy, projects catalog, case studies, engineering notes
src/components/       page shells and shared UI
src/pages/            routes (/ , /en/* , /zh/* , work, blog, notes)
src/styles/           modular CSS (base, hero, home, work, learn, case, notes, …)
src/scripts/          client-side theme, nav, metrics count-up
functions/            Cloudflare Pages Functions (middleware, /api/metrics)
public/               static assets, _redirects, _headers, fonts
scripts/              sitemap generation, link checks, image tooling
e2e/                  Playwright smoke specs
```

---

## Connect

- GitHub: [@XuXuClassMate](https://github.com/XuXuClassMate)
- Docker Hub: [@xuxuclassmate](https://hub.docker.com/u/xuxuclassmate)
- Medium: [@xuxuclassmate](https://medium.com/@xuxuclassmate)
- ClawHub: [xuxuclassmate](https://clawhub.ai/xuxuclassmate)
- Email: mail@xuxuclassmate.com

---

## License

MIT — see [LICENSE](LICENSE).
