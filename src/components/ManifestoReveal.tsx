"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

type ManifestoRevealProps = {
  lines: readonly string[];
  body: string;
  stats: ReactNode;
};

/**
 * Belinda-like intro motion: each manifesto line rises on its own beat,
 * then body + stats follow. One IntersectionObserver for the stage.
 */
export function ManifestoReveal({ lines, body, stats }: ManifestoRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (reduceMotion) return;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        io.disconnect();
      },
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  const shown = reduceMotion || visible;

  return (
    <div
      ref={ref}
      className={["manifesto-stage", shown ? "is-visible" : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <h2 className="max-w-5xl font-display text-4xl leading-[0.92] tracking-tight uppercase sm:text-6xl md:text-7xl lg:text-8xl">
        {lines.map((line) => (
          <span key={line} className="manifesto-line block">
            {line}
          </span>
        ))}
      </h2>

      <p className="manifesto-body mt-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {body}
      </p>

      <div className="manifesto-stats mt-16 grid gap-10 border-y border-border py-12 sm:grid-cols-3 sm:gap-8">
        {stats}
      </div>
    </div>
  );
}
