import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui";
import { faculty } from "@/lib/content";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the authors, pastors, theologians and missionaries who teach at Crown Institute of Theology.",
};

// Where each guest teacher serves, from their own bios.
const serves: Record<string, string> = {
  "Dr. Lynn Hiles": "Traveling ministry since 1980",
  "Dr. Nikola Dimitrov": "Burgas, Bulgaria",
  "Adam Morris": "Murmansk, Russia",
  "Peter Seth Neuberger": "Rwanda, East Africa",
  "Dr. Martin Trench": "Edmonton, Canada",
};

export default function FacultyPage() {
  const [founder, ...guests] = faculty;
  return (
    <>
      <PageHeader
        title="Taught by Dr. Stan Newton."
        lead="Dr. Newton teaches most of the classes himself and reads every paper. Pastors, authors and missionaries teach the rest."
        verse={{
          text: "And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers.",
          ref: "Ephesians 4:11",
        }}
      />

      {/* The founder */}
      <section className="bg-paper-2 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-paper">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-crimson">{founder.title}</p>
            <h2 className="mt-2 text-4xl text-ink md:text-6xl">{founder.name}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink md:text-xl">
              {founder.bio}
            </p>
            <p className="mt-6 text-ink-soft">
              Author of Kingdom First, Our Rich Root, Kingdom Communion and
              Breakfast in Tel Aviv.
            </p>
          </div>
        </div>
      </section>

      {/* Guest teachers */}
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-ink md:text-5xl">Guest teachers</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">
            Each recorded a set of lectures for Crown Institute.
          </p>
          <ul className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
            {guests.map((g) => (
              <li
                key={g.name}
                className="grid gap-5 py-8 sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr_1.6fr] md:gap-10"
              >
                <div className="relative aspect-square w-32 overflow-hidden rounded-full bg-paper-2 sm:w-full">
                  <Image
                    src={g.image}
                    alt={g.name}
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl text-ink md:text-3xl">{g.name}</h3>
                  <p className="mt-1 text-ink-soft">{g.title}</p>
                  <p className="mt-1 font-semibold text-royal">{serves[g.name]}</p>
                </div>
                <p className="leading-relaxed text-ink sm:col-start-2 md:col-start-auto">
                  {g.bio}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
