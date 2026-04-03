import type { Metadata } from "next";
import { PageHeader } from "../components/ui/PageHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { Card } from "../components/ui/Card";

export const metadata: Metadata = {
  title: "Leadership | Angelo Perez",
  description:
    "Programs, leadership experiences, community involvement, and career development.",
};

const programs = [
  {
    name: "Peer Advisor Team Lead · Gies College of Business",
    period: "Jan 2026 – Present",
    detail: "Leading a team that guides 50+ undergraduate business students on academic planning, campus resources, and professional development.",
  },
  {
    name: "Peer Advisor · Gies College of Business",
    period: "Aug 2025 – Present",
    detail: "One-on-one guidance contributing to improved retention, engagement, and community within Gies.",
  },
  {
    name: "Gies Ambassador",
    period: "Feb 2024 – Present",
    detail: "Represent Gies at 20+ events and workshops; delivered 10+ presentations to 200+ prospective students.",
  },
  {
    name: "Access and Engagement Ambassador · UIUC",
    period: "Aug 2023 – Present",
    detail: "Support diversity and inclusion through student-led initiatives, mentorship, and events for underrepresented students.",
  },
  {
    name: "Management Leadership for Tomorrow (MLT) · Career Prep Fellow",
    period: "Feb 2025 – Present",
    detail: "Selected from 3000+ applicants for an 18+ month leadership program; collaborate with Fortune 500 executives and industry leaders.",
  },
  {
    name: "LeaderShape Institute · Alumni",
    period: "Jan 2024",
    detail: "Awarded $1,000 scholarship from Gies; completed intensive leadership curriculum; joined 70,000+ alumni network.",
  },
];

const community = [
  "ALPFA (Association of Latino Professionals For America) — Active member; Philanthropy Committee; community outreach and professional development.",
  "Chicago Scholars — Seven-year program for first-generation students; college access, persistence, career development, and exclusive internship opportunities.",
  "America Needs You — Fellow; career development and leadership for first-generation college students.",
  "Greenwood Project — GP Scholar; year-long financial services training, Excel, financial modeling, and leadership development.",
  "CareerSpring — Active network member; networking and job placement for first-generation and low-income students.",
];

export default function Leadership() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <PageHeader
        title="Leadership"
        subtitle="Programs, community involvement, and the mindset I bring to every role."
      />

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue">
          Programs & leadership experience
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          From campus roles to national programs, I've sought out opportunities
          to lead with integrity, support others, and grow as a professional.
        </p>
        <div className="mt-8 space-y-6">
          {programs.map((program, i) => (
            <AnimatedSection key={program.name} delay={i * 0.05}>
              <Card>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-brand-blue">
                      {program.name}
                    </h3>
                    <p className="mt-2 text-muted text-sm">{program.detail}</p>
                  </div>
                  <span className="text-sm text-brand-orange shrink-0">
                    {program.period}
                  </span>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue mt-14">
          Community involvement
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          I'm committed to organizations that expand access, build community, and
          develop the next generation of leaders.
        </p>
        <ul className="mt-6 space-y-4">
          {community.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
              <span className="text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue mt-14">
          Career development
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          I actively invest in my growth through conferences, workshops, and
          recruiting experiences—including Google Genesis2Genesis, Deloitte
          Illini Chicago Day, PwC Future Focus, and structured training in
          financial modeling, Excel, and professional communication. I'm seeking
          Summer 2026 internship opportunities in the Chicagoland area in wealth
          management, advisory, and commercial banking.
        </p>
      </AnimatedSection>
    </div>
  );
}
