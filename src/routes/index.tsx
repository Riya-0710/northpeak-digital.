import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NorthPeak Digital — Digital agency for ambitious brands" },
      {
        name: "description",
        content:
          "NorthPeak Digital is a boutique agency crafting fast, accessible websites, brand systems and growth campaigns for ambitious teams.",
      },
      { property: "og:title", content: "NorthPeak Digital — Digital agency for ambitious brands" },
      {
        property: "og:description",
        content:
          "Boutique agency crafting fast, accessible websites, brand systems and growth campaigns.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Web Design", d: "Editorial layouts that feel considered, on brand and easy to navigate." },
  { n: "02", t: "Web Development", d: "Hand-built, semantic, accessible sites that load fast on any device." },
  { n: "03", t: "Brand Identity", d: "Distinctive marks, type systems and voice guidelines that scale." },
  { n: "04", t: "SEO & Content", d: "Technical SEO, content architecture and copy that ranks and converts." },
  { n: "05", t: "Performance", d: "Core Web Vitals audits and refactors that lift scores past 90+." },
  { n: "06", t: "Ongoing Care", d: "Monthly retainers for iteration, monitoring and quiet improvements." },
];

const testimonials = [
  {
    q: "NorthPeak rebuilt our marketing site in six weeks. Traffic is up 40% and it finally feels like us.",
    a: "Mara Ellison",
    r: "Head of Marketing, Fjordline",
  },
  {
    q: "The most disciplined team we have worked with. Every pixel and every millisecond had a reason.",
    a: "Daniel Osei",
    r: "Founder, Kithe & Co.",
  },
  {
    q: "They shipped a Lighthouse 98 on a content-heavy site. Our conversions doubled the next quarter.",
    a: "Priya Raman",
    r: "CMO, Northwind Studio",
  },
];

const tiers = [
  {
    name: "Basecamp",
    price: "3.2k",
    tag: "Launch site",
    features: ["Up to 5 pages", "Responsive build", "Basic on-page SEO", "2 rounds of revisions"],
    highlight: false,
  },
  {
    name: "Ascent",
    price: "7.8k",
    tag: "Most popular",
    features: [
      "Up to 12 pages",
      "Custom design system",
      "CMS + analytics setup",
      "Performance ≥ 95",
      "4 rounds of revisions",
    ],
    highlight: true,
  },
  {
    name: "Summit",
    price: "14k",
    tag: "Full engagement",
    features: [
      "Unlimited pages",
      "Brand + web system",
      "Content strategy",
      "3 months post-launch care",
      "Priority support",
    ],
    highlight: false,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-xl">
          <span aria-hidden className="inline-block h-2.5 w-2.5 rotate-45 bg-[var(--peak)]" />
          NorthPeak
        </a>
        <nav aria-label="Primary" className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#work" className="hover:text-foreground">Clients</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:py-32">
        <div>
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="inline-block h-px w-8 bg-[var(--peak)]" />
            Digital agency · Est. 2019
          </p>
          <h1 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Websites built to <em className="text-[var(--peak)] not-italic">reach the summit</em> of your category.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            NorthPeak Digital is a small studio of designers and engineers crafting fast,
            accessible websites and brand systems for ambitious teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Book a discovery call
            </a>
            <a
              href="#services"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              See what we do
            </a>
          </div>
          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Projects</dt><dd className="mt-1 font-display text-3xl">120+</dd></div>
            <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Avg. Lighthouse</dt><dd className="mt-1 font-display text-3xl">97</dd></div>
            <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Repeat clients</dt><dd className="mt-1 font-display text-3xl">82%</dd></div>
          </dl>
        </div>
        <div aria-hidden className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--accent)] via-surface to-secondary" />
          <svg viewBox="0 0 400 500" className="relative h-full w-full">
            <defs>
              <linearGradient id="pk" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="oklch(0.32 0.09 255)" />
                <stop offset="1" stopColor="oklch(0.72 0.15 55)" />
              </linearGradient>
            </defs>
            <polygon points="60,420 180,140 260,300 320,220 380,420" fill="url(#pk)" opacity="0.9" />
            <polygon points="20,440 130,240 220,360 300,280 400,440" fill="oklch(0.32 0.09 255)" opacity="0.35" />
            <circle cx="310" cy="90" r="28" fill="oklch(0.72 0.15 55)" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">What we do, end to end.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A tight scope, delivered with craft. We work as a single team through discovery,
            design, build and launch.
          </p>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.n} className="group bg-card p-8 transition hover:bg-accent/40">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl text-[var(--peak)]">{s.n}</span>
                <span aria-hidden className="h-px w-10 bg-border transition group-hover:w-16" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Clients</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
          Trusted by founders, marketers and product teams.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.a}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8"
            >
              <blockquote className="font-display text-xl leading-snug">"{t.q}"</blockquote>
              <figcaption className="mt-8 border-t border-border pt-4 text-sm">
                <div className="font-medium">{t.a}</div>
                <div className="text-muted-foreground">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pricing</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Three ways to work together.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Fixed-scope packages so you know what you get and what it costs. Custom retainers
            available after launch.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                t.highlight
                  ? "border-[var(--peak)] bg-card shadow-[0_20px_60px_-30px_oklch(0.72_0.15_55/0.6)]"
                  : "border-border bg-card"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-[var(--peak)] px-3 py-1 text-xs font-medium text-primary-foreground">
                  {t.tag}
                </span>
              )}
              <h3 className="font-display text-3xl">{t.name}</h3>
              {!t.highlight && <p className="mt-1 text-sm text-muted-foreground">{t.tag}</p>}
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">$</span>
                <span className="font-display text-5xl">{t.price}</span>
              </p>
              <p className="text-sm text-muted-foreground">one-time project fee</p>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--peak)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-medium transition ${
                  t.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                Choose {t.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", budget: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = (v: typeof values) => {
    const e: Record<string, string> = {};
    if (!v.name.trim() || v.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email address.";
    if (!v.message.trim() || v.message.trim().length < 10)
      e.message = "Tell us a bit more (10+ characters).";
    return e;
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setValues({ name: "", email: "", budget: "", message: "" });
    }
  };

  const field = (name: keyof typeof values) =>
    `w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary ${
      errors[name] ? "border-destructive" : "border-border"
    }`;

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Tell us about your project.</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            We reply within one business day. If we are not the right fit, we will happily
            point you to a studio that is.
          </p>
          <dl className="mt-10 space-y-4 text-sm">
            <div><dt className="text-muted-foreground">Email</dt><dd>hello@northpeak.digital</dd></div>
            <div><dt className="text-muted-foreground">Studio</dt><dd>Oslo · Remote worldwide</dd></div>
          </dl>
        </div>
        <form noValidate onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          {sent && (
            <div
              role="status"
              className="mb-6 rounded-lg border border-[var(--peak)]/40 bg-accent/40 px-4 py-3 text-sm"
            >
              Thanks — your message is on its way. We will be in touch shortly.
            </div>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm">Name</span>
              <input
                className={field("name")}
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined}
                autoComplete="name"
              />
              {errors.name && <span id="err-name" className="mt-1 block text-xs text-destructive">{errors.name}</span>}
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm">Email</span>
              <input
                type="email"
                className={field("email")}
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
                autoComplete="email"
              />
              {errors.email && <span id="err-email" className="mt-1 block text-xs text-destructive">{errors.email}</span>}
            </label>
          </div>
          <label className="mt-5 block">
            <span className="mb-1.5 block text-sm">Budget (optional)</span>
            <select
              className={field("budget")}
              value={values.budget}
              onChange={(e) => setValues({ ...values, budget: e.target.value })}
            >
              <option value="">Select a range</option>
              <option>Under $5k</option>
              <option>$5k – $10k</option>
              <option>$10k – $20k</option>
              <option>$20k+</option>
            </select>
          </label>
          <label className="mt-5 block">
            <span className="mb-1.5 block text-sm">Project details</span>
            <textarea
              rows={5}
              className={field("message")}
              value={values.message}
              onChange={(e) => setValues({ ...values, message: e.target.value })}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "err-message" : undefined}
            />
            {errors.message && <span id="err-message" className="mt-1 block text-xs text-destructive">{errors.message}</span>}
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:w-auto"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2 font-display text-lg">
          <span aria-hidden className="inline-block h-2.5 w-2.5 rotate-45 bg-[var(--peak)]" />
          NorthPeak Digital
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
        </p>
        <p className="text-sm">
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--peak)] underline-offset-4 hover:text-[var(--peak)]"
          >
            Built for Digital Heroes Training Task
          </a>
        </p>
      </div>
    </footer>
  );
}
