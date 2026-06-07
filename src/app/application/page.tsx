import type { Metadata } from "next";
import { Mail, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/ui";
import { application, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Application",
  description:
    "Getting started at Crown Institute of Theology. Send us your name, address, and email to begin a program built uniquely for you.",
};

const emails = [
  { label: "Admissions", address: site.emails.primary },
  { label: "Dr. Stan Newton", address: site.emails.stan },
  { label: "Nikola and Helen", address: site.emails.nikola },
];

export default function ApplicationPage() {
  return (
    <>
      <section className="bg-background pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>{application.heading}</Eyebrow>
            <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl text-ink">
              {application.lead}
            </h1>
          </Reveal>
          <div className="mt-8 space-y-6 max-w-2xl">
            {application.body.map((para, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <p className="text-xl leading-relaxed text-ink-soft">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <h2 className="headline text-2xl md:text-3xl text-ink">
              Send your details to apply
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              Email your name, mailing address, and email address to any of the
              addresses below, and tell us the level you want to pursue:
              Bachelor, Master, or Doctorate.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {emails.map((e, i) => (
              <Reveal key={e.address} delay={i * 0.06}>
                <a
                  href={`mailto:${e.address}`}
                  className="group flex h-full flex-col rounded-3xl border border-line/70 bg-background p-6 transition-all duration-300 hover:border-line hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm font-medium text-ink-faint">
                    {e.label}
                  </p>
                  <p className="mt-1 break-all text-[15px] font-medium text-ink">
                    {e.address}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-link">
                    Email now
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
              It is time to start. Begin today.
            </p>
            <p className="mt-4 text-lg text-ink-soft">Thank you.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
