import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-sm tracking-[0.18em] text-muted uppercase">
        {site.handle}
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
        About {site.name}
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
        <p>
          I&apos;m {site.name} — {site.tagline.toLowerCase()}. Based in{" "}
          {site.location}.
        </p>
        <p>
          I shoot and film the unscripted city: crossings, alleys, markets, and
          the quiet gaps between rush hours. On Instagram I call it chụp dạo
          and quay vội — street frames made on the move.
        </p>
        <p>
          This site gathers selected photography and videography work. Follow{" "}
          {site.handle} for the day-to-day rolls.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-inverse px-6 py-3 text-sm text-inverse-fg transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-foreground"
        >
          Instagram {site.handle}
        </a>
      </div>
    </section>
  );
}
