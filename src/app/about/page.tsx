import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { IconArrowUpRight } from "@/components/icons";
import { certifications, publications, awards } from "@/data/research";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zais Analytics brings decision-science rigor honed in national security and enterprise analytics leadership to organizations in every sector.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative border-b border-ink-700 py-24 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>About</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-medium tracking-tight text-paper-50 sm:text-6xl">
              Built on decision-science rigor.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-paper-400">
              <p>
                Zais Analytics was founded to bring decision-science rigor honed in national security
                and enterprise analytics leadership to organizations in every sector. The premise is
                simple: the same mathematical discipline that shapes billion-dollar defense investment
                decisions can shape yours, whatever industry you operate in.
              </p>
              <p>
                This is a founder-led practice by design. Every engagement receives senior-level
                attention directly — no account managers, no layers between you and the analysis.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-ink-700 py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="border border-gold-700 bg-ink-900/60 p-10 md:p-14">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">Principal</p>
              <div className="mt-6 grid gap-10 md:grid-cols-[220px_1fr] md:items-start md:gap-12 lg:grid-cols-[260px_1fr]">
                <div className="relative aspect-square w-40 overflow-hidden border border-ink-600 sm:w-52 md:w-full">
                  <Image
                    src="/images/headshot.png"
                    alt="Mark Zais, PhD, Founder and Principal of Zais Analytics"
                    fill
                    sizes="(min-width: 768px) 260px, 208px"
                    className="object-cover grayscale"
                    priority
                  />
                </div>
                <div>
                  <h2 className="font-display text-3xl font-medium tracking-tight text-paper-50 sm:text-4xl">
                    Mark Zais, PhD
                  </h2>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-gold-500">
                    Founder and Principal
                  </p>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-200">
                    Mark holds a PhD in Operations Research (Business Administration) and brings more
                    than 20 years leading advanced analytics and AI strategy across defense, government,
                    academia, and industry. He is the former Chief Data Scientist of U.S. Special
                    Operations Command and a retired U.S. Army Colonel, having led complex,
                    multi-disciplinary research studies for the Office of the Secretary of Defense, the
                    Army, SOCOM, and academia. That same ability to run a large-scale study end to end,
                    regardless of size or scale, is what Zais Analytics now applies directly, engagement
                    by engagement.
                  </p>
                  <a
                    href={site.principalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
                  >
                    Learn more about Mark at markzais.com
                    <IconArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-ink-700 py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">
                Certifications and affiliations
              </p>
              <ul className="mt-6 flex flex-col gap-5">
                {certifications.map((cert) => (
                  <li key={cert.name} className="border-l-2 border-gold-600 pl-4">
                    <p className="text-base font-medium text-paper-50">{cert.name}</p>
                    <p className="text-sm text-paper-400">{cert.org}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">
                Selected publications and recognition
              </p>
              <ul className="mt-6 flex flex-col gap-5">
                {publications.map((pub) => (
                  <li key={pub} className="border-l-2 border-ink-600 pl-4 text-sm leading-relaxed text-paper-200">
                    {pub}
                  </li>
                ))}
                {awards.map((award) => (
                  <li
                    key={award}
                    className="border-l-2 border-gold-600 pl-4 text-sm leading-relaxed text-gold-200"
                  >
                    {award}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Reveal>
            <h2 className="max-w-md text-balance font-display text-3xl font-medium tracking-tight text-paper-50 sm:text-4xl">
              Bring this rigor to your organization.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Button href="/contact" showArrow>
              Start a conversation
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
