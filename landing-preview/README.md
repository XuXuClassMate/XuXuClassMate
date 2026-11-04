# Video landing preview

Branch: `feat/video-landing-home`

Static single-viewport landing that reuses **XuXuClassMate homepage copy**
(`portfolio-home.ts` EN) with the full-bleed video treatment. Does **not**
replace the Astro site until you say so.

## Preview

```bash
cd landing-preview
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

## Content mapping

| Landing slot | Source |
|---|---|
| Headline | `tagline` → Installable / Quality Engineering |
| Subhead | `description` |
| Trust pill | `roles` → QA Engineer · SDET · AI Testing |
| CTA | `ctaWork` → View Projects → `/en/work` |
| Stats | `achievements` (coverage / QPS / regression / response) |
| Nav | Home · Projects · AI Testing · Notes |
| GitHub | `connectGithub` |

## Assets

- `assets/logo.webp` — from `public/images/logo.svg`
- `fonts/GeistPixel-Circle.woff2` — Geist Pixel Circle fallback
- BubbledotICG-FinePos + Inter + Font Awesome via CDN
- Background MP4 — exact CloudFront URL from the design spec
