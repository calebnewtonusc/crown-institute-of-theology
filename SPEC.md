# Crown Institute site spec

Written 2026-11-17, after Caleb's audit notes ("so many sections are dull", "it doesn't give the vibe of
the institute", "BE INTENTIONAL") and Dr. Newton's own notes on the call ("too dark for me, I would
rather lighten it up").

## Who reads it

Older Christians who love to study Scripture, mostly from charismatic and independent churches, often
grads of 2 to 3 year ministry schools (Bethel BSSM and similar). Many read on a phone. They are
deciding whether to trust one man, Dr. Stan Newton, with a year of study.

## The vibe

A pastor's study: Scripture open on the desk, his books on the shelf, a letter to write. Warm paper,
book-serif headings, his book covers' colors. Not a city services page, not a tech startup.

- Headings: EB Garamond (a real book face, lining numerals, no slashed zero, which he asked about).
  Body stays Atkinson Hyperlegible Next at 17px+ for low vision.
- Color, taken from his covers: Kingdom First green `#163f3a` (accent ground, used sparingly),
  crimson `#9b2335` (marks, the review stamp), crown gold `#e3a12f` (means "you can tap this").
  Paper `#f6f1e6`, and no black slabs anywhere.
- Every inner page opens light, with its title and one verse, no label chips.
- No hard offset shadows, no 2px ink boxes around everything, no generic "Ready to begin?" band
  closing every page.
- Motion 5 of 10: one scroll scene on Home, objects that respond to a click on inner pages, nothing
  that moves on its own except the map pins.

## What moves, plays or changes

| Page        | The thing                                                                     | What it does                                                                              |
| ----------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Home        | A class on one desk (pinned scroll scene)                                     | Lecture plays, book opens, paper comes back stamped                                       |
| Home        | Books on a shelf, degree staircase, world map                                 | Books lift on hover; steps enroll; faces name their country                               |
| About       | The creed set like a printed page; three distinctives as large numbered lines | Read, no motion                                                                           |
| Academics   | Each degree as a chapter of course lists                                      | Each course opens its description on tap                                                  |
| Faculty     | Dr. Newton leads (he teaches most classes); guest teachers smaller            | Tap a teacher to read the bio                                                             |
| Tuition     | A receipt                                                                     | Pick a degree and a way to pay, the receipt's lines and total change; fees always read $0 |
| Application | A letter already addressed to him                                             | Pick a degree, the letter fills in; Send opens the email; or Enroll and pay now           |
| Contact     | His photo and his email                                                       | Email opens prefilled                                                                     |

## Rival shape that lost

One long page with no inner pages (everything as scroll scenes). It lost because Dr. Newton finds
things by the menu ("click on Home", "academics, faculty, tuition"), his old site has these pages,
and the course lists are reference material people come back to.

Facts only from lib/content.ts (copied from the live site) or from Dr. Newton himself.
