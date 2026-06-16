import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import { SiteLayout } from "@/components/site/Layout";
import { brands } from "@/components/site/brands";

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

const stats = [
  { value: "350M+", label: "Messages sent daily" },
  { value: "1.3B+", label: "Registered users" },
  { value: "20M+", label: "Matches across apps" },
  { value: "100,000+", label: "Live streaming hours daily" },
  { value: "300,000+", label: "Voice chatroom hours daily" },
  { value: "1,300+", label: "Employees worldwide" },
];

const milestones = [
  { year: "2011", text: "Starting with a team of 4, we launched our first location-based social app." },
  { year: "2012", text: "Completed Series B at a US$100M valuation. Our flagship app surpassed 10M users in its first year." },
  { year: "2014", text: "Listed on NASDAQ, becoming one of the first global mobile social platforms to IPO." },
  { year: "2018", text: "Acquired Crossed, expanding into proximity-based dating." },
  { year: "2021", text: "Crossed 1 billion registered users across the group's portfolio of apps." },
  { year: "2024", text: "Acquired BrewMatch and launched Pebble, becoming a global leader in social discovery." },
];

function Index() {
  return (
    <SiteLayout>
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
            <Link
              to="/brands"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore our brands
            </Link>
            <Link
              to="/who-we-are"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/30 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Who we are
            </Link>
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
            <Link
              to="/brands"
              className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Learn more →
            </Link>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {brands.slice(0, 4).map((b) => (
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
          <Link
            to="/careers"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View open roles
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
