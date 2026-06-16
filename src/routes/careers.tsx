import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Get Hello" },
      {
        name: "description",
        content:
          "Join Get Hello and build the future of social connection. Open roles in engineering, product, design and operations across our global offices.",
      },
      { property: "og:title", content: "Careers — Get Hello" },
      {
        property: "og:description",
        content:
          "Open roles in engineering, product, design and operations across our global offices.",
      },
    ],
  }),
  component: CareersPage,
});

const perks = [
  { title: "Global mobility", body: "Work from any of our 8 offices, or relocate as your career grows." },
  { title: "Equity for all", body: "Every full-time employee shares in the long-term success of the company." },
  { title: "Health & wellbeing", body: "Premium health coverage, mental health support and an annual wellness stipend." },
  { title: "Learning budget", body: "An annual budget for courses, conferences and books — pick what you need." },
  { title: "Flexible time off", body: "Take the time you need, plus a company-wide recharge week every year." },
  { title: "Parental leave", body: "16 weeks fully paid for all new parents, with phased return-to-work." },
];

const openings = [
  { title: "Senior iOS Engineer, HiYo", team: "Engineering", location: "Singapore" },
  { title: "Staff Backend Engineer, Sparkle", team: "Engineering", location: "Remote (EU)" },
  { title: "Product Manager, Aria Live", team: "Product", location: "Tokyo" },
  { title: "Brand Designer", team: "Design", location: "London" },
  { title: "Trust & Safety Lead", team: "Operations", location: "Dublin" },
  { title: "Data Scientist, BrewMatch", team: "Data", location: "New York" },
  { title: "Community Manager, Pebble", team: "Marketing", location: "Berlin" },
  { title: "Recruiting Partner, Engineering", team: "People", location: "Remote (Global)" },
];

function CareersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Careers"
        title="Build the future of social with us."
        description="We're 1,300+ people across 8 offices, building the apps and infrastructure that connect more than a billion users every month."
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Life at Get Hello
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            How we take care of our team.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="bg-background p-8">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Open Roles
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                {openings.length} positions across {new Set(openings.map((o) => o.team)).size} teams.
              </h2>
            </div>
            <Link
              to="/contact"
              className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Don&apos;t see your role? Get in touch →
            </Link>
          </div>

          <ul className="mt-12 divide-y divide-border overflow-hidden rounded-sm border border-border bg-background">
            {openings.map((o) => (
              <li
                key={o.title}
                className="group flex flex-col gap-3 p-6 transition-colors hover:bg-secondary md:flex-row md:items-center md:justify-between md:p-7"
              >
                <div>
                  <div className="text-lg font-semibold text-foreground">{o.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {o.team} · {o.location}
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex h-10 shrink-0 items-center justify-center rounded-sm border border-border px-5 text-sm font-semibold text-foreground transition-colors group-hover:border-primary group-hover:text-primary"
                >
                  Apply →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}