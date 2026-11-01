import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article>
      <div className="relative min-h-[60vh] bg-inverse">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse via-inverse/40 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-end px-5 pb-12 sm:px-8">
          <Link
            href="/work"
            className="mb-8 w-fit text-sm text-inverse-fg/70 transition-colors hover:text-inverse-fg"
          >
            ← Work
          </Link>
          <p className="text-sm tracking-[0.18em] text-accent uppercase">
            {project.category} · {project.location} · {project.year}
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-inverse-fg sm:text-6xl">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-lg leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs tracking-wide text-muted uppercase"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {project.videoUrl ? (
        <div className="mx-auto max-w-5xl px-5 pb-12 sm:px-8">
          <div className="aspect-video overflow-hidden bg-inverse">
            <iframe
              src={project.videoUrl}
              title={`${project.title} video`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}

      <div className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 sm:grid-cols-2 sm:px-8">
        {project.gallery.map((image) => (
          <div key={image.src} className="relative aspect-[4/5] bg-surface">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </article>
  );
}
