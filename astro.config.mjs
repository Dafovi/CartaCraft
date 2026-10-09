import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://dafovi.github.io',
  base: process.env.SITE_BASE || '/CartaCraft/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
