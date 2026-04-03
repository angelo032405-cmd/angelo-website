"use client";

import { AnimatedSection } from "./ui/AnimatedSection";

type ChapterProps = {
  id: string;
  number?: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export function Chapter({ id, number, title, intro, children }: ChapterProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-slate-200 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection>
          {number && (
            <p className="text-sm font-medium uppercase tracking-widest text-brand-orange">
              {number}
            </p>
          )}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {intro}
          </p>
        </AnimatedSection>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
