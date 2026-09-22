# M L Enterprises LLP — website

Static marketing site for **M L Enterprises LLP**, a Rewari (Haryana) civil construction firm working on
railway and road infrastructure across India since 1972.

Live at **https://akhil-ig.github.io/ml-enterprises/**

## Stack

- **Astro 5** — static HTML output, one file per route (good SEO, no client framework needed)
- **Tailwind CSS v4** via `@tailwindcss/vite` — design tokens live in `src/styles/global.css` under `@theme`,
  there is no `tailwind.config` file
- **GSAP + ScrollTrigger** — scroll reveals (`[data-reveal]`) and stat counters (`[data-count]`), wired once in
  `src/layouts/BaseLayout.astro`
- **@astrojs/sitemap** — generates `sitemap-index.xml` at build

## Commands

```bash
npm install
npm run dev      # http://localhost:4321/ml-enterprises/
npm run build    # -> dist/
npm run preview
```

## Content

All site content lives in `src/data/` — edit there, not in the components:

| File | Holds |
| --- | --- |
| `company.ts` | Name, address, phones, email, stats, about copy, capabilities |
| `services.ts` | The 7 execution capabilities |
| `projects.ts` | All 52 projects (9 in hand, 43 completed) |
| `clients.ts` | Client list grouped by sector |

**Contract values are deliberately not published.** They exist in the company profile PDF but the site shows
only scope, client, location and status.

## Pages

`/` · `/about` · `/services` · `/projects` (filter by status, work type, state + free text search) ·
`/clients` · `/contact`

There is no contact form — the site is static, so contact is via click-to-call, WhatsApp and mailto.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

### Moving to a custom domain

The client already uses the `mlenterprises.net` domain for email. To point the site there:

1. Add `public/CNAME` containing `mlenterprises.net`
2. In `.github/workflows/deploy.yml`, set `SITE_URL: https://mlenterprises.net` and `BASE_PATH: /`
3. Update the `Sitemap:` line in `public/robots.txt`
4. Set the custom domain in the repository's Pages settings and add the DNS records GitHub shows

`astro.config.mjs` reads both values from the environment, so no other code change is needed.

## Assets

`public/projects/*.webp` are the four real site photographs extracted from the company profile PDF
(completed RUB, RUB under construction, ICD container yard, box culvert construction). `public/logo.svg`
is the ML monogram rebuilt as clean vector from the PDF's own path data.

### Still worth getting from the client

- Higher-resolution project photographs (the four we have came out of a print PDF)
- Official client logo files, if a logo wall is wanted — the current clients page is typographic because the
  logos embedded in the profile PDF are ~200 px wide with mismatched backgrounds
- Confirmation that naming these clients publicly is fine
- GST / registration numbers and any ISO certifications for the footer
