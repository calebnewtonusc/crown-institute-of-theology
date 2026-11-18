"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { enrollUrl, payWays, tuition } from "@/lib/content";

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

// The fees the one-price policy promises are zero, printed on every receipt so
// "no hidden fees" is shown instead of claimed.
const zeroFees = ["Application fee", "Credit evaluation fee", "Graduation fee"];

// The option on each plan that is a condition, not a price.
const goodToKnow: Record<string, string> = {
  "B.Th.": "Church groups of 4 or more: $400 one-time, or 12 payments of $60.",
  "M.T.S.":
    "Transferring 3 or more years of Bible school credits? Ask about the B.Th./M.T.S. combination program.",
  "D.Min.":
    "Enrollment requires a master's degree. Those with a university (bachelor) degree combined with Bible school and life experience credit may also apply.",
  "Th.D.":
    "Entering with a doctor's degree: 15 hours at $60 ($900), $90 a month for 10 months, or $700 as a one-time payment.",
};

export function TuitionReceipt() {
  const [abbr, setAbbr] = useState("B.Th.");
  const [way, setWay] = useState(0);
  const plan = tuition.plans.find((p) => p.abbr === abbr) ?? tuition.plans[0];
  const pay = payWays[abbr][way];

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
      {/* The choices */}
      <div>
        <p className="font-semibold text-ink">Which degree?</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {tuition.plans.map((p) => (
            <button
              key={p.abbr}
              type="button"
              onClick={() => {
                setAbbr(p.abbr);
                setWay(0);
              }}
              aria-pressed={abbr === p.abbr}
              className={`min-h-14 cursor-pointer rounded-md border px-4 py-3 text-left transition-colors ${
                abbr === p.abbr
                  ? "border-royal bg-royal text-on-dark"
                  : "border-ink/20 bg-paper text-ink hover:border-ink/50"
              }`}
            >
              <span className="block font-serif text-lg font-semibold leading-tight">
                {p.degree}
              </span>
              <span className="text-[14px] opacity-80">{p.credits}</span>
            </button>
          ))}
        </div>

        <p className="mt-8 font-semibold text-ink">
          How would you like to pay?
        </p>
        <div className="mt-3 flex gap-2">
          {payWays[abbr].map((w, i) => (
            <button
              key={w.label}
              type="button"
              onClick={() => setWay(i)}
              aria-pressed={way === i}
              className={`min-h-12 flex-1 cursor-pointer rounded-md border px-4 font-semibold transition-colors ${
                way === i
                  ? "border-royal bg-royal text-on-dark"
                  : "border-ink/20 bg-paper text-ink hover:border-ink/50"
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>

        <p className="mt-8 text-[15px] leading-relaxed text-ink-soft">
          {goodToKnow[abbr]}
        </p>
      </div>

      {/* The receipt */}
      <div
        aria-live="polite"
        className="relative mx-auto w-full max-w-md bg-sheet px-7 pb-10 pt-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] [clip-path:polygon(0_0,100%_0,100%_calc(100%-10px),95%_100%,90%_calc(100%-10px),85%_100%,80%_calc(100%-10px),75%_100%,70%_calc(100%-10px),65%_100%,60%_calc(100%-10px),55%_100%,50%_calc(100%-10px),45%_100%,40%_calc(100%-10px),35%_100%,30%_calc(100%-10px),25%_100%,20%_calc(100%-10px),15%_100%,10%_calc(100%-10px),5%_100%,0_calc(100%-10px))]"
      >
        <p className="text-center font-serif text-xl font-semibold text-ink">
          Crown Institute of Theology
        </p>
        <p className="text-center text-[14px] text-ink-soft">
          Tuition statement
        </p>
        <div className="my-5 border-t border-dashed border-ink/30" />
        <p className="font-serif text-2xl font-semibold leading-tight text-ink">
          {plan.degree}
        </p>
        <p className="text-[15px] text-ink-soft">{plan.credits}</p>

        <dl className="mt-6 space-y-3 font-mono text-[15px] text-ink">
          <div className="flex items-baseline gap-2">
            <dt>{pay.line}</dt>
            <span className="flex-1 border-b border-dotted border-ink/30" />
            <dd>{money(pay.total)}</dd>
          </div>
          {zeroFees.map((f) => (
            <div key={f} className="flex items-baseline gap-2 text-ink-soft">
              <dt>{f}</dt>
              <span className="flex-1 border-b border-dotted border-ink/30" />
              <dd>$0</dd>
            </div>
          ))}
        </dl>
        <div className="my-5 border-t border-dashed border-ink/30" />
        <div className="flex items-baseline justify-between">
          <p className="font-semibold text-ink">Total</p>
          <p className="font-serif text-4xl font-semibold text-ink">
            {money(pay.total)}
          </p>
        </div>
        <p className="mt-4 text-[13px] text-ink-soft">{tuition.footnote}</p>

        <a
          href={enrollUrl[abbr]}
          className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 font-semibold text-ink transition-colors hover:bg-gold-hover"
        >
          Enroll in the {abbr}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
