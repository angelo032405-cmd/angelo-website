import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Your Name",
  description: "About me and what I do",
};

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          Replace this with your own story — where you're from, what you do, and
          what you care about. A few short paragraphs work well.
        </p>
        <p>
          You can mention your background, current role, side projects, or
          anything else that helps visitors get to know you.
        </p>
        <p>
          Keep the tone conversational. This is your personal site, so let your
          personality come through.
        </p>
      </div>
    </main>
  );
}
