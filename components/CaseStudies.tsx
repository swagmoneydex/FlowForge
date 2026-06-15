import Reveal from "./Reveal";

const CASES = [
  {
    tag: "E-commerce",
    company: "Luminary Supply Co.",
    result: "42 hours saved every week",
    description:
      "Manual order processing, supplier emails, and inventory updates consumed the entire ops team. We automated the full order-to-fulfillment pipeline — from purchase confirmation through warehouse notification and reorder triggers.",
    metrics: [
      { value: "42h", label: "Saved per week" },
      { value: "−94%", label: "Error rate" },
      { value: "4.1×", label: "ROI at 90 days" },
    ],
  },
  {
    tag: "SaaS / Sales",
    company: "Meridian Analytics",
    result: "3× more demos booked",
    description:
      "Inbound leads sat in a spreadsheet for days before reps followed up. We built a qualification engine that scores, enriches, routes, and triggers a personalised sequence within 4 minutes of sign-up.",
    metrics: [
      { value: "< 4m", label: "Lead response time" },
      { value: "+203%", label: "Qualified demos" },
      { value: "6", label: "Reps freed from admin" },
    ],
  },
  {
    tag: "Professional Services",
    company: "Clearwater Legal",
    result: "Document review cut by 70%",
    description:
      "Lawyers spent hours extracting clauses from contracts before review. We integrated an AI pipeline that reads, tags, and summarises documents automatically — surfacing only what counsel needs to see.",
    metrics: [
      { value: "−70%", label: "Review time / doc" },
      { value: "800+", label: "Docs processed / mo" },
      { value: "120h", label: "Partner hours reclaimed" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-28 px-6 bg-[#060606]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between mb-20">
            <h2
              className="font-bold leading-tight"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              Work
            </h2>
            <p className="text-xs text-[#777] uppercase tracking-widest max-w-[200px] text-right hidden md:block">
              Real results from real companies
            </p>
          </div>
        </Reveal>

        <div>
          {CASES.map((c, i) => (
            <Reveal key={c.company}>
              <div className="py-16 border-b border-white/[0.06] last:border-none">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs uppercase tracking-[0.15em] text-[#777] font-mono">
                    {c.tag} — {c.company}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="font-bold leading-[0.95] tracking-tight mb-12"
                  style={{ fontSize: "clamp(28px, 4.5vw, 62px)" }}
                >
                  {c.result}
                </h3>

                <div className="grid md:grid-cols-2 gap-10 md:gap-20">
                  <p className="text-[#999] leading-relaxed text-sm md:text-base">
                    {c.description}
                  </p>
                  <div className="flex gap-10 md:gap-14 items-start">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl md:text-3xl font-bold mb-1.5">
                          {m.value}
                        </div>
                        <div className="text-xs uppercase tracking-widest text-[#777]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
