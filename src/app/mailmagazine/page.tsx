/**
 * @name page.tsx
 * @description メールマガジン登録
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { Page as Mailmagazine } from "@/layouts/form/page";

// メタデータ
export const metadata: Metadata = metaArray["mailmagazine"];

export default function Page() {
  return (
    <main className="page">
      <Mailmagazine
        slug="mailmagazine"
        title={{
          ja: "メールマガジン登録",
          en: "Mail Magazine",
        }}
        step="input"
      />
    </main>
  );
}
