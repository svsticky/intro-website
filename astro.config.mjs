// @ts-check
import { defineConfig } from 'astro/config';

import preload from "astro-preload";
import compress from "@playform/compress";

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  image: {
      domains: ["images.eu.ctfassets.net", "images.ctfassets.net"],
      remotePatterns: [{ protocol: "https" }]
  },
  integrations: [
    preload(),
    compress({
        CSS: false
    }),
    favicons({
      input: await fetch("https://public.svsticky.nl/logos/hoofd_outline_kleur.svg")
        .then(resp => resp.text())
        .then(Buffer.from),
      name: "Introductie Sticky",
      short_name: "Introductie Sticky"
    })
  ]
});