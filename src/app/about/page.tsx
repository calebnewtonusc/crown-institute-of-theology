import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion";
import { ButtonLink, PageHeader, TextLink } from "@/components/ui";
import { about, book, distinctives, statementOfFaith } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Crown Institute of Theology was founded by Dr. Stan Newton to share and teach the mysteries of the kingdom of God. Our Statement of Faith and doctrinal distinctives.",
};

export default function AboutPage() {
  const [jesus, solomon] = about.quotes;
  return (
    <>
      <PageHeader
        title="We teach you theology so you can do theology."
        verse={{ text: jesus.text, ref: "Matthew 13:11" }}
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
          {about.body.map((para, i) => (
            <p
              key={para.slice(0, 24)}
              className={`text-lg leading-relaxed text-ink md:text-xl ${
                i === 0
                  ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-crimson"
                  : ""
              }`}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Statement of faith */}
      <section
        id="statement-of-faith"
        className="scroll-mt-16 border-b border-ink/15 bg-paper-2 py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Statement of Faith
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {statementOfFaith.creedIntro}
            </p>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl bg-sheet px-6 py-10 text-center shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)] sm:px-14 sm:py-14">
            <p className="font-serif text-3xl text-ink md:text-4xl">
              The Apostles&rsquo; Creed
            </p>
            <div className="mx-auto mt-3 h-px w-16 bg-crimson" />
            <div className="mt-8 space-y-5">
              {statementOfFaith.creed.map((line) => (
                <p
                  key={line.slice(0, 24)}
                  className="font-serif text-xl leading-relaxed text-ink md:text-2xl"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          <Reveal className="mt-12 max-w-3xl">
            <p className="text-lg font-bold text-ink">
              {statementOfFaith.naeIntro}
            </p>
          </Reveal>
          <ul className="mt-6 grid border-t border-ink/15 md:grid-cols-2 md:gap-x-12">
            {statementOfFaith.nae.map((line) => (
              <li
                key={line.slice(0, 24)}
                className="border-b border-ink/15 py-5 text-[17px] leading-relaxed text-ink"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Distinctives */}
      <section className="bg-royal py-16 text-on-dark md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Doctrinal distinctives
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-on-dark-soft">
              {distinctives.intro}
            </p>
          </Reveal>
          <ol className="mt-10 space-y-8">
            {distinctives.items.map((d, i) => (
              <li key={d.name} className="flex gap-5 md:gap-8">
                <span className="w-12 shrink-0 font-serif text-6xl leading-none text-gold">
                  {i + 1}
                </span>
                <div className="max-w-3xl">
                  <h3 className="text-2xl md:text-3xl">{d.name}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-on-dark-soft">
                    {d.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <a
            href="/academics#accreditation"
            className="mt-12 inline-flex min-h-11 items-center font-semibold text-on-dark underline decoration-gold decoration-2 underline-offset-4 hover:decoration-on-dark"
          >
            Accreditation and operating status
          </a>
        </div>
      </section>

    </>
  );
}
