/**
 * @name page.tsx
 * @description よくあるご質問ページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { Page as Qa } from "@/layouts/qa/page";

// メタデータ
export const metadata: Metadata = metaArray["qa"];

export default function Page() {
    return (
        <div className="page">
            <Qa />
        </div>
    );
}