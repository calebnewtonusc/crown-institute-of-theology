import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClassScene } from "@/components/ClassScene";
import { WorldMap, type MapTeacher } from "@/components/WorldMap";
import { ButtonLink } from "@/components/ui";
import { about, faculty, tuition } from "@/lib/content";

// Real covers, pulled by ISBN on 2026-11-17. Each is a book by Dr. Stan
// Newton sold under his name.
// Each degree's real enrollment page on the current WordPress site, where
// Stripe takes payment (Dr. Newton, 2026-11-17: "I use Stripe"). The doctor
// page covers both the D.Min. and the Th.D.
const ENROLL: Record<string, string> = {
  "B.Th.": "https://crowninstituteoftheology.com/memberships-for-bachelor/",
  "M.T.S.": "https://crowninstituteoftheology.com/memberships-for-masters/",
  "D.Min.": "https://crowninstituteoftheology.com/memberships-for-doctor/",
  "Th.D.": "https://crowninstituteoftheology.com/memberships-for-doctor/",
};


// Where each teacher serves, from their bios in lib/content.ts.
const PLACES: Record<string, Omit<MapTeacher, "name" | "image">> = {
  "Dr. Stan Newton": { place: "Dr. Newton, Washington", lat: 47.25, lng: -122.44 },
  "Dr. Lynn Hiles": { place: "Dr. Hiles, United States", lat: 39.5, lng: -80 },
  "Dr. Nikola Dimitrov": { place: "Dr. Dimitrov, Bulgaria", lat: 42.5, lng: 27.47 },
  "Adam Morris": { place: "Adam Morris, Russia", lat: 68.97, lng: 33.07 },
  "Peter Seth Neuberger": { place: "Peter Neuberger, Rwanda", lat: -1.94, lng: 29.87 },
  "Dr. Martin Trench": { place: "Dr. Trench, Canada", lat: 53.55, lng: -113.49 },
};

const books = [
  { src: "/books/kingdom-first-1.jpg", title: "Kingdom First, Volume I" },
  { src: "/books/kingdom-first-2.jpg", title: "Kingdom First, Volume II" },
  { src: "/books/our-rich-root.png", title: "Our Rich Root" },
  { src: "/books/kingdom-communion.jpg", title: "Kingdom Communion" },
  { src: "/books/breakfast-in-tel-aviv.jpg", title: "Breakfast in Tel Aviv" },
];

export default function Home() {
  const founder = faculty[0];
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
              An online Bible school and seminary for Kingdom and New Covenant
              studies. Watch the lectures, read the books, write the paper, and
              Dr. Newton reads it himself.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#degrees">Apply</ButtonLink>
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

      <ClassScene
        lectureImage={founder.image}
        bookCover="/books/kingdom-first-1.jpg"
      />

      {/* His books, on a shelf */}
      <section className="overflow-hidden bg-paper pb-0 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            He wrote the books you&apos;ll read.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ink-soft">
            Dr. Newton has spent decades writing on the kingdom and the
            covenant. His books are part of the coursework.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
          <div className="flex items-end gap-3 overflow-x-auto pb-0 sm:gap-6 md:justify-center md:overflow-visible">
            {books.map((b, i) => (
              <figure
                key={b.src}
                className="group relative shrink-0"
                style={{ width: `clamp(120px, ${i === 0 ? 22 : 17}vw, ${i === 0 ? 240 : 190}px)` }}
              >
                <div className="relative aspect-[2/3] origin-bottom overflow-hidden rounded-[2px] shadow-[0_22px_30px_-18px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:-translate-y-3 motion-reduce:transition-none">
                  <Image
                    src={b.src}
                    alt={b.title}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
          {/* The shelf */}
          <div className="h-4 rounded-sm bg-[#8a6a45] shadow-[0_10px_18px_-8px_rgba(0,0,0,0.45)]" />
          <div className="mx-3 h-2 bg-[#6e5235]" />
        </div>
        <div className="h-16 md:h-24" />
      </section>

      {/* Degrees, as a staircase */}
      <section id="degrees" className="scroll-mt-20 bg-paper-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Start with a bachelor&apos;s. Go all the way to a doctorate.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            No application fee. No graduation fee. Full refund within 30 days.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:items-end md:gap-4">
            {tuition.plans.map((p, i) => (
              <a
                key={p.abbr}
                href={ENROLL[p.abbr]}
                className={`group flex flex-col justify-between rounded-md p-5 transition-colors ${
                  i === 3
                    ? "bg-royal text-on-dark hover:bg-ink"
                    : "bg-paper text-ink hover:bg-gold"
                }`}
                style={{ minHeight: `${10 + i * 3}rem` }}
              >
                <div>
                  <p className={`text-[15px] font-semibold ${i === 3 ? "text-on-dark-soft" : "text-ink-soft"}`}>
                    {p.abbr} · {p.credits}
                  </p>
                  <p className="mt-1 text-xl font-bold leading-tight">{p.degree}</p>
                </div>
                <div className="mt-6 flex items-end justify-between gap-2">
                  <p className="text-3xl font-bold tracking-tight md:text-4xl">{p.price}</p>
                  <span className="flex items-center gap-1 text-[15px] font-semibold">
                    Enroll
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/academics" className="inline-flex items-center gap-2 font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 hover:decoration-ink">
              See every course in each degree
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Around the world */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Taught from Washington. Studied around the world.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Dr. Newton teaches most classes himself. Pastors and missionaries
            from Bulgaria, Russia, Rwanda, Canada and the U.S. teach the rest.
            Students have joined from India, the Netherlands, Australia and
            Congo.
          </p>
          <div className="mt-10 md:mt-14">
            <WorldMap
              teachers={faculty.map((t) => ({
                name: t.name,
                image: t.image,
                ...PLACES[t.name],
              }))}
            />
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
            {faculty.map((t) => (
              <li key={t.name} className="flex items-center gap-3">
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-ink">
                  <Image src={t.image} alt="" fill sizes="44px" className="object-cover" />
                </span>
                <span className="text-[15px] leading-tight">
                  <span className="block font-bold text-ink">{t.name}</span>
                  <span className="text-ink-soft">{PLACES[t.name].place.split(", ")[1]}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-ink-soft">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-gold" /> Where students have studied from
            </span>
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-ink bg-paper-2" /> Where the teachers serve
            </span>
            <Link href="/faculty" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 hover:decoration-ink">
              Meet the teachers
            </Link>
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="relative overflow-hidden bg-gold/25 py-24 md:py-36">
        <Image
          src="/brand/crown.png"
          alt=""
          width={900}
          height={600}
          className="pointer-events-none absolute left-1/2 top-1/2 w-[120%] max-w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-5xl">
            &ldquo;{proverb.text}&rdquo;
          </p>
          <p className="mt-4 text-lg text-ink-soft">Proverbs 25:2</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/application">Apply to Crown Institute</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Ask Dr. Newton a question
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
