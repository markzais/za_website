import Link from "next/link";
import type { Capability } from "@/data/capabilities";
import { capabilityIconMap, IconArrowUpRight } from "@/components/icons";

export function CapabilityCard({ capability }: { capability: Capability }) {
  const Icon = capabilityIconMap[capability.icon];
  return (
    <Link
      href={`/capabilities/${capability.slug}`}
      className="group relative flex flex-col overflow-hidden border border-ink-600 bg-ink-900/60 p-8 transition-all duration-300 hover:border-gold-600 hover:bg-ink-850"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs tracking-[0.2em] text-gold-600">{capability.index}</span>
        <Icon className="h-8 w-8 text-gold-500 transition-colors duration-300 group-hover:text-gold-300" />
      </div>
      <h3 className="mt-8 font-display text-xl font-medium text-paper-50">{capability.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-400">{capability.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-300">
        Explore capability
        <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  );
}
