/**
 * ============================================================
 *  EDIT EVERYTHING HERE.
 *  This is the single place to change all text on the site.
 *  Photos + stickers live in src/assets (see below).
 * ============================================================
 */

import photo1 from "@/assets/photo-1.jpg.asset.json";
import photo2 from "@/assets/photo-2.jpg.asset.json";
import photo3 from "@/assets/photo-3.jpg.asset.json";
import sticker1 from "@/assets/sticker-1-transparent.png";
import sticker2 from "@/assets/sticker-2-transparent.png";
import sticker3 from "@/assets/sticker-3-transparent.png";
import sticker4 from "@/assets/sticker-4-transparent.png";
import sticker5 from "@/assets/sticker-5-transparent.png";

/** Photos — to swap one, upload a new image and replace the import above. */
export const photos = {
  one: photo1.url,
  two: photo2.url,
  three: photo3.url,
};

/** Stickers (the little cartoon cut-outs). */
export const stickers = {
  one: sticker1,
  two: sticker2,
  three: sticker3,
  four: sticker4,
  five: sticker5,
};

/** ---------- OPENING SCREEN ---------- */
export const opening = {
  forWhom: "for Ria.",
  subtitle: "something I made for you.",
  envelopeInitials: "R ♡ D",
  hint: "tap to open",
};

/** ---------- THE LITTLE THINGS (polaroid wall) ---------- */
export const littleThings = {
  heading: "the little things",
  note: "not the big occasions. just the ordinary days.",
  items: [
    { src: photos.three, caption: "how did we even end up here" },
    { src: photos.one, caption: "this was such a stupid day 😭" },
    { src: photos.two, caption: "one of my favourite memories." },
  ],
};

/** ---------- PHOTO MOMENTS (full-screen, one at a time) ---------- */
export const photoMoments = [
  { src: photos.three, caption: "same people. same nonsense. different couch." },
];

/** ---------- THINGS I DON'T SAY ENOUGH ---------- */
export const thingsINeverSay = {
  heading: "things I probably don't say enough.",
  lines: [
    "thank you for being there.",
    "thank you for calling me out when I need it.",
    "thank you for making things lighter.",
    "I'm really glad life gave me a sister I didn't technically grow up with.",
  ],
};

/** ---------- THE LETTER (the emotional centre) ---------- */
export const letter = {
  salutation: "Ria didi,",
  /** Each string is one paragraph. Add or remove freely. */
  paragraphs: [
    "I'm not great at saying things out loud, so I built you a page instead. Very on brand for me, I know.",
    "Here's the thing I keep thinking about: we didn't grow up in the same house, we didn't have to be anything to each other, and somehow you still turned into family. That feels like a small unfair piece of luck I got and didn't earn.",
    "You're the person who tells me when I'm being ridiculous, and then stays anyway. You make the boring parts of a day feel like something worth remembering. Half the photos I like most of myself are ones where I'm laughing at something you said.",
    "I hope this year is kind to you. I hope you get the version of your life you keep quietly working towards, and I hope you're less hard on yourself while you get there.",
    "Happy birthday, didi. Thanks for being mine to annoy.",
  ],
  signature: "— Dhruv",
};

/** ---------- HER LETTER TO ME ---------- */
export const herLetter = {
  heading: "you once wrote me this.",
  note: "still kept. still read sometimes.",
  /**
   * Add the scan/photo of her handwritten letter here.
   * Upload the image, then set: src: herLetterAsset.url
   * While this is null, a gentle placeholder frame is shown instead.
   */
  src: null as string | null,
};

/** ---------- FINAL SCENE ---------- */
export const finale = {
  photo: photos.one,
  title: "Happy Birthday, Ria.",
  line: "I'm really glad you're my sister.",
  signature: "— Dhruv",
  ps: "keep being stubborn about the life you want.",
};

/** ---------- MUSIC (optional) ---------- */
export const music = {
  /** Drop in an audio URL here to enable the little player. e.g. "/music/song.mp3" */
  src: null as string | null,
  label: "play something",
};
