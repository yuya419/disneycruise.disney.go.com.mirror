/**
 * @name page.tsx
 * @description 特集詳細を表示するページ
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import Content from "@/layouts/post/content";

const siteInfo = meta.siteInfo;

// 記事のメタデータ
const post = {
  link: "detail",
  title:
    "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
  date: "2025.00.00",
  cat: {
    cat01: { name: "カテゴリー1" },
    cat02: { name: "カテゴリー2" },
  },
  description: `壮大なスケールの魅惑的なクルージングバケーションを体験してみませんか。

そこは、楽しさにあふれ、くつろぎの時間で満たされた空間。
ワールドクラスのエンターテインメント、テーマ別のダイニング体験、
卓越したゲストサービスを提供するディズニー・アドベンチャーは、旅の道のりでありながら目的地でもあります。

シンガポールから出航するこの客船では、3泊〜5泊の航海をご用意しています。
洋上で魔法のような日々をお過ごしください。`
};

// 前後の記事を設定
const prevnext = {
  prev: "",
  next: "detail",
};

// タイトル
const title = post.title;

// ディスクリプション
const description = post.description.replace(/\n/g, '').length > 120
  ? post.description.replace(/\n/g, '').slice(0, 120) + '...'
  : post.description.replace(/\n/g, '');

// メタデータ
export const metadata: Metadata = {
  title: "特集記事一覧" + siteInfo.pipe + title + siteInfo.pipe + siteInfo.siteName,
  description: description,
  openGraph: {
    type: "article",
    title: "特集記事一覧" + siteInfo.pipe + title + siteInfo.pipe + siteInfo.siteName,
    siteName: siteInfo.siteName,
    url: meta.siteInfo.url + "news/detail/",
    images: meta.siteInfo.images,
    description: description,
  },
}

export default function Page() {
  return (
    <main className="single">
      <Content type="feature" post={post} prevnext={prevnext} />
    </main>
  );
}
