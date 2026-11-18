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
        title="A Bachelor of Theology for $900."
        verse={{
          text: "For which of you, intending to build a tower, sitteth not down first, and counteth the cost?",
          ref: "Luke 14:28",
        }}
      />

      <section className="bg-paper pt-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div>
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
