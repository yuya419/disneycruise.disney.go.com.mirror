/**
 * @name page.tsx
 * @description エンターテイメントを表示するページ
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import { Entertainment } from "@/layouts/page/page";

// メタデータ
export const metadata: Metadata = meta.metaArray["entertainment"];

export default function Page() {
  return (
    <div className="page">
      <Entertainment />
    </div>
  );
}
