// @ts-check
import { defineConfig } from 'astro/config';

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  integrations: [
    favicons({
      input: await fetch("https://public.svsticky.nl/logos/hoofd_outline_kleur.svg")
        .then(resp => resp.text())
        .then(Buffer.from),
      name: "Introductie Sticky",
      short_name: "Introductie Sticky"
    })
  ],
  image: {
    domains: ["content.dev.svsticky.nl", "content.svsticky.nl", "localhost"]
  }
});