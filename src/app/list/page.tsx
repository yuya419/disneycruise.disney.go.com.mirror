/**
 * @name page.tsx
 * @description コース一覧を表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { Archive } from "@/layouts/course/course";

// メタデータ
export const metadata: Metadata = metaArray["list"];

export default function Page() {
    return (
        <main className="archive">
            <Archive />
        </main>
    );
}