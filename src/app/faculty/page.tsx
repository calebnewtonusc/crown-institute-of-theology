import type { Metadata } from "next";
import Image from "next/image";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { ButtonLink, PageHeader } from "@/components/ui";
import { faculty } from "@/lib/content";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the authors, pastors, theologians and missionaries who teach at Crown Institute of Theology.",
};

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        label="Faculty"
        title="Teachers with broad and diverse experience."
        lead="Dr. Stan Newton has assembled a team of teachers to enrich, challenge and inspire you to dream big."
      />

      <section className="border-b-2 border-ink bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-8 md:grid-cols-2">
            {faculty.map((f) => (
              <StaggerItem key={f.name} className="h-full">
                <article className="flex h-full flex-col rounded-[3px] border-2 border-ink bg-paper-2 shadow-hard">
                  <div className="relative aspect-[4/3] border-b-2 border-ink">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold tracking-tight text-ink">
                      {f.name}
                    </h2>
                    {f.title && (
                      <p className="mt-1 font-bold text-ink-soft">{f.title}</p>
                    )}
                    <p className="mt-4 leading-relaxed text-ink">{f.bio}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Study under their guidance.
          </h2>
          <div className="mt-10">
            <ButtonLink href="/application">Apply now</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
