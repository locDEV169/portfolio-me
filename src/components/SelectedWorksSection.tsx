import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { VideoEmbed } from "@/components/VideoEmbed";
import { projects } from "@/data/projects";

export function SelectedWorksSection() {
  const photos = projects.filter((project) => project.type === "photo").slice(0, 6);
  const videos = projects.filter((project) => project.type === "video");

  return (
    <section
      id="portfolio"
      className="border-t border-border bg-background px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              Photography
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight uppercase sm:text-5xl">
              Photography Works
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Selected still sets from recent shoots.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex shrink-0 items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-foreground uppercase transition-colors hover:text-accent"
          >
            View all works
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        {photos.length > 0 ? (
          <div className="mt-14 flex flex-col gap-16 sm:gap-24">
            {photos.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={Math.min(index % 2, 3) as 0 | 1 | 2 | 3}
              >
                <ProjectCard
                  project={project}
                  priority={index < 2}
                  index={index + 1}
                  variant="series"
                  reverse={index % 2 === 1}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-muted">No photography projects yet.</p>
        )}

        <div className="mt-20 border-t border-border pt-16 sm:mt-28 sm:pt-20">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                Videography
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight uppercase sm:text-5xl">
                Videography Works
              </h2>
              <p className="mt-3 text-sm text-muted sm:text-base">
                Short intros and motion cuts.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex shrink-0 items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-foreground uppercase transition-colors hover:text-accent"
            >
              View all works
              <span aria-hidden>→</span>
            </Link>
          </Reveal>

          {videos.length > 0 ? (
            <VideoEmbed projects={videos} cardVariant="overlay" />
          ) : (
            <p className="mt-10 text-muted">No videography projects yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
