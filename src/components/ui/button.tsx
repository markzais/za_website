import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { IconArrowRight } from "@/components/icons";

type Common = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = Common & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const base =
  "group/btn inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-gold-300 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  md: "px-6 py-3.5 text-sm",
  sm: "px-4 py-2.5 text-xs",
};

const variants = {
  primary: "bg-gold-300 text-ink-950 hover:bg-gold-200 active:bg-gold-400",
  secondary:
    "border border-gold-700 text-paper-50 hover:border-gold-400 hover:text-gold-200 active:bg-ink-800",
  ghost: "text-gold-300 hover:text-gold-200 px-0 py-0",
};

function ArrowSlot({ showArrow }: { showArrow?: boolean }) {
  if (!showArrow) return null;
  return (
    <IconArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
  );
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", showArrow, className, children } = props;
  const classes = `${base} ${variant === "ghost" ? "" : sizes[size]} ${variants[variant]} ${
    variant !== "ghost" ? "" : "text-sm"
  } ${className ?? ""}`;

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
          <ArrowSlot showArrow={showArrow} />
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowSlot showArrow={showArrow} />
      </Link>
    );
  }

  const { type = "button", onClick, disabled, name, value, form, "aria-label": ariaLabel } =
    props as ButtonAsButton;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      name={name}
      value={value}
      form={form}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
      <ArrowSlot showArrow={showArrow} />
    </button>
  );
}
