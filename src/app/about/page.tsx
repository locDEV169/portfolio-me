import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl tracking-tight sm:text-5xl">About</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
        <p>
          I photograph and film the unscripted city — crossings, markets, alleys,
          and the quiet gaps between rush hours.
        </p>
        <p>
          This site is a personal portfolio for street photography and
          videography. Replace this copy with your own story when ready.
        </p>
      </div>
      <Link
        href="/contact"
        className="mt-10 inline-flex rounded-full bg-inverse px-6 py-3 text-sm text-inverse-fg transition-opacity hover:opacity-90"
      >
        Get in touch
      </Link>
    </section>
  );
}
