import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="bg-background px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.9fr_1fr] lg:gap-10 xl:gap-14">
        {/* Left: copy */}
        <div className="fade-up order-1">
          <p className="text-sm text-muted">{site.name}</p>
          <h2 className="mt-3 max-w-md font-display text-4xl tracking-tight sm:text-5xl">
            {site.headline}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            {site.bio}
          </p>
          <p className="fade-up text-sm tracking-[0.22em] text-accent uppercase">
            {site.tagline}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-inverse px-6 py-3 text-sm text-inverse-fg transition-opacity hover:opacity-90"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Center: oval portrait + badges */}
        <div className="fade-up fade-up-delay-1 order-2 mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px]">
            <div className="absolute inset-0 overflow-hidden rounded-[999px] bg-surface shadow-sm">
              <Image
                src={site.introImage.src}
                alt={site.introImage.alt}
                fill
                sizes="(max-width: 1024px) 280px, 320px"
                className="object-cover"
                priority
              />
            </div>

            {site.introBadges.map((badge) => (
              <span
                key={badge.id}
                className={`absolute z-10 inline-flex items-center gap-2 rounded-full bg-background px-3.5 py-2 text-xs font-medium text-foreground shadow-md ring-1 ring-border/80 sm:text-sm ${badge.side === "left"
                    ? "top-[18%] -left-2 sm:-left-6"
                    : "top-[42%] -right-2 sm:-right-8"
                  }`}
              >
                {badge.id === "gear" ? (
                  <svg
                    aria-hidden
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="shrink-0"
                  >
                    <path d="M10 14.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Zm0-1.7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM4.2 5.8h2.1L7.5 4.5A1.5 1.5 0 0 1 8.6 4h2.8a1.5 1.5 0 0 1 1.1.5l1.2 1.3h2.1A1.5 1.5 0 0 1 17.3 7.3v8.3a1.5 1.5 0 0 1-1.5 1.5H4.2a1.5 1.5 0 0 1-1.5-1.5V7.3A1.5 1.5 0 0 1 4.2 5.8Z" />
                  </svg>
                ) : null}
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: stats cards + skills */}
        <div className="fade-up fade-up-delay-2 order-3 flex flex-col gap-4">
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-surface px-5 py-5 shadow-sm ring-1 ring-border/60"
            >
              <p className="font-display text-3xl tracking-tight sm:text-4xl">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}

          <div className="pt-2">
            <p className="text-sm text-muted">My skill set</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {site.skills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full px-3.5 py-2 text-sm ${skill === "+ More"
                      ? "border border-border bg-background text-muted"
                      : "bg-surface text-foreground ring-1 ring-border/60"
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
