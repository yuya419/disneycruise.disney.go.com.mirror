/**
 * @name page.tsx
 * @description 特集一覧を表示するページ
 */
import type { Metadata } from "next";
import { Suspense } from "react";
import metaArray from "@/libs/meta";
import Archive from "@/layouts/post/archive";

// メタデータ
export const metadata: Metadata = metaArray["feature"];

export default function Page() {
    return (
        <main className="archive">
            <Suspense fallback={<div>Loading...</div>}>
                <Archive
                    type="feature"
                    breadcrumb={[
                        { label: "特集記事", href: "/feature/" },
                    ]}
                    title="特集記事"
                    en="Special Feature"
                />
            </Suspense>
        </main>
    );
}