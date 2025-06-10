/**
 * @name page.tsx
 * @description コンシェルジュを表示するページ
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import { Concierge } from "@/layouts/page/page";

// メタデータ
export const metadata: Metadata = meta.metaArray["concierge"];

export default function Page() {
  return (
    <div className="page">
      <Concierge />
    </div>
  );
}
