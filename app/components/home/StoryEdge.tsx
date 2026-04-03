"use client";

import { motion } from "framer-motion";

type StoryItem = {
  headline: string;
  paragraphs: string[];
  placeholder?: boolean;
};

type StoryBlock = {
  eyebrow: string;
  id: string;
  title: string;
  intro: string;
  stories: StoryItem[];
  layout?: "grid" | "stack";
};

const blocks: StoryBlock[] = [
  {
    eyebrow: "Part one",
    id: "my-journey",
    title: "My Journey",
    intro:
      "The through line from high school to Illinois: leadership, identity, and the doors a scholarship opened.",
    layout: "stack",
    stories: [
      {
        headline: "High school leadership",
        paragraphs: [
          "My freshman year of high school, I remember sitting in class and looking around, trying to understand where I fit in. I attended a predominantly Black high school on the South Side of Chicago, where culture existed in many forms, but it was not something that was actively embedded into the school’s pride or identity.",
          "As a proud Latino, growing up in the city and shaped by both my environment and my upbringing, I carried my culture with me. But I also noticed something missing: there was not enough awareness or celebration of the different cultures that made up our community.",
          "At the time, I was an introvert. I observed more than I spoke. But I was always thinking, always learning, and always pushing myself academically. I took pride in being a straight-A student, not just for the grades, but because I genuinely valued learning and wanted more than what was simply presented on the surface.",
          "My school lacked resources, which made the experience feel limited at times. So I made a decision early on: if opportunities did not exist, I would create them.",
          "As I became more involved and eventually stepped into leadership as National Honor Society President, I saw my chance to act. I began building a team, developing ideas, and creating initiatives that would bring awareness and appreciation to Hispanic culture within my school.",
          "This was not just about representation. It was about impact.",
          "I spoke at the Downtown Education for Justice, advocating on behalf of my school at a time when its reputation and numbers were being challenged. I used my voice, my credibility as a student, and my commitment to excellence to stand for something bigger than myself.",
          "Through those experiences, I learned that leadership is not about recognition. It is about responsibility. It is about stepping into spaces where change is needed and being willing to act.",
          "That chapter of my life, along with early ventures like my sneaker reselling business, laid the foundation for the leader I continue to grow into today.",
        ],
      },
      {
        headline: "Hispanic advocacy",
        paragraphs: [
          "I carried my culture with me in a school where it was not always reflected in what the building celebrated or called its own. I wanted more than passive diversity: I wanted awareness, pride, and honest recognition of the communities in our halls.",
          "When I led as National Honor Society President, I treated that gap as a mandate. I built initiatives that put Hispanic culture in the conversation, not as a box to check, but as something that deserved space and respect.",
          "Advocacy, for me, was never separate from leadership. Speaking at Downtown Education for Justice when our school was under scrutiny was part of the same thread: using credibility and care to stand for students and for truth.",
          "I still hold that lesson: representation without impact is incomplete. Impact is where advocacy becomes real.",
        ],
      },
      {
        headline: "Full ride scholarship",
        paragraphs: [
          "A few days after my birthday in late March, I received my decision from the University of Illinois Urbana-Champaign.",
          "I remember opening it, feeling a mix of nerves and anticipation, and then seeing that I had been accepted. In that moment, I felt overwhelming happiness and gratitude. I immediately knew this was going to be one of my top choices.",
          "But there was still one thing on my mind.",
          "I did not just want to go to college. I wanted to go without putting myself or my family into debt.",
          "That goal had been driving me for years.",
          "Throughout high school, I held myself to a high standard. I was a straight-A student all four years, not because it was easy, but because I was disciplined, consistent, and determined to create opportunities for myself. I stayed active in extracurriculars, pushed myself to grow, and showed up even when things were not perfect.",
          "I made a promise to myself: I would not pursue higher education at the cost of financial instability. If I was going to do this, I was going to do it the right way.",
          "So when I found out that I had earned a full-ride scholarship, it was more than just an award. It was a defining moment.",
          "It meant that every late night, every challenge, every moment of doubt had led to something real.",
          "I shared that moment with my mom, and it is something I will never forget.",
          "That experience validated everything I had worked for. It reminded me that hard work, persistence, and belief in yourself can truly create life-changing opportunities.",
          "Now, as I approach the end of my junior year studying finance, that same moment continues to motivate me: to maximize every opportunity and to keep building a future that reflects where I come from and where I am going.",
        ],
      },
    ],
  },
  {
    eyebrow: "Part two",
    id: "story-entrepreneurship",
    title: "Entrepreneurship",
    intro:
      "Building in the real world: instincts, timing, and what it took to grow something of your own.",
    layout: "stack",
    stories: [
      {
        headline: "Sneaker business",
        paragraphs: [
          "My introduction to business did not come from a classroom. It started with a single pair of Jordans.",
          "They were my dad’s, and I decided to sell them just to see what would happen. I wanted to understand how difficult it would be to market a product, attract a buyer, and actually complete a transaction using a platform like Facebook Marketplace.",
          "When the shoes sold, something clicked.",
          "I realized there was real demand. People were actively looking for quality sneakers at prices below retail. That first sale showed me that there was an opportunity if I was willing to learn how the market worked.",
          "At 15 years old, I began taking it seriously.",
          "I started studying pricing trends across platforms like StockX, GOAT, and eBay. I focused on hyped Jordans, understanding which pairs had demand and when to buy or sell. I paid attention to timing, condition, and customer expectations.",
          "But what mattered most was reputation.",
          "I learned quickly that being a trusted seller was everything. People needed to know they were getting authentic, high-quality products. That meant communication, consistency, and accountability in every transaction.",
          "What started as curiosity turned into a real business.",
          "Through this experience, I developed an understanding of markets, risk, and value. I learned how to think strategically, adapt quickly, and take ownership of results.",
          "More importantly, I learned what it means to build something from the ground up, and that lesson continues to shape how I approach business, finance, and opportunity today.",
        ],
      },
      {
        headline: "Market timing",
        paragraphs: [
          "Pricing was never guesswork for long. I watched how pairs moved on StockX, GOAT, and eBay, which releases carried hype, and how condition and authenticity changed what buyers would pay.",
          "Timing meant knowing when to hold inventory and when to release it, and respecting that the market could shift faster than emotion. That discipline turned into a habit of reading signals instead of chasing noise.",
        ],
      },
      {
        headline: "Growth story",
        paragraphs: [
          "The arc was never only about pairs sold. It was about trust compounding: repeat buyers, a reputation for authenticity, and the confidence to take the next risk.",
          "Growth, for me, was learning to own outcomes end to end: sourcing, pricing, messaging, and follow-through. That mindset is what I carry into finance and into every room where results matter.",
        ],
      },
    ],
  },
  {
    eyebrow: "Part three",
    id: "what-i-stand-for",
    title: "What I Stand For",
    intro:
      "The principles that show up in how you recruit, lead, and imagine the industry you want to help shape.",
    layout: "grid",
    stories: [
      {
        headline: "Latino representation",
        paragraphs: [
          "Tell your story here: why visibility and access in finance matter to you, personally and professionally. Name the moments, mentors, or gaps that sharpened your commitment.",
        ],
        placeholder: true,
      },
      {
        headline: "Leadership mindset",
        paragraphs: [
          "Tell your story here: how you define leadership, humility, and lifting others as you grow. Connect it to a specific decision or conversation readers can picture.",
        ],
        placeholder: true,
      },
    ],
  },
];

function StoryBody({ story }: { story: StoryItem }) {
  return (
    <div className="mt-5 flex-1 space-y-4">
      {story.paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-sm leading-relaxed sm:text-[15px] ${
            story.placeholder
              ? "italic text-muted"
              : "text-slate-600"
          }`}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

export function StoryEdge() {
  return (
    <section
      id="stories"
      className="border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50/40 to-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            My edge
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
            My edge is in the stories
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            These are the narratives behind the resume: where I came from, what I
            built, and what I am still working toward. Two sections below still have
            room for you to add your finishing voice.
          </p>
        </motion.div>

        <div className="mt-20 space-y-24 sm:space-y-28">
          {blocks.map((block, bi) => (
            <motion.article
              key={block.id}
              id={block.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: bi * 0.05 }}
              className="scroll-mt-28"
            >
              <div className="flex flex-col gap-2 border-b border-slate-200/90 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange/90">
                    {block.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-brand-blue sm:text-3xl">
                    {block.title}
                  </h3>
                </div>
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
                {block.intro}
              </p>

              <div
                className={
                  block.layout === "stack"
                    ? "mt-12 flex max-w-3xl flex-col gap-14"
                    : `mt-10 grid gap-6 md:grid-cols-2`
                }
              >
                {block.stories.map((story, si) => (
                  <motion.div
                    key={story.headline}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: si * 0.06 }}
                    className={`group flex flex-col rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all hover:border-brand-orange/25 hover:shadow-md ${
                      block.layout === "stack" ? "w-full" : ""
                    }`}
                  >
                    <div className="mb-2 h-1 w-10 rounded-full bg-brand-orange/80 transition-all group-hover:w-14" />
                    <h4 className="text-xl font-bold text-brand-blue">
                      {story.headline}
                    </h4>
                    <StoryBody story={story} />
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
