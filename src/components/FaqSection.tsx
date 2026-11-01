"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/data/faq";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="border-t border-border bg-background px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-muted">
            Quick answers before we plan the next shoot.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map((faq) => {
              const open = openId === faq.id;
              return (
                <li key={faq.id}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : faq.id)}
                  >
                    <span className="font-display text-lg tracking-tight sm:text-xl">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="mt-1 text-muted transition-transform"
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open ? (
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-muted sm:text-base">
                      {faq.answer}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
