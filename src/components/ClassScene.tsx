"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  transform,
  type MotionValue,
} from "framer-motion";
import { Play } from "lucide-react";

function useFade(
  p: MotionValue<number>,
  input: number[],
  output: number[],
) {
  return useTransform(p, (v) => transform(v, input, output));
}

// One class, start to finish, on one desk. The lecture plays, the textbook
// opens, the paper gets written and comes back marked. Every object moves on
// the same scroll value, so nothing swaps in like a slide.

const steps = [
  {
    word: "Watch",
    line: "Every class is a set of video lectures. Watch them whenever you have time.",
    range: [0, 0.32],
  },
  {
    word: "Read",
    line: "Read the textbook or two assigned for the class.",
    range: [0.32, 0.64],
  },
  {
    word: "Write",
    line: "Write a paper and send it in. Dr. Newton reads it and writes back.",
    range: [0.64, 1],
  },
] as const;

function Caption({ p, i }: { p: MotionValue<number>; i: number }) {
  const [a, b] = steps[i].range;
  const first = i === 0;
  const last = i === steps.length - 1;
  const opacity = useFade(
    p,
    [a, a + 0.04, b - 0.04, b],
    [first ? 1 : 0, 1, 1, last ? 1 : 0],
  );
  const y = useTransform(p, [a, a + 0.04], [first ? 0 : 16, 0]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 top-0">
      <p className="text-5xl font-bold tracking-tight text-ink md:text-7xl">
        {steps[i].word}
      </p>
      <p className="mt-4 max-w-sm text-lg leading-relaxed text-ink-soft md:text-xl">
        {steps[i].line}
      </p>
    </motion.div>
  );
}

function Tick({ p, i }: { p: MotionValue<number>; i: number }) {
  const [a] = steps[i].range;
  const scaleX = useTransform(p, [a, a + 0.04], [0, 1]);
  return (
    <span className="block h-[3px] w-10 overflow-hidden bg-ink/15">
      <motion.span
        style={{ scaleX }}
        className="block h-full origin-left bg-royal"
      />
    </span>
  );
}

function PaperLine({
  p,
  at,
  w,
}: {
  p: MotionValue<number>;
  at: number;
  w: string;
}) {
  const scaleX = useTransform(p, [at, at + 0.035], [0, 1]);
  return (
    <motion.div
      style={{ scaleX, width: w }}
      className="h-1.5 origin-left rounded bg-ink/25"
    />
  );
}

export function ClassScene({
  lectureImage,
  bookCover,
}: {
  lectureImage: string;
  bookCover: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Laptop: plays, then steps back as the book arrives.
  const lapX = useTransform(p, [0.3, 0.42], ["0%", "-30%"]);
  const lapScale = useTransform(p, [0.3, 0.42], [1, 0.62]);
  const lapOpacity = useFade(
    p,
    [0.3, 0.42, 0.62, 0.72],
    [1, 0.55, 0.55, 0.2],
  );
  const progress = useTransform(p, [0.03, 0.3], ["0%", "100%"]);
  const playOpacity = useFade(p, [0.02, 0.06], [1, 0]);

  // Book: slides in, cover swings open, then steps back for the paper.
  const bookX = useTransform(
    p,
    [0.3, 0.42, 0.62, 0.72],
    ["90%", "22%", "22%", "34%"],
  );
  const bookOpacity = useFade(p, [0.3, 0.4, 0.62, 0.72], [0, 1, 1, 0.3]);
  const bookScale = useTransform(p, [0.62, 0.72], [1, 0.7]);
  const coverTurn = useTransform(p, [0.44, 0.58], [0, -165]);

  // Paper: rises, fills with writing, comes back marked.
  const paperY = useTransform(p, [0.62, 0.72], ["120%", "0%"]);
  const paperOpacity = useFade(p, [0.6, 0.64], [0, 1]);
  const stampScale = useTransform(p, [0.86, 0.9], [1.8, 1]);
  const stampOpacity = useFade(p, [0.86, 0.9], [0, 1]);
  const nextOpacity = useFade(p, [0.92, 0.96], [0, 1]);
  const nextY = useTransform(p, [0.92, 0.96], [12, 0]);

  return (
    <section
      ref={ref}
      aria-label="How one class works"
      className="relative border-t border-ink/15 bg-paper-2"
      style={{ height: "420svh" }}
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <div>
            <p className="text-[15px] font-semibold text-ink-soft">
              How one class works
            </p>
            <div className="mt-3 flex gap-2">
              {steps.map((_, i) => (
                <Tick key={i} p={p} i={i} />
              ))}
            </div>
            <div className="relative mt-6 h-40 md:h-56">
              {steps.map((_, i) => (
                <Caption key={i} p={p} i={i} />
              ))}
            </div>
          </div>

          {/* The desk */}
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[760px]">
            {/* Laptop with the lecture */}
            <motion.div
              style={{ x: lapX, scale: lapScale, opacity: lapOpacity }}
              className="absolute inset-x-[6%] top-[8%]"
            >
              <div className="rounded-t-xl border-[10px] border-b-[14px] border-ink bg-ink">
                <div className="relative aspect-video overflow-hidden rounded-sm bg-ink">
                  <Image
                    src={lectureImage}
                    alt="Dr. Stan Newton teaching"
                    fill
                    sizes="(min-width: 768px) 520px, 90vw"
                    className="object-cover object-[50%_25%]"
                  />
                  <motion.div
                    style={{ opacity: playOpacity }}
                    className="absolute inset-0 flex items-center justify-center bg-ink/30"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90">
                      <Play
                        className="ml-1 h-6 w-6 text-ink"
                        fill="currentColor"
                      />
                    </span>
                  </motion.div>
                  <div className="absolute inset-x-0 bottom-0 bg-ink/80 px-3 pb-2 pt-1.5">
                    <p className="truncate text-[13px] text-on-dark">
                      Introduction to the Kingdom: The Messiah&apos;s Reign
                    </p>
                    <div className="mt-1.5 h-1 rounded bg-on-dark/25">
                      <motion.div
                        style={{ width: progress }}
                        className="h-full rounded bg-gold"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-[-6%] h-3 rounded-b-xl bg-ink/80" />
            </motion.div>

            {/* The textbook */}
            <motion.div
              style={{ x: bookX, opacity: bookOpacity, scale: bookScale }}
              className="absolute left-[18%] top-[6%] aspect-[2/3] w-[38%] [perspective:1200px]"
            >
              <div className="absolute inset-0 rounded-sm bg-paper p-[10%] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)]">
                <p className="text-[clamp(9px,1.4vw,13px)] font-bold text-ink">
                  Chapter 1
                </p>
                <div className="mt-2 space-y-1.5">
                  {[96, 88, 92, 70, 94, 84, 90, 60].map((w, i) => (
                    <div
                      key={i}
                      className="h-1 rounded bg-ink/20"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              </div>
              <motion.div
                style={{ rotateY: coverTurn }}
                className="absolute inset-0 origin-left [backface-visibility:hidden] [transform-style:preserve-3d]"
              >
                <Image
                  src={bookCover}
                  alt="Kingdom First, Volume I, by Stan Newton"
                  fill
                  sizes="240px"
                  className="rounded-sm object-cover"
                />
              </motion.div>
            </motion.div>

            {/* The paper */}
            <motion.div
              style={{ y: paperY, opacity: paperOpacity }}
              className="absolute bottom-[2%] left-[22%] right-[8%] top-[4%] rounded-sm bg-paper p-[6%] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)]"
            >
              <p className="text-[13px] font-semibold text-ink-soft">Paper</p>
              <p className="mt-1 text-lg font-bold text-ink md:text-xl">
                Christus Victor
              </p>
              <div className="mt-4 space-y-2.5">
                <PaperLine p={p} at={0.73} w="100%" />
                <PaperLine p={p} at={0.755} w="92%" />
                <PaperLine p={p} at={0.78} w="97%" />
                <PaperLine p={p} at={0.805} w="84%" />
                <PaperLine p={p} at={0.83} w="62%" />
              </div>
              <motion.div
                style={{ scale: stampScale, opacity: stampOpacity }}
                className="absolute bottom-[22%] right-[8%] rotate-[-8deg] rounded-full border-[3px] border-[#a3262a] px-4 py-2 text-center text-[#a3262a]"
              >
                <p className="text-[15px] font-bold leading-tight">Reviewed</p>
                <p className="text-[12px] leading-tight">Dr. Newton</p>
              </motion.div>
              <motion.p
                style={{ opacity: nextOpacity, y: nextY }}
                className="absolute bottom-[6%] left-[6%] text-[14px] font-semibold text-royal"
              >
                Next class: The Book of Hebrews
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
