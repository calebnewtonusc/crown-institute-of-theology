"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/80 backdrop-blur-xl border-b border-line/70"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Crown Institute of Theology, home"
          >
            <Image
              src="/brand/crown.png"
              alt=""
              width={558}
              height={420}
              className="h-7 w-auto object-contain"
              priority
            />
            <span className="text-[15px] font-semibold tracking-tight text-ink hidden sm:inline">
              Crown Institute
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-7">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[13px] tracking-tight transition-colors duration-200 hover:text-ink ${
                      active ? "text-ink font-medium" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Link
              href="/application"
              className="rounded-full bg-accent px-4 py-1.5 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
            >
              Apply
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 -mr-2 text-ink cursor-pointer"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 pt-2 space-y-1">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-lg tracking-tight transition-colors ${
                    active
                      ? "bg-surface text-ink font-medium"
                      : "text-ink-soft hover:bg-surface hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href="/application"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-accent px-4 py-3 text-center text-base font-medium text-white"
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
