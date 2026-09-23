# M L Enterprises LLP — website

Client project for **Akhilesh Chauhan**. Owner communicates in **Hinglish — reply in Hinglish**.

The end client is M L Enterprises LLP (Rewari, Haryana) — civil and PEB buildings, railway siding, OHE, yard
development, P-Way, electrical and fire fighting systems. **Established 2008, LLP since 2020.** Tagline
*Construct for Future*.

## Stack & commands

- Astro 5 + Tailwind CSS v4 (`@tailwindcss/vite` — tokens in `src/styles/global.css` under `@theme`, NO
  tailwind.config file) + GSAP ScrollTrigger + `@astrojs/sitemap`
- `npm run dev` → Astro serves on **4321** at `/Ml-enterprises/`
- `npm run build` → `dist/`
- All content lives in `src/data/` (`company.ts`, `leadership.ts`, `services.ts`, `projects.ts`, `clients.ts`,
  `gallery.ts`) — edit content there, not in components.

## Hard rules

- **Never publish contract values.** The profile PDF lists them for every package; the owner decided the site
  shows scope, client, location and status only.
- **No contact form** until the Hostinger backend exists. Contact is call / WhatsApp / mailto.
- Respect `prefers-reduced-motion` (wired in `BaseLayout.astro` and `global.css`).
- The site follows the **2026 profile**: founded 2008, not the 1972 history from the older profile. Do not
  reintroduce 1972 / "M/s. Sis Ram Bir Singh" unless the client confirms it.

## Design

Deliberately restrained — the audience is Adani, DP World, UltraTech and PSU procurement, so the brief is
trust and solidity, not the effect-heavy style of the owner's personal portfolio.

- Palette from the client's logo: red `#e21d26`, ink `#2a2927`, warm sand neutrals. Light corporate header,
  dark bands for emphasis, `bg-blueprint` grid texture instead of flat fills.
- Fonts: Saira Condensed (display, uppercase) + Inter (body)
- Thin red rules as section markers; a 1px red keyline closes every hero

## Astro gotchas hit on this repo

- Regex literals with `{n,}` quantifiers break the Astro template parser inside `{...}` expressions — keep
  them in the frontmatter or in `src/lib/`.
- `<script type="application/ld+json">` needs `is:inline`, otherwise Astro tries to bundle it as JS.
- TypeScript generics in a plain `<script>` tag fail esbuild — write those scripts as plain JS.
- A grid child holding a long uppercase heading needs `min-w-0`, else it blows out the mobile viewport.

## Verifying changes

`body` has `overflow-x: hidden`, so a width scan alone hides mobile blowouts — compare `scrollWidth` against
`documentElement.clientWidth` instead, and confirm `document.fonts.check(...)` before trusting a screenshot
(the webfont often fails to load through this sandbox's proxy and the fallback changes every measurement).

## Pending

1. **Career page** — apply with resume + admin panel to post jobs. Planned as PHP + MySQL on the client's
   Hostinger server, since the site will move there.
2. **Hostinger deploy** — production target; GitHub Pages stays as staging. Domain work is parked at the
   owner's request.
3. **Videos** — client will supply; plan is YouTube embeds, not self-hosted files.
4. **Partner photos** — `PartnerCard` shows a labelled placeholder; drop files into `public/team/` and set
   `photo` in `src/data/leadership.ts`.
5. **Vector logo** — current logo was keyed out of the profile PDF raster.
6. Certifications, and confirmation that client names can be shown publicly.
