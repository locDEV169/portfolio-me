import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

const aboutStats = site.stats.slice(0, 2);

function CameraIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 fill-none stroke-current"
      strokeWidth="1.75"
    >
      <path d="M4.5 8.5h2.2l1.1-1.8h8.4l1.1 1.8h2.2A1.5 1.5 0 0 1 21 10v7.5A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5V10a1.5 1.5 0 0 1 1.5-1.5Z" />
      <circle cx="12" cy="13.5" r="3" />
    </svg>
  );
}

type AboutProfileProps = {
  /** h1 on /about, h2 in the home band. */
  headingAs?: "h1" | "h2";
  id?: string;
};

/** Shared 3-col about: copy · oval portrait · stats + skills. */
export function AboutProfile({
  headingAs: Heading = "h1",
  id,
}: AboutProfileProps) {
  return (
    <section
      id={id}
      className="border-t border-border bg-background px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.9fr_0.95fr] lg:gap-10 xl:gap-14">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {site.name} — About
          </p>
          <Heading className="mt-4 max-w-md font-display text-3xl leading-snug tracking-tight uppercase sm:text-4xl lg:text-[2.65rem]">
            {site.headline}
          </Heading>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {site.bio}
          </p>
          <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
            {site.tagline}
          </p>
          <Link
            href="/contact"
            className="pressable mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-xs font-bold tracking-[0.14em] text-inverse-fg uppercase hover:opacity-90"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Reveal
          delay={1}
          className="about-intro-hero relative mx-auto aspect-2/3 w-full max-w-70 sm:max-w-xs"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[90px] bg-surface ring-1 ring-border">
            <Image
              src={site.introImage.src}
              alt={site.introImage.alt}
              fill
              priority={Heading === "h1"}
              sizes="320px"
              className="about-intro-media media-zoom object-cover"
            />
          </div>

          {site.introBadges.map((badge) => (
            <span
              key={badge.id}
              className={`absolute z-10 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-3 py-1.5 text-[11px] text-foreground shadow-sm backdrop-blur-sm ${
                badge.side === "left"
                  ? "top-[42%] -left-2 sm:-left-6"
                  : "top-[58%] -right-2 sm:-right-4"
              }`}
            >
              {badge.id === "gear" ? (
                <span className="text-accent">
                  <CameraIcon />
                </span>
              ) : null}
              {badge.label}
            </span>
          ))}
        </Reveal>

        <Reveal delay={2} className="flex flex-col gap-4 lg:pl-2">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-surface px-5 py-5 ring-1 ring-border"
            >
              <p className="font-display text-4xl tracking-tight sm:text-5xl">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                {stat.label}
              </p>
            </div>
          ))}

          <div className="mt-2">
            <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              My skill set
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-sm text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
