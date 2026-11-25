"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const featuredPhotos = projects
  .filter((project) => project.type === "photo")
  .slice(0, 6);

function heroFrame(index: number) {
  const project = featuredPhotos[index];
  if (project) {
    return { src: project.cover.src, alt: project.cover.alt };
  }
  return { src: site.heroImage.src, alt: site.heroImage.alt };
}

type FlipDir = "next" | "prev";

export function HomeHero() {
  const [active, setActive] = useState(0);
  // ponytail: null until first thumb click so SSR/client first paint stay a single Image (avoids HMR dual-layer mismatch).
  const [previous, setPrevious] = useState<number | null>(null);
  const [fadeKey, setFadeKey] = useState(0);
  const [dir, setDir] = useState<FlipDir>("next");

  const count = Math.max(featuredPhotos.length, 1);
  const current = heroFrame(active);

  function resolveDir(from: number, to: number, preferred?: FlipDir): FlipDir {
    if (preferred) return preferred;
    if (from === count - 1 && to === 0) return "next";
    if (from === 0 && to === count - 1) return "prev";
    return to > from ? "next" : "prev";
  }

  function select(index: number, preferred?: FlipDir) {
    const next = ((index % count) + count) % count;
    if (next === active) return;
    setDir(resolveDir(active, next, preferred));
    setPrevious(active);
    setActive(next);
    setFadeKey((key) => key + 1);
  }

  const flipIn = dir === "next" ? "hero-flip-in-next" : "hero-flip-in-prev";
  const flipOut = dir === "next" ? "hero-flip-out-next" : "hero-flip-out-prev";

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-background text-foreground"
      aria-roledescription="carousel"
      aria-label="Featured photographs"
    >
      <div className="hero-stage absolute inset-0">
        {previous !== null ? (
          <div className={`absolute inset-0 ${flipOut}`} aria-hidden>
            <Image
              src={heroFrame(previous).src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ) : null}
        <div
          key={fadeKey}
          className={`absolute inset-0 ${
            previous !== null ? flipIn : "hero-intro-enter"
          }`}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="100vw"
            className="hero-ken-burns object-cover object-center"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/45 to-background/25" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div className="max-w-2xl">
            <p className="fade-up-hero font-mono text-[11px] tracking-[0.18em] text-foreground/80 uppercase">
              ({site.tagline}, {site.location})
            </p>

            <p className="fade-up-hero fade-up-delay-1 mt-5 font-display text-4xl leading-[0.9] font-bold tracking-tight uppercase sm:text-6xl md:text-7xl">
              {site.name}
            </p>

            <h1 className="fade-up-hero fade-up-delay-2 mt-4 font-display text-3xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl md:text-6xl">
              {site.heroTitle.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-1 block text-accent">{site.heroAccent}</span>
            </h1>

            <p className="fade-up-hero fade-up-delay-3 mt-5 max-w-md text-sm text-foreground/85 sm:text-base">
              {site.bioShort}
            </p>

            <div className="fade-up-hero fade-up-delay-3 mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="pressable rounded-lg bg-accent px-6 py-3 text-xs font-bold tracking-[0.14em] text-inverse-fg uppercase hover:opacity-90"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/work"
                className="pressable rounded-lg border border-foreground/35 px-6 py-3 text-xs font-medium tracking-[0.14em] text-foreground uppercase hover:border-foreground"
              >
                View work
              </Link>
            </div>
          </div>

          {/* min-w-0: grid item min-width:auto grows with w-max thumbs → no overflow → no x-scroll */}
          <div className="fade-up-hero fade-up-delay-3 w-full min-w-0 lg:justify-self-end">
            {featuredPhotos.length > 0 ? (
              <div className="relative w-full min-w-0">
                <div
                  className="w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain py-2 pb-1 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
                  role="list"
                  aria-label="Featured photo projects"
                >
                  <div className="flex w-max gap-3 lg:ml-auto">
                    {featuredPhotos.map((project, index) => {
                      const selected = index === active;
                      return (
                        <button
                          key={project.slug}
                          type="button"
                          role="listitem"
                          aria-current={selected ? "true" : undefined}
                          aria-label={`Show ${project.title}`}
                          onClick={() => select(index)}
                          className={`pressable relative aspect-3/4 w-20 shrink-0 overflow-hidden rounded-lg ring-1 sm:w-24 ${
                            selected
                              ? "ring-accent opacity-100"
                              : "ring-border/80 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={project.cover.src}
                            alt=""
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {featuredPhotos.length > 1 ? (
                  <>
                    <button
                      type="button"
                      className="pressable absolute top-1/2 left-1 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/25 bg-background/55 text-sm text-foreground backdrop-blur-sm hover:border-foreground/50"
                      aria-label="Previous"
                      onClick={() => select(active - 1, "prev")}
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      className="pressable absolute top-1/2 right-1 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/25 bg-background/55 text-sm text-foreground backdrop-blur-sm hover:border-foreground/50"
                      aria-label="Next"
                      onClick={() => select(active + 1, "next")}
                    >
                      →
                    </button>
                  </>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
