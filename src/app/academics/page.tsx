import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { ButtonLink, PageHeader } from "@/components/ui";
import { accreditation, programs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Bachelor of Theology, Master of Theological Studies, Doctor of Ministry and Doctor of Theology. Full curriculum and course descriptions.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        label="Academics"
        title="Four degrees, each grounded in the Word."
        lead="Biblical exegesis, Christocentric hermeneutics, and the present and advancing kingdom of God, from the bachelor level to the doctorate."
      >
        <nav aria-label="Degrees" className="mt-10 flex flex-wrap gap-3">
          {programs.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="inline-flex min-h-11 items-center rounded-[3px] border-2 border-on-dark px-4 text-[15px] font-bold text-on-dark transition-colors duration-150 hover:bg-on-dark hover:text-ink"
            >
              {p.abbr} {p.degree}
            </a>
          ))}
        </nav>
      </PageHeader>

      {programs.map((p, idx) => (
        <section
          key={p.slug}
          id={p.slug}
          className={`scroll-mt-16 border-b-2 border-ink py-16 md:py-24 ${
            idx % 2 === 0 ? "bg-paper" : "bg-paper-2"
          }`}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="text-5xl font-bold tracking-tight text-ink md:text-6xl">
                  {p.abbr}
                </span>
                <span className="text-lg font-bold text-ink-soft">
                  {p.credits}
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
                {p.degree}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
                {p.objective}
              </p>
            </Reveal>

            {p.details && (
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {p.details.map((d) => (
                  <div
                    key={d.label}
                    className="rounded-[3px] border-2 border-ink bg-paper p-5"
                  >
                    <dt className="text-sm font-bold text-ink-faint">
                      {d.label}
                    </dt>
                    <dd className="mt-2 leading-relaxed text-ink">{d.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-12 space-y-12">
              {p.groups.map((group) => (
                <div key={group.name}>
                  <h3 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                    {group.name}
                  </h3>
                  {group.note && (
                    <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">
                      {group.note}
                    </p>
                  )}
                  <ul className="mt-5 grid border-t-2 border-ink md:grid-cols-2 md:gap-x-10">
                    {group.courses.map((c, i) => (
                      <li
                        key={`${c.code}-${i}`}
                        className="border-b-2 border-ink py-5"
                      >
                        <p className="font-bold leading-snug text-ink">
                          {c.code && (
                            <span className="mr-2 inline-block rounded-[2px] bg-ink px-1.5 py-0.5 text-sm text-paper">
                              {c.code}
                            </span>
                          )}
                          {c.title}
                        </p>
                        <p className="mt-2 text-[16px] leading-relaxed text-ink-soft">
                          {c.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <ButtonLink href="/application">
                Apply for the {p.abbr}
              </ButtonLink>
            </div>
          </div>
        </section>
      ))}

      <section
        id="accreditation"
        className="scroll-mt-16 bg-ink py-16 text-on-dark md:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Accreditation and operating status
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-on-dark-soft">
            {accreditation.about}
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-on-dark-soft">
            {accreditation.operatingStatus}
          </p>
        </div>
      </section>
    </>
  );
}
