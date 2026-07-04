import type { Stat } from "@/data/stats";

export function StatItem({ stat, className }: { stat: Stat; className?: string }) {
  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      <span className="font-mono text-4xl font-medium tabular-nums text-gold-300 md:text-5xl">
        {stat.value}
      </span>
      <span className="mt-3 text-sm font-medium text-paper-50">{stat.label}</span>
      <span className="mt-1.5 text-sm text-paper-400">{stat.context}</span>
    </div>
  );
}
