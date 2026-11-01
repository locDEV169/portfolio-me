import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

const collage = [
  {
    src: "/images/projects/girl-night-out/01.jpg",
    alt: "Night-out portrait frame",
    className: "col-start-1 row-start-1 aspect-[3/4]",
  },
  {
    src: "/images/projects/girl-night-out/04.jpg",
    alt: "Dynamic night-out portrait",
    className: "col-start-1 row-start-2 aspect-[3/4] sm:translate-y-6",
  },
  {
    src: "/images/projects/girl-night-out/cover.jpg",
    alt: "Featured night-out cover",
    className: "col-start-2 row-start-1 row-span-2 aspect-[3/4] self-center",
  },
  {
    src: "/images/projects/girl-night-out/09.jpg",
    alt: "Profile portrait from the set",
    className: "col-start-3 row-start-1 aspect-[3/4] sm:-translate-y-4",
  },
  {
    src: "/images/projects/girl-night-out/07.jpg",
    alt: "Candid night-out moment",
    className: "col-start-3 row-start-2 aspect-[3/4]",
  },
  {
    src: "/images/projects/fumirai-anniversary/cover.jpg",
    alt: "Event coverage frame",
    className:
      "col-start-2 row-start-3 hidden aspect-[4/3] max-h-40 justify-self-center sm:block md:max-h-48",
  },
] as const;

export function CaptureMomentsSection() {
  return (
    <section
      id="capture"
      className="relative overflow-hidden bg-inverse px-5 py-20 text-inverse-fg sm:px-8 sm:py-28"
    >
      {/* Collage layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mx-auto grid max-w-6xl grid-cols-3 gap-3 opacity-35 sm:gap-4 md:opacity-45"
      >
        {collage.map((item) => (
          <div
            key={item.src}
            className={`relative overflow-hidden rounded-3xl ${item.className}`}
          >
            <Image
              src={item.src}
              alt=""
              fill
              sizes="(max-width: 768px) 33vw, 20vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-inverse/70 via-inverse/55 to-inverse/80" />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
          Let&apos;s capture beautiful moments together
        </h2>
        <p className="mt-5 max-w-xl text-base text-inverse-fg/75 sm:text-lg">
          {site.name} — {site.tagline}. Street frames, events, and quick
          cinematic takes from {site.location}.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-background px-7 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
        >
          Get Started
        </Link>
      </Reveal>
    </section>
  );
}
