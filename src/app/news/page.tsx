/**
 * @name page.tsx
 * @description 新着記事一覧を表示するページ
 */
import type { Metadata } from "next";
import { Suspense } from "react";
import metaArray from "@/libs/meta";
import Archive from "@/layouts/post/archive";
import { news } from "@/libs/array";

// メタデータ
export const metadata: Metadata = metaArray["news"];

export default function Page() {
  return (
    <main className="archive">
      <Suspense fallback={<div>Loading...</div>}>
        <Archive
          type="news"
          breadcrumb={[{ label: "お知らせ", href: "/news/" }]}
          title="お知らせ"
          en="News"
          posts={news}
        />
      </Suspense>
    </main>
  );
}
