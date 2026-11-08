import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export function SelectedWorksSection() {
  const featured = projects.slice(0, 4);

  return (
    <section
      id="portfolio"
      className="border-t border-border bg-background px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl rounded-2xl bg-surface p-5 ring-1 ring-border sm:p-8 lg:p-10">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight uppercase sm:text-5xl">
              Photography Works
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Street frames and short films picked from recent shoots.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border px-4 py-2.5 font-mono text-[11px] tracking-[0.14em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent"
          >
            View all works
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {featured.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={Math.min(index % 2, 3) as 0 | 1 | 2 | 3}
            >
              <ProjectCard
                project={project}
                priority={index < 2}
                index={index + 1}
                variant="overlay"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
