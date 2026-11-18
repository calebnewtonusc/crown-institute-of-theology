import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { about, faculty, tuition } from "@/lib/content";

// Real covers, pulled by ISBN on 2026-11-17. Each is a book by Dr. Stan
// Newton sold under his name.
const books = [
  { src: "/books/kingdom-first-1.jpg", title: "Kingdom First, Volume I" },
  { src: "/books/kingdom-first-2.jpg", title: "Kingdom First, Volume II" },
  { src: "/books/our-rich-root.png", title: "Our Rich Root" },
  { src: "/books/kingdom-communion.jpg", title: "Kingdom Communion" },
  { src: "/books/breakfast-in-tel-aviv.jpg", title: "Breakfast in Tel Aviv" },
];

export default function Home() {
  const founder = faculty[0];
  const teachers = faculty.slice(1);
  const proverb = about.quotes[1];

  return (
    <>
      {/* The man who teaches it */}
      <section className="bg-paper pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Study the kingdom of God with Dr. Stan Newton.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              An online Bible school and seminary for Kingdom New Covenant
              studies. Watch the lectures, read the books, write the paper, and
              Dr. Newton reads it himself.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/application">Apply</ButtonLink>
              <ButtonLink href="/academics" variant="secondary">
                See the courses
              </ButtonLink>
            </div>
          </div>
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-paper-2">
              <Image
                src={founder.image}
                alt="Dr. Stan Newton"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[15px] text-ink-soft">
              Dr. Stan Newton, founder. Moody Bible Institute, D.Min. from
              Vision International University.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* What one class actually is */}
      <section className="border-t border-ink/15 bg-paper-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            How one class works
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <div className="relative aspect-video overflow-hidden rounded-md bg-ink">
                <Image
                  src={founder.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90">
                    <Play
                      className="ml-1 h-6 w-6 text-ink"
                      fill="currentColor"
                    />
                  </span>
                </div>
                <p className="absolute inset-x-0 bottom-0 bg-ink/80 px-3 py-2 text-[14px] text-on-dark">
                  Introduction to the Kingdom: The Messiah&apos;s Reign
                </p>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">Watch</h3>
              <p className="mt-1 text-ink-soft">
                Each class is a set of video lectures. Watch on your own time.
              </p>
            </div>
            <div>
              <div className="flex aspect-video items-end justify-center gap-3 overflow-hidden rounded-md bg-paper px-4 pt-4">
                {books.slice(0, 2).map((b) => (
                  <div key={b.src} className="relative aspect-[2/3] h-[92%]">
                    <Image
                      src={b.src}
                      alt={b.title}
                      fill
                      sizes="160px"
                      className="rounded-sm object-cover"
                    />
                  </div>
                ))}
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">Read</h3>
              <p className="mt-1 text-ink-soft">
                Read the textbook or two assigned for the class.
              </p>
            </div>
            <div>
              <div className="flex aspect-video flex-col rounded-md bg-paper p-5">
                <p className="text-[13px] font-semibold text-ink-soft">Paper</p>
                <p className="mt-1 font-bold text-ink">Christus Victor</p>
                <div className="mt-3 space-y-2">
                  <div className="h-1.5 w-full rounded bg-ink/15" />
                  <div className="h-1.5 w-11/12 rounded bg-ink/15" />
                  <div className="h-1.5 w-full rounded bg-ink/15" />
                  <div className="h-1.5 w-3/4 rounded bg-ink/15" />
                </div>
                <p className="mt-auto self-end text-[13px] font-semibold text-royal">
                  Reviewed by Dr. Newton
                </p>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">Write</h3>
              <p className="mt-1 text-ink-soft">
                Send in a paper. Dr. Newton reviews it and writes back, then you
                move to the next class.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* His books */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Taught by the man who wrote the books
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {books.map((b) => (
              <figure key={b.src}>
                <div className="relative aspect-[2/3] overflow-hidden rounded-sm bg-paper-2">
                  <Image
                    src={b.src}
                    alt={b.title}
                    fill
                    sizes="(min-width: 768px) 18vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-[15px] text-ink-soft">
                  {b.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Degrees, price on the same line */}
      <section className="border-t border-ink/15 bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Four degrees
          </h2>
          <ul className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
            {tuition.plans.map((p) => (
              <li key={p.abbr}>
                <Link
                  href="/academics"
                  className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-2 py-5 transition-colors hover:bg-paper-2 focus-visible:bg-paper-2"
                >
                  <span className="text-xl font-bold text-ink">
                    {p.degree}{" "}
                    <span className="font-normal text-ink-soft">
                      {p.credits}
                    </span>
                  </span>
                  <span className="flex items-center gap-2 text-lg text-ink">
                    {p.price}{" "}
                    <span className="text-ink-soft">{p.priceNote}</span>
                    <ArrowRight className="h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-ink-soft">
            No application fee, no graduation fee. Full refund within 30 days.
          </p>
        </div>
      </section>

      {/* The teachers */}
      <section className="bg-paper-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Also teaching
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {teachers.map((t) => (
              <Link key={t.name} href="/faculty" className="group">
                <div className="relative aspect-square overflow-hidden rounded-md bg-paper">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(min-width: 768px) 22vw, 45vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-3 font-bold text-ink group-hover:underline">
                  {t.name}
                </p>
                <p className="text-[15px] text-ink-soft">{t.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="bg-ink py-20 text-on-dark md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-2xl leading-snug md:text-3xl">
            &ldquo;{proverb.text}&rdquo;
          </p>
          <p className="mt-3 text-on-dark-soft">{proverb.author}</p>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/application" tone="dark">
              Apply to Crown Institute
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
