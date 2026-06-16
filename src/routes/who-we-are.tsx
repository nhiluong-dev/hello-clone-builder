import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — Get Hello" },
      {
        name: "description",
        content:
          "Get Hello builds social and entertainment platforms used by more than a billion people worldwide. Learn about our mission, values and leadership.",
      },
      { property: "og:title", content: "Who We Are — Get Hello" },
      {
        property: "og:description",
        content:
          "Our mission is to redefine social connections by blending technology with human experience.",
      },
    ],
  }),
  component: WhoWeArePage,
});

const values = [
  {
    title: "People first",
    body: "Every product decision starts with the human on the other side of the screen — their safety, their time and their trust.",
  },
  {
    title: "Local at scale",
    body: "We design for the texture of each market we serve, with teams embedded across Asia, Europe and the Americas.",
  },
  {
    title: "Earn long-term trust",
    body: "Safety, privacy and integrity are not features — they are the foundation we build everything else on.",
  },
  {
    title: "Build for joy",
    body: "Social products only work when they make people happier. We invest in moments of delight, not dark patterns.",
  },
];

const leaders = [
  { name: "Lin Wei", role: "Co-founder & CEO", initials: "LW" },
  { name: "Aiko Tanaka", role: "President & COO", initials: "AT" },
  { name: "Marcus Reyes", role: "Chief Financial Officer", initials: "MR" },
  { name: "Priya Shah", role: "Chief Technology Officer", initials: "PS" },
  { name: "Daniel Olsen", role: "Chief Product Officer", initials: "DO" },
  { name: "Sofia Almeida", role: "Chief People Officer", initials: "SA" },
];

function WhoWeArePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Who We Are"
        title="A global home for the apps that bring people together."
        description="Founded in 2011, Get Hello is a portfolio of social and entertainment platforms designed to help more than a billion people meet, connect and build relationships that matter."
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Story
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              From a four-person startup to a global social group.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Get Hello began with a simple belief: technology should make it easier — not
              harder — to say hello to the people around you. What started as a single
              location-based social app has grown into a family of platforms used by
              communities in more than 90 countries.
            </p>
            <p>
              Today our products span social discovery, dating, live entertainment and
              creator communities. Behind them is a single mission: redefining social
              connections by seamlessly blending technology with human experience.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Values
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Four principles that guide how we build.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8 md:p-10">
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Leadership
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Meet the team building Get Hello.
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l) => (
              <div key={l.name} className="rounded-sm border border-border p-6">
                <div className="grid h-16 w-16 place-items-center rounded-sm bg-primary text-lg font-black text-primary-foreground">
                  {l.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{l.name}</h3>
                <p className="text-sm text-muted-foreground">{l.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Link
              to="/brands"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              See our brands
            </Link>
            <Link
              to="/careers"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-border px-7 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Join the team
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}