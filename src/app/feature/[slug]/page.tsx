/**
 * @name page.tsx
 * @description 特集詳細を表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import Content from "@/layouts/post/content";

// メタデータ
export const metadata: Metadata = metaArray["feature-detail"];

const post = {
    link: "post01",
    title: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
    date: "2025.00.00",
    cat: {
        "cat01": { name: "カテゴリー1", },
        "cat02": { name: "カテゴリー2", }
    },
};

const prevnext = {
    prev: "",
    next: "detail"
};

export default function Page() {
    return (
        <main className="single">
            <Content type="feature" post={post} prevnext={prevnext} />
        </main>
    );
}