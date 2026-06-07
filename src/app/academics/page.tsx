import type { Metadata } from "next";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { programs, accreditation } from "@/lib/content";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Bachelor of Theology, Master of Theological Studies, Doctor of Ministry, and Doctor of Theology. Full curriculum and course descriptions.",
};

export default function AcademicsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-background pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Academics</Eyebrow>
            <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl text-ink">
              Study to do theology.
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-ink-soft leading-relaxed">
              Four degree programs, each grounded in biblical exegesis,
              Christocentric hermeneutics, and the present and advancing kingdom
              of God.
            </p>
          </Reveal>

          {/* Quick jump */}
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {programs.map((p) => (
                <a
                  key={p.slug}
                  href={`#${p.slug}`}
                  className="rounded-full border border-line/70 bg-surface-2 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface"
                >
                  {p.degree}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      {programs.map((p, idx) => (
        <section
          key={p.slug}
          id={p.slug}
          className={`scroll-mt-20 py-20 md:py-28 ${
            idx % 2 === 0 ? "bg-surface" : "bg-background"
          }`}
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {p.abbr}
                </span>
                <span className="text-sm text-ink-faint">{p.credits}</span>
              </div>
              <h2 className="headline mt-4 text-3xl md:text-5xl text-ink">
                {p.degree}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
                {p.objective}
              </p>
            </Reveal>

            {p.details && (
              <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
                {p.details.map((d) => (
                  <StaggerItem
                    key={d.label}
                    className="rounded-2xl border border-line/70 bg-background p-6"
                  >
                    <p className="text-sm font-semibold text-accent">
                      {d.label}
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                      {d.value}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            )}

            <div className="mt-12 space-y-12">
              {p.groups.map((group) => (
                <div key={group.name}>
                  <Reveal>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-ink">
                      {group.name}
                    </h3>
                    {group.note && (
                      <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
                        {group.note}
                      </p>
                    )}
                  </Reveal>

                  <StaggerGroup className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line/70 bg-line/70 md:grid-cols-2">
                    {group.courses.map((c, i) => (
                      <StaggerItem
                        key={`${c.code}-${i}`}
                        className="bg-background p-6 transition-colors duration-300 hover:bg-surface-2"
                      >
                        <div className="flex items-baseline gap-2">
                          {c.code && (
                            <span className="text-sm font-semibold text-accent">
                              {c.code}
                            </span>
                          )}
                          <h4 className="text-[17px] font-semibold leading-snug text-ink">
                            {c.title}
                          </h4>
                        </div>
                        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                          {c.description}
                        </p>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              ))}
            </div>

            <Reveal className="mt-12">
              <ButtonLink href="/application">
                Apply for the {p.abbr}
              </ButtonLink>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Accreditation */}
      <section className="bg-ink py-20 md:py-28 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <h2 className="headline text-2xl md:text-4xl">
              Accreditation and operating status
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            <Reveal delay={0.05}>
              <p className="text-[15px] leading-relaxed text-white/70">
                {accreditation.about}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[13px] leading-relaxed text-white/50">
                {accreditation.operatingStatus}
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
