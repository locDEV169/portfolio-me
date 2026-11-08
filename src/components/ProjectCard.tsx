import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  className?: string;
  /** 1-based index for Selected Works numbering */
  index?: number;
  /** stack = caption below (Work page); overlay = meta on image (Home Selected Works) */
  variant?: "stack" | "overlay";
};

export function ProjectCard({
  project,
  priority = false,
  className = "",
  index,
  variant = "stack",
}: ProjectCardProps) {
  const number =
    typeof index === "number" ? String(index).padStart(2, "0") : null;

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
