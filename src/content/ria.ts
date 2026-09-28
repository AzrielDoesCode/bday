/**
 * ============================================================
 *  EDIT EVERYTHING HERE.
 *  This is the single place to change all text on the site.
 *  Photos + stickers live in src/assets (see below).
 * ============================================================
 */

import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import sticker1 from "@/assets/sticker-1-transparent.png";
import sticker2 from "@/assets/sticker-2-transparent.png";
import sticker3 from "@/assets/sticker-3-transparent.png";
import sticker4 from "@/assets/sticker-4-transparent.png";
import sticker5 from "@/assets/sticker-5-transparent.png";

/** Photos — to swap one, upload a new image and replace the import above. */
export const photos = {
  one: photo1,
  two: photo2,
  three: photo3,
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
  heading: "okay, it's your birthday",
  note: "so I suppose I have to say some nice things about you.",
  items: [
    { src: photos.three, caption: "how did “just hanging out” turn into this" },
    { src: photos.one, caption: "one of my favourite versions of us." },
    { src: photos.two, caption: "somewhere along the way, this became family." },
  ],
};

/** ---------- PHOTO MOMENTS (full-screen, one at a time) ---------- */
export const photoMoments = [
  {
    src: photos.three,
    caption: "same people. same nonsense. all through the years.",
  },
];

/** ---------- THINGS I DON'T SAY ENOUGH ---------- */
export const thingsINeverSay = {
  heading: "things I probably don't say enough.",
  lines: [
    "thank you for being there.",
    "thank you for calling me out when I need it.",
    "thank you for making things lighter.",
    "thank you for being my stubborn and steady support system when I really need it.",
  ],
};

/** ---------- THE LETTER (the emotional centre) ---------- */
export const letter = {
  salutation: "Ria didi,",
  /** Each string is one paragraph. Add or remove freely. */
  paragraphs: [
    "I guess I was really running out of fun ideas to give you a letter, so I built you a page instead. Very on brand for me, I know 😋.",
    "I might be running out of words to express the same things, but I’d still say them every year, without a doubt.",
    "You’re the person who tells me when I’m being ridiculous, pushes me when I need it, and somehow, through all of it, still stays. You make even the most ordinary days feel like something I’d want to remember. Somehow, some of my favourite photos of myself are the ones where I’m laughing because of something you said.",
    "I hope this year is kind to you. I hope you find your way to the life you keep quietly working towards, even on the days you doubt yourself. And more than anything, I hope you learn to be a little less hard on yourself while you get there.",
    "And through all of it, you’ll always have your Chhota Bhaiya right here … just a call away, and barely 10 minutes away when you need me. ",
    "For the overthinking, the rants, the ridiculous ideas, or just a conversation that goes nowhere, we can always sit down with a nice cup of matcha, chicken momos or way too many garlic fries than we can eat, and figure it all out.",
    "You deserve the things you’re working so hard for.",
    "Happy birthday, didi. Thanks for being mine to annoy.",
  ],
  signature: "— Dhruv",
};

/** ---------- HER LETTER TO ME ---------- */
export const herLetter = {
  heading: "you once wrote me this.",
  note: "still kept. still read sometimes.",
  text: "“They say, ‘Blood runs thicker than water.’ This is from the Bible. But they forget how the entire saying goes. It says: ‘Blood of the covenant runs thicker than the water of the womb.”",
  /**
   * If an image scan is provided here, it shows the photo.
   * If left null, it renders the text above in the handwritten font on a paper sheet.
   */
  src: null as string | null,
};

/** ---------- FINAL SCENE ---------- */
export const finale = {
  photo: photos.one,
  title: "Happy Birthday, Ria.",
  line: "I'm really glad to have you as my sister.",
  signature: "— Dhruv",
  ps: "keep being stubborn about the life you want.",
};

/** ---------- MUSIC (optional) ---------- */
export const music = {
  /** Drop in an audio URL here to enable the little player. e.g. "/music/song.mp3" */
  src: null as string | null,
  label: "play something",
};
