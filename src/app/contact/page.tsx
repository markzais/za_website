import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";
import { IconMail, IconMapPin } from "@/components/icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Zais Analytics. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <section className="relative py-24 md:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance font-display text-5xl font-medium tracking-tight text-paper-50 sm:text-6xl">
                Start a conversation.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-paper-400">
                Tell us about the decision you are trying to make. We respond within one business day.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 flex flex-col gap-5 border-t border-ink-700 pt-10">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-base text-paper-200 transition-colors hover:text-gold-300"
                >
                  <IconMail className="h-5 w-5 shrink-0 text-gold-500" />
                  {site.email}
                </a>
                <p className="flex items-center gap-3 text-base text-paper-200">
                  <IconMapPin className="h-5 w-5 shrink-0 text-gold-500" />
                  {site.locationLine}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="border border-ink-600 bg-ink-900/40 p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
