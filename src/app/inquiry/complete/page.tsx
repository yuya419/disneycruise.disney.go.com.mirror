/**
 * @name page.tsx
 * @description お問い合わせ - 送信完了
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import { Page as Inquiry } from "@/layouts/form/page";

// メタデータ
export const metadata: Metadata = meta.metaArray["inquiry"];

export default function Page() {
  return (
    <main className="page">
      <Inquiry
        slug="inquiry"
        title={{
          ja: "お問い合わせ",
          en: "Contact",
        }}
        step="complete"
      />
    </main>
  );
}
