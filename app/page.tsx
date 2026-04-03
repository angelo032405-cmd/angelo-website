"use client";

import { AnimatedSection } from "./components/ui/AnimatedSection";
import { Chapter } from "./components/Chapter";
import { Card } from "./components/ui/Card";
import { HomeLanding } from "./components/home/HomeLanding";
import { StoryEdge } from "./components/home/StoryEdge";
import { ContactSection } from "./components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <HomeLanding />
      <StoryEdge />

      {/* About */}
      <Chapter
        id="about"
        number="Chapter One"
        title="About"
        intro="Where I come from, what shaped me, and what I care about, including my high school years and the path that led me to Illinois."
      >
        <div className="space-y-12">
          <AnimatedSection>
            <Card className="border-brand-orange/20 bg-gradient-to-b from-white to-slate-50/50 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Who I am
              </p>
              <h3 className="mt-3 text-2xl font-bold text-brand-blue sm:text-3xl">
                Why I Do What I Do
              </h3>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Everything I pursue is rooted in where I come from and what I
                  have seen.
                </p>
                <p>
                  I come from a mixed heritage: Mexican and Puerto Rican, and I
                  carry both cultures with pride. Growing up on the South Side of
                  Chicago, I was exposed to environments where not everyone had
                  access to opportunity. I have seen the impact of violence,
                  poverty, and negative influences, and I have also seen the
                  strength, resilience, and potential within those same communities.
                </p>
                <p>That perspective shaped me.</p>
                <p>
                  I do not just want success for myself. I want to represent
                  something bigger.
                </p>
                <p>
                  I want to teach, motivate, and inspire others who come from
                  similar backgrounds. I want to be someone that younger students
                  can look at and think, &ldquo;If he did it, I can too.&rdquo;
                </p>
                <p>
                  I am driven to increase representation in spaces like finance,
                  business, leadership, and entrepreneurship, spaces where people
                  like me are often underrepresented.
                </p>
                <p>
                  I represent the students who had the potential but did not get
                  the opportunity. The ones who faced setbacks, difficult
                  environments, or made the wrong decisions.
                </p>
                <p>
                  And at the same time, I carry a responsibility: to never forget
                  where I came from.
                </p>
                <p className="font-semibold text-brand-blue">What I believe in is simple:</p>
                <ul className="list-none space-y-2 pl-0 sm:columns-2 sm:gap-8">
                  <li>Hard work.</li>
                  <li>Discipline.</li>
                  <li>Adaptability.</li>
                  <li>Open-mindedness.</li>
                  <li>Communication.</li>
                  <li>Leadership.</li>
                </ul>
                <p>
                  These values shape how I move, how I grow, and how I lead.
                </p>
                <p>
                  My purpose is to continue learning, building meaningful
                  relationships, creating opportunities, and ultimately building
                  something that lasts: an impact, a community, and a legacy.
                </p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Heritage &amp; Family</h3>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                My foundation is built on two cultures, Mexican and Puerto Rican,
                and both have shaped who I am in different but equally meaningful
                ways.
              </p>
              <p>
                On my Mexican side, family was everything. I grew up around constant
                support, whether it was family gatherings at my grandma&apos;s house,
                showing up for one another without hesitation, or keeping God at the
                center of our lives. There was an unspoken understanding that no
                matter what, you take care of your people. That environment taught
                me loyalty, discipline, and the importance of staying grounded.
              </p>
              <p>
                On my Puerto Rican side, I learned strength through unity. I was
                taught early on that being there for your family is not optional, it
                is a responsibility. That meant looking out for younger siblings,
                being aware of my surroundings, learning how to navigate tough
                environments, and understanding how to protect not only myself but
                the people around me. It also meant embracing who I am fully, taking
                pride in my identity, and trusting that God has a purpose for my life.
              </p>
              <p>
                Growing up on the South Side of Chicago, these values were not just
                lessons, they were necessary. My environment required awareness,
                resilience, and maturity at a young age. At the same time, it
                reinforced something even more important: the strength of community
                and the power of staying connected to where you come from.
              </p>
              <p>
                Together, my cultures gave me both grounding and drive. They taught
                me how to move with purpose, stay disciplined, and lead with
                intention while never losing sight of the people and values that
                shaped me.
              </p>
              <p className="font-medium text-brand-blue">That is why representation matters to me.</p>
              <p>
                Because when someone sees a reflection of their background in spaces
                they once thought were out of reach, it changes what they believe is
                possible.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Upbringing &amp; Community</h3>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                My roots trace back to Pilsen, a neighborhood on the South Side of
                Chicago, where both sides of my family built their lives. It is where
                my parents grew up and later met, and it holds a deep meaning in my
                identity. Being raised in that environment taught me how to be social,
                build relationships, and embrace my culture. I was always surrounded
                by people who knew me through my family, which gave me a strong sense
                of connection and belonging from an early age.
              </p>
              <p>
                As I got older, I moved to the Ashburn neighborhood, where I attended
                school at Durkin Park. That environment shaped me differently. It
                taught me independence, awareness, and responsibility at a young age.
                I learned how to take care of my younger siblings and cousins, stay
                alert to my surroundings, and carry myself with maturity while still
                enjoying my childhood.
              </p>
              <p>
                A lot of my time was spent outside. I was always at the park, playing
                sports until it got dark and the lights came on, knowing that was my
                sign to head back home. My family was always close by, and that
                allowed me to grow up freely while still feeling supported. I was
                constantly meeting new people, building friendships, and experiencing
                what it meant to be part of a real community.
              </p>
              <p>
                Those experiences gave me perspective. I was surrounded by friends
                who came from different situations, some of whom faced challenges
                that I was fortunate not to experience in the same way. Seeing that
                taught me to appreciate what I had while also understanding the
                importance of staying grounded and treating people with respect.
              </p>
              <p>
                More than anything, those environments shaped how I value
                relationships. I learned to surround myself with genuine people, to
                accept others for who they are, and to build connections that go beyond
                surface-level friendships. To me, community has always meant becoming
                like family, and that mindset continues to guide how I move, how I
                lead, and how I build relationships today.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Scholarship journey</h3>
            <p className="mt-4 leading-relaxed text-muted">
              Earning a full ride to the University of Illinois Urbana Champaign was a turning point. It was not only financial freedom but proof that preparation, persistence, and community support could open doors that once felt closed. I am a Gies Scholar, James Scholar, and Chicago Scholar. I use that as fuel to work harder, give back, and create similar opportunities for others.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Values and motivations</h3>
            <p className="mt-4 leading-relaxed text-muted">
              Leadership, inspiration, humility, cultural advocacy, and entrepreneurship are not just words. They are how I try to show up every day. I lead by example and by lifting others. I stay curious and share what I learn. I remember where I came from and stay grounded. I advocate for my community and for greater Latino representation in finance. And I think like an owner: building something from nothing, whether it is a business or a better path for the next generation.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">High school foundation</h3>
            <p className="mt-4 leading-relaxed text-muted">
              At Bogan High School from 2019 to 2023 I built habits of rigor, service, and voice. The details below show how academics, leadership, programs, and community work came together before college.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h4 className="text-lg font-semibold text-brand-blue mt-10">Academic achievements</h4>
            <ul className="mt-4 space-y-2 text-muted">
              <li>High Honors student throughout high school (2019 to 2023)</li>
              <li>High Honor Roll all four years</li>
              <li>Valedictorian, junior year</li>
              <li>Salutatorian, senior year</li>
              <li>Enrolled in the IB Diploma Program starting sophomore year</li>
              <li>Honors courses beginning sophomore year</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h4 className="text-lg font-semibold text-brand-blue mt-10">Leadership</h4>
            <ul className="mt-4 space-y-2 text-muted">
              <li>President, National Honor Society (2022 to 2023)</li>
              <li>Student Council representative</li>
              <li>Bogan Post Secondary Leadership Team, student representative</li>
              <li>School leader and student representative</li>
              <li>CPS Board of Education Call to Action: advocated for school graduation rate awareness</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h4 className="text-lg font-semibold text-brand-blue mt-10">Programs and organizations</h4>
            <ul className="mt-4 space-y-2 text-muted">
              <li>Chicago Scholars (accepted 2022)</li>
              <li>Embarc student</li>
              <li>CPS Equity Project</li>
              <li>Urban Alliance, program completion</li>
              <li>CPS Network 16, student led mental health initiative</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h4 className="text-lg font-semibold text-brand-blue mt-10">Projects and initiatives</h4>
            <ul className="mt-4 space-y-2 text-muted">
              <li>Personal project: read ten stories to young children in elementary school</li>
              <li>Black History Month: read a story and engaged with first graders</li>
              <li>Student led Mental Health Day, co organized by Student Council and NHS</li>
              <li>Network 16 trip to Virginia: National Association of Secondary School Principals, mental health awareness trip</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection>
            <h4 className="text-lg font-semibold text-brand-blue mt-10">Coursework and skills</h4>
            <ul className="mt-4 space-y-2 text-muted">
              <li>IB Diploma Program</li>
              <li>Dual enrollment: Social Services 101 and 102, Computer Information Systems</li>
              <li>Four years of French language study</li>
            </ul>
          </AnimatedSection>
        </div>
      </Chapter>

      {/* Entrepreneurship */}
      <Chapter
        id="entrepreneurship"
        number="Chapter Two"
        title="Entrepreneurship"
        intro="Building and scaling a sneaker reselling business. What it taught me about markets, trust, and ownership."
      >
        <div className="space-y-12">
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">The venture</h3>
            <p className="mt-4 leading-relaxed text-muted">
              Angelo Flow Sneaks started in February 2021 as a side project and grew into a real business. I handled everything: sourcing, authentication, pricing, marketing, and customer relationships. In a competitive, trend driven market, I learned that success was not just about having inventory. It was about building trust, understanding the customer, and executing consistently.
            </p>
            <ul className="mt-6 space-y-2 text-muted">
              <li>150 authenticated sneakers verified</li>
              <li>50 loyal customer relationships with a 50 percent increase in repeat business</li>
              <li>150 successful transactions with a 100 percent positive seller rating</li>
              <li>Deep knowledge of 20 brands and 100 product lines</li>
            </ul>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Lessons learned</h3>
            <p className="mt-4 leading-relaxed text-muted">
              The business gave me more than revenue. It gave me a framework for thinking about value, risk, and relationships that I use every day in finance and leadership.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                <span className="text-muted">Authenticity builds trust. Every pair was verified. Customers came back because they knew they could rely on the product.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                <span className="text-muted">Relationships compound. Consistency and clear communication led to 50 loyal customers and a 50 percent repeat rate.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                <span className="text-muted">Markets teach you to think in margins, timing, and risk. The sneaker market was a real world classroom for supply, demand, and pricing.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                <span className="text-muted">Ownership mindset changes everything. When it is your business, you care about every detail, from sourcing to packaging to follow up.</span>
              </li>
            </ul>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Business insights</h3>
            <p className="mt-4 leading-relaxed text-muted">
              These insights from the sneaker venture inform how I approach client work, analysis, and professional development.
            </p>
            <div className="mt-6 space-y-4">
              <Card>
                <p className="text-muted">Understanding 20 brands and 100 product lines forced me to segment markets and think about positioning. Those skills translate directly to finance and advisory.</p>
              </Card>
              <Card>
                <p className="text-muted">150 transactions with a 100 percent positive seller rating required discipline in operations, documentation, and customer service. All of that is transferable to client facing roles.</p>
              </Card>
              <Card>
                <p className="text-muted">Running the venture during a rising market taught me to recognize trends, manage inventory risk, and stay adaptable when conditions change.</p>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </Chapter>

      {/* Leadership */}
      <Chapter
        id="leadership"
        number="Chapter Three"
        title="Leadership"
        intro="Programs, community involvement, and the mindset I bring to every role."
      >
        <div className="space-y-12">
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Programs and leadership experience</h3>
            <p className="mt-4 leading-relaxed text-muted">
              From campus roles to national programs, I have sought out opportunities to lead with integrity, support others, and grow as a professional.
            </p>
            <div className="mt-8 space-y-6">
              {[
                { name: "Peer Advisor Team Lead, Gies College of Business", period: "2026 to Present", detail: "Leading a team that guides 50 undergraduate business students on academic planning, campus resources, and professional development." },
                { name: "Peer Advisor, Gies College of Business", period: "2025 to Present", detail: "One on one guidance contributing to improved retention, engagement, and community within Gies." },
                { name: "Gies Ambassador", period: "2024 to Present", detail: "Represent Gies at 20 events and workshops. Delivered 10 presentations to over 200 prospective students." },
                { name: "Access and Engagement Ambassador, UIUC", period: "2023 to Present", detail: "Support diversity and inclusion through student led initiatives, mentorship, and events for underrepresented students." },
                { name: "Management Leadership for Tomorrow, Career Prep Fellow", period: "2025 to Present", detail: "Selected from 3000 applicants for an 18 month leadership program. Collaborate with Fortune 500 executives and industry leaders." },
                { name: "LeaderShape Institute, Alumni", period: "2024", detail: "Awarded a 1000 dollar scholarship from Gies. Completed intensive leadership curriculum. Joined a network of 70000 alumni." },
              ].map((program, i) => (
                <AnimatedSection key={program.name} delay={i * 0.05}>
                  <Card>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-brand-blue">{program.name}</h4>
                        <p className="mt-2 text-muted text-sm">{program.detail}</p>
                      </div>
                      <span className="text-sm text-brand-orange shrink-0">{program.period}</span>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Community involvement</h3>
            <p className="mt-4 leading-relaxed text-muted">
              I am committed to organizations that expand access, build community, and develop the next generation of leaders.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "ALPFA, Association of Latino Professionals For America. Active member, Philanthropy Committee. Community outreach and professional development.",
                "Chicago Scholars. Seven year program for first generation students. College access, persistence, career development, and exclusive internship opportunities.",
                "America Needs You. Fellow. Career development and leadership for first generation college students.",
                "Greenwood Project. GP Scholar. Year long financial services training, Excel, financial modeling, and leadership development.",
                "CareerSpring. Active network member. Networking and job placement for first generation and low income students.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Career development</h3>
            <p className="mt-4 leading-relaxed text-muted">
              I actively invest in my growth through conferences, workshops, and recruiting experiences. That includes Google Genesis2Genesis, Deloitte Illini Chicago Day, PwC Future Focus, and structured training in financial modeling, Excel, and professional communication. I am seeking Summer 2026 internship opportunities in the Chicagoland area in wealth management, advisory, and commercial banking.
            </p>
          </AnimatedSection>
        </div>
      </Chapter>

      {/* Experience */}
      <Chapter
        id="experience"
        number="Chapter Four"
        title="Experience"
        intro="Featured roles and a full view of my leadership and professional involvement."
      >
        <div className="space-y-8">
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Featured experience</h3>
            <div className="mt-6 space-y-6">
              {[
                { role: "Real Estate Private Equity Intern", org: "Project Destined", period: "2026 to Present", bullets: ["Five week private equity real estate training. Underwriting three multifamily deals in team and individual settings. Competing in a PE style pitch competition."] },
                { role: "Peer Advisor Team Lead", org: "Gies College of Business, UIUC", period: "2026 to Present", bullets: ["Leading peer advising efforts. Guiding 50 students on academic planning, campus resources, and professional development."] },
                { role: "Consulting Project, Client Acquisition and Strategy", org: "BUS 301, Real CPA Advisory Firm", period: "2025", bullets: ["Worked directly with a real CPA firm on client acquisition, referral strategy, and market positioning. Applied consulting frameworks. Delivered actionable recommendations."] },
                { role: "Sneaker Reselling Venture", org: "Angelo Flow Sneaks", period: "2021 to Present", bullets: ["150 authenticated sales. 100 percent positive seller rating. 50 loyal customers. 50 percent repeat business growth."] },
                {
                  role: "Be Your Own Boss Intern",
                  org: "Fetch Rewards and Future Founders",
                  period: "February to March 2022",
                  bullets: [
                    "Completed a Future Founders entrepreneurship program with hands on startup fundamentals.",
                    "Connected with a nationwide network of founders and collaborated with peers to develop and pitch an original business idea.",
                  ],
                },
              ].map((item, i) => (
                <AnimatedSection key={item.role} delay={i * 0.06}>
                  <Card>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-brand-blue">{item.role}</h4>
                        <p className="text-brand-orange font-medium">{item.org}</p>
                        <ul className="mt-3 space-y-1 text-sm text-muted">
                          {item.bullets.map((b, j) => (
                            <li key={j}>{b}</li>
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
            <h3 className="text-xl font-semibold text-brand-blue">Education</h3>
            <Card className="mt-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-brand-blue">Gies College of Business, University of Illinois Urbana Champaign</h4>
                  <p className="text-muted">Bachelor degree, Finance. 2023 to 2027.</p>
                </div>
                <span className="text-sm text-brand-orange">Gies Scholar, James Scholar</span>
              </div>
            </Card>
            <p className="mt-4 text-muted">Bogan High School. 2019 to 2023.</p>
          </AnimatedSection>
        </div>
      </Chapter>

      {/* Insights */}
      <Chapter
        id="insights"
        number="Chapter Five"
        title="Insights"
        intro="Leadership lessons, career development ideas, and personal reflections from my journey so far."
      >
        <div className="space-y-12">
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Leadership lessons</h3>
            <div className="mt-6 space-y-4">
              {[
                "Lead with integrity first. At LeaderShape and in every role since, I have seen that people follow those who are consistent, honest, and willing to do the work themselves.",
                "Lift others as you climb. Peer advising and mentoring are not side activities. They are how I stay grounded and create more room at the table for the next generation.",
                "Vision without execution is just a dream. I try to pair big goals with clear next steps and accountability.",
              ].map((lesson, i) => (
                <Card key={i}>
                  <p className="text-muted">{lesson}</p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Career development ideas</h3>
            <div className="mt-6 space-y-4">
              {[
                "Build relationships before you need them. The best opportunities in finance and beyond often come from people who already know your work and character.",
                "Get comfortable with uncertainty. Markets, recruiting, and career paths are rarely linear. Adaptability and continuous learning matter more than a perfect plan.",
                "Representation opens doors. I am passionate about increasing Latino representation in finance because visibility and access change what is possible for others.",
              ].map((idea, i) => (
                <Card key={i}>
                  <p className="text-muted">{idea}</p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-brand-blue">Personal reflections</h3>
            <p className="mt-4 text-muted">Thoughts that keep me grounded and focused on what matters.</p>
            <ul className="mt-6 space-y-4">
              {[
                "My Mexican heritage and my family values, hard work, loyalty, community, are the foundation of how I show up in professional spaces. I do not leave that at the door.",
                "Advocating for Hispanic culture in a predominantly Black high school taught me to bridge worlds and stand with others. That mindset shapes my approach to diversity, equity, and inclusion today.",
                "The full ride to Illinois was a turning point. I use it as motivation to give back: mentoring, sharing my story, and creating pathways for others.",
                "Entrepreneurship taught me ownership. Whether it is a class project, a team role, or a client deliverable, I treat it like it is mine. Because my reputation is on the line.",
              ].map((reflection, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span className="text-muted">{reflection}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </Chapter>

      <ContactSection />
    </>
  );
}
