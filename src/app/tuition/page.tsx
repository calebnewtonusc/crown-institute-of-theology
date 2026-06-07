import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { tuition } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tuition",
  description:
    "Quality theological education at very low tuition. A One-Price policy with no application, evaluation, or graduation fees. Scholarships available.",
};

export default function TuitionPage() {
  return (
    <>
      <section className="bg-background pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>{tuition.heading}</Eyebrow>
            <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl text-ink">
              One price. No hidden fees.
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-ink-soft leading-relaxed">
              {tuition.intro}
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-3">
            {tuition.highlights.map((h, i) => (
              <StaggerItem
                key={i}
                className="rounded-2xl border border-line/70 bg-surface-2 p-5"
              >
                <Check className="h-5 w-5 text-accent" />
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {h}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {tuition.plans.map((plan, i) => (
              <Reveal key={plan.abbr} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-3xl border border-line/70 bg-background p-8 md:p-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="headline text-2xl text-ink">
                      {plan.degree}
                    </h2>
                    <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {plan.abbr}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-faint">{plan.credits}</p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl font-semibold tracking-tight text-ink">
                      {plan.price}
                    </span>
                    <span className="text-sm text-ink-soft">
                      {plan.priceNote}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.options.map((opt, j) => (
                      <li key={j} className="flex gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-[15px] leading-relaxed text-ink-soft">
                          {opt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ButtonLink
                      href="/application"
                      variant="secondary"
                      className="w-full"
                    >
                      Enroll Now
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <p className="text-sm text-ink-faint">{tuition.footnote}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="headline text-3xl md:text-5xl text-ink">
              Affordable, by design.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft leading-relaxed">
              We keep tuition low so that more students have the opportunity to
              study and be equipped for Christian leadership.
            </p>
            <div className="mt-10">
              <ButtonLink href="/application">Begin Today</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
