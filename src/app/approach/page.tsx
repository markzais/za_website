import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { FrameworkDiagram } from "@/components/framework-diagram";
import { principles } from "@/data/approach";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Five principles, consistent with the INFORMS Analytics Framework, guide every Zais Analytics engagement: find the real problem, right-size the solution, drive every deliverable toward a decision, translate at every level, and transfer capability.",
};

export default function ApproachPage() {
  return (
    <>
      <section className="relative border-b border-ink-700 py-24 md:py-28">
        <Container>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-14">
            <div className="min-w-0">
              <Reveal>
                <Eyebrow>Approach</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-medium tracking-tight text-paper-50 sm:text-6xl">
                  A disciplined path from problem to decision.
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-400">
                  Analytics and AI engagements succeed for predictable reasons: the right problem, a
                  right-sized solution, and a decision instead of an artifact. Five principles, consistent
                  with the INFORMS Analytics Framework, guide every Zais Analytics engagement, from a
                  two-week assessment to a multi-year transformation.
                </p>
              </Reveal>
            </div>
            <Reveal delay={100} className="flex justify-center md:block md:shrink-0">
              <FrameworkDiagram />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-12">
        <Container>
          <div className="divide-y divide-ink-700">
            {principles.map((principle, i) => (
              <Reveal key={principle.index} delay={i * 60} className="py-14 md:py-16">
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-14">
                  <span className="font-mono text-6xl font-medium leading-none text-gold-700 md:text-7xl">
                    {principle.index}
                  </span>
                  <div className="max-w-2xl">
                    <h2 className="font-display text-2xl font-medium tracking-tight text-paper-50 sm:text-3xl">
                      {principle.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-paper-400">{principle.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-700 py-24">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Reveal>
            <h2 className="max-w-md text-balance font-display text-3xl font-medium tracking-tight text-paper-50 sm:text-4xl">
              See the method applied to your problem.
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
