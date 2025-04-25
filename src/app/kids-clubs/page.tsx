/**
 * @name page.tsx
 * @description キッズクラブを表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { KidsClubs } from "@/layouts/page/page";

// メタデータ
export const metadata: Metadata = metaArray["kids-clubs"];

export default function Page() {
    return (
        <div className="page">
            <KidsClubs />
        </div>
    );
}