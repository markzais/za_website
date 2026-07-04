import Link from "next/link";

export function LogoMark({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static vector mark, next/image svg optimization adds no value here
    <img
      src="/logo/zais-mark.svg"
      alt=""
      aria-hidden="true"
      width={800}
      height={800}
      fetchPriority={priority ? "high" : undefined}
      className={className}
    />
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className ?? ""}`}>
      <span className="font-display font-semibold tracking-tight text-paper-50">ZAIS</span>
      <span className="font-mono text-[0.55em] tracking-[0.34em] text-gold-400">ANALYTICS</span>
    </span>
  );
}

export function BrandLockup({ className, markClassName, priority }: { className?: string; markClassName?: string; priority?: boolean }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className ?? ""}`}
      aria-label="Zais Analytics, home"
    >
      <LogoMark
        priority={priority}
        className={
          markClassName ?? "h-9 w-9 shrink-0 transition-transform duration-500 ease-out group-hover:rotate-45"
        }
      />
      <Wordmark className="text-lg" />
    </Link>
  );
}
