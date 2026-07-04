"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLockup } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { IconClose, IconMenu } from "@/components/icons";
import { navLinks } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink-950/90 backdrop-blur-md border-b border-ink-700" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <BrandLockup priority markClassName="h-9 w-9 shrink-0" />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                  active ? "text-gold-300" : "text-paper-200 hover:text-paper-50"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold-400" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Start a conversation
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-paper-50 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-700 bg-ink-950 px-6 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-base font-medium text-paper-200 hover:bg-ink-800 hover:text-gold-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" className="mt-6 w-full">
            Start a conversation
          </Button>
        </div>
      )}
    </header>
  );
}
