/**
 * @name page.tsx
 * @description コース一覧を表示するページ
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import { Archive } from "@/layouts/course/course";

// メタデータ
export const metadata: Metadata = meta.metaArray["list"];

export default function Page() {
  return (
    <main className="archive">
      <Archive />
    </main>
  );
}
