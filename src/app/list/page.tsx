/**
 * @name page.tsx
 * @description コース一覧を表示するページ
 */
"use client";
import { Archive } from "@/layouts/course/course";

export default function Page() {
    return (
        <main className="archive">
            <Archive />
        </main>
    );
}