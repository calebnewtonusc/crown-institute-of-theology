"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

// The fixed bar appears once the reader is past the first band (80px) and
// steps aside within 200px of the footer, which repeats the programs and
// contact links anyway.
function useScrollNav() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        y + window.innerHeight >= document.documentElement.scrollHeight - 200;
      setVisible(y > 80 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible;
}

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function Brand({ tone }: { tone: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label="Crown Institute of Theology, home"
      className="group flex min-h-11 shrink-0 items-center gap-2.5"
    >
      <Image
        src="/brand/crown.png"
        alt=""
        width={558}
        height={420}
        className="h-7 w-auto transition-transform duration-150 group-hover:-translate-y-0.5"
        priority
      />
      <span
        className={`text-[17px] font-bold tracking-tight ${
          tone === "dark" ? "text-on-dark" : "text-ink"
        }`}
      >
        Crown Institute
      </span>
    </Link>
  );
}

function Links({
  tone,
  pathname,
}: {
  tone: "dark" | "light";
  pathname: string;
}) {
  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {nav.map((item) => {
        const active = isActive(pathname, item.href);
        const color =
          tone === "dark"
            ? active
              ? "text-on-dark decoration-gold"
              : "text-on-dark-soft decoration-transparent hover:text-on-dark hover:decoration-gold"
            : active
              ? "text-ink decoration-gold"
              : "text-ink-soft decoration-transparent hover:text-ink hover:decoration-gold";
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`inline-flex min-h-11 items-center px-3 text-[15px] font-bold underline decoration-2 underline-offset-[10px] transition-[color,text-decoration-color] duration-150 ${color}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function ApplyButton({ tone }: { tone: "dark" | "light" }) {
  return (
    <Link
      href="/application"
      className={`hidden min-h-11 items-center rounded-[3px] border-2 border-ink bg-gold px-4 text-[15px] font-bold text-ink transition-[transform,box-shadow,background-color] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-gold-hover active:translate-x-0.5 active:translate-y-0.5 active:shadow-none lg:inline-flex ${
        tone === "dark"
          ? "shadow-hard-paper hover:shadow-hard-paper-lg"
          : "shadow-hard hover:shadow-hard-lg"
      }`}
    >
      Apply
    </Link>
  );
}

function MenuButton({
  tone,
  onOpen,
}: {
  tone: "dark" | "light";
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Open menu"
      className={`inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-[3px] border-2 transition-colors duration-150 lg:hidden ${
        tone === "dark"
          ? "border-on-dark text-on-dark hover:bg-on-dark hover:text-ink"
          : "border-ink text-ink hover:bg-ink hover:text-paper"
      }`}
    >
      <Menu className="h-6 w-6" />
    </button>
  );
}

export function Nav() {
  const pathname = usePathname();
  const visible = useScrollNav();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* In-flow header: part of the ink band every page opens on. */}
      <header className="bg-ink">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Brand tone="dark" />
          <Links tone="dark" pathname={pathname} />
          <ApplyButton tone="dark" />
          <MenuButton tone="dark" onOpen={() => setOpen(true)} />
        </nav>
      </header>

      {/* Fixed bar that slides in once the reader scrolls. */}
      <div
        inert={!visible}
        className={`fixed inset-x-0 top-0 z-40 border-b-2 border-ink bg-paper transition-[transform,opacity] duration-300 ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Brand tone="light" />
          <Links tone="light" pathname={pathname} />
          <ApplyButton tone="light" />
          <MenuButton tone="light" onOpen={() => setOpen(true)} />
        </nav>
      </div>

      {/* Full-screen menu for phones and tablets. */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink text-on-dark lg:hidden"
        >
          <div className="flex h-20 items-center justify-between px-4 sm:px-6">
            <Brand tone="dark" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-[3px] border-2 border-on-dark text-on-dark transition-colors duration-150 hover:bg-on-dark hover:text-ink"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex-1 px-4 pb-8 pt-4 sm:px-6">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-on-dark/20">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-16 items-center text-2xl font-bold transition-colors duration-150 hover:text-gold ${
                      active ? "text-gold" : "text-on-dark"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-8">
              <Link
                href="/application"
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-center rounded-[3px] border-2 border-ink bg-gold text-lg font-bold text-ink shadow-hard-paper transition-[background-color,transform,box-shadow] duration-150 hover:bg-gold-hover active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                Apply now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
