import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useIsTooSmall, useScrapbookParallax } from "@/hooks/use-reveal";
import { LandscapeGate } from "@/components/scrapbook/LandscapeGate";
import { Envelope } from "@/components/scrapbook/Envelope";
import { MusicToggle } from "@/components/scrapbook/MusicToggle";
import { Lightbox } from "@/components/scrapbook/Lightbox";
import {
  LittleThings,
  PhotoMoments,
  ThingsINeverSay,
  TheLetter,
  HerLetter,
  Finale,
} from "@/components/scrapbook/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "for Ria ♡" },
      {
        name: "description",
        content: "A little handmade scrapbook and birthday letter for Ria, from Dhruv.",
      },
      { property: "og:title", content: "for Ria ♡" },
      {
        property: "og:description",
        content: "A little handmade scrapbook and birthday letter for Ria, from Dhruv.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const tooSmall = useIsTooSmall();
  const scrapbookRef = useScrapbookParallax<HTMLDivElement>();
  const [entered, setEntered] = useState(false);
  const [zoom, setZoom] = useState<{ src: string; caption: string } | null>(null);

  if (tooSmall) return <LandscapeGate />;

  return (
    <div ref={scrapbookRef} className="paper-grain scrapbook-scene relative min-h-screen overflow-hidden">
      {!entered && <Envelope onOpen={() => setEntered(true)} />}

      <main
        className={`transition-opacity duration-1000 ${entered ? "opacity-100" : "opacity-0"}`}
      >
        <LittleThings onZoom={(src, caption) => setZoom({ src, caption })} />
        <PhotoMoments />
        <ThingsINeverSay />
        <TheLetter />
        <HerLetter />
        <Finale />
      </main>

      <MusicToggle />
      <Lightbox src={zoom?.src ?? null} caption={zoom?.caption} onClose={() => setZoom(null)} />
    </div>
  );
}
