import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui";
import { faculty, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Crown Institute of Theology with any questions, testimonies, suggestions or recommendations.",
};

export default function ContactPage() {
  const founder = faculty[0];
  return (
    <>
      <PageHeader
        title="Questions about Crown Institute?"
        lead="Please contact us with any questions, testimonies, suggestions or recommendations."
      />

      <section className="bg-paper-2 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[320px_1fr] md:gap-16 lg:px-8">
          <div className="relative aspect-square w-48 overflow-hidden rounded-full bg-paper md:w-full">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl text-ink md:text-5xl">Write to Dr. Newton</h2>
            <a
              href={`mailto:${site.emails.stan}?subject=${encodeURIComponent("A question about Crown Institute")}`}
              className="group mt-6 inline-flex min-h-12 flex-wrap items-center gap-3 break-all font-serif text-3xl text-royal underline decoration-gold decoration-2 underline-offset-[8px] hover:decoration-4 md:text-5xl"
            >
              {site.emails.stan}
              <ArrowRight aria-hidden className="h-7 w-7 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-8 text-lg text-ink-soft">
              For the school office:{" "}
              <a
                href={`mailto:${site.emails.primary}`}
                className="inline-flex min-h-11 items-center break-all text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                {site.emails.primary}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
