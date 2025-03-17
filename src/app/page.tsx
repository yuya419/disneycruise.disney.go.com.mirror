/**
 * @file page.tsx
 * @description TOPページ
 */
"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Link href="/themed-areas">
            客船紹介・7つのテーマエリアを見る
          </Link>
        </div>
      </main>
    </div>
  );
}
