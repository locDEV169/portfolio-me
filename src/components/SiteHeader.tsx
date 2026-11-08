"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { site } from "@/data/site";

const menuItems = [
  { id: "work", label: "Work", href: "/work" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
  { id: "hire", label: "Hire me", href: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center gap-3 rounded-2xl bg-surface/90 px-3 py-2.5 ring-1 ring-border/80 backdrop-blur-md sm:gap-4 sm:px-4">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent font-display text-lg font-bold text-inverse-fg"
            >
              {site.name.charAt(0)}
            </span>
            <span className="min-w-0">
              <span className="block font-display text-base tracking-[0.12em] text-foreground uppercase sm:text-lg">
                {site.name}
              </span>
              <span className="mt-0.5 block truncate font-mono text-[10px] tracking-[0.18em] text-muted uppercase sm:text-[11px]">
                {site.tagline}
              </span>
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            {site.availableForHire ? (
              <span className="hidden items-center gap-2 rounded-full bg-hire-soft px-3 py-1.5 font-mono text-[11px] tracking-wide text-hire ring-1 ring-hire/35 sm:inline-flex">
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full bg-hire shadow-[0_0_8px_var(--hire)]"
                />
                Available for Hire
              </span>
            ) : null}

            <Link
              href="/contact"
              className="hidden rounded-lg bg-accent px-4 py-2.5 text-xs font-bold tracking-[0.12em] text-inverse-fg uppercase transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Let&apos;s Talk
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-background"
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
          </div>
        </div>

        {open ? (
          <div
            id={menuId}
            role="dialog"
            aria-label="Navigation"
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl bg-surface/95 p-5 shadow-lg ring-1 ring-border backdrop-blur-md sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                  Menu
                </p>
                <p className="mt-1 font-display text-lg tracking-[0.08em] text-foreground uppercase">
                  {site.name}
                </p>
              </div>
              {site.availableForHire ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-hire-soft px-3 py-1.5 font-mono text-[11px] tracking-wide text-hire ring-1 ring-hire/35">
                  <span
                    aria-hidden
                    className="h-2 w-2 rounded-full bg-hire shadow-[0_0_8px_var(--hire)]"
                  />
                  Available for Hire
                </span>
              ) : null}
            </div>

            <ul className="mt-2 flex flex-col">
              {menuItems.map((item, index) => (
                <li key={item.id} className="border-b border-border last:border-b-0">
                  <Link
                    href={item.href}
                    className={`group flex w-full items-center justify-between gap-4 py-4 transition-colors ${
                      item.id === "hire"
                        ? "text-accent hover:text-accent/80"
                        : "text-foreground hover:text-accent"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl tracking-tight uppercase sm:text-3xl">
                        {item.label}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-sm transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-inverse-fg"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[11px] tracking-wide text-muted uppercase">
                {site.tagline} · {site.location}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-xs font-bold tracking-[0.12em] text-inverse-fg uppercase transition-opacity hover:opacity-90"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      {open ? (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-30 bg-background/60 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  );
}
