import Link from "next/link";
import { BrandLockup } from "@/components/logo";
import { IconMail, IconMapPin } from "@/components/icons";
import { site, navLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8">
          <div className="max-w-sm">
            <BrandLockup markClassName="h-9 w-9 shrink-0" />
            <p className="mt-5 text-sm leading-relaxed text-paper-400">{site.shortDescription}</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">Firm</p>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-paper-200 transition-colors hover:text-gold-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="text-sm text-paper-200 transition-colors hover:text-gold-200">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">Reach us</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-paper-200">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold-200"
              >
                <IconMail className="h-4 w-4 shrink-0 text-gold-500" />
                {site.email}
              </a>
              <p className="flex items-center gap-2.5">
                <IconMapPin className="h-4 w-4 shrink-0 text-gold-500" />
                {site.locationLine}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-700 pt-8 text-xs text-paper-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Principal profile at{" "}
            <a
              href={site.principalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-400 underline decoration-ink-500 underline-offset-4 transition-colors hover:text-gold-300"
            >
              markzais.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
