"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { IconClose } from "@/components/icons";

const ALT_TEXT =
  "Defense and National Security at the center, connected to six sectors the methods extend to: Federal, State, and Public Sector, Logistics and Supply Chain, Financial Services, Healthcare and Life Sciences, Energy and Industrials, and Technology and Commercial Enterprise.";

export function IndustriesDiagram() {
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
        aria-label="Expand the industries diagram to read it in full"
        className="group relative block w-72 shrink-0 cursor-zoom-in sm:w-96 md:w-[28rem] lg:w-[32rem]"
      >
        <div className="relative aspect-[1672/941] scale-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-focus-visible:scale-110">
          <Image
            src="/images/industries.png"
            alt={ALT_TEXT}
            fill
            sizes="(min-width: 1024px) 512px, (min-width: 768px) 448px, (min-width: 640px) 384px, 288px"
            className="object-contain opacity-85 drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          />
        </div>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Industries diagram, enlarged"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-6 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
          >
            <div className="relative w-full max-w-xl sm:max-w-2xl md:max-w-4xl">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute -top-12 right-0 text-paper-200 transition-colors hover:text-gold-300"
              >
                <IconClose className="h-7 w-7" />
              </button>
              <div
                className="relative aspect-[1672/941] w-full"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src="/images/industries.png"
                  alt={ALT_TEXT}
                  fill
                  sizes="(min-width: 768px) 896px, 90vw"
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
