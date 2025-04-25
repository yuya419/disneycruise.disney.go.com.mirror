/**
 * @name page.tsx
 * @description ダイニングを表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { Dining } from "@/layouts/page/page";

// メタデータ
export const metadata: Metadata = metaArray["dining"];

export default function Page() {
    return (
        <div className="page">
            <Dining />
        </div>
    );
}