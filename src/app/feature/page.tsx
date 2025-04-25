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

const posts = {
    "post01": {
        link: "detail",
        title: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature.jpg",
            alt: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
            w: 115,
            h: 161,
        }
    },
    "post02": {
        link: "detail",
        title: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy02.jpg",
            alt: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
            w: 115,
            h: 161,
        }
    },
    "post03": {
        link: "detail",
        title: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy01.jpg",
            alt: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
            w: 115,
            h: 161,
        }
    },
    "post04": {
        link: "detail",
        title: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature.jpg",
            alt: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
            w: 115,
            h: 161,
        }
    },
    "post05": {
        link: "detail",
        title: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy02.jpg",
            alt: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
            w: 115,
            h: 161,
        }
    },
    "post06": {
        link: "detail",
        title: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy01.jpg",
            alt: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
            w: 115,
            h: 161,
        }
    },
    "post07": {
        link: "detail",
        title: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature.jpg",
            alt: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
            w: 115,
            h: 161,
        }
    },
    "post08": {
        link: "detail",
        title: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy02.jpg",
            alt: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
            w: 115,
            h: 161,
        }
    },
    "post09": {
        link: "detail",
        title: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy01.jpg",
            alt: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
            w: 115,
            h: 161,
        }
    },
    "post10": {
        link: "detail",
        title: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature.jpg",
            alt: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
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
                    type="feature"
                    breadcrumb={[
                        { label: "特集記事", href: "/feature/" },
                    ]}
                    title="特集記事"
                    en="Special Feature"
                    posts={posts}
                />
            </Suspense>
        </main>
    );
}