import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { faculty } from "@/lib/content";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the authors, pastors, theologians, and missionaries who teach at Crown Institute of Theology.",
};

export default function FacultyPage() {
  return (
    <>
      <section className="bg-background pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Faculty</Eyebrow>
            <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl text-ink">
              A team with broad and diverse experience.
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-ink-soft leading-relaxed">
              Teachers who have carried the message of the kingdom and the new
              covenant across the nations, gathered to enrich, challenge, and
              inspire you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <StaggerGroup className="grid gap-8 md:grid-cols-2">
            {faculty.map((f) => (
              <StaggerItem key={f.name}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line/70 bg-surface-2 sm:flex-row">
                  <div className="relative aspect-[4/5] w-full shrink-0 bg-surface sm:aspect-auto sm:w-44">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 176px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col p-7">
                    <h2 className="text-xl font-semibold tracking-tight text-ink">
                      {f.name}
                    </h2>
                    {f.title && (
                      <p className="mt-1 text-sm font-medium text-accent">
                        {f.title}
                      </p>
                    )}
                    <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                      {f.bio}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="headline text-3xl md:text-5xl text-ink">
              Study under their guidance.
            </h2>
            <div className="mt-10">
              <ButtonLink href="/application">Apply Now</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
