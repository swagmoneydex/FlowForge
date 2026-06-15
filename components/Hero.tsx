import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, #1c1c1c 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Subtle orange bloom at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[250px]"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(255,107,43,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-32 w-full">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-[#888] mb-10">
            Automation Agency — Est. 2022
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            className="font-bold leading-[0.92] tracking-tight mb-12"
            style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
          >
            We automate
            <br />
            the work that
            <br />
            <span style={{ color: "var(--accent)" }}>wastes your time.</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <div className="h-px bg-white/[0.07] mb-10" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <p className="text-[#aaa] text-lg leading-relaxed max-w-md">
              Custom automation systems for ambitious companies — from workflow
              design to full deployment.
            </p>
            <div className="flex gap-10 shrink-0">
              {[
                { value: "200+", label: "Workflows built" },
                { value: "40h", label: "Avg saved / week" },
                { value: "3.2×", label: "Avg ROI at 90d" },
              ].map(({ value, label }) => (
                <div key={label} className="text-right">
                  <div className="text-3xl font-bold">{value}</div>
                  <div className="text-xs uppercase tracking-widest text-[#777] mt-1 whitespace-nowrap">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-black bg-white px-7 py-3.5 rounded-full hover:bg-[#ff6b2b] hover:text-white transition-colors duration-300"
            >
              Book a free call
              <span>→</span>
            </a>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#888] hover:text-white transition-colors duration-200 py-3.5 px-2"
            >
              See our work
              <span>↓</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
