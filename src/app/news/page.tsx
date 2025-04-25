/**
 * @name page.tsx
 * @description 新着記事一覧を表示するページ
 */
import type { Metadata } from "next";
import { Suspense } from "react";
import metaArray from "@/libs/meta";
import Archive from "@/layouts/post/archive";

// メタデータ
export const metadata: Metadata = metaArray["news"];

const posts = {
    "post01": {
        link: "detail",
        title: "サイトをリニューアルしました。",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
    },
    "post02": {
        link: "detail",
        title: "ディズニー・アドベンチャーに新たな体験とキャラクターが登場！",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy02.jpg",
            alt: "ディズニー・アドベンチャーに新たな体験とキャラクターが登場！",
            w: 115,
            h: 161,
        }
    },
    "post03": {
        link: "detail",
        title: "ディズニー・ルックアウト・ケイ・アット・ライトハウス・ポイントで体験できるエンターテインメント",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy01.jpg",
            alt: "ディズニー・ルックアウト・ケイ・アット・ライトハウス・ポイントで体験できるエンターテインメント",
            w: 115,
            h: 161,
        }
    },
    "post04": {
        link: "detail",
        title: "シンガポール航路へ！新造船ディズニー・アドベンチャーは7つのテーマエリアで構成",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature.jpg",
            alt: "シンガポール航路へ！新造船ディズニー・アドベンチャーは7つのテーマエリアで構成",
            w: 115,
            h: 161,
        }
    },
    "post05": {
        link: "detail",
        title: "ディズニー・アドベンチャーに新たな体験とキャラクターが登場！",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy02.jpg",
            alt: "ディズニー・アドベンチャーに新たな体験とキャラクターが登場！",
            w: 115,
            h: 161,
        }
    },
    "post06": {
        link: "detail",
        title: "ディズニー・ルックアウト・ケイ・アット・ライトハウス・ポイントで体験できるエンターテインメント",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy01.jpg",
            alt: "ディズニー・ルックアウト・ケイ・アット・ライトハウス・ポイントで体験できるエンターテインメント",
            w: 115,
            h: 161,
        }
    },
    "post07": {
        link: "detail",
        title: "シンガポール航路へ！新造船ディズニー・アドベンチャーは7つのテーマエリアで構成",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature.jpg",
            alt: "シンガポール航路へ！新造船ディズニー・アドベンチャーは7つのテーマエリアで構成",
            w: 115,
            h: 161,
        }
    },
    "post08": {
        link: "detail",
        title: "ディズニー・アドベンチャーに新たな体験とキャラクターが登場！",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy02.jpg",
            alt: "ディズニー・アドベンチャーに新たな体験とキャラクターが登場！",
            w: 115,
            h: 161,
        }
    },
    "post09": {
        link: "detail",
        title: "ディズニー・ルックアウト・ケイ・アット・ライトハウス・ポイントで体験できるエンターテインメント",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy01.jpg",
            alt: "ディズニー・ルックアウト・ケイ・アット・ライトハウス・ポイントで体験できるエンターテインメント",
            w: 115,
            h: 161,
        }
    },
    "post10": {
        link: "detail",
        title: "シンガポール航路へ！新造船ディズニー・アドベンチャーは7つのテーマエリアで構成",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature.jpg",
            alt: "シンガポール航路へ！新造船ディズニー・アドベンチャーは7つのテーマエリアで構成",
            w: 115,
            h: 161,
        }
    },
};

export default function Page() {
    return (
        <main className="archive">
            <Suspense fallback={<div>Loading...</div>}>
                <Archive
                    type="news"
                    breadcrumb={[
                        { label: "お知らせ", href: "/news/" },
                    ]}
                    title="お知らせ"
                    en="News"
                    posts={posts}
                />
            </Suspense>
        </main>
    );
}