"use client";

import { useState } from "react";
import type { Project, ProjectType } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoEmbed } from "@/components/VideoEmbed";

type WorkFilterProps = {
  projects: Project[];
};

export function WorkFilter({ projects }: WorkFilterProps) {
  const [activeType, setActiveType] = useState<ProjectType>("photo");
  const photos = projects.filter((project) => project.type === "photo");
  const videos = projects.filter((project) => project.type === "video");
  const isPhoto = activeType === "photo";

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Work category"
      >
        {(["photo", "video"] as const).map((type) => {
          const active = activeType === type;
          return (
            <button
              key={type}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveType(type)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active
                  ? "bg-inverse text-inverse-fg"
                  : "border border-border text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              {type === "photo" ? "Photography Works" : "Videography Works"}
            </button>
          );
        })}
      </div>

      {isPhoto ? (
        <section aria-labelledby="work-photo-heading" className="mt-10">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              Photography
            </p>
            <h2
              id="work-photo-heading"
              className="mt-3 font-display text-3xl tracking-tight uppercase sm:text-4xl"
            >
              Photography Works
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Still sets from recent shoots.
            </p>
          </div>

          {photos.length > 0 ? (
            <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16">
              {photos.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  priority={index < 4}
                  className={index % 2 === 1 ? "sm:mt-16" : undefined}
                />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-muted">No photography projects yet.</p>
          )}
        </section>
      ) : (
        <section aria-labelledby="work-video-heading" className="mt-10">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              Videography
            </p>
            <h2
              id="work-video-heading"
              className="mt-3 font-display text-3xl tracking-tight uppercase sm:text-4xl"
            >
              Videography Works
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Short intros and motion cuts.
            </p>
          </div>

          {videos.length > 0 ? (
            <VideoEmbed projects={videos} cardVariant="stack" />
          ) : (
            <p className="mt-10 text-muted">No videography projects yet.</p>
          )}
        </section>
      )}
    </div>
  );
}
