/**
 * @name page.tsx
 * @description コース詳細を表示するページ
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import { HasAsideContainer } from "@/layouts/container/container";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import { Single } from "@/layouts/course/course";
import Aside from "@/layouts/aside/aside";

const siteInfo = meta.siteInfo;

const title = "シンガポール発着　3泊クルーズ";
const description = `記事冒頭分を自動で表示`;

// メタデータ
export const metadata: Metadata = {
  title: "コース一覧" + siteInfo.pipe + title + siteInfo.pipe + siteInfo.siteName,
  description: description,
  openGraph: {
    type: "article",
    title: "コース一覧" + siteInfo.pipe + title + siteInfo.pipe + siteInfo.siteName,
    siteName: siteInfo.siteName,
    url: meta.siteInfo.url + "list/detail/",
    images: meta.siteInfo.images,
    description: description,
  },
}

export default function Page() {
  const breadcrumbItems = [
    { label: "コース一覧", href: "/list" },
    { label: "シンガポール発着　3泊クルーズ", href: "/list/detail/" },
  ];

  return (
    <div className="single">
      <div className="s-course">
        <Breadcrumb items={breadcrumbItems} />
        <HasAsideContainer>
          <main className="l-main">
            <article className="l-article">
              <Single />
            </article>
          </main>
          <Aside page="course" />
        </HasAsideContainer>
      </div>
    </div>
  );
}