import Link from "next/link";
import Image from "next/image";
import { ManifestoReveal } from "@/components/ManifestoReveal";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

/** Belinda-lite: manifesto + stats right under hero. */
export function IntroSection() {
  return (
    <section
      id="intro"
      className="border-t border-border bg-background px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ManifestoReveal
          lines={site.manifesto}
          body={site.manifestoBody}
          stats={site.stats.map((stat) => (
            <div key={stat.label} className="manifesto-stat">
              <p className="font-display text-5xl tracking-tight sm:text-6xl">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="mt-3 font-mono text-[11px] tracking-wide text-muted uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        />
      </div>
    </section>
  );
}

type AboutBandProps = {
  /** Use h1 on the dedicated /about page. */
  headingAs?: "h1" | "h2";
};

/** Portrait + about copy — home band and /about page. */
export function AboutBand({ headingAs: Heading = "h2" }: AboutBandProps) {
  return (
    <section
      id="about"
      className="border-t border-border bg-background px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="about-intro-hero relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden rounded-2xl bg-surface ring-1 ring-border lg:mx-0 lg:max-w-none">
          <Image
            src={site.introImage.src}
            alt={site.introImage.alt}
            fill
            sizes="(max-width: 1024px) 448px, 560px"
            className="about-intro-media media-zoom object-cover"
            priority={Heading === "h1"}
          />
        </Reveal>

        <Reveal delay={1}>
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            About
          </p>
          <Heading className="mt-4 max-w-xl font-display text-3xl leading-snug tracking-tight uppercase sm:text-4xl md:text-5xl">
            {site.headline}
          </Heading>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {site.bio}
          </p>
          <p className="mt-6 max-w-lg font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            {site.tagline} — {site.location}
          </p>
          <Link
            href="/contact"
            className="pressable mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-xs font-bold tracking-[0.14em] text-inverse-fg uppercase hover:opacity-90"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
