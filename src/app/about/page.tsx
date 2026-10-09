import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { IconArrowUpRight } from "@/components/icons";
import { certifications, technicalSkills } from "@/data/research";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zais Analytics is an SBA SDVOSB Certified and VOSB Certified firm bringing decision-science rigor honed in national security and enterprise analytics leadership to organizations in every sector.",
};

const smallBusinessCertifications = [
  {
    label: "SDVOSB Certified",
    program: "Service-Disabled Veteran-Owned Small Business",
    src: "/images/sba-sdvosb-certified.png",
    alt: "U.S. Small Business Administration Service-Disabled Veteran-Owned Certified logo (SDVOSB Certified)",
  },
  {
    label: "VOSB Certified",
    program: "Veteran-Owned Small Business",
    src: "/images/sba-vosb-certified.png",
    alt: "U.S. Small Business Administration Veteran-Owned Certified logo (VOSB Certified)",
  },
];

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
              Built on decision&#8209;science rigor.
            </h1>
          </Reveal>
          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,42rem)_1fr] lg:gap-16">
            <Reveal delay={140}>
              <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-paper-400">
                <p>
                  Zais Analytics was founded to bring decision&#8209;science rigor honed in national
                  security and enterprise analytics leadership to organizations in every sector. The
                  same mathematical discipline that shapes billion-dollar defense investment decisions
                  can shape yours, whatever industry you operate in.
                </p>
                <p>
                  That discipline matters more now, not less. As AI lowers the cost of producing
                  analysis, the scarce skill is knowing which analysis to trust, a judgment built on
                  peer-reviewed research and two decades advising leaders on decisions where being wrong
                  was expensive.
                </p>
                <p>
                  We solve complex problems and answer difficult questions, concentrating on decisions
                  with real consequence: capital and portfolio allocation, workforce planning, AI
                  adoption and governance, and helping organizations build their own internal analytics
                  capability. These problems share a common shape: competing objectives, imperfect data,
                  and stakeholders who need to understand the answer well enough to act on it. We distill
                  that complexity into concepts that demonstrate impact and convert strategy into
                  actionable decision products.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="lg:pt-1">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">
                  SBA certifications
                </p>
                <ul className="mt-6 grid max-w-md grid-cols-2 gap-6">
                  {smallBusinessCertifications.map((cert) => (
                    <li key={cert.label}>
                      <a
                        href={site.sbaProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="relative aspect-[4/5] w-full transition-opacity group-hover:opacity-90">
                          <Image
                            src={cert.src}
                            alt={cert.alt}
                            fill
                            sizes="(min-width: 1024px) 200px, 45vw"
                            className="object-contain"
                          />
                        </div>
                        <p className="mt-4 text-base font-medium text-paper-50 transition-colors group-hover:text-gold-300">
                          {cert.label}
                        </p>
                        <p className="text-sm text-paper-400">{cert.program}</p>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 max-w-md space-y-2 text-sm leading-relaxed text-paper-400">
                  <p>
                    Certified Service-Disabled Veteran-Owned Small Business (SDVOSB) by the U.S.
                    Small Business Administration (SBA).
                  </p>
                  <p>
                    Certified Veteran-Owned Small Business (VOSB) by the U.S. Small Business
                    Administration (SBA).
                  </p>
                </div>
                <a
                  href={site.sbaProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
                >
                  Verify our certifications on SBA.gov
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
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
                  <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-paper-200">
                    <p>
                      Mark holds a PhD in Business Administration (Operations Research) from the
                      University of Colorado at Boulder, master&apos;s degrees in Operations Research and
                      Industrial Engineering from the Georgia Institute of Technology, and a
                      bachelor&apos;s degree in Operations Research from the United States Military
                      Academy at West Point. He is a Certified Analytics Professional at the Expert
                      level (CAP-X) and serves on the INFORMS Analytics Certification Board.
                    </p>
                    <p>
                      Mark brings more than 20 years leading advanced analytics and AI strategy across
                      defense, government, academia, and industry. A retired U.S. Army Colonel and
                      former Chief Data Scientist of U.S. Special Operations Command, he has directed
                      complex, multi-disciplinary research studies for the Office of the Secretary of
                      Defense, the Department of the Army, and U.S. Special Operations Command. His
                      published research spans simulation-optimization, metaheuristics, Markov
                      modeling, and the role of artificial intelligence in decision-making.
                    </p>
                    <p>
                      Running a study end to end, from framing the question through to the decision it
                      informs, is the discipline Zais Analytics brings to every engagement.
                    </p>
                  </div>
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
                Technical skills and tools
              </p>
              <ul className="mt-6 flex flex-col gap-5">
                {technicalSkills.map((group) => (
                  <li key={group.category} className="border-l-2 border-ink-600 pl-4">
                    <p className="text-base font-medium text-paper-50">{group.category}</p>
                    <p className="mt-1 text-sm leading-relaxed text-paper-400">
                      {group.items.join(", ")}
                    </p>
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
