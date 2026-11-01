import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-[0.08em] text-foreground uppercase"
        >
          Street.
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="hidden rounded-full bg-inverse px-4 py-2 text-sm text-inverse-fg transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  );
}
