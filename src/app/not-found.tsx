/**
 * @name nor-found.tsx
 * @description 404 Not Found
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { NotFound } from "@/layouts/page/page";

// メタデータ
export const metadata: Metadata = metaArray["404"];

export default function Page() {
    return (
        <div className="page">
            <NotFound />
        </div>
    );
}