import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { capabilityIconMap, IconArrowRight, IconCheck } from "@/components/icons";
import { capabilities, getCapabilityBySlug } from "@/data/capabilities";

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  if (!capability) return {};
  return {
    title: capability.name,
    description: capability.summary,
    openGraph: {
      title: `${capability.name} | Zais Analytics`,
      description: capability.summary,
    },
  };
}

export default async function CapabilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  if (!capability) notFound();

  const Icon = capabilityIconMap[capability.icon];
  const related = capabilities.filter((c) => c.slug !== capability.slug).slice(0, 2);

  return (
    <>
      <section className="relative border-b border-ink-700 py-24 md:py-28">
        <Container>
          <Reveal>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-sm font-medium text-paper-400 transition-colors hover:text-gold-300"
            >
              <IconArrowRight className="h-4 w-4 rotate-180" />
              All capabilities
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold-700 text-gold-400">
                <Icon className="h-7 w-7" />
              </div>
              <Eyebrow>Capability {capability.index}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-medium tracking-tight text-paper-50 sm:text-6xl">
              {capability.name}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-200">{capability.definition}</p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-ink-700 py-20 md:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">
                When to engage us
              </p>
              <ul className="mt-6 flex flex-col gap-5">
                {capability.whenToEngage.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-paper-200">
                    <IconCheck className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">What you get</p>
              <ul className="mt-6 flex flex-col gap-5">
                {capability.whatYouGet.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-paper-200">
                    <IconCheck className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-700 py-20">
        <Container>
          <Reveal>
            <div className="border-l-2 border-gold-500 pl-6 md:pl-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">Principal&rsquo;s experience</p>
              <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-paper-50 md:text-2xl">
                {capability.proofPoint}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">
              Related capabilities
            </p>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden bg-ink-600 sm:grid-cols-2">
            {related.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80} className="bg-ink-950">
                <Link
                  href={`/capabilities/${c.slug}`}
                  className="group flex h-full flex-col justify-between p-8 transition-colors hover:bg-ink-850"
                >
                  <div>
                    <span className="font-mono text-xs text-gold-600">{c.index}</span>
                    <h3 className="mt-3 font-display text-xl font-medium text-paper-50">{c.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper-400">{c.summary}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-300">
                    Explore
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="mt-20 flex flex-col items-start gap-6 border-t border-ink-700 pt-14 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="max-w-md text-balance font-display text-2xl font-medium tracking-tight text-paper-50 sm:text-3xl">
                Ready to talk about {capability.shortName.toLowerCase()}?
              </h2>
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
