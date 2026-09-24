# M L Enterprises LLP — website

Static marketing site for **M L Enterprises LLP** — a Rewari (Haryana) civil infrastructure contracting firm
working on civil and PEB buildings, railway siding, OHE, yard development, P-Way, electrical and fire fighting
systems. Established 2008, restructured as an LLP in 2020.

Tagline: *Construct for Future*

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
npm run dev      # http://localhost:4321/Ml-enterprises/
npm run build    # -> dist/
npm run preview
```

## Content

All site content lives in `src/data/` — edit there, not in the components:

| File | Holds |
| --- | --- |
| `company.ts` | Address, phones, emails, GSTIN, Udyam, stats, about copy, vision, mission, HSE and QA/QC policies, strengths |
| `leadership.ts` | The three LLP partners and their responsibilities |
| `services.ts` | The 8 disciplines |
| `projects.ts` | 41 projects (6 in hand, 35 completed) |
| `clients.ts` | Clients grouped by sector, plus the key-client and marquee lists |
| `gallery.ts` | The 30 site photographs with captions and categories |

**Contract values are deliberately not published.** They exist in the company profile PDF but the site shows
only scope, client, location and status.

## Pages

`/` · `/about` (vision, mission, partners, organisation chart, HSE and QA/QC policies) · `/services` ·
`/projects` (filter by status, work type, state + free text search) · `/gallery` (filter by category) ·
`/clients` · `/contact`

There is no contact form yet — the site is static, so contact is via click-to-call, WhatsApp and mailto.

## Brand

Taken from the logo in the 2026 company profile: red `#e21d26`, ink `#2a2927`, warm neutral greys.
Display type is Saira Condensed, body is Inter.

`public/brand/logo.png` is the logo for light backgrounds and `logo-knockout.png` the version for dark ones —
both were keyed out of the profile PDF's raster logo. **A vector original is still wanted from the client.**

## Assets

`public/gallery/*.webp` are 30 real site photographs extracted from the company profile.
`public/brand/org-chart.webp` is the organisation chart from the same document.

### Still needed from the client

- Vector logo file (AI / EPS / SVG / CDR)
- Photographs of the three partners — `PartnerCard` renders a labelled placeholder until then; drop the files
  into `public/team/` and set `photo` in `src/data/leadership.ts`
- Site videos (planned as YouTube embeds rather than self-hosted files)
- ISO or other certification copies
- Confirmation that naming the clients publicly is fine
- Confirmation of the company's founding year — an earlier profile said 1972 under a previous firm name, the
  current profile says 2008; the site follows the current profile

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`, which is the
staging/preview target. Production hosting is the client's own Hostinger server — that deploy is not wired up
yet.
