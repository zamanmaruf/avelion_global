"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border-subtle border-y border-border-subtle">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-text-primary"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className={cn(
                    "text-silver-primary transition-transform",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
