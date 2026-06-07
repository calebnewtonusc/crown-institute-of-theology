import Link from "next/link";
import { nav, site } from "@/lib/content";

const programLinks = [
  { label: "Bachelor of Theology", href: "/academics#bachelor-of-theology" },
  {
    label: "Master of Theological Studies",
    href: "/academics#master-of-theological-studies",
  },
  { label: "Doctor of Ministry", href: "/academics#doctor-of-ministry" },
  { label: "Doctor of Theology", href: "/academics#doctor-of-theology" },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-[15px] font-semibold tracking-tight text-ink">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
              Programs
            </p>
            <ul className="mt-4 space-y-2.5">
              {programLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.emails.primary}`}
                  className="text-sm text-ink-soft hover:text-ink transition-colors break-all"
                >
                  {site.emails.primary}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.emails.stan}`}
                  className="text-sm text-ink-soft hover:text-ink transition-colors break-all"
                >
                  {site.emails.stan}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line/70 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-faint">
            All rights reserved. Crown Institute of Theology &copy;{" "}
            {site.copyrightYear}.
          </p>
          <p className="text-xs text-ink-faint">
            Approved by the State of Washington, U.S.A. to grant religious
            degrees.
          </p>
        </div>
      </div>
    </footer>
  );
}
