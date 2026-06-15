import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Workflow Automation",
    description:
      "Map and automate your most time-consuming processes using Make, n8n, or custom pipelines. We handle the architecture so your team doesn't have to.",
    tools: ["Make", "n8n", "Zapier"],
  },
  {
    title: "AI Integration",
    description:
      "Embed language models into your existing tools — auto-draft emails, classify tickets, generate reports, and extract data without lifting a finger.",
    tools: ["Claude", "OpenAI", "Fine-tuning"],
  },
  {
    title: "CRM & Sales Automation",
    description:
      "Connect your CRM to every touchpoint. Automate lead scoring, follow-up sequences, and deal stage transitions across HubSpot, Salesforce, or Pipedrive.",
    tools: ["HubSpot", "Salesforce", "Pipedrive"],
  },
  {
    title: "Data & Reporting Pipelines",
    description:
      "Pull data from any source, transform it, and push to your dashboards automatically. Real-time visibility — no manual exports.",
    tools: ["BigQuery", "Airtable", "Looker"],
  },
  {
    title: "E-commerce Operations",
    description:
      "Sync inventory, automate fulfillment notifications, trigger re-engagement campaigns, and handle returns — without anyone touching a keyboard.",
    tools: ["Shopify", "WooCommerce", "Klaviyo"],
  },
  {
    title: "Custom API Integrations",
    description:
      "No native connector? We build bespoke integrations and internal tools that fit precisely into your existing stack and business logic.",
    tools: ["REST APIs", "Webhooks", "Custom code"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between mb-16">
            <h2
              className="font-bold leading-tight"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
            >
              What we automate
            </h2>
            <p className="text-xs text-[#777] uppercase tracking-widest max-w-[200px] text-right hidden md:block">
              End-to-end, front-office to back-office
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <div className="group grid grid-cols-1 md:grid-cols-[48px_1fr_1.2fr] gap-4 md:gap-6 p-6 md:p-8 rounded-2xl bg-[#0e0e0e] border border-white/[0.08] hover:border-white/[0.18] hover:bg-[#121212] transition-all duration-300 cursor-default">
                <div className="text-[#555] text-xs font-mono pt-0.5 hidden md:block">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <h3 className="text-base font-semibold group-hover:text-[#ff6b2b] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] uppercase tracking-widest text-[#555] font-mono px-2.5 py-1 rounded-md border border-white/[0.07] bg-white/[0.03]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-[#999] leading-relaxed md:border-l md:border-white/[0.07] md:pl-6">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
