import { useEffect, useRef, useState } from "react";

/** Reveals an element once it scrolls into view. Falls back to visible if unsupported. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setShown(true);
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, shown };
}

/** Normalized pointer position (-1..1) for very subtle parallax. */
export function usePointerParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setPos({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2,
        });
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return pos;
}

/** Writes pointer position to CSS variables so every scrapbook layer can share depth without re-rendering. */
export function useScrapbookParallax<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty("--pointer-x", x.toFixed(3));
        el.style.setProperty("--pointer-y", y.toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}

/** True when the viewport is too small/portrait for the full experience. */
export function useIsTooSmall() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const check = () =>
      setSmall(window.innerWidth < 820 && window.innerHeight > window.innerWidth);
    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  return small;
}
