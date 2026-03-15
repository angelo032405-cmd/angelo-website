import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Your Name",
  description: "Projects and work",
};

const projects = [
  {
    title: "Project one",
    description: "Short description of what this is and what you did.",
    href: "#",
  },
  {
    title: "Project two",
    description: "Another project with a link to the live site or repo.",
    href: "#",
  },
  {
    title: "Project three",
    description: "You can add as many as you want and style them later.",
    href: "#",
  },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        Things I've built or worked on. Replace with your own and add links.
      </p>
      <ul className="mt-12 space-y-12">
        {projects.map((project) => (
          <li key={project.title}>
            <Link
              href={project.href}
              className="group block border-b border-zinc-200 pb-8 dark:border-zinc-800"
            >
              <h2 className="text-xl font-semibold text-foreground group-hover:underline">
                {project.title}
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
