import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import os from 'node:os';
import path from 'node:path';

export default defineConfig({
  site: 'https://cfu1.github.io',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
  vite: {
    // Keep Vite's cache out of the Dropbox-synced project folder; Dropbox/AV
    // file locks cause EBUSY stalls when Vite re-optimizes deps on dev restart.
    cacheDir: process.env.VITE_CACHE_DIR || path.join(os.tmpdir(), 'cfu-site-vite'),
  },
});
