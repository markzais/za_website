import { Container, Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadialGuides } from "@/components/motifs/radial-guides";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <RadialGuides className="left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <Container className="relative flex flex-col items-center text-center">
        <Eyebrow className="justify-center">404</Eyebrow>
        <h1 className="mt-6 text-balance font-display text-4xl font-medium tracking-tight text-paper-50 sm:text-5xl">
          This page does not compute.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-400">
          The page you are looking for does not exist or has moved.
        </p>
        <Button href="/" className="mt-10">
          Back to home
        </Button>
      </Container>
    </section>
  );
}
