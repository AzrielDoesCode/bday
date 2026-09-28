import { useState } from "react";
import {
  littleThings,
  photoMoments,
  thingsINeverSay,
  letter,
  herLetter,
  finale,
  stickers,
} from "@/content/ria";
import { Reveal, Sticker, Tape, Arrow, Counter, PaperScrap } from "./Bits";
import { Lightbox } from "./Lightbox";
import { usePointerParallax } from "@/hooks/use-reveal";

/* ============================ THE LITTLE THINGS ============================ */

const tilts = [-4.5, 3, -2];

export function LittleThings({ onZoom }: { onZoom: (src: string, caption: string) => void }) {
  const p = usePointerParallax();

  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-16 md:py-40">
      <PaperScrap tone="coral" className="parallax-far -left-12 top-24 h-28 w-48 -rotate-6" />
      <PaperScrap tone="leaf" className="parallax-mid -right-10 bottom-20 h-40 w-52 rotate-12" />
      {/* background doodles drift slowest */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ transform: `translate3d(${p.x * -8}px, ${p.y * -8}px, 0)` }}
      >
        <Arrow className="absolute left-[12%] top-[18%] w-40 rotate-[24deg] text-ink" />
        <Arrow className="absolute right-[10%] bottom-[22%] w-52 -rotate-[150deg] text-ink" />
      </div>

      <Reveal className="relative mx-auto max-w-6xl">
        <h2 className="font-serif text-5xl italic md:text-7xl">
          {littleThings.heading}
        </h2>
        <p className="ink-hand mt-3 text-2xl md:text-3xl">{littleThings.note}</p>
      </Reveal>

      <div
        className="relative mx-auto mt-20 grid max-w-7xl grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-8"
        style={{ transform: `translate3d(${p.x * 5}px, ${p.y * 5}px, 0)` }}
      >
        {littleThings.items.map((item, i) => (
          <Reveal
            key={i}
            delay={i * 160}
            className={`parallax-${i === 1 ? "near" : "mid"} ${
              i === 0 ? "md:col-span-5 md:mt-16" : i === 1 ? "md:col-span-4" : "md:col-span-3 md:mt-28"
            }`}
          >
            <figure
              onClick={() => onZoom(item.src, item.caption)}
              className="polaroid relative mx-auto w-[min(23rem,82vw)] cursor-zoom-in hover:-translate-y-3 hover:rotate-0 hover:shadow-[var(--shadow-lift)] md:w-full"
              style={{ rotate: `${tilts[i % tilts.length]}deg` }}
            >
              <Tape className="left-1/2 top-[-14px] h-7 w-24 -translate-x-1/2 rotate-[-3deg]" />
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="ink-hand absolute bottom-4 left-0 right-0 px-4 text-center text-xl leading-tight md:text-2xl">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}

        <Sticker
          src={stickers.five}
          tilt={-8}
          className="parallax-near pointer-events-none absolute -bottom-20 left-[1%] hidden w-40 md:block"
          style={{ transform: `translate3d(${p.x * 14}px, ${p.y * 14}px, 0)` }}
        />
        <Sticker
          src={stickers.one}
          tilt={7}
          className="parallax-mid pointer-events-none absolute -top-20 right-[2%] hidden w-36 md:block"
        />
      </div>
    </section>
  );
}

/* ============================ PHOTO MOMENTS ============================ */

export function PhotoMoments() {
  return (
    <section className="relative">
      {photoMoments.map((m, i) => (
        <div key={i} className="relative flex min-h-screen items-center justify-center px-6 py-24">
          <PaperScrap tone="gold" className="parallax-far left-[7%] top-[18%] h-32 w-56 -rotate-12" />
          <PaperScrap tone="coral" className="parallax-mid bottom-[12%] right-[4%] h-44 w-44 rotate-12" />
          <Reveal className="parallax-near relative">
            <div className="relative bg-card p-4 shadow-[var(--shadow-lift)] md:p-6">
              <img
                src={m.src}
                alt={m.caption}
                loading="lazy"
                decoding="async"
                className="max-h-[70vh] w-auto max-w-[78vw] object-contain"
              />
              <Tape className="left-6 top-[-12px] h-6 w-20 rotate-[-4deg]" />
              <Tape className="right-8 bottom-[-12px] h-6 w-20 rotate-[3deg]" />
            </div>
            <p className="ink-hand mt-7 max-w-2xl text-3xl leading-snug md:text-4xl">{m.caption}</p>
            <div className="mt-3">
              <Counter index={i + 1} total={photoMoments.length} />
            </div>
            {i % 2 === 0 ? (
              <Sticker
                src={stickers.three}
                tilt={6}
                className="pointer-events-none absolute -right-16 bottom-16 hidden w-28 md:block"
              />
            ) : (
              <Sticker
                src={stickers.two}
                tilt={-5}
                className="pointer-events-none absolute -left-20 top-8 hidden w-28 md:block"
              />
            )}
          </Reveal>
        </div>
      ))}
    </section>
  );
}

/* ====================== THINGS I DON'T SAY ENOUGH ====================== */

export function ThingsINeverSay() {
  return (
    <section className="flex min-h-screen items-center justify-center px-8 py-28">
      <PaperScrap tone="leaf" className="parallax-far left-[8%] top-[20%] h-40 w-40 -rotate-12" />
      <PaperScrap tone="coral" className="parallax-mid bottom-[16%] right-[7%] h-28 w-52 rotate-6" />
      <Reveal className="paper-sheet parallax-near relative w-full max-w-4xl px-10 py-16 md:px-20 md:py-20">
        <Tape className="left-1/2 top-[-14px] h-7 w-28 -translate-x-1/2 rotate-[2deg]" />
        <h2 className="ink-hand text-4xl leading-snug text-ink md:text-6xl">
          {thingsINeverSay.heading}
        </h2>
        <ul className="mt-10 space-y-7">
          {thingsINeverSay.lines.map((line, i) => (
            <Reveal key={i} delay={i * 220}>
              <li className="font-serif text-2xl italic leading-relaxed text-ink-soft md:text-3xl">
                {line}
              </li>
            </Reveal>
          ))}
        </ul>
        <Sticker
          src={stickers.four}
          tilt={5}
           className="parallax-near pointer-events-none absolute -bottom-20 -right-14 hidden w-40 md:block"
        />
      </Reveal>
    </section>
  );
}

/* ============================ THE LETTER ============================ */

export function TheLetter() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-32">
      <PaperScrap tone="gold" className="parallax-far left-[5%] top-[16%] h-28 w-56 rotate-6" />
      <Reveal className="parallax-mid relative w-full max-w-4xl">
        <div className="paper-sheet relative px-8 py-16 md:px-24 md:py-24">
          <Tape className="left-10 top-[-13px] h-7 w-24 rotate-[-3deg]" />
          <Tape className="right-12 top-[-13px] h-7 w-24 rotate-[4deg]" />

          <p className="ink-hand text-4xl md:text-5xl">{letter.salutation}</p>

          <div className="mt-8 space-y-6">
            {letter.paragraphs.map((para, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className="ink-hand text-2xl leading-[1.8] text-ink md:text-3xl md:leading-[1.85]">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <p className="ink-hand mt-12 text-right text-3xl">{letter.signature}</p>

          {/* corner doodles */}
          <Arrow className="pointer-events-none absolute bottom-6 left-8 w-24 rotate-[160deg] text-ink/20" />
          <span aria-hidden className="ink-hand absolute right-8 top-8 text-2xl opacity-25">
            ✿
          </span>
        </div>

        <Sticker
          src={stickers.five}
          tilt={-6}
            className="parallax-near pointer-events-none absolute -bottom-20 -left-16 hidden w-44 md:block"
        />
      </Reveal>
    </section>
  );
}

/* ============================ HER LETTER TO ME ============================ */

export function HerLetter() {
  const [zoom, setZoom] = useState(false);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-8 py-28">
      <PaperScrap tone="leaf" className="parallax-far left-[6%] top-[18%] h-36 w-36 -rotate-12" />
      <PaperScrap tone="gold" className="parallax-mid bottom-[14%] right-[5%] h-28 w-48 rotate-6" />

      <Reveal>
        <h2 className="font-serif text-5xl italic md:text-7xl">{herLetter.heading}</h2>
        <p className="ink-hand mt-3 text-2xl md:text-3xl">{herLetter.note}</p>
      </Reveal>

      <Reveal delay={160} className="mt-14 w-full max-w-3xl">
        {herLetter.src ? (
          <figure
            onClick={() => setZoom(true)}
            className="parallax-near relative cursor-zoom-in bg-card p-5 shadow-[var(--shadow-lift)] transition-transform duration-500 hover:-translate-y-2 md:p-7"
            style={{ rotate: "-1.5deg" }}
          >
            <img
              src={herLetter.src}
              alt="Ria's handwritten letter"
              loading="lazy"
              className="max-h-[68vh] w-auto max-w-[78vw] object-contain"
            />
            <Tape className="left-1/2 top-[-12px] h-6 w-24 -translate-x-1/2 rotate-[-2deg]" />
          </figure>
        ) : (
          <div
            className="paper-sheet parallax-near relative mx-auto w-full px-8 py-16 text-center md:px-16 md:py-20"
            style={{ rotate: "-1.5deg" }}
          >
            <Tape className="left-1/2 top-[-14px] h-7 w-28 -translate-x-1/2 rotate-[-2deg]" />
            <p className="ink-hand text-2xl leading-[1.85] text-ink md:text-3xl md:leading-[1.9] lg:text-4xl lg:leading-[1.9]">
              {herLetter.text}
            </p>
          </div>
        )}
      </Reveal>

      {herLetter.src && <Lightbox src={zoom ? herLetter.src : null} onClose={() => setZoom(false)} />}
    </section>
  );
}

/* ============================ FINAL SCENE ============================ */

export function Finale() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-8 py-32 text-center">
      <Reveal>
        <figure className="polaroid parallax-near w-[19rem] md:w-[24rem]" style={{ rotate: "1.5deg" }}>
          <img
            src={finale.photo}
            alt="Us"
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
          <figcaption className="ink-hand absolute bottom-4 left-0 right-0 text-center text-2xl">
            us ♡
          </figcaption>
        </figure>
      </Reveal>

      <Reveal delay={400} className="mt-16">
        <h2 className="ink-hand text-5xl text-ink md:text-7xl">{finale.title}</h2>
        <p className="mt-6 font-serif text-2xl italic text-ink-soft md:text-3xl">{finale.line}</p>
        <p className="ink-hand mt-10 text-3xl">{finale.signature}</p>
      </Reveal>

      <Reveal delay={900} className="mt-24">
        <p className="ink-hand text-lg opacity-60">{finale.ps}</p>
      </Reveal>
    </section>
  );
}
