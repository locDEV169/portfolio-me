"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger step — matches fade-up-delay-* in globals.css */
  delay?: 0 | 1 | 2 | 3;
};

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

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  const delayClass =
    delay === 1
      ? "fade-up-delay-1"
      : delay === 2
        ? "fade-up-delay-2"
        : delay === 3
          ? "fade-up-delay-3"
          : "";

  const shown = reduceMotion || visible;

  return (
    <div
      ref={ref}
      className={["reveal", shown ? "is-visible" : "", delayClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
