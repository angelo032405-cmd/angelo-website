import type { Metadata } from "next";
import { PageHeader } from "../components/ui/PageHeader";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { Button } from "../components/ui/Button";

export const metadata: Metadata = {
  title: "Contact | Angelo Perez",
  description:
    "Get in touch with Angelo Perez. LinkedIn, email, and resume.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <PageHeader
        title="Contact"
        subtitle="Open to internships, collaborations, and conversations about finance, leadership, and career paths."
      />

      <AnimatedSection>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <ul className="space-y-6">
            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <h3 className="font-semibold text-brand-blue">Email</h3>
                <p className="text-muted text-sm mt-1">
                  Best for formal inquiries and opportunities.
                </p>
              </div>
              <Button
                href="mailto:angelo032405@gmail.com"
                variant="outline"
                size="sm"
                external
              >
                angelo032405@gmail.com
              </Button>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <h3 className="font-semibold text-brand-blue">LinkedIn</h3>
                <p className="text-muted text-sm mt-1">
                  Connect for networking and updates.
                </p>
              </div>
              <Button
                href="https://www.linkedin.com/in/angelo-perez-bg235"
                variant="primary"
                size="sm"
                external
              >
                Connect on LinkedIn
              </Button>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <div>
                <h3 className="font-semibold text-brand-blue">Resume</h3>
                <p className="text-muted text-sm mt-1">
                  Download my resume (PDF).
                </p>
              </div>
              {/* Add your resume PDF to /public/resume.pdf and the link will work */}
              <Button
                href="/resume.pdf"
                variant="secondary"
                size="sm"
              >
                Download resume
              </Button>
            </li>
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-10 text-center text-muted text-sm">
          Actively seeking Summer 2026 internship opportunities in the Chicagoland
          area. If you work in wealth management, advisory, commercial banking, or
          related fields—or are open to sharing insight on early-career paths—I’d
          welcome the chance to connect.
        </p>
      </AnimatedSection>
    </div>
  );
}
