import Link from "next/link";
import { programs, site } from "@/lib/content";

// The footer carries only what the nav does not: each degree, the email
// addresses, and the state approval line.
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-ink bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold tracking-tight text-ink">
              {site.name}
            </p>
            <p className="mt-2 text-ink-soft">{site.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-bold text-ink-faint">Degrees</p>
            <ul className="mt-3">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/academics#${p.slug}`}
                    className="inline-flex min-h-11 items-center text-ink underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color] duration-150 hover:decoration-gold"
                  >
                    {p.degree} ({p.abbr})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-ink-faint">Write to us</p>
            <ul className="mt-3">
              {[site.emails.primary, site.emails.stan].map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex min-h-11 items-center break-all text-ink underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color] duration-150 hover:decoration-gold"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t-2 border-ink pt-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>
            Approved by the State of Washington, U.S.A. to grant religious
            degrees.
          </p>
        </div>
      </div>
    </footer>
  );
}
