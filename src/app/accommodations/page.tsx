/**
 * @name page.tsx
 * @description 客室案内を表示するページ
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import { Accommodations } from "@/layouts/page/page";

// メタデータ
export const metadata: Metadata = meta.metaArray["accommodations"];

export default function Page() {
  return <Accommodations />
}
