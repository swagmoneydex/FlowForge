"use client";
import { useState, useRef } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
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
                Tell us about your biggest operational bottleneck. We&apos;ll
                come back with a concrete plan — free, no commitment.
              </p>
              <div className="space-y-1 text-sm text-[#666] font-mono">
                <p>hello@flowforge.co</p>
                <p>Toronto — working globally</p>
                <p>Replies within 1 business day</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            {status === "success" ? (
              <div className="flex flex-col justify-center h-full">
                <div className="text-4xl mb-5 font-bold">↑</div>
                <h3 className="text-2xl font-semibold mb-3">Got it.</h3>
                <p className="text-[#999] text-sm leading-relaxed">
                  We&apos;ll review your message and reply with a proposed
                  approach and a calendar link within one business day.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
              >
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#777]">
                      Name
                    </label>
                    <input
                      name="name"
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
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="bg-transparent border-b border-white/[0.08] pb-3 text-sm text-white placeholder:text-[#444] outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#777]">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Acme Inc — Head of Operations"
                    className="bg-transparent border-b border-white/[0.08] pb-3 text-sm text-white placeholder:text-[#444] outline-none focus:border-white/25 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#777]">
                    What&apos;s costing your team the most time?
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="We manually copy leads from our form into HubSpot, then send a follow-up email, then update a spreadsheet..."
                    className="bg-transparent border-b border-white/[0.08] pb-3 text-sm text-white placeholder:text-[#444] outline-none focus:border-white/25 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400">
                    Something went wrong — please try again or email us directly.
                  </p>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-black bg-white px-7 py-3.5 rounded-full hover:bg-[#ff6b2b] hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending…" : "Send message →"}
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
