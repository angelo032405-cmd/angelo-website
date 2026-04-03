"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const EMAIL = "angelo.perez1800@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/angelo-perez-bg235";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-200 bg-gradient-to-b from-slate-50/30 to-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Chapter Six
        </p>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="text-left"
          >
            <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Whether you are hiring, mentoring, or simply open to a conversation, I
              would be honored to hear from you.
            </p>

            <div className="mt-10 space-y-6 text-left text-[15px] leading-relaxed text-slate-600 sm:text-base">
              <p>
                As I continue building my path in finance, I am currently focused on
                pursuing full-time opportunities for 2027 following my upcoming
                internship experience. My interests include investment consulting,
                commercial banking, procurement, and financial advisory.
              </p>
              <p>
                I value meaningful conversations and am always open to connecting
                with professionals, learning from their experiences, and gaining
                insight into the paths that shape long-term careers in these fields.
              </p>
              <p>
                Feel free to reach out&mdash;I would be glad to connect.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:mt-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Quick links
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue shadow-sm transition-all hover:border-brand-orange/40 hover:shadow-md"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue shadow-sm transition-all hover:border-brand-orange/40 hover:shadow-md"
                >
                  Email
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-blue shadow-sm transition-all hover:border-brand-orange/40 hover:shadow-md"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="rounded-2xl border border-slate-200/90 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08)] sm:p-10">
              <h3 className="text-lg font-semibold text-brand-blue">
                Send a message
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Share a brief note. This form is not connected to email yet; after
                submitting, reach out directly if you prefer.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-brand-orange/20 bg-brand-orange/5 px-5 py-6 text-center">
                  <p className="text-sm font-medium text-brand-blue">
                    Thank you for reaching out.
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    For a guaranteed response, email me at{" "}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-medium text-brand-orange underline-offset-2 hover:underline"
                    >
                      {EMAIL}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-brand-blue"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[15px] text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-brand-orange/50 focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-brand-blue"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[15px] text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-brand-orange/50 focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-brand-blue"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-[15px] text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-brand-orange/50 focus:bg-white focus:ring-2 focus:ring-brand-orange/20"
                      placeholder="How can I help? What would you like to discuss?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/25 transition-all hover:bg-brand-orange-light hover:shadow-lg active:scale-[0.99] sm:w-auto sm:px-10"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
