import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://codigosinsiesta.github.io',
  base: '/spec-driven-development-presentation',
  integrations: [svelte()],
  server: {
    port: 4324
  }
});
