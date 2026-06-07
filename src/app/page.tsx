import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { ButtonLink, TextLink, Eyebrow } from "@/components/ui";
import { site, whyCrown, programs, faculty, about } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,#eef4ff_0%,#ffffff_60%)]" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-32 text-center">
          <Reveal>
            <Image
              src="/brand/crown.png"
              alt="Crown Institute of Theology"
              width={558}
              height={420}
              priority
              className="mx-auto h-16 w-auto object-contain md:h-20"
            />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-ink-soft">
              Crown Institute of Theology
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-10 text-5xl sm:text-6xl md:text-7xl text-ink">
              A School for Kingdom
              <br />
              New Covenant Studies
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-xl md:text-2xl text-ink-soft leading-relaxed">
              {site.heroSub} Study Scripture deeply, think theologically, and be
              equipped to teach others.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonLink href="/application">Enroll Today</ButtonLink>
              <TextLink href="/academics">Explore the programs</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Crown */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>{whyCrown.heading}</Eyebrow>
            <h2 className="headline mt-4 text-3xl md:text-5xl text-ink">
              Built for those who love to study the Word.
            </h2>
            <p className="mt-5 text-lg md:text-xl text-ink-soft leading-relaxed">
              {whyCrown.intro}
            </p>
          </Reveal>

          <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line/70 bg-line/70 sm:grid-cols-2 lg:grid-cols-3">
            {whyCrown.points.map((point, i) => (
              <StaggerItem
                key={i}
                className="bg-background p-8 transition-colors duration-300 hover:bg-surface-2"
              >
                <span className="text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[17px] leading-relaxed text-ink">
                  {point}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto">
            <Eyebrow>Academics</Eyebrow>
            <h2 className="headline mt-4 text-3xl md:text-5xl text-ink">
              Four degrees. One pursuit.
            </h2>
            <p className="mt-5 text-lg md:text-xl text-ink-soft leading-relaxed">
              From an accelerated bachelor track to a directed research
              doctorate, every program is grounded in biblical exegesis and the
              present reign of Christ.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {programs.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/academics#${p.slug}`}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-line/70 bg-surface-2 p-8 md:p-10 transition-all duration-300 hover:border-line hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {p.abbr}
                      </span>
                      <span className="text-sm text-ink-faint">
                        {p.credits}
                      </span>
                    </div>
                    <h3 className="headline mt-6 text-2xl md:text-[28px] text-ink">
                      {p.degree}
                    </h3>
                    <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">
                      {p.summary}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-0.5 text-[15px] font-medium text-accent-link">
                    View curriculum
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote / about */}
      <section className="bg-ink py-24 md:py-32 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              &ldquo;{about.quotes[1].text}&rdquo;
            </p>
            <p className="mt-6 text-lg text-white/60">
              {about.quotes[1].author}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12">
              <Link
                href="/about"
                className="inline-flex items-center gap-0.5 text-[17px] text-[#2997ff] hover:underline underline-offset-2"
              >
                The story of Crown Institute
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Faculty preview */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Faculty</Eyebrow>
            <h2 className="headline mt-4 text-3xl md:text-5xl text-ink">
              Learn from teachers who live it.
            </h2>
            <p className="mt-5 text-lg md:text-xl text-ink-soft leading-relaxed">
              A team of authors, pastors, and missionaries with broad and
              diverse experience across the nations.
            </p>
          </Reveal>

          <StaggerGroup className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3">
            {faculty.slice(0, 3).map((f) => (
              <StaggerItem key={f.name}>
                <div className="overflow-hidden rounded-3xl bg-background border border-line/70">
                  <div className="relative aspect-[4/5] bg-surface">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[17px] font-semibold text-ink">
                      {f.name}
                    </p>
                    {f.title && (
                      <p className="mt-1 text-sm text-ink-soft">{f.title}</p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-10">
            <TextLink href="/faculty">Meet the full faculty</TextLink>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="display text-4xl md:text-6xl text-ink">
              Invest in yourself.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed">
              Quality theological education at a very low tuition, so more
              students have the opportunity to study. It is time to start. Begin
              today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonLink href="/application">Apply Now</ButtonLink>
              <TextLink href="/tuition">See tuition and scholarships</TextLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
