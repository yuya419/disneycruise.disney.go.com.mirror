/**
 * @name page.tsx
 * @description 予約申し込み
 */
import type { Metadata } from "next";
import meta from "@/libs/meta";
import { Page as Book } from "@/layouts/form/page";

// メタデータ
export const metadata: Metadata = meta.metaArray["book"];

export default function Page() {
  return (
    <main className="page">
      <Book
        slug="book"
        title={{
          ja: "予約申し込み",
          en: "Reservation",
        }}
        step="input"
      />
    </main>
  );
}
