"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { IconClose } from "@/components/icons";

const ALT_TEXT =
  "The six Zais Analytics capabilities arranged around a central hub: Data Science and Machine Learning, Operations Research and Optimization, Analytics Strategy and Decision Science, AI Security and Assurance, Generative AI and AI Agents, and AI Strategy and Governance.";

export function CapabilitiesDiagram() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label="Expand the capabilities diagram to read it in full"
        className="group relative block w-64 shrink-0 cursor-zoom-in sm:w-80 md:w-96 lg:w-[28rem]"
      >
        <div className="relative aspect-[1448/1086] scale-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-focus-visible:scale-110">
          <Image
            src="/images/capabilities.png"
            alt={ALT_TEXT}
            fill
            sizes="(min-width: 1024px) 448px, (min-width: 768px) 384px, (min-width: 640px) 320px, 256px"
            className="object-contain opacity-85 drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          />
        </div>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Capabilities diagram, enlarged"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-6 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
          >
            <div className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute -top-12 right-0 text-paper-200 transition-colors hover:text-gold-300"
              >
                <IconClose className="h-7 w-7" />
              </button>
              <div
                className="relative aspect-[1448/1086] w-full"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src="/images/capabilities.png"
                  alt={ALT_TEXT}
                  fill
                  sizes="(min-width: 768px) 768px, 90vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
