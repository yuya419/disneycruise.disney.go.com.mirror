/**
 * @file layout.tsx
 * @description 共通レイアウト
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import Link from "next/link";
import { NotoSansJP, PhilosopherFont } from "@/libs/font";
import "@/styles/style.scss";

// メタデータ
export const metadata: Metadata = metaArray["index"];

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.variable} ${PhilosopherFont.variable}`} >
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/" lang="en">TOP</Link>
              </li>
              <li>
                <Link href="/themed-areas" lang="en">Themed Areas</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
