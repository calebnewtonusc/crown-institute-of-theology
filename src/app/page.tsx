import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { ButtonLink, SignPlate, TextLink } from "@/components/ui";
import {
  about,
  distinctives,
  faculty,
  programs,
  site,
  tuition,
  whyCrown,
} from "@/lib/content";

// Step heights on wide screens, so the four degrees read as a staircase from
// bachelor up to doctorate.
const STEP_HEIGHT = [
  "lg:min-h-80",
  "lg:min-h-88",
  "lg:min-h-96",
  "lg:min-h-104",
];

const heroFacts = [
  {
    big: "10 to 12 months",
    small: "Accelerated track to a Bachelor of Theology",
  },
  {
    big: "No fees",
    small: "No application, credit evaluation or graduation fee",
  },
  { big: "30 days", small: "Full refund of paid tuition if you withdraw" },
];

export default function Home() {
  const founder = faculty[0];
  const teachers = faculty.slice(1);
  const plans = Object.fromEntries(tuition.plans.map((p) => [p.abbr, p]));
  const proverb = about.quotes[1];

  return (
    <>
      {/* Hero */}
      <section className="bg-ink pb-0 pt-8 text-on-dark md:pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Image
              src="/brand/wordmark.png"
              alt="Crown Institute of Theology"
              width={1559}
              height={502}
              priority
              className="-ml-3 h-20 w-auto sm:h-28 md:h-32"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-8 max-w-4xl text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              A school for Kingdom New Covenant studies.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark-soft md:text-xl">
              An online Bible school and seminary. {site.heroSub}, from a
              Bachelor of Theology to a Doctor of Theology.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/application" tone="dark">
                Apply now
              </ButtonLink>
              <ButtonLink href="#degrees" variant="secondary" tone="dark">
                See the four degrees
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-t-2 border-on-dark/25 md:mt-20">
          <dl className="mx-auto grid max-w-6xl sm:grid-cols-3">
            {heroFacts.map((f, i) => (
              <div
                key={f.big}
                className={`px-4 py-6 sm:px-6 lg:px-8 ${
                  i > 0
                    ? "border-t-2 border-on-dark/25 sm:border-l-2 sm:border-t-0"
                    : ""
                }`}
              >
                <dt className="text-2xl font-bold text-on-dark">{f.big}</dt>
                <dd className="mt-1 text-[15px] leading-snug text-on-dark-soft">
                  {f.small}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The price, said plainly */}
      <section className="border-b-2 border-ink bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xl font-bold text-ink-soft">
              A full Bachelor of Theology for
            </p>
            <p className="mt-2 text-[6rem] font-bold leading-none tracking-tighter text-ink sm:text-[9rem] md:text-[11rem]">
              $900
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Prepaid, or $100 a month for 12 months. One price for all 90
              credits, and generous scholarships for students living in
              economically depressed nations.
            </p>
            <div className="mt-8">
              <TextLink href="/tuition">Tuition for every degree</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Degree staircase */}
      <section
        id="degrees"
        className="scroll-mt-16 border-b-2 border-ink bg-paper-2 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
              From bachelor to doctorate.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Once you enroll, we build a program around your background, your
              biblical interests and your calling.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
            {programs.map((p, i) => {
              const plan = plans[p.abbr];
              return (
                <StaggerItem key={p.slug}>
                  <Link
                    href={`/academics#${p.slug}`}
                    className={`group flex h-full flex-col justify-between rounded-[3px] border-2 border-ink bg-paper p-6 shadow-hard transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-1 hover:shadow-hard-lg active:translate-x-1 active:translate-y-1 active:shadow-none ${STEP_HEIGHT[i]}`}
                  >
                    <div>
                      <p className="text-sm font-bold text-ink-faint">
                        Step {i + 1}
                      </p>
                      <p className="mt-3 text-4xl font-bold tracking-tight text-ink">
                        {p.abbr}
                      </p>
                      <h3 className="mt-2 text-lg font-bold leading-snug text-ink">
                        {p.degree}
                      </h3>
                      <p className="mt-1 text-[15px] text-ink-soft">
                        {p.credits}
                        {plan ? `, ${plan.price} ${plan.priceNote}` : ""}
                      </p>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 font-bold text-ink underline decoration-gold decoration-2 underline-offset-[6px]">
                      See the courses
                      <ArrowRight
                        aria-hidden
                        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Why Crown */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
              {whyCrown.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {whyCrown.intro}
            </p>
          </Reveal>

          <ol className="mt-12 grid border-t-2 border-ink md:grid-cols-2 md:gap-x-12">
            {whyCrown.points.map((point, i) => (
              <li key={point} className="flex gap-5 border-b-2 border-ink py-6">
                <span className="w-10 shrink-0 text-3xl font-bold leading-none text-ink">
                  {i + 1}
                </span>
                <p className="text-[17px] leading-relaxed text-ink">{point}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Doctrinal distinctives */}
      <section className="bg-royal py-20 text-on-dark md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SignPlate tone="dark">What we teach</SignPlate>
            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              The Kingdom of God and the New Covenant.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-on-dark-soft">
              {distinctives.intro}
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-px border-2 border-on-dark/30 bg-on-dark/30 md:grid-cols-3">
            {distinctives.items.map((d, i) => (
              <StaggerItem key={d.name} className="bg-royal p-6 md:p-8">
                <p className="text-5xl font-bold leading-none text-on-dark/40">
                  {i + 1}
                </p>
                <h3 className="mt-5 text-xl font-bold">{d.name}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-on-dark-soft">
                  {d.text}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-10">
            <TextLink href="/about#statement-of-faith" tone="dark">
              Read the Statement of Faith
            </TextLink>
          </Reveal>
        </div>
      </section>

      {/* Founder and faculty */}
      <section className="border-b-2 border-ink bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[2fr_3fr] md:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] border-2 border-ink shadow-hard-lg">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <SignPlate>Founder and President</SignPlate>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink md:text-5xl">
              {founder.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Studied Scripture at Moody Bible Institute and earned his D.Min.
              from Vision International University. He teaches classes and will
              be your guide as you study with the other professors.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-lg font-bold text-ink">
              Teaching alongside him
            </p>
          </Reveal>
          <StaggerGroup className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {teachers.map((t) => (
              <StaggerItem key={t.name}>
                <Link
                  href="/faculty"
                  className="group block rounded-[3px] border-2 border-ink bg-paper-2 transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard"
                >
                  <div className="relative aspect-[4/3] border-b-2 border-ink">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="p-3 text-[15px] font-bold leading-snug text-ink">
                    {t.name}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-8">
            <TextLink href="/faculty">Meet the faculty</TextLink>
          </Reveal>
        </div>
      </section>

      {/* Proverb */}
      <section className="bg-ink py-24 text-on-dark md:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <blockquote className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              &ldquo;{proverb.text}&rdquo;
            </blockquote>
            <p className="mt-6 text-lg text-on-dark-soft">
              {proverb.author}, Proverbs 25:2
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final call */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">
              Invest in yourself.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Send your name, address and email to begin. It&rsquo;s time to
              start.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/application">Apply now</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Ask a question
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
