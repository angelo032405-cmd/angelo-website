import type { Metadata } from "next";
import { PageHeader } from "../components/ui/PageHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About | Angelo Perez",
  description:
    "Heritage, family, upbringing, scholarship journey, and the values that drive Angelo Perez.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <PageHeader
        title="About me"
        subtitle="Heritage, community, and the journey that shaped who I am."
      />

      <div className="space-y-16">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-brand-blue">
            Heritage & family
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            I'm proud of my Mexican heritage and the strong family roots that
            ground me. My family taught me the value of hard work, loyalty, and
            supporting one another—values I carry into every role and relationship.
            That foundation is why I care deeply about representation and access:
            when you see someone who looks like you or shares your background
            succeeding, it changes what you believe is possible.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-2xl font-bold text-brand-blue">
            Upbringing & community
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            I grew up advocating for Hispanic culture in a predominantly Black
            high school. That experience taught me how to bridge worlds—to honor
            my own identity while learning from and standing with others. It
            shaped my commitment to cultural advocacy and to spaces where
            everyone can belong. Today I bring that same mindset to finance:
            expanding access, lifting up underrepresented voices, and helping
            create a more inclusive industry.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-2xl font-bold text-brand-blue">
            Scholarship journey
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Earning a full-ride scholarship to the University of Illinois
            Urbana-Champaign was a turning point. It wasn't just financial
            freedom—it was proof that preparation, persistence, and community
            support could open doors that once felt closed. I'm a Gies Scholar,
            James Scholar, and Chicago Scholar, and I don't take that for
            granted. I use it as fuel to work harder, give back, and create
            similar opportunities for others through mentoring and visibility.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-2xl font-bold text-brand-blue">
            Values & motivations
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Leadership, inspiration, humility, cultural advocacy, and
            entrepreneurship aren't just words—they're how I try to show up
            every day. I lead by example and by lifting others. I stay curious
            and share what I learn. I remember where I came from and stay
            grounded. I advocate for my community and for greater Latino
            representation in finance. And I think like an owner: building
            something from nothing, whether it's a business or a better path for
            the next generation. If you share these values or want to connect
            around them, I'd love to hear from you.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
