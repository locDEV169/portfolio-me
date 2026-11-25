import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

// ponytail: local covers/frames only — enough for a Belinda-lite ticker without new assets.
const tickerColumns = [
  [
    "/images/projects/girl-night-out/cover.jpg",
    "/images/projects/girl-night-out/01.jpg",
    "/images/projects/cosplay-day/cover.jpg",
    "/images/projects/ao-dai/cover.jpg",
  ],
  [
    "/images/projects/summer-vibes-sea/01.jpg",
    "/images/projects/food-fnb/cover.jpg",
    "/images/projects/high-light-dj/cover.jpg",
    "/images/projects/fumirai-anniversary/cover.jpg",
  ],
  [
    "/images/projects/ao-dai/01.jpg",
    "/images/projects/girl-night-out/04.jpg",
    "/images/projects/summer-vibes-sea/03.jpg",
    "/images/projects/high-light-dj/dj-amor/LOC05303.jpg",
  ],
  [
    "/images/projects/food-fnb/1.jpg",
    "/images/projects/girl-night-out/07.jpg",
    "/images/projects/summer-vibes-sea/05.jpg",
    "/images/projects/ao-dai/05.jpg",
  ],
] as const;

function TickerColumn({
  images,
  reverse,
}: {
  images: readonly string[];
  reverse?: boolean;
}) {
  // Duplicate list so translateY(-50%) loops seamlessly.
  const loop = [...images, ...images];

  return (
    // ponytail: h-full so grid cells (not flex) get a definite height; intrinsic Image avoids fill+height-0 warnings.
    <div className="relative h-full min-h-0 overflow-hidden rounded-xl">
      <div
        className={`flex flex-col gap-4 ${
          reverse ? "ticker-track-reverse" : "ticker-track"
        }`}
      >
        {loop.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="aspect-[3/4] w-full shrink-0 overflow-hidden rounded-xl bg-surface"
          >
            <Image
              src={src}
              alt=""
              width={480}
              height={640}
              sizes="(max-width: 768px) 45vw, 22vw"
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CaptureMomentsSection() {
  return (
    <section
      id="capture"
      aria-labelledby="book-shoot-heading"
      className="relative isolate min-h-[70vh] overflow-hidden bg-background text-foreground sm:min-h-[80vh]"
    >
      <div
        aria-hidden
        className="ticker-stage absolute inset-0 grid grid-cols-2 gap-3 p-3 opacity-55 sm:grid-cols-4 sm:gap-4 sm:p-4 md:opacity-70"
      >
        {tickerColumns.map((images, index) => (
          <TickerColumn
            key={index}
            images={images}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-background/55 sm:bg-background/45"
      />

      <div className="relative flex min-h-[70vh] items-center justify-center px-5 py-20 sm:min-h-[80vh] sm:px-8 sm:py-28">
        <div className="w-full max-w-md rounded-2xl bg-transparent px-6 py-10 text-center ring-1 ring-border backdrop-blur-md sm:px-10 sm:py-12">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            Book a shoot
          </p>
          {/* <h2
            id="book-shoot-heading"
            className="mt-4 font-display text-4xl tracking-tight uppercase sm:text-5xl"
          >
            Book a shoot
          </h2> */}
          <p className="mt-4 text-sm text-muted sm:text-base">
            {site.name} — {site.tagline}. Street frames, events, and quick
            cinematic takes from {site.location}.
          </p>
          <Link
            href="/contact"
            className="pressable mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 text-xs font-bold tracking-[0.14em] text-inverse-fg uppercase hover:opacity-90"
          >
            Contact
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
