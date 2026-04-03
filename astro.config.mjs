import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.idealsnetwork.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});
