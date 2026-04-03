import type { Metadata } from "next";
import { PageHeader } from "../components/ui/PageHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { Card } from "../components/ui/Card";

export const metadata: Metadata = {
  title: "Experience | Angelo Perez",
  description:
    "Featured experiences, leadership roles, and professional involvement.",
};

const featured = [
  {
    role: "Real Estate Private Equity Intern",
    org: "Project Destined",
    period: "Jan 2026 – Present",
    location: null,
    bullets: [
      "5-week private equity real estate training; underwriting three multifamily deals in team and individual settings; competing in a PE-style pitch competition.",
    ],
  },
  {
    role: "Peer Advisor Team Lead",
    org: "Gies College of Business, UIUC",
    period: "Jan 2026 – Present",
    location: "Champaign, IL",
    bullets: [
      "Lead peer advising efforts; guide 50+ students on academic planning, campus resources, and professional development.",
    ],
  },
  {
    role: "Consulting Project · Client Acquisition & Strategy",
    org: "BUS 301: Business in Action · Real CPA Advisory Firm",
    period: "Aug – Dec 2025",
    location: "Champaign, IL",
    bullets: [
      "Worked directly with a real CPA firm on client acquisition, referral strategy, and market positioning; applied consulting frameworks; delivered actionable recommendations.",
    ],
  },
  {
    role: "Sneaker Reselling Venture",
    org: "Angelo Flow Sneaks",
    period: "Feb 2021 – Present",
    location: "Chicago, IL",
    bullets: [
      "150+ authenticated sales; 100% positive seller rating; 50+ loyal customers; 50% repeat business growth.",
    ],
  },
];

const additional = [
  {
    role: "Peer Advisor · Gies Ambassador · Access and Engagement Ambassador",
    org: "University of Illinois Urbana-Champaign",
    period: "2023 – Present",
  },
  {
    role: "MLT Career Prep Fellow · Greenwood Project Scholar · America Needs You Fellow",
    org: "Various",
    period: "2024 – 2025",
  },
  {
    role: "BUS 201: Business Dynamics · Cross-functional simulation",
    org: "Gies College of Business",
    period: "Fall 2024",
  },
  {
    role: "Gies Scholars Study Abroad · Brazil",
    org: "São Paulo & Rio de Janeiro",
    period: "May 2024",
  },
  {
    role: "Chicago Scholar · ALPFA · CareerSpring · SEO",
    org: "Community & professional orgs",
    period: "Ongoing",
  },
];

export default function Experience() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <PageHeader
        title="Experience"
        subtitle="Featured roles and a full view of my leadership and professional involvement."
      />

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue">
          Featured experiences
        </h2>
        <div className="mt-8 space-y-6">
          {featured.map((item, i) => (
            <AnimatedSection key={item.role} delay={i * 0.06}>
              <Card>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-brand-blue">{item.role}</h3>
                    <p className="text-brand-orange font-medium">{item.org}</p>
                    {item.location && (
                      <p className="text-sm text-muted mt-1">{item.location}</p>
                    )}
                    <ul className="mt-3 space-y-1 text-sm text-muted">
                      {item.bullets.map((b, j) => (
                        <li key={j}>· {b}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-sm text-muted shrink-0">{item.period}</span>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue mt-14">
          Additional leadership & involvement
        </h2>
        <p className="mt-4 text-muted">
          Programs, campus roles, and community engagement that round out my experience.
        </p>
        <ul className="mt-6 space-y-4">
          {additional.map((item, i) => (
            <AnimatedSection key={item.role} delay={i * 0.04}>
              <li className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-slate-200 pb-4 last:border-0">
                <div>
                  <span className="font-medium text-brand-blue">{item.role}</span>
                  <span className="text-muted"> · {item.org}</span>
                </div>
                <span className="text-sm text-muted">{item.period}</span>
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue mt-14">Education</h2>
        <Card className="mt-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-semibold text-brand-blue">
                Gies College of Business, University of Illinois Urbana-Champaign
              </h3>
              <p className="text-muted">Bachelor&apos;s degree, Finance (2023 – 2027)</p>
            </div>
            <span className="text-sm text-brand-orange">Gies Scholar · James Scholar</span>
          </div>
        </Card>
        <p className="mt-4 text-muted">Bogan High School (2019 – 2023)</p>
      </AnimatedSection>
    </div>
  );
}
