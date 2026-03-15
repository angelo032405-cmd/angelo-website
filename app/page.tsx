import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Hi, I'm
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Your Name
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A short tagline about what you do — e.g. Designer, Developer, or
          "Building things on the web."
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/about"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            About me
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
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            A brief intro that shows up on the homepage. You can expand on this
            on your About page — your background, what you're interested in, and
            what you're up to now.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
          >
            Read more →
          </Link>
        </div>
      </section>

      {/* Projects teaser */}
      <section className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            Things you've built, designed, or contributed to. Add links and
            short descriptions on the Projects page.
          </p>
          <Link
            href="/projects"
            className="mt-4 inline-block text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
          >
            View projects →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-200 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            The best way to reach me is by email or through the links below.
          </p>
          <ul className="mt-6 flex flex-wrap gap-6">
            <li>
              <a
                href="mailto:you@example.com"
                className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
              >
                you@example.com
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
