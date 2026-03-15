import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Angelo Perez",
  description:
    "Angelo Perez — Finance student at UIUC, Gies Scholar, and aspiring professional in wealth management, advisory, and commercial banking.",
};

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>
      <div className="mt-8 space-y-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          I'm a junior Finance student at the University of Illinois at
          Urbana-Champaign with an entrepreneurial foundation built from running
          my own sneaker resale venture. Managing everything from sourcing to
          pricing, marketing, and customer relationships taught me how to
          understand markets, analyze trends, and build trust in a competitive
          environment.
        </p>
        <p>
          That experience sparked a broader interest in how money, value, and
          decision-making shape people's lives and businesses. Today, I'm
          especially drawn to client-facing roles in wealth management, financial
          advisory, commercial banking, and consumer finance, where I can combine
          analytical skills with relationship-building to help individuals and
          communities make better financial decisions.
        </p>
        <p>
          I'm actively seeking Summer 2026 internship opportunities in the
          Chicagoland area and continuously building my skills through finance
          coursework, professional programs, and leadership as a Peer Advising Team
          Lead. I'm particularly passionate about increasing Latino representation
          in finance and expanding access to financial education and opportunity.
        </p>
        <p>
          If you work in any of these areas or are open to sharing insight on
          early-career paths in finance, I'd welcome the chance to connect and
          learn from your experience.
        </p>
      </div>
    </main>
  );
}
