/**
 * @name page.tsx
 * @description 特集詳細を表示するページ
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import Content from "@/layouts/post/content2";

const siteInfo = meta.siteInfo;

// 記事のメタデータ
const post = {
  link: "detail",
  title: "サイトをリニューアルしました。",
  date: "2025.00.00",
  cat: {
    cat01: { name: "カテゴリー" },
  },
  description: `いつもご利用いただき、誠にありがとうございます。

本日、ホームページをリニューアルしましたので、お知らせいたします。

今回のリニューアルでは、【○○○○○】を変更し、より見やすいサイトの向上を図りました。

引き続きサービス向上のため、コンテンツの充実を図り、皆様のお役に立てるホームページ運営を目指してまいりますので、今後とも何卒お願い申し上げます。`,
};

// 前後の記事を設定
const prevnext = {
  prev: "detail",
  next: "",
};

// タイトル
const title = post.title;

// ディスクリプション
const description = post.description.replace(/\n/g, '').length > 120
  ? post.description.replace(/\n/g, '').slice(0, 120) + '...'
  : post.description.replace(/\n/g, '');

// メタデータ
export const metadata: Metadata = {
  title: "お知らせ一覧" + siteInfo.pipe + title+ siteInfo.pipe + siteInfo.siteName,
  description: description,
  openGraph: {
    type: "article",
    title: "お知らせ一覧" + siteInfo.pipe + title+ siteInfo.pipe + siteInfo.siteName,
    siteName: siteInfo.siteName,
    url: meta.siteInfo.url + "news/detail/",
    images: meta.siteInfo.images,
    description: description,
  },
}

export default function Page() {
  return (
    <main className="single">
      <Content type="news" post={post} prevnext={prevnext} />
    </main>
  );
}
