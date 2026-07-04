import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconStrategy(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="11" />
      <circle cx="16" cy="16" r="6.5" />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none" />
      <path d="M16 2.5v3M16 26.5v3M2.5 16h3M26.5 16h3" />
    </svg>
  );
}

export function IconGenerative(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="8" r="2" />
      <circle cx="7" cy="23" r="2" />
      <circle cx="25" cy="23" r="2" />
      <path d="M16 10v6M14.4 17.3 8.4 21.4M17.6 17.3l6 4.1" />
      <path d="M16 12.2c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4Z" />
    </svg>
  );
}

export function IconSecurity(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 3.5 26.5 7.5v7.4c0 6.6-4.4 11.4-10.5 13.6C9.9 26.3 5.5 21.5 5.5 14.9V7.5L16 3.5Z" />
      <path d="M11.3 16.1l3.2 3.2 6.2-6.7" />
    </svg>
  );
}

export function IconOptimization(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 27V15M13 27V9M21 27V17M27 27V5" />
      <path d="M4 21.5 12 13l8 4 8-13" />
    </svg>
  );
}

export function IconDataScience(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 26h23" />
      <circle cx="8" cy="19" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="13" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18" cy="16.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="23" cy="8" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="26" cy="13" r="1.3" fill="currentColor" stroke="none" />
      <path d="M6 22 22 6" strokeDasharray="0.5 4" />
    </svg>
  );
}

export function IconDecisionScience(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="8" r="2" />
      <circle cx="7" cy="24" r="2" />
      <circle cx="25" cy="16" r="2.4" />
      <path d="M9 8.8 22.2 15M9 23.2 22.2 17" />
    </svg>
  );
}

export const capabilityIconMap = {
  strategy: IconStrategy,
  generative: IconGenerative,
  security: IconSecurity,
  optimization: IconOptimization,
  "data-science": IconDataScience,
  "decision-science": IconDecisionScience,
} as const;

export function IconArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3.5 10h13M10.5 4.5 16 10l-5.5 5.5" />
    </svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 14 14 6M7 6h7v7" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4.5 7 12 13l7.5-6" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21.5S5 15 5 9.8a7 7 0 1 1 14 0c0 5.2-7 11.7-7 11.7Z" />
      <circle cx="12" cy="9.6" r="2.4" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 7.5 10 12.5 15 7.5" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  );
}
