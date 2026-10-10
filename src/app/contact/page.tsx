import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ButtonLink, PageHeader } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Crown Institute of Theology with any questions, testimonies, suggestions or recommendations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="We would love to hear from you."
        lead="Please contact us with any questions, testimonies, suggestions or recommendations."
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl rounded-[3px] border-2 border-ink bg-paper-2 p-6 shadow-hard md:p-10">
            <Mail aria-hidden className="h-7 w-7 text-ink" />
            <p className="mt-4 font-bold text-ink-soft">
              Email Dr. Stan Newton
            </p>
            <a
              href={`mailto:${site.emails.stan}`}
              className="mt-1 block break-all text-2xl font-bold text-ink underline decoration-gold decoration-2 underline-offset-[6px] transition-[text-decoration-thickness] duration-150 hover:decoration-4 md:text-3xl"
            >
              {site.emails.stan}
            </a>
            <div className="mt-8">
              <ButtonLink href={`mailto:${site.emails.stan}`}>
                Write an email
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
