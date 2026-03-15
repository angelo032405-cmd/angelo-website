import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recognition | Angelo Perez",
  description:
    "Skills, certifications, honors, and awards.",
};

const skills = [
  "Data Analysis",
  "Finance",
  "Strategic Communications",
];

const certifications = [
  "Honors Academic Excellence Award",
  "Career Exploration and Optimization (CEO) Program",
  "ACE IT Completion",
  "FirstGenU Career Institute: Job Search Skills",
];

const honors = [
  "Gies Scholars",
  "James Scholars",
  "Jeffries Center Honors Recognition",
];

export default function Recognition() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Recognition
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        Skills, certifications, and honors that reflect my commitment to academic excellence and professional development.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground border-b border-zinc-200 dark:border-zinc-800 pb-2">
          Top Skills
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-4 py-2 text-sm font-medium text-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground border-b border-zinc-200 dark:border-zinc-800 pb-2">
          Certifications
        </h2>
        <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground border-b border-zinc-200 dark:border-zinc-800 pb-2">
          Honors & Awards
        </h2>
        <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
          {honors.map((honor) => (
            <li key={honor}>{honor}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
