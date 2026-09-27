import { useRef, useState } from "react";
import { music } from "@/content/ria";

/** Tiny discreet music control. Hidden until an audio file is added in content/ria.ts. */
export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  if (!music.src) return null;

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
      return;
    }
    try {
      await el.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio ref={audioRef} src={music.src} loop preload="none" />
      <button
        onClick={toggle}
        className="paper-sheet ink-hand flex items-center gap-2 rounded-sm px-3 py-1.5 text-base text-ink-soft transition-transform hover:-translate-y-0.5"
      >
        <span aria-hidden className={playing ? "float-soft" : ""}>
          ♫
        </span>
        {playing ? "playing" : music.label}
      </button>
    </div>
  );
}
