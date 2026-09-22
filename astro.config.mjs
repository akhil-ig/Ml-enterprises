// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Custom domain par shift karte waqt sirf yeh do env vars badalni hain
// (ya default values yahin edit kar dein): SITE_URL=https://mlenterprises.net BASE_PATH=/
const site = process.env.SITE_URL ?? 'https://akhil-ig.github.io';
const base = process.env.BASE_PATH ?? '/ml-enterprises';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
