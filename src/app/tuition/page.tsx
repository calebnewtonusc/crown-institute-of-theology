import type { Metadata } from "next";
import { Check } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { ButtonLink, PageHeader } from "@/components/ui";
import { tuition } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tuition",
  description:
    "Quality theological education at very low tuition. A One-Price policy with no application, credit evaluation or graduation fee. Scholarships available.",
};

export default function TuitionPage() {
  return (
    <>
      <PageHeader
        label={tuition.heading}
        title="One price. No hidden fees."
        lead={tuition.intro}
      />

      <section className="border-b-2 border-ink bg-paper-2">
        <ul className="mx-auto grid max-w-6xl md:grid-cols-3">
          {tuition.highlights.map((h, i) => (
            <li
              key={h}
              className={`flex gap-3 px-4 py-6 sm:px-6 lg:px-8 ${
                i > 0 ? "border-t-2 border-ink md:border-l-2 md:border-t-0" : ""
              }`}
            >
              <Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-ink" />
              <span className="leading-relaxed text-ink">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-b-2 border-ink bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-8 md:grid-cols-2">
            {tuition.plans.map((plan) => (
              <StaggerItem key={plan.abbr} className="h-full">
                <div className="flex h-full flex-col rounded-[3px] border-2 border-ink bg-paper-2 p-6 shadow-hard md:p-8">
                  <p className="text-sm font-bold text-ink-faint">
                    {plan.abbr}, {plan.credits}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                    {plan.degree}
                  </h2>
                  <p className="mt-6 flex flex-wrap items-baseline gap-x-3">
                    <span className="text-6xl font-bold tracking-tighter text-ink">
                      {plan.price}
                    </span>
                    <span className="font-bold text-ink-soft">
                      {plan.priceNote}
                    </span>
                  </p>
                  <ul className="mt-6 flex-1 border-t-2 border-ink">
                    {plan.options.map((opt) => (
                      <li
                        key={opt}
                        className="flex gap-3 border-b border-ink/30 py-3"
                      >
                        <Check
                          aria-hidden
                          className="mt-1 h-4 w-4 shrink-0 text-ink"
                        />
                        <span className="leading-relaxed text-ink">{opt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink href="/application" className="w-full">
                      Enroll in the {plan.abbr}
                    </ButtonLink>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="mt-8 text-ink-soft">{tuition.footnote}</p>
        </div>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Low tuition, so more students can study.
          </h2>
          <div className="mt-10">
            <ButtonLink href="/application">Begin today</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
