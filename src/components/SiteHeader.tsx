"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { site } from "@/data/site";

// ponytail: destinations TBD — UI shell first; wire real hrefs later.
const menuItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "hire", label: "Hire me" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 px-4 pt-3 sm:px-6 sm:pt-4">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 rounded-full bg-background/95 px-4 py-2 shadow-sm ring-1 ring-border/80 backdrop-blur-sm sm:px-5">
          <Link
            href="/"
            className="font-display text-lg tracking-[0.08em] text-foreground uppercase sm:text-xl"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-surface"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="flex w-5 flex-col gap-1.5" aria-hidden>
                <span
                  className={`block h-0.5 w-full bg-foreground transition-transform ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-foreground transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-foreground transition-transform ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>

            <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-full bg-surface ring-1 ring-border">
              <Image
                src={site.introImage.src}
                alt=""
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
              <span
                aria-hidden
                className="absolute top-0.5 right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background"
              />
            </span>
          </div>
        </div>

        {open ? (
          <div
            id={menuId}
            role="dialog"
            aria-label="Navigation"
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-3xl bg-background p-3 shadow-lg ring-1 ring-border"
          >
            <ul className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`flex w-full items-center rounded-2xl px-4 py-3 text-left text-sm transition-colors hover:bg-surface ${
                      item.id === "hire"
                        ? "bg-inverse font-medium text-inverse-fg hover:bg-inverse/90 hover:text-inverse-fg"
                        : "text-foreground"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {open ? (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-30 bg-inverse/20"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
