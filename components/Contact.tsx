"use client";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-28 px-6 bg-[#060606]">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#888] mb-8">
                Start a project
              </p>
              <h2
                className="font-bold leading-tight mb-8"
                style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
              >
                Let&apos;s build something that actually works.
              </h2>
              <p className="text-[#999] text-sm leading-relaxed mb-12">
                Tell us about your biggest operational bottleneck. We&apos;ll come
                back with a concrete plan — free, no commitment.
              </p>
              <div className="space-y-1 text-sm text-[#666] font-mono">
                <p>hello@flowforge.co</p>
                <p>Toronto — working globally</p>
                <p>Replies within 1 business day</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            {submitted ? (
              <div className="flex flex-col justify-center h-full">
                <div className="text-4xl mb-5 font-bold">↑</div>
                <h3 className="text-2xl font-semibold mb-3">Got it.</h3>
                <p className="text-[#999] text-sm leading-relaxed">
                  We&apos;ll review your message and reply with a proposed approach
                  and a calendar link within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#777]">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Johnson"
                      className="bg-transparent border-b border-white/[0.08] pb-3 text-sm text-white placeholder:text-[#444] outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#777]">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="bg-transparent border-b border-white/[0.08] pb-3 text-sm text-white placeholder:text-[#444] outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#444]">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc — Head of Operations"
                    className="bg-transparent border-b border-white/[0.08] pb-3 text-sm text-white placeholder:text-[#444] outline-none focus:border-white/25 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#444]">
                    What&apos;s costing your team the most time?
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="We manually copy leads from our form into HubSpot, then send a follow-up email, then update a spreadsheet..."
                    className="bg-transparent border-b border-white/[0.08] pb-3 text-sm text-white placeholder:text-[#444] outline-none focus:border-white/25 transition-colors resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-black bg-white px-7 py-3.5 rounded-full hover:bg-[#ff6b2b] hover:text-white transition-colors duration-300"
                  >
                    Send message →
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
