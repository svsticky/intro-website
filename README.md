# Redesigned Intro Website

## Installation

The website is created with Astro and Vite. You can develop the website using your
favourite javascript runtime and package manager. Using node.js and npm for example:

```bash
git clone https://github.com/svsticky/intro-website.git
cd intro-website
npm i # Or bun install / deno install --allow-scripts
```

Once the dependencies are installed, then copy sample.env to .env and fill out
the contentful secrets, which can be found in the bitwarden. Once these are in
place, you can start the development server using the following command:

```bash
npm run dev # Or bun dev / deno task dev
```

## Editing the website

The code in this repo is purely for the layout of the page, and the connection
to contentful. The content itself (i.e. the pictures, text and links) is stored
in contentful and filled out by astro into the layout. In [docs/contentful-organisation.md](docs/contentful-organisation.md),
the contentful layout and some gimmicks for the page are explained.

