import { AboutProfile } from "@/components/AboutProfile";
import { ManifestoReveal } from "@/components/ManifestoReveal";
import { site } from "@/data/site";

/** Belinda-lite: manifesto + stats right under hero. */
export function IntroSection() {
  return (
    <section
      id="intro"
      className="border-t border-border bg-background px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ManifestoReveal
          lines={site.manifesto}
          body={site.manifestoBody}
          stats={site.stats.map((stat) => (
            <div key={stat.label} className="manifesto-stat">
              <p className="font-display text-5xl tracking-tight sm:text-6xl">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="mt-3 font-mono text-[11px] tracking-wide text-muted uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        />
      </div>
    </section>
  );
}

/** Home about band — same 3-col layout as /about. */
export function AboutBand() {
  return <AboutProfile headingAs="h2" id="about" />;
}
