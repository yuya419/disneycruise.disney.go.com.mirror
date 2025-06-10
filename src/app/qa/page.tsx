/**
 * @name page.tsx
 * @description よくあるご質問ページ
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import { Qa } from "@/layouts/page/page";

// メタデータ
export const metadata: Metadata = meta.metaArray["qa"];

export default function Page() {
  return (
    <div className="page">
      <Qa />
    </div>
  );
}
