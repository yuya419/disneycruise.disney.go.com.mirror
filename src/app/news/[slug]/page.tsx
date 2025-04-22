/**
 * @name page.tsx
 * @description 特集詳細を表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";

// メタデータ
export const metadata: Metadata = metaArray["news-detail"];

export default function Page() {

    return (
        <main className="single">
        </main>
    );
}