"use client";

import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
import { media } from "@/lib/media";

const INTRO_SECONDS = 15;
const YOUTUBE_ID = "ALzSOSLiAXs";
const YOUTUBE_TITLE = "MV Trò Chuyện Với Thời Gian - Tryle vs 43mm";

const localVideos = [
  {
    id: "visual-side-effect",
    src: "/videos/visual-side-effect-intro.mp4",
    poster: "/images/projects/visual-side-effect/cover.jpg",
    title: "Visual Side Effect intro - Edit by DJ Amor",
    description: "Visual Side Effect intro - Edit by DJ Amor - Visual by Me",
  },
  {
    id: "recap-hlw-2",
    src: "/videos/recap-hlw-2-intro.mp4",
    poster: "/images/projects/recap-hlw-2/cover.jpg",
    title: "Halloween Recap intro",
  },
  {
    id: "cau-long-fien",
    src: "/videos/cau-long-fien-intro.mp4",
    poster: "/images/projects/cau-long-fien/cover.jpg",
    title: "Cầu lông Fien intro",
  },
  {
    id: "east-west-recap",
    src: "/videos/east-west-recap-intro.mp4",
    poster: "/images/projects/east-west-recap/cover.jpg",
    title: "East West Recap intro",
  },
  {
    id: "fumirai-sn",
    src: "/videos/fumirai-sn-intro.mp4",
    poster: "/images/projects/fumirai-sn/cover.jpg",
    title: "Fumirai Birthday 1st year intro",
  },
] as const;

type VideoEmbedProps = {
  /** When set, render matching ProjectCard under each local intro (by slug). */
  projects?: Project[];
  cardVariant?: "stack" | "overlay";
};

export function VideoEmbed({
  projects,
  cardVariant = "stack",
}: VideoEmbedProps) {
  const youtubeSrc = new URL(`https://www.youtube.com/embed/${YOUTUBE_ID}`);
  youtubeSrc.searchParams.set("autoplay", "1");
  youtubeSrc.searchParams.set("mute", "1");
  youtubeSrc.searchParams.set("controls", "1");
  youtubeSrc.searchParams.set("playsinline", "1");
  youtubeSrc.searchParams.set("start", "0");
  youtubeSrc.searchParams.set("end", String(INTRO_SECONDS));
  youtubeSrc.searchParams.set("loop", "1");
  youtubeSrc.searchParams.set("playlist", YOUTUBE_ID);
  youtubeSrc.searchParams.set("rel", "0");

  const projectBySlug = new Map(
    (projects ?? []).map((project) => [project.slug, project]),
  );

  return (
    <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-12">
      <div className="flex flex-col gap-5">
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-background ring-1 ring-border">
          <iframe
            src={youtubeSrc.toString()}
            title={YOUTUBE_TITLE}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start justify-between gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
              Music Video
              <span className="text-muted"> · YouTube</span>
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight sm:text-[1.75rem]">
              {YOUTUBE_TITLE}
            </h2>
          </div>
          <span
            aria-hidden
            className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-inverse-fg"
          >
            →
          </span>
        </a>
      </div>

      {localVideos.map((video, index) => {
        const project = projectBySlug.get(video.id);

        return (
          <div key={video.id} className="flex flex-col gap-5">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-background ring-1 ring-border">
              <video
                src={video.src}
                controls
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                poster={media(video.poster)}
                aria-label={video.title}
                className="h-full w-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {project ? (
              <ProjectCard
                project={project}
                index={cardVariant === "overlay" ? index + 1 : undefined}
                media="none"
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
