import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
        Contact
      </h1>
      <p className="mt-3 text-muted">
        Tell me about the streets, stories, or timelines you want to capture.
      </p>
      <ContactForm />
      <p className="mt-10 text-sm text-muted">
        Prefer DM? Reach {site.name} on{" "}
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-border pb-0.5 transition-colors hover:border-foreground hover:text-foreground"
        >
          Instagram {site.handle}
        </a>
        .
      </p>
    </section>
  );
}
