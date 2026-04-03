import type { Metadata } from "next";
import { PageHeader } from "../components/ui/PageHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { Card } from "../components/ui/Card";

export const metadata: Metadata = {
  title: "Insights | Angelo Perez",
  description:
    "Leadership lessons, career development ideas, and personal reflections.",
};

const leadershipLessons = [
  "Lead with integrity first. At LeaderShape and in every role since, I've seen that people follow those who are consistent, honest, and willing to do the work themselves.",
  "Lift others as you climb. Peer advising and mentoring aren't side activities—they're how I stay grounded and create more room at the table for the next generation.",
  "Vision without execution is just a dream. I try to pair big goals with clear next steps and accountability.",
];

const careerIdeas = [
  "Build relationships before you need them. The best opportunities in finance and beyond often come from people who already know your work and character.",
  "Get comfortable with uncertainty. Markets, recruiting, and career paths are rarely linear. Adaptability and continuous learning matter more than a &quot;perfect&quot; plan.",
  "Representation opens doors. I'm passionate about increasing Latino representation in finance because visibility and access change what's possible for others.",
];

const reflections = [
  "My Mexican heritage and my family's values—hard work, loyalty, community—are the foundation of how I show up in professional spaces. I don't leave that at the door.",
  "Advocating for Hispanic culture in a predominantly Black high school taught me to bridge worlds and stand with others. That mindset shapes my approach to diversity, equity, and inclusion today.",
  "The full ride to Illinois was a turning point. I use it as motivation to give back: mentoring, sharing my story, and creating pathways for others.",
  "Entrepreneurship taught me ownership. Whether it's a class project, a team role, or a client deliverable, I treat it like it's mine—because my reputation is on the line.",
];

export default function Insights() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <PageHeader
        title="Insights"
        subtitle="Leadership lessons, career development ideas, and personal reflections from my journey so far."
      />

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue">
          Leadership lessons
        </h2>
        <div className="mt-6 space-y-4">
          {leadershipLessons.map((lesson, i) => (
            <Card key={i}>
              <p className="text-muted">{lesson}</p>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue mt-12">
          Career development ideas
        </h2>
        <div className="mt-6 space-y-4">
          {careerIdeas.map((idea, i) => (
            <Card key={i}>
              <p className="text-muted">{idea}</p>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-2xl font-bold text-brand-blue mt-12">
          Personal reflections
        </h2>
        <p className="mt-4 text-muted">
          Thoughts that keep me grounded and focused on what matters.
        </p>
        <ul className="mt-6 space-y-4">
          {reflections.map((reflection, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
              <span className="text-muted">{reflection}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </div>
  );
}
