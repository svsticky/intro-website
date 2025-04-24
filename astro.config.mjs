// @ts-check
import { defineConfig } from 'astro/config';

import preload from "astro-preload";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  image: {
      domains: ["images.eu.ctfassets.net", "images.ctfassets.net"],
      remotePatterns: [{ protocol: "https" }]
  },
  integrations: [preload(), compress({
        CSS: false
  })]
});