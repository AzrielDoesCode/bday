import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

/** Fade/rise-in wrapper used across the scrapbook. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal-base ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

/** A strip of washi tape. */
export function Tape({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return <span aria-hidden className={`tape-strip ${className}`} style={style} />;
}

/** Pressed-paper color scrap used to add depth without introducing new imagery. */
export function PaperScrap({
  tone = "coral",
  className = "",
}: {
  tone?: "coral" | "leaf" | "gold";
  className?: string;
}) {
  return <span aria-hidden className={`paper-scrap paper-scrap-${tone} ${className}`} />;
}

/** A sticker cut-out that floats gently and wobbles on hover. */
export function Sticker({
  src,
  alt = "",
  className = "",
  tilt = 0,
  style,
}: {
  src: string;
  alt?: string;
  className?: string;
  tilt?: number;
  style?: CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={alt === ""}
      loading="lazy"
      className={`float-soft pointer-events-auto select-none mix-blend-multiply transition-transform duration-300 hover:scale-[1.1] ${className}`}
      style={{ ["--tilt" as string]: `${tilt}deg`, ...style }}
    />
  );
}

/** Small hand-drawn arrow. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 50" className={className} fill="none">
      <path
        d="M4 34C26 8 62 2 106 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="draw-line"
      />
      <path
        d="M92 8c8 4 14 7 15 10-4 3-9 6-12 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** "01 / 08" style counter. */
export function Counter({ index, total }: { index: number; total: number }) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <span className="ink-hand text-lg tracking-widest">
      {pad(index)} / {pad(total)}
    </span>
  );
}
