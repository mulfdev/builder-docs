import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      config: {
        limitInputPixels: false,
      },
    },
  },
  integrations: [
    starlight({
      title: "Nouns Builder",
      social: {
        github: "https://github.com/ourzora/nouns-builder",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
