import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { ButtonLink, TextLink, Eyebrow } from "@/components/ui";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Crown Institute of Theology was founded by Dr. Stan Newton to share and teach the mysteries of the kingdom of God.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-background pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>{about.heading}</Eyebrow>
            <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl text-ink">
              Teaching theology so you can do theology.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-6">
            {about.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-xl leading-relaxed text-ink-soft">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {about.quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="h-full rounded-3xl bg-background border border-line/70 p-8 md:p-10">
                <blockquote className="text-2xl md:text-[28px] font-semibold leading-snug tracking-tight text-ink">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-base text-ink-soft">
                  {q.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="headline text-3xl md:text-5xl text-ink">
              Ready to dig deep and be challenged?
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonLink href="/application">Begin Today</ButtonLink>
              <TextLink href="/academics">Explore the academics</TextLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
