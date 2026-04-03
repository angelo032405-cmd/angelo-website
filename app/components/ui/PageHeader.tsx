import { AnimatedSection } from "./AnimatedSection";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <AnimatedSection className="mb-16 sm:mb-20">
      <h1 className="text-4xl font-bold tracking-tight text-brand-blue sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
      )}
    </AnimatedSection>
  );
}
