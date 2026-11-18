"use client";

import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { enrollUrl, programs, site } from "@/lib/content";

// The live site's three steps (name, mailing address and email; the level;
// send it in) written as the letter itself, so applying is filling in blanks.
const field =
  "mx-1 inline-block min-h-11 min-w-[10ch] border-b-2 border-dotted border-ink/40 bg-transparent px-1 font-serif text-[1.15em] text-royal placeholder:text-ink/40 focus-visible:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const linkCls =
  "inline-flex min-h-11 items-center text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink";

export function ApplicationLetter() {
  const [degree, setDegree] = useState(programs[0].degree);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const abbr = programs.find((p) => p.degree === degree)?.abbr ?? "B.Th.";

  const body = [
    "Dear Dr. Newton,",
    "",
    `I would like to apply to the ${degree} program at Crown Institute of Theology.`,
    "",
    `Name: ${name}`,
    `Mailing address: ${address}`,
    `Email: ${email}`,
    "",
    "Thank you.",
  ].join("\n");
  const mailto = `mailto:${site.emails.primary}?cc=${site.emails.stan}&subject=${encodeURIComponent(
    `Application: ${degree}`,
  )}&body=${encodeURIComponent(body)}`;
  const ready = Boolean(name.trim() && email.trim());

  return (
    <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
      <div className="relative bg-sheet px-6 py-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] sm:px-10 sm:py-12">
        <p className="text-[14px] text-ink-soft">
          To: {site.emails.primary}
          <br />
          Cc: {site.emails.stan}
        </p>
        <div className="my-6 border-t border-ink/15" />
        <div className="space-y-5 text-lg leading-[2.2] text-ink">
          <p className="font-serif text-2xl">Dear Dr. Newton,</p>
          <p>
            I would like to apply to the
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              aria-label="Degree"
              className={`${field} cursor-pointer`}
            >
              {programs.map((p) => (
                <option key={p.slug}>{p.degree}</option>
              ))}
            </select>
            program at Crown Institute of Theology.
          </p>
          <p>
            My name is
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your full name"
              aria-label="Your name"
              autoComplete="name"
              className={field}
            />
            , my mailing address is
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="street, city, country"
              aria-label="Mailing address"
              autoComplete="street-address"
              className={`${field} min-w-[16ch]`}
            />
            and my email is
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email"
              type="email"
              autoComplete="email"
              className={field}
            />
            .
          </p>
          <p className="font-serif text-2xl">Thank you.</p>
        </div>
        <a
          href={mailto}
          aria-disabled={!ready}
          onClick={(e) => {
            if (!ready) e.preventDefault();
          }}
          className={`mt-8 inline-flex min-h-12 items-center gap-2 rounded-md px-6 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
            ready
              ? "bg-gold text-ink hover:bg-gold-hover"
              : "cursor-not-allowed bg-ink/10 text-ink-soft"
          }`}
        >
          <Send aria-hidden className="h-4 w-4" />
          {ready ? "Send this letter" : "Fill in your name and email to send"}
        </a>
        <p className="mt-3 text-[14px] text-ink-soft">
          Opens your email app with the letter written. Nothing is sent until
          you press send there.
        </p>
      </div>

      <aside className="md:pt-6">
        <h2 className="text-3xl text-ink">Ready to start now?</h2>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">
          You can skip the letter and enroll in the {abbr} directly. Once
          enrolled, Dr. Newton builds a program around you.
        </p>
        <a
          href={enrollUrl[abbr]}
          className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 hover:decoration-ink"
        >
          Enroll in the {abbr}
          <ArrowRight aria-hidden className="h-4 w-4" />
        </a>
        <div className="mt-10 border-t border-ink/15 pt-6 text-[15px] text-ink-soft">
          <p>Prefer to write someone directly?</p>
          <p className="mt-1">
            <a className={linkCls} href={`mailto:${site.emails.stan}`}>
              Dr. Stan Newton
            </a>{" "}
            or{" "}
            <a className={linkCls} href={`mailto:${site.emails.nikola}`}>
              Nikola and Helen
            </a>
          </p>
        </div>
      </aside>
    </div>
  );
}
