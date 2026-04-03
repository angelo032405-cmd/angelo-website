import type { Metadata } from "next";
import { PageHeader } from "../components/ui/PageHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { Card } from "../components/ui/Card";

export const metadata: Metadata = {
  title: "Entrepreneurship | Angelo Perez",
  description:
    "Case study: building and scaling a sneaker reselling business. Lessons learned and business insights.",
};

const lessons = [
  "Authenticity builds trust—every pair was verified; customers came back because they knew they could rely on the product.",
  "Relationships compound. 50+ loyal customers and a 50% repeat rate didn't happen by accident; they came from consistency and clear communication.",
  "Markets teach you to think in margins, timing, and risk. The sneaker market was a real-world classroom for supply, demand, and pricing.",
  "Ownership mindset changes everything. When it's your business, you care about every detail—from sourcing to packaging to follow-up.",
];

const insights = [
  "Understanding 20+ brands and 100+ product lines forced me to segment markets and think about positioning—skills that translate directly to finance and advisory.",
  "150+ transactions with a 100% positive seller rating required discipline in operations, documentation, and customer service—all transferable to client-facing roles.",
  "Running the venture during a rising market taught me to recognize trends, manage inventory risk, and stay adaptable when conditions change.",
];

export default function Entrepreneurship() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <PageHeader
        title="Entrepreneurship"
        subtitle="Building and scaling a sneaker reselling business—and what it taught me about markets, trust, and ownership."
      />

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue">The venture</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Angelo Flow Sneaks started in February 2021 as a side project and grew
          into a real business. I handled everything: sourcing, authentication,
          pricing, marketing, and customer relationships. In a competitive,
          trend-driven market, I learned that success wasn't just about having
          inventory—it was about building trust, understanding the customer, and
          executing consistently.
        </p>
        <ul className="mt-6 space-y-2 text-muted">
          <li>· 150+ sneakers authenticated and verified</li>
          <li>· 50+ loyal customer relationships; 50% increase in repeat business</li>
          <li>· 150+ successful transactions; 100% positive seller rating</li>
          <li>· Deep knowledge of 20+ brands and 100+ product lines</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue mt-12">
          Lessons learned
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          The business gave me more than revenue—it gave me a framework for
          thinking about value, risk, and relationships that I use every day in
          finance and leadership.
        </p>
        <ul className="mt-6 space-y-4">
          {lessons.map((lesson, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
              <span className="text-muted">{lesson}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue mt-12">
          Business insights
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          These insights from the sneaker venture directly inform how I approach
          client work, analysis, and professional development.
        </p>
        <div className="mt-6 space-y-4">
          {insights.map((insight, i) => (
            <Card key={i}>
              <p className="text-muted">{insight}</p>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
