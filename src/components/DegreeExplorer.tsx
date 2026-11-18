"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, GraduationCap, Plus } from "lucide-react";
import {
  enrollUrl,
  programs,
  tuition,
  type Course,
  type Program,
} from "@/lib/content";

// Academics as a road you walk, not four lists. Caleb, 2026-11-17, on the list
// version: "Bro u put text on a page and called it a day lol".

// Each degree's spine color, from Dr. Newton's own book covers.
const SPINE = ["#163f3a", "#9b2335", "#3b2a1d", "#7a5a2e"];
const SPINE_H = ["h-36", "h-40", "h-44", "h-48"];

const CREDITS = /\s*\((\d+(?:[.-]\d+)?)\s*Credits?\)\s*$/i;

function split(desc: string) {
  const m = desc.match(CREDITS);
  return { text: desc.replace(CREDITS, ""), credits: m?.[1] };
}

type Stop =
  | { kind: "path"; title: string; note?: string; courses: Course[] }
  | { kind: "choose"; title: string; note?: string; courses: Course[] }
  | {
      kind: "tracks";
      title: string;
      tracks: { name: string; courses: Course[] }[];
    }
  | { kind: "goals"; title: string; courses: Course[] }
  | { kind: "write"; title: string; text: string }
  | { kind: "done"; title: string };

function stopsFor(p: Program): Stop[] {
  const stops: Stop[] = [];
  const tracks: { name: string; courses: Course[] }[] = [];
  for (const g of p.groups) {
    if (g.name.startsWith("Track:")) {
      tracks.push({
        name: g.name.replace("Track:", "").trim(),
        courses: g.courses,
      });
    } else if (g.name.startsWith("Goals")) {
      stops.push({ kind: "goals", title: g.name, courses: g.courses });
    } else if (g.name.startsWith("For Students Entering")) {
      // Shown in the summary card as the alternate entry, not on the road.
    } else if (/elective/i.test(g.name)) {
      stops.push({
        kind: "choose",
        title: "Choose your electives",
        note: g.note,
        courses: g.courses,
      });
    } else {
      stops.push({
        kind: "path",
        title: g.name,
        note: g.note,
        courses: g.courses,
      });
    }
  }
  if (tracks.length)
    stops.push({ kind: "tracks", title: "Choose your track", tracks });
  const paper = p.details?.find((d) => /thesis|dissertation/i.test(d.label));
  if (paper)
    stops.push({
      kind: "write",
      title: `Write your ${paper.label.toLowerCase()}`,
      text: paper.value,
    });
  stops.push({ kind: "done", title: `Graduate with a ${p.degree}` });
  return stops;
}

function CourseRow({
  c,
  open,
  onToggle,
}: {
  c: Course;
  open: boolean;
  onToggle: () => void;
}) {
  const { text, credits } = split(c.description);
  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex min-h-14 w-full cursor-pointer items-center gap-4 rounded-md px-3 py-3 text-left transition-colors hover:bg-sheet focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {c.code && (
          <span className="w-14 shrink-0 font-mono text-[13px] text-ink-soft">
            {c.code}
          </span>
        )}
        <span className="flex-1 font-serif text-xl leading-snug text-ink md:text-[1.35rem]">
          {c.title}
        </span>
        {credits && (
          <span className="hidden shrink-0 text-[13px] text-ink-soft sm:inline">
            {credits} cr
          </span>
        )}
        <Plus
          aria-hidden
          className={`h-5 w-5 shrink-0 text-ink-soft transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="mb-3 ml-3 border-l-2 border-crimson/60 pl-4 text-[17px] leading-relaxed text-ink md:ml-[4.75rem]">
              {text}
              {credits && (
                <span className="text-ink-soft"> {credits} credits.</span>
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function Node({ n, last }: { n: number | "done"; last?: boolean }) {
  return (
    <div className="relative flex w-10 shrink-0 justify-center md:w-14">
      {!last && <span className="absolute top-12 bottom-0 w-px bg-ink/20" />}
      <span
        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-serif text-lg md:h-12 md:w-12 md:text-xl ${
          n === "done"
            ? "bg-gold text-ink"
            : "border border-ink/25 bg-sheet text-ink"
        }`}
      >
        {n === "done" ? <GraduationCap className="h-5 w-5" /> : n}
      </span>
    </div>
  );
}

function Road({ p }: { p: Program }) {
  const stops = stopsFor(p);
  const [open, setOpen] = useState<string | null>(null);
  const [track, setTrack] = useState(0);
  const toggle = (k: string) => setOpen((o) => (o === k ? null : k));

  return (
    <ol>
      {stops.map((s, i) => (
        <li key={s.title} className="flex gap-4 md:gap-6">
          <Node
            n={s.kind === "done" ? "done" : i + 1}
            last={s.kind === "done"}
          />
          <div className="min-w-0 flex-1 pb-12">
            <h3 className="pt-1 text-2xl text-ink md:pt-2 md:text-3xl">
              {s.title}
            </h3>

            {"note" in s && s.note && (
              <p className="mt-2 max-w-xl text-ink-soft">{s.note}</p>
            )}

            {s.kind === "path" && (
              <ul className="mt-4 -mx-3">
                {s.courses.map((c) => (
                  <CourseRow
                    key={c.title}
                    c={c}
                    open={open === c.title}
                    onToggle={() => toggle(c.title)}
                  />
                ))}
              </ul>
            )}

            {s.kind === "choose" && (
              <ul className="mt-4 -mx-3 grid sm:grid-cols-2">
                {s.courses.map((c) => (
                  <CourseRow
                    key={c.title}
                    c={c}
                    open={open === c.title}
                    onToggle={() => toggle(c.title)}
                  />
                ))}
              </ul>
            )}

            {s.kind === "tracks" && (
              <>
                <div
                  role="tablist"
                  aria-label="Tracks"
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {s.tracks.map((t, ti) => (
                    <button
                      key={t.name}
                      role="tab"
                      type="button"
                      aria-selected={track === ti}
                      onClick={() => setTrack(ti)}
                      className={`min-h-11 cursor-pointer rounded-md border px-4 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                        track === ti
                          ? "border-royal bg-royal text-on-dark"
                          : "border-ink/20 bg-sheet text-ink hover:border-ink/50"
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
                <ul className="mt-4 -mx-3">
                  {s.tracks[track].courses.map((c) => (
                    <CourseRow
                      key={c.title}
                      c={c}
                      open={open === c.title}
                      onToggle={() => toggle(c.title)}
                    />
                  ))}
                </ul>
              </>
            )}

            {s.kind === "goals" && (
              <ul className="mt-4 space-y-4">
                {s.courses.map((c) => (
                  <li key={c.title}>
                    <p className="font-serif text-2xl text-ink">{c.title}</p>
                    <p className="text-ink-soft">{c.description}</p>
                  </li>
                ))}
              </ul>
            )}

            {s.kind === "write" && (
              <div className="mt-4 max-w-lg bg-sheet p-6 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.4)]">
                <div className="space-y-2" aria-hidden>
                  {[100, 94, 98, 70].map((w) => (
                    <div
                      key={w}
                      className="h-1.5 rounded bg-ink/15"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
                <p className="mt-5 text-[17px] leading-relaxed text-ink">
                  {s.text}
                </p>
              </div>
            )}

            {s.kind === "done" && (
              <p className="mt-2 max-w-xl text-ink-soft">
                Approved by the State of Washington to grant religious degrees.
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DegreeExplorer() {
  const [slug, setSlug] = useState(programs[0].slug);
  const p = programs.find((x) => x.slug === slug) ?? programs[0];
  const plan = tuition.plans.find((t) => t.abbr === p.abbr);
  const alt = p.groups.find((g) => g.name.startsWith("For Students Entering"));

  useEffect(() => {
    const read = () => {
      const h = window.location.hash.slice(1);
      if (programs.some((x) => x.slug === h)) setSlug(h);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const pick = (s: string) => {
    setSlug(s);
    history.replaceState(null, "", `#${s}`);
  };

  return (
    <>
      {/* The shelf: one spine per degree */}
      <section aria-label="Choose a degree" className="bg-paper pt-6 md:pt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="font-semibold text-ink">Pick a degree off the shelf</p>
          <div role="tablist" className="mt-5 flex items-end gap-2 sm:gap-3">
            {programs.map((x, i) => {
              const active = x.slug === slug;
              return (
                <button
                  key={x.slug}
                  id={x.slug}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => pick(x.slug)}
                  style={{ backgroundColor: SPINE[i] }}
                  className={`group relative flex flex-1 cursor-pointer scroll-mt-24 flex-col items-center justify-between rounded-t-sm px-2 py-3 text-on-dark shadow-[inset_-6px_0_10px_-6px_rgba(0,0,0,0.5),inset_6px_0_8px_-6px_rgba(255,255,255,0.15)] transition-transform duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${SPINE_H[i]} ${
                    active ? "-translate-y-4" : "hover:-translate-y-2"
                  }`}
                >
                  <span className="h-px w-3/4 bg-gold/70" />
                  <span className="text-center font-serif text-[15px] leading-tight sm:text-lg">
                    {x.degree}
                  </span>
                  <span className="font-serif text-sm text-gold">{x.abbr}</span>
                  <span className="h-px w-3/4 bg-gold/70" />
                  {active && (
                    <span className="absolute -bottom-3 left-1/2 h-1.5 w-8 -translate-x-1/2 rounded-full bg-gold" />
                  )}
                </button>
              );
            })}
          </div>
          {/* The shelf board */}
          <div className="h-4 rounded-sm bg-[#8a6a45] shadow-[0_10px_18px_-8px_rgba(0,0,0,0.45)]" />
        </div>
      </section>

      {/* The road for the chosen degree, with its card beside it */}
      <section className="bg-paper pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-4xl text-ink md:text-6xl">{p.degree}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
                {p.summary}
              </p>
              <div className="mt-12">
                <Road p={p} />
              </div>
            </motion.div>
          </AnimatePresence>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-sheet p-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]">
              <p className="font-serif text-2xl text-ink">{p.abbr}</p>
              <dl className="mt-5 space-y-3 text-[17px]">
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                  <dt className="text-ink-soft">Credits</dt>
                  <dd className="font-serif text-2xl leading-none text-ink">
                    {p.credits.replace(" Credit Hours", "")}
                  </dd>
                </div>
                {plan && (
                  <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                    <dt className="text-ink-soft">Tuition</dt>
                    <dd className="text-right text-ink">
                      <span className="font-serif text-2xl">{plan.price}</span>{" "}
                      <span className="text-[15px] text-ink-soft">
                        {plan.priceNote}
                      </span>
                    </dd>
                  </div>
                )}
                <div className="flex justify-between gap-4 pb-1">
                  <dt className="text-ink-soft">Fees</dt>
                  <dd className="text-ink">None</dd>
                </div>
              </dl>
              {alt && (
                <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
                  {alt.note}
                </p>
              )}
              <a
                href={enrollUrl[p.abbr]}
                className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 font-semibold text-ink transition-colors hover:bg-gold-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Enroll in the {p.abbr}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </a>
              <a
                href="/tuition"
                className="mt-3 flex min-h-11 items-center justify-center text-[15px] font-semibold text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                Count the full cost
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
