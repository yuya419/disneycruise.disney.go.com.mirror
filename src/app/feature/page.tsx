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
        link: "post01",
        title: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
            "cat02": { name: "カテゴリー2", }
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature.jpg",
            alt: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
            w: 115,
            h: 161,
        }
    },
    "post02": {
        link: "post02",
        title: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy01.jpg",
            alt: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
            w: 115,
            h: 161,
        }
    },
    "post03": {
        link: "post03",
        title: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy02.jpg",
            alt: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
            w: 115,
            h: 161,
        }
    },
    "post04": {
        link: "post04",
        title: "サイトをリニューアルしました。",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
        },
    },
    "post05": {
        link: "post05",
        title: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
            "cat02": { name: "カテゴリー2", }
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature.jpg",
            alt: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
            w: 115,
            h: 161,
        }
    },
    "post06": {
        link: "post06",
        title: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy01.jpg",
            alt: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
            w: 115,
            h: 161,
        }
    },
    "post07": {
        link: "post07",
        title: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy02.jpg",
            alt: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
            w: 115,
            h: 161,
        }
    },
    "post08": {
        link: "post08",
        title: "サイトをリニューアルしました。",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
        },
    },
    "post09": {
        link: "post09",
        title: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
            "cat02": { name: "カテゴリー2", }
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature.jpg",
            alt: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
            w: 115,
            h: 161,
        }
    },
    "post10": {
        link: "post10",
        title: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy01.jpg",
            alt: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
            w: 115,
            h: 161,
        }
    },
    "post11": {
        link: "post11",
        title: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
        },
        thumbnail: {
            src: "/ships/adventure/common/dummy/feature-list-dummy02.jpg",
            alt: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
            w: 115,
            h: 161,
        }
    },
    "post12": {
        link: "post12",
        title: "サイトをリニューアルしました。",
        date: "2025.00.00",
        cat: {
            "cat01": { name: "カテゴリー1", },
        },
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