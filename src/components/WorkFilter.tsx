"use client";

import { useState } from "react";
import type { Project, ProjectType } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoEmbed } from "@/components/VideoEmbed";

const filters = ["all", "photo", "video"] as const;
type Filter = (typeof filters)[number];

type WorkFilterProps = {
  projects: Project[];
};

export function WorkFilter({ projects }: WorkFilterProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === (filter as ProjectType));

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects"
      >
        {filters.map((value) => {
          const active = filter === value;
          return (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(value)}
              className={`rounded-full px-4 py-2 text-sm capitalize transition-colors ${
                active
                  ? "bg-inverse text-inverse-fg"
                  : "border border-border text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index < 2}
            className={index % 2 === 1 ? "sm:mt-16" : undefined}
          />
        ))}
      </div>
      {visible.length === 0 ? (
        filter === "video" ? (
          <VideoEmbed />
        ) : (
          <p className="mt-10 text-muted">No projects in this filter yet.</p>
        )
      ) : null}
    </div>
  );
}
