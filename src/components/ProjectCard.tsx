import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  className?: string;
  /** 1-based index for Selected Works numbering */
  index?: number;
  /** stack = caption below; overlay = meta on image; series = Belinda-lite row */
  variant?: "stack" | "overlay" | "series";
  /** image = show cover; none = title/meta only (e.g. under an intro player) */
  media?: "image" | "none";
  /** series only — flip image/text columns */
  reverse?: boolean;
};

export function ProjectCard({
  project,
  priority = false,
  className = "",
  index,
  variant = "stack",
  media = "image",
  reverse = false,
}: ProjectCardProps) {
  const number =
    typeof index === "number" ? String(index).padStart(2, "0") : null;

  if (media === "none") {
    return (
      <article className={className}>
        <Link
          href={`/work/${project.slug}`}
          className="group flex items-start justify-between gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <div>
            {number ? (
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                {number}
                <span className="text-muted"> · </span>
                {project.category}
                <span className="text-muted"> · {project.year}</span>
              </p>
            ) : (
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                {project.category}
                <span className="text-muted"> · {project.year}</span>
              </p>
            )}
            <h2 className="mt-2 font-display text-2xl tracking-tight sm:text-[1.75rem]">
              {project.title}
            </h2>
          </div>
          <span
            aria-hidden
            className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-inverse-fg"
          >
            →
          </span>
          <span className="sr-only">View {project.title}</span>
        </Link>
      </article>
    );
  }

  if (variant === "series") {
    return (
      <article className={className}>
        <div
          className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Link
            href={`/work/${project.slug}`}
            className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-surface ring-1 ring-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={priority}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {number ? (
              <span className="absolute top-4 left-4 font-mono text-[11px] tracking-wide text-foreground">
                {number}
              </span>
            ) : null}
          </Link>

          <div className="max-w-md">
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              {number ? (
                <>
                  {number}
                  <span className="text-muted"> · </span>
                </>
              ) : null}
              {project.category}
              <span className="text-muted"> · {project.year}</span>
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight uppercase sm:text-4xl">
              <Link
                href={`/work/${project.slug}`}
                className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {project.title}
              </Link>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {project.summary}
            </p>
            <Link
              href={`/work/${project.slug}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-foreground uppercase transition-colors hover:text-accent"
            >
              View project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "overlay") {
    return (
      <article className={className}>
        <Link
          href={`/work/${project.slug}`}
          className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-background ring-1 ring-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            // ponytail: priority alone sets eager/high; duplicating loading/fetchPriority mismatches SSR vs client.
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />

          {number ? (
            <span className="absolute top-4 left-4 rounded-lg bg-background/75 px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent ring-1 ring-border backdrop-blur-sm">
              {number}
            </span>
          ) : null}

          <span
            aria-hidden
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-background/50 text-foreground backdrop-blur-sm transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-inverse-fg"
          >
            →
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              {project.category}
              <span className="text-foreground/70"> · {project.year}</span>
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
              {project.title}
            </h2>
          </div>
          <span className="sr-only">View {project.title}</span>
        </Link>
      </article>
    );
  }

  return (
    <article className={className}>
      <Link
        href={`/work/${project.slug}`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface ring-1 ring-border">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {number ? (
            <span className="absolute top-4 left-4 rounded-lg bg-background/80 px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent ring-1 ring-border backdrop-blur-sm">
              {number}
            </span>
          ) : null}
        </div>
        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              {project.category}
              <span className="text-muted"> · {project.year}</span>
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight sm:text-[1.75rem]">
              {project.title}
            </h2>
          </div>
          <span
            aria-hidden
            className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-inverse-fg"
          >
            →
          </span>
        </div>
        <span className="sr-only">View {project.title}</span>
      </Link>
    </article>
  );
}
