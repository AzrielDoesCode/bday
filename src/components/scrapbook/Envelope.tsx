import { useState } from "react";
import { opening, stickers } from "@/content/ria";
import { Sticker, Arrow, PaperScrap } from "./Bits";
import { useScrapbookParallax } from "@/hooks/use-reveal";

/** Opening scene: calm paper, one envelope. Click to enter the scrapbook. */
export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [open, setOpen] = useState(false);
  const sceneRef = useScrapbookParallax<HTMLDivElement>();

  const handle = () => {
    if (open) return;
    setOpen(true);
    window.setTimeout(onOpen, 1250);
  };

  return (
    <div
      ref={sceneRef}
      className={`paper-grain fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ${
        open ? "opacity-0" : "opacity-100"
      }`}
    >
      <PaperScrap tone="coral" className="parallax-far left-[5%] top-[12%] h-24 w-44 -rotate-12" />
      <PaperScrap tone="leaf" className="parallax-mid right-[4%] top-[18%] h-32 w-32 rotate-12" />
      <PaperScrap tone="gold" className="parallax-far bottom-[9%] left-[14%] h-20 w-52 rotate-6" />

      <div className="parallax-near relative z-10 text-center">
        <p className="ink-hand text-5xl md:text-7xl">{opening.forWhom}</p>
        <p className="font-sans mt-2 text-base text-ink-soft md:text-xl">{opening.subtitle}</p>
      </div>

      <div className="parallax-mid relative mt-12">
        <Sticker
          src={stickers.four}
          className="absolute -left-44 top-2 hidden w-36 md:block"
          tilt={-6}
        />
        <Sticker
          src={stickers.two}
          className="absolute -right-48 bottom-0 hidden w-40 md:block"
          tilt={5}
        />

        <button
          onClick={handle}
          aria-label="Open the envelope"
          className="group relative block cursor-pointer"
        >
          {/* envelope body */}
          <div
            className={`paper-sheet relative h-[230px] w-[360px] rounded-sm transition-transform duration-700 md:h-[300px] md:w-[480px] ${
              open ? "-translate-y-6 scale-[1.03]" : "group-hover:-translate-y-1"
            }`}
          >
            {/* letter peeking out */}
            <div
              className={`paper-sheet absolute left-1/2 w-[86%] -translate-x-1/2 rounded-sm transition-all duration-1000 ${
                open ? "-top-24 h-40 opacity-100" : "top-3 h-8 opacity-0"
              }`}
            />
            {/* flap */}
            <div
              className="absolute inset-x-0 top-0 origin-top transition-transform duration-700"
              style={{ transform: open ? "rotateX(160deg)" : "rotateX(0deg)" }}
            >
              <svg viewBox="0 0 480 150" className="w-full">
                <path d="M0 0H480L240 142Z" fill="var(--paper-deep)" />
                <path
                  d="M0 0H480L240 142Z"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
              </svg>
            </div>
            {/* seal */}
            <span className="seal-pulse absolute left-1/2 top-[52%] z-10 -translate-x-1/2 rounded-full bg-rose px-4 py-3 text-sm tracking-widest text-primary-foreground shadow-sm">
              ♡
            </span>
            <span className="ink-hand absolute bottom-7 left-1/2 -translate-x-1/2 text-2xl md:text-3xl">
              {opening.envelopeInitials}
            </span>
          </div>
        </button>

        <div className="mt-10 flex items-center justify-center gap-3 text-ink-soft">
          <Arrow className="w-20 rotate-[8deg] text-rose/70" />
          <span className="ink-hand nudge-right text-2xl">{opening.hint}</span>
        </div>
      </div>
    </div>
  );
}
