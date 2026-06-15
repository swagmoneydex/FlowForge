const ITEMS = [
  "Workflow Automation",
  "AI Integration",
  "CRM Automation",
  "Data Pipelines",
  "E-commerce Ops",
  "Custom APIs",
  "Process Design",
  "Tool Integration",
  "Lead Automation",
  "Document AI",
];

export default function Marquee() {
  return (
    <div className="border-y border-white/[0.05] py-4 overflow-hidden select-none">
      <div className="marquee-inner">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-8 text-xs uppercase tracking-[0.15em] text-[#555] font-medium whitespace-nowrap"
          >
            {item}
            <span style={{ color: "var(--accent)", fontSize: "8px" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
