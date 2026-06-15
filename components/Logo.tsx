export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-label="FlowForge"
    >
      {/* Rounded square container */}
      <rect
        x="0.75"
        y="0.75"
        width="26.5"
        height="26.5"
        rx="6.5"
        stroke="white"
        strokeWidth="1.5"
      />
      {/* Three flow lines — descending lengths suggest a pipeline narrowing to output */}
      <line x1="7" y1="10" x2="18" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7" y1="14" x2="21" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7" y1="18" x2="15" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      {/* Orange arrowhead at the end of the middle line */}
      <path
        d="M19.5 11.5 L23 14 L19.5 16.5"
        stroke="#ff6b2b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
