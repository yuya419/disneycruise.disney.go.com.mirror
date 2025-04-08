/**
 * @name page.tsx
 * @description コース詳細を表示するページ
 */
"use client";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";

export default function Page() {
    const breadcrumbItems = [
        { label: "コース一覧", href: "/list" },
        { label: "コース詳細", href: "/list/detail/" },
    ];
    return (
        <main className="single">
            <Breadcrumb items={breadcrumbItems} />
            <article>
                <h1>コース詳細</h1>
            </article>
        </main>
    );
}