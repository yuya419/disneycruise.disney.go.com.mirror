/**
 * @name page.tsx
 * @description 7つのテーマエリアを表示するページ
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { SpaLoungesBar } from "@/layouts/page/page";

// メタデータ
export const metadata: Metadata = metaArray["spa-lounges-bar"];

export default function Page() {
  return (
    <div className="page">
      <SpaLoungesBar />
    </div>
  );
}
