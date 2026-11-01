import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { IntroSection } from "@/components/IntroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* <HomeHero /> */}
      <IntroSection />

      <section
        id="portfolio"
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-5xl">
            Recent Work
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Take a glimpse into my most recent street frames and short films.
          </p>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index < 2}
              className={index % 2 === 1 ? "sm:mt-16" : undefined}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/work"
            className="rounded-full bg-inverse px-7 py-3 text-sm text-inverse-fg transition-opacity hover:opacity-90"
          >
            View more
          </Link>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-20">
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Follow on Instagram
            </h2>
            <p className="mt-3 max-w-md text-muted">
              Day-to-day capturing moments on the go from {site.location} —{" "}
              {site.handle}.
            </p>
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-inverse px-6 py-3 text-sm text-inverse-fg transition-opacity hover:opacity-90"
          >
            Open Instagram
          </a>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-20">
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Let&apos;s shoot the city.
            </h2>
            <p className="mt-3 max-w-md text-muted">
              Available for street assignments, documentary shorts, and
              collaborative edits.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-inverse px-6 py-3 text-sm text-inverse-fg transition-opacity hover:opacity-90"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
