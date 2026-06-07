import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/motion";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Crown Institute of Theology with any questions, testimonies, suggestions, or recommendations.",
};

export default function ContactPage() {
  return (
    <section className="bg-background min-h-[70vh] pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl text-ink">
            We would love to hear from you.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-xl text-ink-soft leading-relaxed">
            Please contact us with any questions, testimonies, suggestions, or
            recommendations.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 inline-flex flex-col items-center gap-5 rounded-3xl border border-line/70 bg-surface-2 px-10 py-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Mail className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink-faint">Email us at</p>
              <a
                href={`mailto:${site.emails.stan}`}
                className="mt-1 block text-2xl font-semibold tracking-tight text-ink hover:text-accent transition-colors"
              >
                {site.emails.stan}
              </a>
            </div>
            <ButtonLink href={`mailto:${site.emails.stan}`}>
              Send a Message
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
