import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";
// NOTE: @astrojs/sitemap 3.7+ requires Astro 5; we're on Astro 4.
// Re-enable when upgrading to Astro 5, or downgrade sitemap to a 4-compatible version.

export default defineConfig({
  site: 'https://opennode.kr',

  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },

  output: "hybrid",
  adapter: cloudflare()
});