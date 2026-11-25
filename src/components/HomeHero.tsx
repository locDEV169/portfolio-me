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

export function HomeHero() {
  const [active, setActive] = useState(0);
  // ponytail: null until first thumb click so SSR/client first paint stay a single Image (avoids HMR dual-layer mismatch).
  const [previous, setPrevious] = useState<number | null>(null);
  const [fadeKey, setFadeKey] = useState(0);

  const current = heroFrame(active);

  function select(index: number) {
    if (index === active) return;
    setPrevious(active);
    setActive(index);
    setFadeKey((key) => key + 1);
  }

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0">
        {previous !== null ? (
          <Image
            src={heroFrame(previous).src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden
          />
        ) : null}
        <Image
          key={fadeKey}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="100vw"
          className={`hero-ken-burns object-cover object-center ${
            previous !== null ? "hero-crossfade-in" : ""
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/25" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12">
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

          {featuredPhotos.length > 0 ? (
            // ponytail: justify-end on overflow flex clips the start (01–02). Align with inner ml-auto instead.
            <div
              className="fade-up-hero fade-up-delay-3 overflow-x-auto pb-1 scrollbar-none overflow-auto"
              role="list"
              aria-label="Featured photo projects"
            >
              <div className="flex w-max gap-3 lg:ml-auto">
                {featuredPhotos.map((project, index) => {
                  const selected = index === active;
                  return (
                    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
                    <button
                      key={project.slug}
                      type="button"
                      role="listitem"
                      aria-pressed={selected}
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
                      <span className="absolute top-1.5 left-1.5 font-mono text-[10px] tracking-wide text-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
