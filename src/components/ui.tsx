import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

// Apple pill button: solid blue primary, light secondary.
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition-all duration-200 cursor-pointer active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-hover shadow-sm"
      : "bg-surface text-ink hover:bg-[#ebebed] border border-line";
  const external = href.startsWith("http") || href.startsWith("mailto:");
  if (external) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

// Apple text link with chevron, e.g. "Learn more >"
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const cls = `group inline-flex items-center gap-0.5 text-[17px] text-accent-link hover:underline underline-offset-2 transition-colors ${className}`;
  const inner = (
    <>
      {children}
      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </>
  );
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
      {children}
    </p>
  );
}

export function Section({
  children,
  className = "",
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "surface";
}) {
  const bg = tone === "surface" ? "bg-surface" : "bg-background";
  return (
    <section className={`${bg} py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
