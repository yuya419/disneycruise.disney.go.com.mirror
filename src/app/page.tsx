/**
 * @file page.tsx
 * @description TOPページ
 */
"use client";
import {
  Hero,
  Message,
  Feature,
  ThemedAreas,
  Entertainment,
  Dining,
  Accommodations
} from "@/layouts/top/top";
import { Bg } from "@/components/modules/common/common";

export default function Home() {

  return (
    <main className="top">
      <Hero />
      <Message />
      <Feature />
      <ThemedAreas />
      <Entertainment />
      <Dining />
      <Accommodations />
      <Bg state={false} />
    </main>
  );
}
