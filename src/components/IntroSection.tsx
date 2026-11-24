import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="border-t border-border bg-background px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {site.name} · Manifesto
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight uppercase sm:text-6xl md:text-7xl">
            {site.manifesto.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {site.manifestoBody}
          </p>
        </Reveal>

        <Reveal
          delay={1}
          className="mt-14 grid gap-8 border-y border-border py-10 sm:grid-cols-3 sm:gap-6"
        >
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl tracking-tight sm:text-5xl">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-wide text-muted uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>

        <div className="mt-14 grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal delay={1} className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-surface ring-1 ring-border lg:mx-0">
            <Image
              src={site.introImage.src}
              alt={site.introImage.alt}
              fill
              sizes="(max-width: 1024px) 320px, 360px"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={2}>
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              About
            </p>
            <h3 className="mt-3 max-w-lg font-display text-3xl tracking-tight uppercase sm:text-4xl">
              {site.headline}
            </h3>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              {site.bio}
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              {site.tagline} · {site.location}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-xs font-bold tracking-[0.14em] text-inverse-fg uppercase transition-opacity hover:opacity-90"
            >
              Get in touch
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
