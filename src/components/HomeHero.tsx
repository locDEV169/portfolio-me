import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-background text-foreground">
      <Image
        src={site.heroImage.src}
        alt={site.heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/35 to-background/85" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pb-16 text-center sm:px-8 sm:pb-20">
        <p className="fade-up inline-flex items-center gap-2 rounded-full bg-background/70 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.16em] text-accent uppercase ring-1 ring-border/70 sm:text-xs">
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className="h-3.5 w-3.5 fill-current"
          >
            <path d="M10 14.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Zm0-1.7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM4.2 5.8h2.1L7.5 4.5A1.5 1.5 0 0 1 8.6 4h2.8a1.5 1.5 0 0 1 1.1.5l1.2 1.3h2.1A1.5 1.5 0 0 1 17.3 7.3v8.3a1.5 1.5 0 0 1-1.5 1.5H4.2a1.5 1.5 0 0 1-1.5-1.5V7.3A1.5 1.5 0 0 1 4.2 5.8Z" />
          </svg>
          {site.heroEyebrow}
        </p>

        <h1 className="fade-up fade-up-delay-1 mt-8 font-display text-5xl leading-[0.92] font-bold tracking-tight uppercase sm:text-7xl md:text-8xl">
          {site.heroTitle.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="mt-1 block text-accent">{site.heroAccent}</span>
        </h1>

        <p className="fade-up fade-up-delay-2 mt-6 max-w-md text-sm text-muted sm:text-base">
          {site.bioShort} Based in {site.location}.
        </p>

        <div className="fade-up fade-up-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-lg bg-accent px-6 py-3 text-xs font-bold tracking-[0.14em] text-inverse-fg uppercase transition-opacity hover:opacity-90"
          >
            Let&apos;s Talk
          </Link>
          <Link
            href="/work"
            className="rounded-lg border border-border px-6 py-3 text-xs font-medium tracking-[0.14em] text-foreground uppercase transition-colors hover:border-foreground"
          >
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
