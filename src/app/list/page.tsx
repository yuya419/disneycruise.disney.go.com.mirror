/**
 * @name page.tsx
 * @description コース一覧を表示するページ
 */
"use client";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";

export default function Page() {
    const breadcrumbItems = [
        { label: "コース一覧", href: "/list/" },
    ];

    return (
        <main className="archive">
            <Breadcrumb items={breadcrumbItems} />
        </main>
    );
}