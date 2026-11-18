import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Tone = "light" | "dark";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  tone?: Tone;
  className?: string;
};

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

// Signage button: flat gold plate, ink border, hard offset shadow that grows
// on hover and collapses on press, so the press reads as physical.
export function ButtonLink({
  href,
  children,
  variant = "primary",
  tone = "light",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-6 py-3 text-[17px] font-semibold transition-colors duration-150 cursor-pointer active:scale-[0.98]";
  const shadow =
    tone === "dark"
      ? ""
      : "";
  const styles =
    variant === "primary"
      ? `border-ink bg-gold text-ink hover:bg-gold-hover ${shadow}`
      : tone === "dark"
        ? "border-on-dark bg-transparent text-on-dark hover:bg-on-dark hover:text-ink"
        : "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper";
  const cls = `${base} ${styles} ${className}`;
  return isExternal(href) ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

// Inline door: underlined in gold, the underline thickens on hover.
export function TextLink({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const color = tone === "dark" ? "text-on-dark" : "text-ink";
  const cls = `group inline-flex min-h-11 items-center gap-1.5 text-[17px] font-bold ${color} underline decoration-gold decoration-2 underline-offset-[6px] transition-[color,text-decoration-thickness] duration-150 hover:decoration-4 hover:text-gold ${className}`;
  const inner = (
    <>
      {children}
      <ArrowRight
        aria-hidden
        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
      />
    </>
  );
  return isExternal(href) ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

// Wayfinding plate: the small filled sign that names where you are.
export function SignPlate({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  const styles = tone === "dark" ? "bg-on-dark text-ink" : "bg-ink text-paper";
  return (
    <span
      className={`inline-block rounded-[2px] px-2.5 py-1 text-sm font-bold ${styles}`}
    >
      {children}
    </span>
  );
}

// A short opener so each page's own object (the shelf, the receipt, the
// letter, Dr. Newton) sits in the first screen. The earlier split hero, a big
// serif title beside an italic verse under a rule, was the same on every page
// and read as generated (Caleb, 2026-11-17: "Why does this look ai generated,
// and the FF site doesnt").
export function PageHeader({
  title,
  lead,
  verse,
  children,
}: {
  label?: string;
  title: string;
  lead?: string;
  verse?: { text: string; ref: string };
  children?: ReactNode;
}) {
  return (
    <section className="bg-paper pt-10 pb-2 md:pt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="max-w-4xl text-4xl leading-[1.05] text-ink md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {lead}
          </p>
        )}
        {verse && (
          <p className="mt-4 max-w-2xl text-[15px] text-ink-soft">
            <span className="font-serif text-lg italic text-ink">
              &ldquo;{verse.text}&rdquo;
            </span>{" "}
            <span className="whitespace-nowrap font-semibold text-crimson">
              {verse.ref}
            </span>
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
