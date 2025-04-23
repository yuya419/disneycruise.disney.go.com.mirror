/**
 * @name page.tsx
 * @description 特集詳細を表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import Content from "@/layouts/post/content2";

// メタデータ
export const metadata: Metadata = metaArray["news-detail"];

const post = {
    link: "post01",
    title: "サイトをリニューアルしました。",
    date: "2025.00.00",
    cat: {
        "cat01": { name: "カテゴリー", },
    },
};

const prevnext = {
    prev: "",
    next: "post02"
};

export default function Page() {

    return (
        <main className="single">
            <Content type="news" post={post} prevnext={prevnext} />
        </main>
    );
}