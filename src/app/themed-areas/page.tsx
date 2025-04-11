/**
 * @name page.tsx
 * @description 7つのテーマエリアを表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";

// メタデータ
export const metadata: Metadata = metaArray["themed-areas"];

export default function Page() {
    return (
        <main>
            <article>
                <h1>7つのテーマエリア</h1>
            </article>
        </main>
    );
}