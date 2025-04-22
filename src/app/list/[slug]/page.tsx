/**
 * @name page.tsx
 * @description コース詳細を表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { HasAsideContainer } from "@/layouts/common/container";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import { Single } from "@/layouts/course/course";
import Aside from "@/layouts/aside/aside";

// メタデータ
export const metadata: Metadata = metaArray["detail"];

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