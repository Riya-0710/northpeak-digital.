import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

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
  { q: "NorthPeak rebuilt our marketing site in six weeks. Traffic is up 40% and it finally feels like us.", a: "Mara Ellison", r: "Head of Marketing, Fjordline" },
  { q: "The most disciplined team we have worked with. Every pixel and every millisecond had a reason.", a: "Daniel Osei", r: "Founder, Kithe & Co." },
  { q: "They shipped a Lighthouse 98 on a content-heavy site. Our conversions doubled the next quarter.", a: "Priya Raman", r: "CMO, Northwind Studio" },
];

const tiers = [
  { name: "Basecamp", price: "3.2k", tag: "Launch site", features: ["Up to 5 pages", "Responsive build", "Basic on-page SEO", "2 rounds of revisions"], highlight: false },
  { name: "Ascent", price: "7.8k", tag: "Most popular", features: ["Up to 12 pages", "Custom design system", "CMS + analytics setup", "Performance ≥ 95", "4 rounds of revisions"], highlight: true },
  { name: "Summit", price: "14k", tag: "Full engagement", features: ["Unlimited pages", "Brand + web system", "Content strategy", "3 months post-launch care", "Priority support"], highlight: false },
];

const clients = ["Fjordline", "Kithe & Co.", "Northwind", "Aster Labs", "Meridian", "Cairn", "Halcyon", "Rivet"];

// ---------- Hooks ----------
function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = (stored as "light" | "dark") ?? (prefers ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  };
  return { theme, toggle };
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Index() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
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
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-xl">
          <span aria-hidden className="inline-block h-2.5 w-2.5 rotate-45 bg-[var(--peak)] transition-transform hover:scale-125" />
          NorthPeak
        </a>
        <nav aria-label="Primary" className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="story-link hover:text-foreground">Services</a>
          <a href="#work" className="story-link hover:text-foreground">Clients</a>
          <a href="#pricing" className="story-link hover:text-foreground">Pricing</a>
          <a href="#contact" className="story-link hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:bg-secondary"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:inline-block"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px 400px at 85% 10%, color-mix(in oklab, var(--peak) 18%, transparent), transparent 60%), radial-gradient(500px 380px at 10% 90%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:py-32">
        <div>
          <p data-reveal className="reveal mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="inline-block h-px w-8 bg-[var(--peak)]" />
            Digital agency · Est. 2019
          </p>
          <h1 data-reveal className="reveal font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl" style={{ transitionDelay: "80ms" }}>
            Websites built to{" "}
            <em className="bg-gradient-to-r from-[var(--peak)] via-primary to-[var(--peak)] bg-clip-text not-italic text-transparent">
              reach the summit
            </em>{" "}
            of your category.
          </h1>
          <p data-reveal className="reveal mt-6 max-w-xl text-lg text-muted-foreground" style={{ transitionDelay: "160ms" }}>
            NorthPeak Digital is a small studio of designers and engineers crafting fast, accessible websites and brand systems for ambitious teams.
          </p>
          <div data-reveal className="reveal mt-8 flex flex-wrap gap-3" style={{ transitionDelay: "240ms" }}>
            <a href="#contact" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 hover-lift">Book a discovery call</a>
            <a href="#services" className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary">See what we do</a>
          </div>
          <dl data-reveal className="reveal mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8" style={{ transitionDelay: "320ms" }}>
            <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Projects</dt><dd className="mt-1 font-display text-3xl">120+</dd></div>
            <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Avg. Lighthouse</dt><dd className="mt-1 font-display text-3xl">97</dd></div>
            <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Repeat clients</dt><dd className="mt-1 font-display text-3xl">82%</dd></div>
          </dl>
        </div>
        <div data-reveal aria-hidden className="reveal-right relative hidden lg:block">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--accent)] via-surface to-secondary" />
          <svg viewBox="0 0 400 500" className="relative h-full w-full">
            <defs>
              <linearGradient id="pk" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--peak)" />
              </linearGradient>
            </defs>
            <polygon points="60,420 180,140 260,300 320,220 380,420" fill="url(#pk)" opacity="0.9" />
            <polygon points="20,440 130,240 220,360 300,280 400,440" fill="var(--primary)" opacity="0.35" />
            <circle cx="310" cy="90" r="28" fill="var(--peak)" />
          </svg>
        </div>
      </div>
    </section>

  );
}

function Marquee() {
  const row = [...clients, ...clients];
  return (
    <div aria-label="Selected clients" className="border-y border-border overflow-hidden bg-surface py-6">
      <div className="flex w-max marquee-track gap-16 px-8">
        {row.map((c, i) => (
          <span key={i} className="font-display text-2xl text-muted-foreground whitespace-nowrap">
            {c} <span className="mx-8 text-[var(--peak)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p data-reveal className="reveal text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</p>
            <h2 data-reveal className="reveal mt-3 font-display text-4xl sm:text-5xl" style={{ transitionDelay: "80ms" }}>What we do, end to end.</h2>
          </div>
          <p data-reveal className="reveal max-w-md text-muted-foreground" style={{ transitionDelay: "160ms" }}>
            A tight scope, delivered with craft. We work as a single team through discovery, design, build and launch.
          </p>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.n}
              data-reveal
              className="reveal group bg-card p-8 transition hover:bg-accent/40"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl text-[var(--peak)]">{s.n}</span>
                <span aria-hidden className="h-px w-10 bg-border transition-all duration-500 group-hover:w-20 group-hover:bg-[var(--peak)]" />
              </div>
              <h3 className="mt-6 font-display text-2xl transition-transform duration-300 group-hover:translate-x-1">{s.t}</h3>
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
        <p data-reveal className="reveal text-xs uppercase tracking-[0.2em] text-muted-foreground">Clients</p>
        <h2 data-reveal className="reveal mt-3 max-w-2xl font-display text-4xl sm:text-5xl" style={{ transitionDelay: "80ms" }}>
          Trusted by founders, marketers and product teams.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.a}
              data-reveal
              className="reveal flex flex-col justify-between rounded-2xl border border-border bg-card p-8 hover-lift"
              style={{ transitionDelay: `${i * 100}ms` }}
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
            <p data-reveal className="reveal text-xs uppercase tracking-[0.2em] text-muted-foreground">Pricing</p>
            <h2 data-reveal className="reveal mt-3 font-display text-4xl sm:text-5xl" style={{ transitionDelay: "80ms" }}>Three ways to work together.</h2>
          </div>
          <p data-reveal className="reveal max-w-md text-muted-foreground" style={{ transitionDelay: "160ms" }}>
            Fixed-scope packages so you know what you get and what it costs. Custom retainers available after launch.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <article
              key={t.name}
              data-reveal
              className={`reveal relative flex flex-col rounded-2xl border p-8 hover-lift ${
                t.highlight
                  ? "border-[var(--peak)] bg-card shadow-[0_20px_60px_-30px_oklch(0.72_0.15_55/0.6)]"
                  : "border-border bg-card"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
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
    if (!v.message.trim() || v.message.trim().length < 10) e.message = "Tell us a bit more (10+ characters).";
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
        <div data-reveal className="reveal-left">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Tell us about your project.</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            We reply within one business day. If we are not the right fit, we will happily point you to a studio that is.
          </p>
          <dl className="mt-10 space-y-4 text-sm">
            <div><dt className="text-muted-foreground">Email</dt><dd>hello@northpeak.digital</dd></div>
            <div><dt className="text-muted-foreground">Studio</dt><dd>Oslo · Remote worldwide</dd></div>
          </dl>
        </div>
        <form data-reveal noValidate onSubmit={onSubmit} className="reveal-right rounded-2xl border border-border bg-card p-6 sm:p-8">
          {sent && (
            <div role="status" className="mb-6 rounded-lg border border-[var(--peak)]/40 bg-accent/40 px-4 py-3 text-sm">
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
            className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 hover-lift sm:w-auto"
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
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 font-display text-lg">
            <span aria-hidden className="inline-block h-2.5 w-2.5 rotate-45 bg-[var(--peak)]" />
            NorthPeak Digital
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-center">
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Crafted for</span>
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:border-[var(--peak)] hover:bg-accent/30 hover:text-[var(--peak)] hover-lift"
          >
            <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--peak)]/10 text-[var(--peak)] transition group-hover:bg-[var(--peak)] group-hover:text-primary-foreground">
              <SparkleIcon />
            </span>
            Digital Heroes Training Task
            <span aria-hidden className="text-muted-foreground transition group-hover:text-[var(--peak)]">
              <ArrowUpRightIcon />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function SparkleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}
