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
        label={about.heading}
        title="We teach you theology so you can do theology."
      />

      <section className="border-b-2 border-ink bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
          <div className="space-y-6">
            {about.body.map((para) => (
              <Reveal key={para.slice(0, 24)}>
                <p className="text-lg leading-relaxed text-ink md:text-xl">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="space-y-6">
            {[jesus, solomon].map((q) => (
              <figure key={q.author} className="border-l-4 border-ink pl-5">
                <blockquote className="text-xl font-bold leading-snug text-ink">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-ink-soft">
                  {q.author}
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Statement of faith */}
      <section
        id="statement-of-faith"
        className="scroll-mt-16 border-b-2 border-ink bg-paper-2 py-16 md:py-24"
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

          <Reveal className="mt-10 rounded-[3px] border-2 border-ink bg-paper p-6 shadow-hard md:p-10">
            <p className="text-sm font-bold text-ink-faint">
              The Apostles&rsquo; Creed
            </p>
            <div className="mt-4 space-y-4">
              {statementOfFaith.creed.map((line) => (
                <p
                  key={line.slice(0, 24)}
                  className="text-lg leading-relaxed text-ink md:text-xl"
                >
                  {line}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12 max-w-3xl">
            <p className="text-lg font-bold text-ink">
              {statementOfFaith.naeIntro}
            </p>
          </Reveal>
          <ul className="mt-6 grid border-t-2 border-ink md:grid-cols-2 md:gap-x-12">
            {statementOfFaith.nae.map((line) => (
              <li
                key={line.slice(0, 24)}
                className="border-b-2 border-ink py-5 text-[17px] leading-relaxed text-ink"
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
                <span className="w-10 shrink-0 text-4xl font-bold leading-none text-on-dark/40">
                  {i + 1}
                </span>
                <div className="max-w-3xl">
                  <h3 className="text-xl font-bold">{d.name}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-on-dark-soft">
                    {d.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Book */}
      <section className="border-b-2 border-ink bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
          <Reveal>
            <div className="mx-auto w-48 overflow-hidden rounded-[3px] border-2 border-ink shadow-hard-lg sm:w-56 md:mx-0">
              <Image
                src={book.image}
                alt={`Cover of ${book.title} by ${book.author}`}
                width={406}
                height={610}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-sm font-bold text-ink-faint">
              A book by Dr. {book.author}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-5xl">
              {book.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              {book.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Ready to dig deep and be challenged?
            </h2>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <ButtonLink href="/application">Begin today</ButtonLink>
              <TextLink href="/academics#accreditation">
                Accreditation and operating status
              </TextLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
