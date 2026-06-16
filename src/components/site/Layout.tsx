import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const navLinks = [
  { label: "Who We Are", to: "/who-we-are" as const },
  { label: "Our Brands", to: "/brands" as const },
  { label: "Careers", to: "/careers" as const },
  { label: "Contact", to: "/contact" as const },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M12 2 14.5 9.5 22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-[0.95] font-black tracking-tight text-foreground">
        <span className="text-[13px]">GET</span>
        <span className="text-[13px]">HELLO</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--surface-darker)] py-16 text-white/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Redefining social connections through meaningful technology.
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { title: "Company", links: [
                { label: "Who We Are", to: "/who-we-are" as const },
                { label: "Our Brands", to: "/brands" as const },
                { label: "Careers", to: "/careers" as const },
              ] },
              { title: "Resources", links: [
                { label: "Trust & Safety", to: "/" as const },
                { label: "Newsroom", to: "/" as const },
                { label: "Sustainability", to: "/" as const },
              ] },
              { title: "Investors", links: [
                { label: "Financials", to: "/" as const },
                { label: "Filings", to: "/" as const },
                { label: "Governance", to: "/" as const },
              ] },
              { title: "Contact", links: [
                { label: "Press", to: "/contact" as const },
                { label: "Partnerships", to: "/contact" as const },
                { label: "Support", to: "/contact" as const },
              ] },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="transition-colors hover:text-primary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Get Hello. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--surface-darker)] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}