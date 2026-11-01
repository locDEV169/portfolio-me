import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  className?: string;
};

export function ProjectCard({
  project,
  priority = false,
  className = "",
}: ProjectCardProps) {
  return (
    <article className={className}>
      <Link
        href={`/work/${project.slug}`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <h2 className="mt-5 font-display text-2xl tracking-tight sm:text-[1.75rem]">
          {project.title}
        </h2>
        <p className="mt-1 text-sm text-muted">{project.category}</p>
        <span
          aria-hidden
          className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:border-foreground group-hover:bg-inverse group-hover:text-inverse-fg"
        >
          →
        </span>
        <span className="sr-only">View {project.title}</span>
      </Link>
    </article>
  );
}
