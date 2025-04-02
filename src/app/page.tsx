/**
 * @file page.tsx
 * @description TOPページ
 */
"use client";
import { Hero, Message, Feature } from "@/layouts/top/top";
import { Bg } from "@/components/modules/common/common";

export default function Home() {

  return (
    <main className="top">
      <Hero />
      <Message />
      <Feature />
      <Bg state={false} />
    </main>
  );
}
