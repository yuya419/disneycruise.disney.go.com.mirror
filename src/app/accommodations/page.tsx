/**
 * @name page.tsx
 * @description 客室案内を表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { Accommodations } from "@/layouts/page/page";

// メタデータ
export const metadata: Metadata = metaArray["accommodations"];

export default function Page() {
    return (
        <div className="page">
            <Accommodations />
        </div>
    );
}