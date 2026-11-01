import type { Metadata } from "next";
import { WorkFilter } from "@/components/WorkFilter";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
          Recent Work
        </h1>
        <p className="mt-3 text-muted sm:text-lg">
          Selected street photography and short videography pieces.
        </p>
      </div>
      <div className="mt-12">
        <WorkFilter projects={projects} />
      </div>
    </section>
  );
}
