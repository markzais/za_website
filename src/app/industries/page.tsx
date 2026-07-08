import type { Metadata } from "next";
import { Container, Eyebrow, Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { NodeNetwork } from "@/components/motifs/node-network";
import { sectors } from "@/data/sectors";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Zais Analytics methods were proven in national security, where the stakes are highest, and now apply across federal and public sector, logistics, financial services, healthcare, energy, and technology.",
};

export default function IndustriesPage() {
  const [defense, ...rest] = sectors;

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-700 py-24 md:py-28">
        <NodeNetwork className="right-[-40px] top-[-20px] h-[300px] w-[380px] opacity-40" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>Industries</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-medium tracking-tight text-paper-50 sm:text-6xl">
              Proven where the stakes are highest. Applied everywhere.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-400">
              Our methods were forged directing analytics and AI programs in national security, where
              a wrong answer is measured in billions of dollars. We do not consider that a
              boundary. It is proof of the rigor we bring to every sector we serve.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-ink-700 py-20">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden border border-gold-600 bg-ink-900/60 p-10 md:p-14">
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="font-display text-3xl font-medium tracking-tight text-paper-50 sm:text-4xl">
                  {defense.name}
                </h2>
                <Badge>Heritage</Badge>
              </div>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-paper-200">{defense.blurb}</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {defense.applications.map((app) => (
                  <li
                    key={app}
                    className="border-l-2 border-gold-600 pl-4 text-sm leading-relaxed text-paper-200"
                  >
                    {app}
                  </li>
                ))}
              </ul>
              {defense.note && (
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-gold-500">
                  {defense.note}
                </p>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">
              Where these methods apply
            </p>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden bg-ink-600 sm:grid-cols-2">
            {rest.map((sector, i) => (
              <Reveal key={sector.slug} delay={i * 60} className="bg-ink-950">
                <div className="flex h-full flex-col p-8">
                  <h3 className="font-display text-xl font-medium text-paper-50">{sector.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper-400">{sector.blurb}</p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {sector.applications.map((app) => (
                      <li key={app} className="flex gap-2.5 text-sm leading-relaxed text-paper-200">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                        {app}
                      </li>
                    ))}
                  </ul>
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
              Do not see your sector? The methods still apply.
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
