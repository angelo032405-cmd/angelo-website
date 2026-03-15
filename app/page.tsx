import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Hi, I'm
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Angelo Perez
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Finance student at the University of Illinois (Gies Scholar) |
          Real Estate Private Equity Intern at Project Destined | Greenwood
          Project Scholar &apos;25. Passionate about wealth management, advisory,
          and commercial banking—and increasing Latino representation in finance.
        </p>
        <p className="mt-4 text-base text-zinc-500 dark:text-zinc-500">
          Actively seeking Summer 2026 internship opportunities in the Chicagoland area.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            My story
          </Link>
          <Link
            href="/experience"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Experience
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            I'm a junior at Gies College of Business with an entrepreneurial
            foundation from running my own sneaker resale venture. That experience
            taught me how to understand markets, analyze trends, and build trust—and
            it sparked a deeper interest in how money, value, and decision-making
            shape lives and businesses. I'm drawn to client-facing roles where I can
            combine analytical skills with relationship-building to help individuals
            and communities make better financial decisions.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
          >
            Read more →
          </Link>
        </div>
      </section>

      {/* Experience teaser */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            Real Estate PE Intern at Project Destined; Peer Advisor Team Lead and
            Gies Ambassador at UIUC; consulting project with a real CPA firm through
            BUS 301; and leadership roles across ALPFA, Chicago Scholars, Greenwood
            Project, Management Leadership for Tomorrow, and America Needs You.
          </p>
          <Link
            href="/experience"
            className="mt-4 inline-block text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
          >
            View full experience →
          </Link>
        </div>
      </section>

      {/* Recognition teaser */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Recognition</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            Gies Scholars, James Scholars, Jeffries Center Honors Recognition;
            Honors Academic Excellence Award; CEO Program, ACE IT, FirstGenU Career
            Institute; LeaderShape Institute alumnus; and top skills in Data Analysis,
            Finance, and Strategic Communications.
          </p>
          <Link
            href="/recognition"
            className="mt-4 inline-block text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
          >
            Skills & awards →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            Open to internship opportunities, collaborations, and conversations about
            finance, leadership, and career paths. Reach me by email or LinkedIn.
          </p>
          <ul className="mt-6 flex flex-wrap gap-6">
            <li>
              <a
                href="mailto:angelo032405@gmail.com"
                className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
              >
                angelo032405@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/angelo-perez-bg235"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
