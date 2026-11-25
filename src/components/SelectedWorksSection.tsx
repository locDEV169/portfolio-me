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
      className="border-t border-border bg-background px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              Selected works
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight uppercase sm:text-5xl">
              Photography
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex shrink-0 items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-foreground uppercase transition-colors hover:text-accent"
          >
            View all
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        {photos.length > 0 ? (
          <div className="mt-16 flex flex-col gap-24 sm:mt-20 sm:gap-32">
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

        <div className="mt-28 border-t border-border pt-20 sm:mt-36 sm:pt-24">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                Motion
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight uppercase sm:text-5xl">
                Videography
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex shrink-0 items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-foreground uppercase transition-colors hover:text-accent"
            >
              View all
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
