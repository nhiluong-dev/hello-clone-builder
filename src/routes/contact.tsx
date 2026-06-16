import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Get Hello" },
      {
        name: "description",
        content:
          "Get in touch with Get Hello for press, partnerships, support and investor enquiries. Offices in Singapore, Tokyo, London, Berlin, New York and more.",
      },
      { property: "og:title", content: "Contact Us — Get Hello" },
      {
        property: "og:description",
        content:
          "Press, partnerships, support and investor enquiries — and a directory of our global offices.",
      },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  { topic: "Press", email: "press@gethello.com", body: "For media enquiries, interviews and brand assets." },
  { topic: "Partnerships", email: "partners@gethello.com", body: "For business development, integrations and co-marketing." },
  { topic: "Support", email: "support@gethello.com", body: "For help with any Get Hello app or your account." },
  { topic: "Investors", email: "ir@gethello.com", body: "For shareholder enquiries, filings and earnings calls." },
];

const offices = [
  { city: "Singapore", role: "Global HQ", address: "1 Marina Boulevard, Level 20, Singapore 018989" },
  { city: "Tokyo", role: "APAC HQ", address: "Shibuya Sakura Stage, 1-1 Sakuragaokacho, Shibuya City" },
  { city: "London", role: "EMEA HQ", address: "120 Old Street, Shoreditch, London EC1V 9BD" },
  { city: "New York", role: "Americas HQ", address: "200 Lafayette Street, Floor 6, New York, NY 10012" },
  { city: "Berlin", role: "Engineering hub", address: "Rosenthaler Straße 40-41, 10178 Berlin" },
  { city: "Dublin", role: "Trust & Safety hub", address: "1 Grand Canal Square, Dublin 2, D02 P820" },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you."
        description="Whether you're a journalist, partner, investor or a user with a question, here's how to reach the right team at Get Hello."
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Direct contacts
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Reach the right team.
              </h2>
              <ul className="mt-10 space-y-6">
                {contacts.map((c) => (
                  <li key={c.topic} className="border-t border-border pt-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {c.topic}
                    </div>
                    <a
                      href={`mailto:${c.email}`}
                      className="mt-2 inline-block text-lg font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {c.email}
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-7">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-sm border border-border bg-secondary p-8 md:p-10"
              >
                <h3 className="text-2xl font-semibold tracking-tight">Send us a message</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We&apos;ll route your enquiry to the right team and reply within two
                  business days.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Jane Doe" required />
                  <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
                  <Field label="Company" name="company" placeholder="Optional" />
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Topic
                    </label>
                    <select
                      name="topic"
                      className="mt-2 h-11 w-full rounded-sm border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none"
                      defaultValue="Partnerships"
                    >
                      {contacts.map((c) => (
                        <option key={c.topic}>{c.topic}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us a bit about what you're looking for…"
                    className="mt-2 w-full rounded-sm border border-border bg-background p-3 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex h-12 items-center justify-center rounded-sm bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Send message
                </button>

                {submitted ? (
                  <p className="mt-5 text-sm text-primary">
                    Thanks — your message is on its way. We&apos;ll be in touch shortly.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[var(--surface-darker)] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Offices
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Where you&apos;ll find us.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <div key={o.city} className="bg-[var(--surface-darker)] p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {o.role}
                </div>
                <h3 className="mt-3 text-2xl font-semibold">{o.city}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 h-11 w-full rounded-sm border border-border bg-background px-3 text-sm text-foreground focus:border-primary focus:outline-none"
      />
    </div>
  );
}