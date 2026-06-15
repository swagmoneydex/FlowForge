import Reveal from "./Reveal";

const PLANS = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/mo",
    pitch: "One core workflow automated end-to-end.",
    features: [
      "1 automation workflow",
      "Up to 3 tool integrations",
      "30-day implementation",
      "2 revision rounds",
      "30-day post-launch support",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$3,500",
    period: "/mo",
    pitch: "Full-department automation with AI built in.",
    features: [
      "Up to 5 workflows",
      "Unlimited integrations",
      "AI layer included",
      "60-day implementation",
      "Dedicated Slack channel",
      "90-day support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    pitch: "Full-stack transformation with ongoing support.",
    features: [
      "Unlimited workflows",
      "Custom AI pipelines",
      "Staff training",
      "SLA-backed support",
      "Monthly strategy calls",
      "White-glove onboarding",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between mb-20">
            <h2
              className="font-bold leading-tight"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              Pricing
            </h2>
            <p className="text-xs text-[#777] uppercase tracking-widest max-w-[200px] text-right hidden md:block">
              No hidden hours. No scope creep.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((plan) => (
            <Reveal key={plan.name}>
              <div
                className={`rounded-2xl p-8 flex flex-col h-full border transition-colors duration-300 ${
                  plan.featured
                    ? "border-white/20 bg-white/[0.03]"
                    : "border-white/[0.06] bg-[#080808]"
                }`}
              >
                {plan.featured ? (
                  <div className="text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "var(--accent)" }}>
                    Most popular
                  </div>
                ) : (
                  <div className="h-[22px] mb-6" />
                )}

                <div className="mb-7">
                  <div className="text-xs uppercase tracking-widest text-[#888] mb-3">
                    {plan.name}
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    {plan.period && (
                      <span className="text-[#777] text-sm">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-[#999] leading-relaxed">{plan.pitch}</p>
                </div>

                <div className="h-px bg-white/[0.06] mb-7" />

                <ul className="flex flex-col gap-4 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#bbb]">
                      <span
                        className="shrink-0 mt-0.5 text-[8px]"
                        style={{ color: "var(--accent)" }}
                      >
                        ◆
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-xl text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                    plan.featured
                      ? "bg-white text-black hover:bg-[#ff6b2b] hover:text-white"
                      : "border border-white/[0.08] text-[#aaa] hover:border-white/20 hover:text-white"
                  }`}
                >
                  Get started
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
