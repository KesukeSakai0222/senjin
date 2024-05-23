import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ]
});