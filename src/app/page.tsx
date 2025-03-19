/**
 * @file page.tsx
 * @description TOPページ
 */
"use client";
import { Hero, Message } from "@/layouts/top/top";

export default function Home() {

  return (
    <main className="top">
      <Hero />
      <Message />
    </main>
  );
}
