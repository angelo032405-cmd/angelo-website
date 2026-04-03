"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const stagger = 0.08;

const pillars = [
  {
    title: "Leadership",
    description:
      "Guiding peers at Gies, building trust in teams, and showing up with integrity in programs from MLT to Peer Advising.",
    href: "#leadership",
  },
  {
    title: "Entrepreneurship",
    description:
      "From scaling a sneaker venture to thinking like an owner in every project. Markets, discipline, and execution.",
    href: "#entrepreneurship",
  },
  {
    title: "Cultural Advocacy",
    description:
      "Rooted in Mexican heritage and committed to Latino representation in finance and access to opportunity.",
    href: "#about",
  },
];

const featured = [
  {
    title: "Real Estate PE Intern",
    org: "Project Destined",
    detail: "Multifamily underwriting and a private equity style pitch competition.",
  },
  {
    title: "Peer Advisor Team Lead",
    org: "Gies College of Business",
    detail: "Supporting 50 plus students on academics and professional growth.",
  },
  {
    title: "Consulting engagement",
    org: "BUS 301, CPA advisory firm",
    detail: "Client acquisition, referrals, and positioning for a live client.",
  },
];

export function HomeLanding() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section
        id="introduction"
        className="relative flex min-h-[100svh] flex-col"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(234,88,12,0.12),transparent)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(15,23,42,0.04),transparent_50%)]" />

        {/* Primary intro: centered, no CTA here */}
        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20 sm:py-28 lg:py-32">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange sm:text-sm"
          >
            Finance · University of Illinois · Gies College
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: stagger }}
            className="font-signature mt-8 text-[clamp(3rem,10vw,5.5rem)] leading-[0.95] text-brand-blue"
          >
            Angelo Perez
          </motion.h1>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: stagger * 2 }}
            className="mt-10 max-w-3xl space-y-6 text-xl font-medium leading-[1.65] tracking-tight text-brand-blue sm:mt-12 sm:text-2xl sm:leading-[1.6] lg:text-[1.65rem] lg:leading-[1.7]"
          >
            <p>
              Everything I pursue is rooted in where I come from, the values I was
              raised on, and the opportunities I&apos;ve worked to earn.
            </p>
            <p>
              I move with purpose, build with intention, and represent something
              bigger than myself.
            </p>
            <p>This is my story in motion.</p>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: stagger * 3 }}
            className="mt-10 text-sm text-muted sm:mt-12 sm:text-base"
          >
            Scroll to understand my journey.
          </motion.p>
        </div>
      </section>

      {/* Pillars */}
      <section
        id="pillars"
        className="border-t border-slate-200/80 bg-white py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              What I stand for
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              Three pillars
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Leadership, entrepreneurship, and cultural advocacy shape how I learn,
              work, and serve others.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.a
                key={pillar.title}
                href={pillar.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 p-8 shadow-sm transition-all duration-300 hover:border-brand-orange/30 hover:shadow-lg"
              >
                <span className="absolute right-8 top-8 h-1 w-12 rounded-full bg-brand-orange/80 transition-all group-hover:w-16" />
                <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-orange transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted">
                  {pillar.description}
                </p>
                <span className="mt-6 text-sm font-semibold text-brand-orange">
                  Read more →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured experiences */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Momentum
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                Featured experiences
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                A snapshot of roles and projects that define my path right now.
              </p>
            </div>
            <a
              href="#experience"
              className="shrink-0 rounded-full border-2 border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              Full experience
            </a>
          </motion.div>

          <div className="mt-16 space-y-4">
            {featured.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-brand-blue">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-orange">
                    {item.org}
                  </p>
                  <p className="mt-3 max-w-xl text-muted">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl bg-brand-blue px-8 py-16 text-center shadow-2xl shadow-brand-blue/20 sm:px-16 sm:py-20"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-orange/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl"
              aria-hidden
            />

            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Curious about the journey?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                I am open to internships, mentorship, and conversations about
                finance and leadership. Let&apos;s connect.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-14 min-w-[200px] items-center justify-center rounded-full bg-brand-orange px-8 text-sm font-semibold text-white transition-all hover:bg-brand-orange-light hover:shadow-lg"
                >
                  Get in touch
                </a>
                <a
                  href="https://www.linkedin.com/in/angelo-perez-bg235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 min-w-[200px] items-center justify-center rounded-full border-2 border-white/30 bg-transparent px-8 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
              <p className="mt-10 text-sm text-slate-400">
                Continue to <a className="underline underline-offset-2 hover:text-white" href="#stories">My edge in stories</a>, then the full chapters below.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
