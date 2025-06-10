/**
 * @name page.tsx
 * @description 7つのテーマエリアを表示するページ
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import { ThemedAreas } from "@/layouts/page/page";

// メタデータ
export const metadata: Metadata = meta.metaArray["themed-areas"];

export default function Page() {
  return (
    <div className="page">
      <ThemedAreas />
    </div>
  );
}
