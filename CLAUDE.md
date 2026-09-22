# M L Enterprises LLP — website

Client project for **Akhilesh Chauhan**. Owner communicates in **Hinglish — reply in Hinglish**.

The end client is M L Enterprises LLP (Rewari, Haryana) — civil construction for railways, roadways, bridges
and rail-linked terminals, established 1972, formerly M/s. Sis Ram Bir Singh.

## Stack & commands

- Astro 5 + Tailwind CSS v4 (`@tailwindcss/vite` — tokens in `src/styles/global.css` under `@theme`, NO
  tailwind.config file) + GSAP ScrollTrigger + `@astrojs/sitemap`
- `npm run dev` → port 5173 is not used; Astro serves on **4321** at `/Ml-enterprises/`
- `npm run build` → `dist/`
- All content lives in `src/data/` (`company.ts`, `services.ts`, `projects.ts`, `clients.ts`) — edit content
  there, not in components.

## Hard rules

- **Never publish contract values.** The source profile PDF lists them; the owner explicitly decided the site
  shows scope, client, location and status only.
- **No contact form.** The site is static and the owner chose call / WhatsApp / mailto only. Don't add
  Formspree/Web3Forms unless he asks.
- Respect `prefers-reduced-motion` (wired in `BaseLayout.astro` and `global.css`).

## Design

Deliberately **not** the maximalist style of the owner's personal portfolio. This is a B2B infrastructure
contractor pitching to Adani, CONCOR, RVNL and IRCON — the brief is trust and solidity.

- Palette from the client's own profile: navy `#0a1733`/`#050d1f`, logo cyan `#00aeef`, red accent `#e31e24`,
  concrete neutrals
- Fonts: Barlow Condensed (display, uppercase) + Inter (body)
- Photography-led, heavy condensed headlines, thin red rules as section markers

## Astro gotchas hit on this repo

- Regex literals with `{n,}` quantifiers break the Astro template parser inside `{...}` expressions — keep
  them in the frontmatter or in `src/lib/`.
- `<script type="application/ld+json">` needs `is:inline`, otherwise Astro tries to bundle it as JS.
- TypeScript generics in a plain `<script>` tag fail esbuild — write those scripts as plain JS.

## Deployment

GitHub Pages via `.github/workflows/deploy.yml` on push to `main`. `SITE_URL` / `BASE_PATH` env vars in the
workflow control the base — see README for the `mlenterprises.net` custom-domain switch.

## Pending

1. Higher-resolution project photographs from the client (current four came out of the print PDF).
2. Official client logo files if a logo wall is wanted — clients page is typographic for now.
3. Confirm with the client that naming their clients publicly is fine.
4. GST / registration numbers and ISO certifications for the footer, if they want them shown.
