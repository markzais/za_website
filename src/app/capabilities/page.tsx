import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { capabilityIconMap, IconArrowUpRight, IconCheck } from "@/components/icons";
import { capabilities } from "@/data/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Six disciplines, one decision-science practice: AI strategy and governance, generative AI and agents, AI security and assurance, operations research and optimization, data science and machine learning, and analytics strategy and decision science.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="relative border-b border-ink-700 py-24 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-medium tracking-tight text-paper-50 sm:text-6xl">
              Capabilities built for decisions, not demos.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-400">
              Each pillar stands on its own, and each draws on the same doctoral rigor and executive
              fluency. Engage us for a single capability or a portfolio of them.
            </p>
          </Reveal>
        </Container>
      </section>

      <div className="divide-y divide-ink-700">
        {capabilities.map((capability, i) => {
          const Icon = capabilityIconMap[capability.icon];
          const reversed = i % 2 === 1;
          return (
            <section key={capability.slug} className="relative overflow-hidden py-20 md:py-24">
              <span
                className="pointer-events-none absolute -top-10 select-none font-display text-[12rem] font-medium leading-none text-ink-800 md:text-[16rem]"
                style={reversed ? { right: "-1rem" } : { left: "-1rem" }}
                aria-hidden="true"
              >
                {capability.index}
              </span>
              <Container className="relative">
                <div
                  className={`grid gap-12 lg:grid-cols-2 lg:gap-20 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal>
                    <div className="flex h-14 w-14 items-center justify-center border border-gold-700 text-gold-400">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-paper-50 sm:text-4xl">
                      {capability.name}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-paper-400">{capability.definition}</p>
                    <p className="mt-6 border-l-2 border-gold-600 pl-4 text-sm leading-relaxed text-paper-200">
                      {capability.proofPoint}
                    </p>
                    <Link
                      href={`/capabilities/${capability.slug}`}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
                    >
                      Full detail
                      <IconArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Reveal>

                  <Reveal delay={100}>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">
                      When to engage us
                    </p>
                    <ul className="mt-5 flex flex-col gap-4">
                      {capability.whenToEngage.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-paper-200">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <section className="border-t border-ink-700 py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="max-w-xl text-balance font-display text-3xl font-medium tracking-tight text-paper-50 sm:text-4xl">
              Not sure which capability fits your problem?
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
