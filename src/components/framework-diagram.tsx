"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { IconClose } from "@/components/icons";

const ALT_TEXT =
  "The INFORMS Analytics Framework, shown as a wheel of seven stages: business problem framing, analytics problem framing, data, methodology selection, analytics and model development, deployment, and analytics solution life cycle management.";

export function FrameworkDiagram() {
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
        aria-label="Expand the INFORMS Analytics Framework diagram to read it in full"
        className="group relative block w-48 shrink-0 cursor-zoom-in rounded-full sm:w-60 md:w-64 lg:w-72"
      >
        <div className="relative aspect-square scale-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125 group-focus-visible:scale-125">
          <Image
            src="/images/framework.png"
            alt={ALT_TEXT}
            fill
            sizes="(min-width: 1024px) 288px, (min-width: 640px) 240px, 192px"
            className="rounded-full object-contain opacity-80 drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          />
        </div>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="INFORMS Analytics Framework diagram, enlarged"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-6 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
          >
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute -top-12 right-0 text-paper-200 transition-colors hover:text-gold-300"
              >
                <IconClose className="h-7 w-7" />
              </button>
              <div
                className="relative aspect-square w-full"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src="/images/framework.png"
                  alt={ALT_TEXT}
                  fill
                  sizes="(min-width: 768px) 576px, 90vw"
                  className="rounded-full object-contain"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
