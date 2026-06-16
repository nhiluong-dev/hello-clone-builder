import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { brands } from "@/components/site/brands";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands — Get Hello" },
      {
        name: "description",
        content:
          "Explore the apps that make up Get Hello — from HiYo and Sparkle to Crossed, BrewMatch, Aria Live and Pebble.",
      },
      { property: "og:title", content: "Our Brands — Get Hello" },
      {
        property: "og:description",
        content:
          "A portfolio of social, dating and live entertainment apps connecting more than a billion people.",
      },
    ],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Brands"
        title="One family of apps. Endless ways to connect."
        description="Each Get Hello brand is built for a different moment — from your daily commute to a Friday night out, from a chance encounter to a long-term relationship."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 space-y-px overflow-hidden rounded-sm border border-border bg-border">
          {brands.map((b, i) => (
            <article
              key={b.name}
              className="grid gap-8 bg-background p-8 md:grid-cols-12 md:p-12"
            >
              <div className="md:col-span-3">
                <div className="grid h-24 w-24 place-items-center rounded-sm bg-primary text-3xl font-black text-primary-foreground">
                  {b.name.charAt(0)}
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Brand {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="md:col-span-6">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {b.name}
                </h2>
                <p className="mt-2 text-lg text-primary">{b.tagline}</p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
              <dl className="md:col-span-3 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Category
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">{b.category}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Launched
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">{b.launched}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Reach
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">{b.reach}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}