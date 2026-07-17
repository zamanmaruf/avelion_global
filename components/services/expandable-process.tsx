"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import type { ProcessStep } from "@/types/service";

export function ExpandableProcess({
  title,
  steps,
}: {
  title: string;
  steps: ProcessStep[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <h2 className="font-display text-3xl text-text-primary md:text-4xl">{title}</h2>
      <ol className="mt-8 space-y-3">
        {steps.map((step, index) => {
          const isOpen = open === index;
          return (
            <li key={step.title} className="surface-panel overflow-hidden rounded-sm">
              <button
                type="button"
                className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-white/5"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="mt-0.5 shrink-0 text-xs tracking-[0.16em] text-silver-primary uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 text-lg font-semibold text-text-primary">
                  {step.title}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "shrink-0 text-silver-primary transition-transform",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-text-secondary">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-xs text-silver-dark">Select a step to expand the full description.</p>
    </div>
  );
}
