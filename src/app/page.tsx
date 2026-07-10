import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { RadialGuides } from "@/components/motifs/radial-guides";
import { NodeNetwork } from "@/components/motifs/node-network";
import { LogoMark } from "@/components/logo";
import { CapabilityCard } from "@/components/capability-card";
import { IconArrowUpRight } from "@/components/icons";
import { capabilities } from "@/data/capabilities";
import { sectors } from "@/data/sectors";
import { principles } from "@/data/approach";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-700 bg-ink-950">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <LogoMark
          className="pointer-events-none absolute right-[-220px] top-[-160px] h-[640px] w-[640px] animate-spin-slow opacity-[0.30] md:right-[-140px] md:h-[820px] md:w-[820px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" aria-hidden="true" />

        <Container className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center py-28">
          <Reveal>
            <Eyebrow>Operations Research &middot; Data Science &middot; Artificial Intelligence</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-8 max-w-4xl text-balance font-display text-5xl font-medium leading-[1.05] tracking-tight text-paper-50 sm:text-6xl lg:text-7xl">
              Decision advantage through <span className="text-gold-300">analytics.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-paper-200">
              Zais Analytics is an independent analytics and AI practice in operations research, data
              science, and artificial intelligence — founded on two decades of executive advisory
              experience, converting complexity into decisions leaders can act on.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" showArrow>
                Start a conversation
              </Button>
              <Button href="/capabilities" variant="secondary">
                Explore capabilities
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Capabilities overview */}
      <section id="capabilities" className="relative py-28 md:py-36">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Capabilities</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium tracking-tight text-paper-50 sm:text-5xl">
                Multiple disciplines. One decision-science practice.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg leading-relaxed text-paper-400">
                Every engagement draws on the same underlying rigor, applied where your organization
                needs it most.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-ink-600 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, i) => (
              <Reveal key={capability.slug} delay={i * 60} className="bg-ink-950">
                <CapabilityCard capability={capability} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach teaser */}
      <section className="relative border-y border-ink-700 bg-ink-900/40 py-28 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>How we work</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-balance font-display text-4xl font-medium tracking-tight text-paper-50 sm:text-5xl">
                  Method, not magic.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-400">
                  Five principles, consistent with the INFORMS Analytics Framework, govern every
                  engagement, from a two-week assessment to a multi-year transformation.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Button href="/approach" variant="secondary" className="mt-10" showArrow>
                  See our full approach
                </Button>
              </Reveal>
            </div>

            <div className="flex flex-col divide-y divide-ink-600 border-t border-ink-600 lg:border-t-0">
              {principles.slice(0, 3).map((principle, i) => (
                <Reveal key={principle.index} delay={i * 90} className="py-7">
                  <div className="flex gap-6">
                    <span className="font-mono text-sm text-gold-600">{principle.index}</span>
                    <div>
                      <h3 className="font-display text-lg font-medium text-paper-50">{principle.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-paper-400">{principle.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Sectors served */}
      <section className="relative overflow-hidden py-28 md:py-32">
        <NodeNetwork className="right-0 top-0 h-[260px] w-[330px] opacity-50" />
        <Container className="relative">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Industries</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium tracking-tight text-paper-50 sm:text-5xl">
                Proven where the stakes are highest. Applied everywhere.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg leading-relaxed text-paper-400">
                Our methods were forged in national security, where a wrong answer is measured in
                billions of dollars. The same rigor now serves commercial enterprise, healthcare,
                finance, logistics, energy, and technology.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span
                  key={sector.slug}
                  className={`rounded-full border px-5 py-2.5 text-sm ${
                    sector.heritage
                      ? "border-gold-500 text-gold-200"
                      : "border-ink-600 text-paper-200"
                  }`}
                >
                  {sector.name}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <Link
              href="/industries"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
            >
              Explore industries
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-ink-700 bg-ink-900/50 py-28">
        <RadialGuides className="left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <Container className="relative text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-medium tracking-tight text-paper-50 sm:text-5xl">
              Ready to bring decision-science rigor to your hardest problem?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-paper-400">
              {"We respond within one business day."}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex justify-center">
              <Button href="/contact" showArrow>
                Start a conversation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
