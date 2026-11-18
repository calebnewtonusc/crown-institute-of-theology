import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { TuitionReceipt } from "@/components/TuitionReceipt";
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
        title="One price. No hidden fees."
        lead={tuition.intro}
        verse={{
          text: "For which of you, intending to build a tower, sitteth not down first, and counteth the cost?",
          ref: "Luke 14:28",
        }}
      />

      <section className="bg-paper-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-ink md:text-5xl">Count the cost</h2>
          <p className="mt-3 max-w-xl text-lg text-ink-soft">
            Pick a degree and a way to pay. This is the whole bill.
          </p>
          <div className="mt-10">
            <TuitionReceipt />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <ul className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {tuition.highlights.map((h, i) => (
            <li key={h}>
              <p className="font-serif text-5xl font-semibold text-crimson">
                {["4+", "Aid", "30"][i]}
              </p>
              <p className="mt-2 text-lg leading-relaxed text-ink">{h}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
