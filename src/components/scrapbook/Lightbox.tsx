import { useEffect } from "react";

/** Click a photo to open it larger. */
export function Lightbox({
  src,
  caption,
  onClose,
}: {
  src: string | null;
  caption?: string | undefined;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[60] flex cursor-zoom-out flex-col items-center justify-center gap-4 bg-ink/70 p-8 backdrop-blur-sm"
    >
      <img
        src={src}
        alt={caption ?? ""}
        className="max-h-[78vh] max-w-[86vw] bg-card p-3 shadow-[var(--shadow-lift)]"
      />
      {caption ? <p className="ink-hand text-xl text-secondary">{caption}</p> : null}
    </div>
  );
}
