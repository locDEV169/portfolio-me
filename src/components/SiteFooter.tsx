import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/data/site";

function SocialIcon({ id }: { id: string }) {
  if (id === "instagram") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.7a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8Zm5.95-8.05a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0ZM12 3.5c-2.3 0-2.6.01-3.5.05a5.1 5.1 0 0 0-3.4 1.2 5.1 5.1 0 0 0-1.2 3.4c-.04.9-.05 1.2-.05 3.5s.01 2.6.05 3.5a5.1 5.1 0 0 0 1.2 3.4 5.1 5.1 0 0 0 3.4 1.2c.9.04 1.2.05 3.5.05s2.6-.01 3.5-.05a5.1 5.1 0 0 0 3.4-1.2 5.1 5.1 0 0 0 1.2-3.4c.04-.9.05-1.2.05-3.5s-.01-2.6-.05-3.5a5.1 5.1 0 0 0-1.2-3.4 5.1 5.1 0 0 0-3.4-1.2C14.6 3.51 14.3 3.5 12 3.5Zm0 1.7c2.26 0 2.53.01 3.42.05a3.4 3.4 0 0 1 2.27.88 3.4 3.4 0 0 1 .88 2.27c.04.89.05 1.16.05 3.42s-.01 2.53-.05 3.42a3.4 3.4 0 0 1-.88 2.27 3.4 3.4 0 0 1-2.27.88c-.89.04-1.16.05-3.42.05s-2.53-.01-3.42-.05a3.4 3.4 0 0 1-2.27-.88 3.4 3.4 0 0 1-.88-2.27c-.04-.89-.05-1.16-.05-3.42s.01-2.53.05-3.42a3.4 3.4 0 0 1 .88-2.27 3.4 3.4 0 0 1 2.27-.88C9.47 5.21 9.74 5.2 12 5.2Z" />
      </svg>
    );
  }

  if (id === "youtube") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-4.8ZM9.8 15.5v-7L16 12l-6.2 3.5Z" />
      </svg>
    );
  }

  if (id === "behance") {
    return (
      <span aria-hidden className="font-mono text-sm font-bold">
        Be
      </span>
    );
  }

  if (id === "tiktok") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M19.6 7.4a6.7 6.7 0 0 1-3.9-1.3v7.5a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.8a2.8 2.8 0 1 0 2 2.7V2.5h2.7a4 4 0 0 0 3.9 3.9v1Z" />
      </svg>
    );
  }

  return (
    <span aria-hidden className="font-mono text-sm font-bold">
      {id.slice(0, 2).toUpperCase()}
    </span>
  );
}

function SocialTile({
  id,
  label,
  handle,
  href,
}: {
  id: string;
  label: string;
  handle: string;
  href?: string;
}) {
  const className =
    "flex items-center gap-3 rounded-xl bg-background px-4 py-4 ring-1 ring-border";
  const body: ReactNode = (
    <>
      <span className="text-accent">
        <SocialIcon id={id} />
      </span>
      <span>
        <span className="block font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
          {label}
        </span>
        <span className="mt-1 block font-mono text-sm text-foreground">
          {handle}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} transition-colors hover:ring-accent/50`}
      >
        {body}
      </a>
    );
  }

  return <div className={`${className} opacity-90`}>{body}</div>;
}

export function SiteFooter() {
  const [city, country] = site.location.includes(",")
    ? site.location.split(",").map((part) => part.trim())
    : [site.location, ""];

  return (
    <footer className="mt-auto border-t border-border bg-background px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl rounded-2xl bg-surface p-5 ring-1 ring-border sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent font-display text-lg font-bold text-inverse-fg"
            >
              {site.name.charAt(0)}
            </span>
            <span className="min-w-0">
              <span className="block font-display text-base tracking-[0.12em] text-foreground uppercase sm:text-lg">
                {site.name}
              </span>
              <span className="mt-0.5 block truncate font-mono text-[10px] tracking-[0.18em] text-muted uppercase sm:text-[11px]">
                {site.tagline}
              </span>
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {site.availableForHire ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-hire-soft px-3 py-1.5 font-mono text-[11px] tracking-wide text-hire ring-1 ring-hire/35">
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full bg-hire shadow-[0_0_8px_var(--hire)]"
                />
                Available for Hire
              </span>
            ) : null}
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-accent px-4 py-2.5 text-xs font-bold tracking-[0.12em] text-inverse-fg uppercase transition-opacity hover:opacity-90"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        {site.socials.length > 0 ? (
          <div className="mt-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              {site.socialsEyebrow}
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {site.socials.map((social) => (
                <SocialTile
                  key={social.id}
                  id={social.id}
                  label={social.label}
                  handle={social.handle}
                  href={"href" in social ? social.href : undefined}
                />
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 font-mono text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="sm:text-center">{site.footerNote}</p>
          <p>
            {city}
            {country ? (
              <>
                , <span className="text-accent">{country}</span>
              </>
            ) : null}
          </p>
        </div>

        <nav className="mt-5 flex flex-wrap gap-4 font-mono text-[11px] tracking-wide text-muted uppercase">
          <Link href="/work" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
