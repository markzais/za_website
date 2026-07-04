export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-gold-700/60 bg-gold-300/5 px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold-300 ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-gold-400 sm:text-xs sm:tracking-[0.3em] ${className ?? ""}`}
    >
      <span className="h-px w-8 shrink-0 bg-gold-600" aria-hidden="true" />
      <span className="text-balance">{children}</span>
    </p>
  );
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className ?? ""}`}>{children}</div>;
}
