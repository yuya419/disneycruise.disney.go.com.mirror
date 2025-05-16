/**
 * @name page.tsx
 * @description TOPページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import {
  Hero,
  Message,
  Feature,
  ThemedAreas,
  Entertainment,
  Dining,
  Accommodations,
  KidsClubs,
  Adults,
  Concierge,
} from "@/layouts/top/top";

// styles
import "@/components/modules/slider/styles/slider.scss";

// メタデータ
export const metadata: Metadata = metaArray["index"];

export default function Home() {
  return (
    <>
      <main className="top">
        <Hero />
        <Message />
        <Feature />
        <ThemedAreas />
        <Entertainment />
        <Dining />
        <Accommodations />
        <KidsClubs />
        <Adults />
        <Concierge />
      </main>
    </>
  );
}
