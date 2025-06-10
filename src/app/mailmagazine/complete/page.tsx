/**
 * @name page.tsx
 * @description メールマガジン登録 - 送信完了
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import { Page as Mailmagazine } from "@/layouts/form/page";

// メタデータ
export const metadata: Metadata = meta.metaArray["mailmagazine"];

export default function Page() {
  return (
    <main className="page">
      <Mailmagazine
        slug="mailmagazine"
        title={{
          ja: "メールマガジン登録",
          en: "Mail Magazine",
        }}
        step="complete"
      />
    </main>
  );
}
