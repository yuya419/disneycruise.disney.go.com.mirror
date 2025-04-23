/**
 * @name page.tsx
 * @description 7つのテーマエリアを表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { Page as ThemedAreas } from "@/layouts/themed-areas/page";

// メタデータ
export const metadata: Metadata = metaArray["themed-areas"];

export default function Page() {
    return (
        <div className="page">
            <ThemedAreas />
        </div>
    );
}