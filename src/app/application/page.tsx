import type { Metadata } from "next";
import { ArrowRight, Mail } from "lucide-react";
import { PageHeader } from "@/components/ui";
import { application, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Application",
  description:
    "Getting started at Crown Institute of Theology. Send your name, address and email to begin a program built around you.",
};

const emails = [
  { label: "Crown Institute of Theology", address: site.emails.primary },
  { label: "Dr. Stan Newton", address: site.emails.stan },
  { label: "Nikola and Helen", address: site.emails.nikola },
];

const steps = [
  "Write down your name, mailing address and email address.",
  "Say which level you want to pursue: Bachelor, Master or Doctorate.",
  "Send it to any of the addresses below.",
];

export default function ApplicationPage() {
  return (
    <>
      <PageHeader
        label={application.heading}
        title="Let's talk."
        lead={application.body[0]}
      />

      <section className="border-b-2 border-ink bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            How to apply
          </h2>
          <ol className="mt-8 grid border-t-2 border-ink md:grid-cols-3 md:gap-x-10">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-4 border-b-2 border-ink py-6">
                <span className="text-4xl font-bold leading-none text-ink">
                  {i + 1}
                </span>
                <p className="text-lg leading-relaxed text-ink">{s}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {emails.map((e) => (
              <a
                key={e.address}
                href={`mailto:${e.address}?subject=Application`}
                className="group flex flex-col rounded-[3px] border-2 border-ink bg-paper-2 p-6 shadow-hard transition-[transform,box-shadow,background-color] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-gold hover:shadow-hard-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                <Mail aria-hidden className="h-6 w-6 text-ink" />
                <p className="mt-4 font-bold text-ink-soft group-hover:text-ink">
                  {e.label}
                </p>
                <p className="mt-1 break-all text-lg font-bold text-ink">
                  {e.address}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-ink underline decoration-gold decoration-2 underline-offset-[6px] group-hover:decoration-ink">
                  Write an email
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
            It&rsquo;s time to start. Begin today.
          </p>
          <p className="mt-4 text-lg text-ink-soft">Thank you.</p>
        </div>
      </section>
    </>
  );
}
