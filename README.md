# Crown Institute of Theology

A rebuild of [crowninstituteoftheology.com](https://crowninstituteoftheology.com), the online Bible school and seminary for Kingdom New Covenant studies founded by Dr. Stan Newton. The original runs on WordPress, Elementor and LifterLMS. This is the public site rebuilt in Next.js: the four degrees, full course lists, tuition, faculty, Statement of Faith and doctrinal distinctives.

Every fact on the site comes from the live site, checked on 2026-10-10. Nothing is invented.

## Design

The look is printed signage: flat blocks of colour, 2px ink edges, hard offset shadows, no gradients or blur. The readers are pastors and older students, often abroad and on a phone, so the type is Atkinson Hyperlegible Next, the Braille Institute's face for low vision, and body text never drops below 17px. Gold means one thing: you can tap this.

Tokens live once, in `src/app/globals.css`.

## Stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion, respecting reduced motion
- Lucide icons

## Pages

Home, About (with the Statement of Faith), Academics, Faculty, Tuition, Application, Contact.

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

## Deploy

No environment variables are needed. Vercel detects Next.js with no config. Railway works too through `railway.json`, and the start script binds to `0.0.0.0` and `$PORT`.

## Project structure

```
src/
  app/            Routes (App Router) and globals.css design tokens
  components/     Nav, Footer, motion, UI primitives
  lib/content.ts  All site copy and program data, in one typed file
public/
  brand/          Logo and crown mark
  books/          Book cover
  faculty/        Faculty photos
```

The local `crown-institute-reference/` folder is a 178 MB scraped mirror of the WordPress site, kept out of git.

All glory to God! ✝️❤️
