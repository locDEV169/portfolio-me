import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t border-border bg-surface px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight uppercase sm:text-5xl">
            Inspired by people &amp; city moments
          </h2>
          <p className="mt-3 text-muted sm:text-lg">
            Photography and videography services shaped around street life,
            events, and quick cinematic takes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={(Math.min(index, 3) as 0 | 1 | 2 | 3)}
            >
              <article className="h-full rounded-2xl bg-background px-6 py-8 ring-1 ring-border">
                <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-background px-6 py-8 ring-1 ring-border sm:flex-row sm:px-8">
            <div>
              <p className="font-display text-2xl tracking-tight uppercase sm:text-3xl">
                Can&apos;t find what you need?
              </p>
              <p className="mt-2 text-sm text-muted">
                Drop a message — we can shape a custom brief together.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-accent px-6 py-3 text-xs font-bold tracking-[0.14em] text-inverse-fg uppercase transition-opacity hover:opacity-90"
            >
              Contact me
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
