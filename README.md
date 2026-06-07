# Crown Institute of Theology

A modern rebuild of [crowninstituteoftheology.com](https://crowninstituteoftheology.com), an online Bible school and seminary for Kingdom New Covenant studies. The original WordPress and LifterLMS site has been reimagined as a clean, fast, Apple-inspired Next.js site: premium white space, SF Pro typography, a single blue accent, and soft scroll-reveal animations.

## Stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (Apple-style scroll reveals)
- Lucide icons

## Pages

Home, About, Academics (full curriculum for all four degrees), Faculty, Tuition, Application, Contact.

All copy is sourced from the original site and reformatted for a modern presentation. Faculty photos are included; Charles Seip has been removed per request.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Deploy to Railway

This repo is Railway-ready.

1. Create a new project in Railway and connect this GitHub repo.
2. Railway uses Nixpacks to run `npm run build`, then `npm run start`.
3. The start script binds to `0.0.0.0` and the Railway-provided `$PORT` automatically. No environment variables are required.

Configuration lives in `railway.json`.

## Project structure

```
src/
  app/            Routes (App Router)
  components/     Nav, Footer, motion primitives, UI helpers
  lib/content.ts  All site copy and program data, in one typed file
public/
  brand/          Logo and icon
  faculty/        Faculty photos
```

All glory to God! ✝️❤️
