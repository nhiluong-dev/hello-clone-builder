import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get Hello — Redefining Social Connections" },
      {
        name: "description",
        content:
          "Get Hello is a leading social and entertainment platform company, building apps that foster meaningful connections across diverse communities worldwide.",
      },
      { property: "og:title", content: "Get Hello — Redefining Social Connections" },
      {
        property: "og:description",
        content:
          "Building apps that foster meaningful connections across diverse communities worldwide.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Who We Are", href: "#about" },
  { label: "Our Brands", href: "#brands" },
  { label: "Careers", href: "#careers" },
  { label: "Trust & Safety", href: "#trust" },
  { label: "Contact", href: "#contact" },
  { label: "Investor Relations", href: "#investors" },
];

const stats = [
  { value: "350M+", label: "Messages sent daily" },
  { value: "1.3B+", label: "Registered users" },
  { value: "20M+", label: "Matches across apps" },
  { value: "100,000+", label: "Live streaming hours daily" },
  { value: "300,000+", label: "Voice chatroom hours daily" },
  { value: "1,300+", label: "Employees worldwide" },
];

const brands = [
  {
    name: "Momo",
    tagline: "China's leading location-based social platform.",
  },
  {
    name: "TanTan",
    tagline: "Discover new friends through smart matching.",
  },
  {
    name: "Happn",
    tagline: "Reconnect with people you've crossed paths with.",
  },
  {
    name: "Coffee Meets Bagel",
    tagline: "Thoughtful dating for meaningful relationships.",
  },
];

const milestones = [
  { year: "2011", text: "Starting with a team of 4, we launched our first location-based social app." },
  { year: "2012", text: "Completed Series B at a US$100M valuation. Our flagship app surpassed 10M users in its first year." },
  { year: "2014", text: "Listed on NASDAQ, becoming one of the first global mobile social platforms to IPO." },
  { year: "2018", text: "Acquired TanTan, expanding into smart matching and dating." },
  { year: "2021", text: "Crossed 1 billion registered users across the group's portfolio of apps." },
  { year: "2024", text: "Acquired Happn and Coffee Meets Bagel, becoming a global leader in social discovery." },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M12 2 14.5 9.5 22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-[0.95] font-black tracking-tight text-foreground">
        <span className="text-[13px]">CONNECT</span>
        <span className="text-[13px]">GROUP</span>
      </span>
    </a>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[var(--surface-darker)] text-white">
        <img
          src={heroImage}
          alt="People connecting through their phones at night"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-32 md:py-48 lg:py-56">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Get Hello
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            To discover friends you haven&apos;t met yet.
          </h1>
          <p className="mt-8 max-w-2xl text-base text-white/75 md:text-lg">
            We build platforms that bring people together — across cities, languages and
            cultures — through chat, live streaming, voice rooms and dating.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#brands"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore our brands
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/30 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Who we are
            </a>
          </div>
        </div>
      </section>

      {/* MISSION + STATS */}
      <section id="about" className="border-b border-border bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Mission
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Redefining Social Connections.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                We&apos;re here to revolutionize digital connections by seamlessly blending
                technology with human experiences. We build impactful platforms that foster
                meaningful connections across diverse communities — making it easier for
                people to meet, share moments, and build relationships that matter.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-8 md:p-10">
                <div className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="bg-[var(--surface-darker)] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Brands
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                A family of apps connecting millions every day.
              </h2>
            </div>
            <a
              href="#brands"
              className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Learn more →
            </a>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group flex flex-col bg-[var(--surface-darker)] p-8 transition-colors hover:bg-[var(--surface-dark)]"
              >
                <div className="grid h-20 w-20 place-items-center rounded-sm bg-white/5 text-2xl font-black text-white transition-colors group-hover:bg-primary">
                  {b.name.charAt(0)}
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{b.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{b.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Milestones
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            More than a decade of building meaningful connections.
          </h2>

          <ol className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m) => (
              <li key={m.year} className="border-t border-border pt-6">
                <div className="text-4xl font-semibold tracking-tight text-primary">
                  {m.year}
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section id="careers" className="border-y border-border bg-secondary py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Build the future of social with us.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              We&apos;re hiring across engineering, product, design and operations in
              offices worldwide.
            </p>
          </div>
          <a
            href="#careers"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View open roles
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[var(--surface-darker)] py-16 text-white/70">
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
                { title: "Company", links: ["Who We Are", "Our Brands", "Careers"] },
                { title: "Resources", links: ["Trust & Safety", "Newsroom", "Sustainability"] },
                { title: "Investors", links: ["Financials", "Filings", "Governance"] },
                { title: "Contact", links: ["Press", "Partnerships", "Support"] },
              ].map((col) => (
                <div key={col.title}>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    {col.title}
                  </div>
                  <ul className="mt-4 space-y-3 text-sm">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="transition-colors hover:text-primary">
                          {l}
                        </a>
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
    </div>
  );
}
