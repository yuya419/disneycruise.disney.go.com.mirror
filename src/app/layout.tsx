/**
 * @file layout.tsx
 * @description 共通レイアウト
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import { NotoSansJP, PhilosopherFont } from "@/libs/font";
import "@/assets/styles/style.scss";

import Header from "@/components/utils/header";
import Footer from "@/components/utils/footer";
import DrawerNav from "@/components/modules/nav/drawerNav";
import RequestButton from "@/components/modules/buttons/requestButton";
import { Bg } from "@/components/modules/common/common";
import { Symbol } from "@/libs/symbol";

// メタデータ
export const metadata: Metadata = metaArray["index"];

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.variable} ${PhilosopherFont.variable}`} >
        <Header />
        {children}
        <Footer />
        <Bg state={true} />
        <DrawerNav />
        <RequestButton />
        <Symbol />
      </body>
    </html>
  );
}
