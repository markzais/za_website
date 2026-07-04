export function RadialGuides({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 800"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className ?? ""}`}
    >
      <g className="origin-center animate-spin-slow" style={{ transformOrigin: "400px 400px" }}>
        <circle cx="400" cy="400" r="368" fill="none" stroke="var(--color-gold-700)" strokeWidth="1" opacity="0.5" />
        <path
          d="M 711.7 455 A 316.5 316.5 0 0 1 455 711.7"
          fill="none"
          stroke="var(--color-gold-600)"
          strokeWidth="1.2"
          opacity="0.6"
        />
        <path
          d="M 88.3 345 A 316.5 316.5 0 0 1 345 88.3"
          fill="none"
          stroke="var(--color-gold-600)"
          strokeWidth="1.2"
          opacity="0.6"
        />
      </g>
      <g className="origin-center animate-spin-reverse-slow" style={{ transformOrigin: "400px 400px" }}>
        <circle cx="400" cy="400" r="265" fill="none" stroke="var(--color-gold-800)" strokeWidth="1" opacity="0.6" />
      </g>
      <line x1="400" y1="0" x2="400" y2="800" stroke="var(--color-gold-800)" strokeWidth="0.75" opacity="0.35" />
      <line x1="0" y1="400" x2="800" y2="400" stroke="var(--color-gold-800)" strokeWidth="0.75" opacity="0.35" />
      <circle cx="400" cy="400" r="4" fill="var(--color-gold-500)" opacity="0.7" />
    </svg>
  );
}
