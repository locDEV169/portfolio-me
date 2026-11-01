import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-inverse text-inverse-fg">
      <Image
        src="/images/projects/girl-night-out/cover.jpg"
        alt="Locikee girl night out portrait"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse via-inverse/55 to-inverse/20" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20">
        <p className="fade-up text-sm tracking-[0.22em] text-accent uppercase">
          {site.tagline}
        </p>
        <h1 className="fade-up fade-up-delay-1 mt-4 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          {site.name}
          <span className="block text-inverse-fg/85">Capturing moments on the go.</span>
        </h1>
        <p className="fade-up fade-up-delay-2 mt-6 max-w-lg text-base text-inverse-fg/75 sm:text-lg">
          {site.bioShort} Based in {site.location}.
        </p>
        <p className="fade-up fade-up-delay-2 mt-6 max-w-lg text-base text-inverse-fg/75 sm:text-lg">
          {site.bioShort2} - {site.bioShort3}.
        </p>
        <div className="fade-up fade-up-delay-3 mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-inverse transition-opacity hover:opacity-90"
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-inverse-fg/35 px-6 py-3 text-sm text-inverse-fg transition-colors hover:border-inverse-fg"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
