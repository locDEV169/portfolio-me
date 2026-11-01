import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-2xl tracking-[0.08em] uppercase">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted">{site.bioShort}</p>
          <p className="mt-1 text-sm text-muted">{site.location}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted">
          <Link href="/work" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-muted sm:px-8">
          © 2026 {site.name}. {site.handle}
        </p>
      </div>
    </footer>
  );
}
