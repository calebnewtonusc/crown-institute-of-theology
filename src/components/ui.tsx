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
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] border-2 px-6 py-3 text-[17px] font-bold transition-[transform,box-shadow,background-color,color] duration-150 cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none";
  const shadow =
    tone === "dark"
      ? "shadow-hard-paper hover:shadow-hard-paper-lg"
      : "shadow-hard hover:shadow-hard-lg";
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

// Every inner page opens on the same ink band so the nav always sits on dark.
export function PageHeader({
  label,
  title,
  lead,
  children,
}: {
  label: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink pb-16 pt-10 text-on-dark md:pb-24 md:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SignPlate tone="dark">{label}</SignPlate>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark-soft md:text-xl">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
