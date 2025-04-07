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
import DrawerButton from "@/components/modules/buttons/drawerButton";
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
        <Bg state={false} />
        <DrawerButton />
        <RequestButton />
        <Symbol />
      </body>
    </html>
  );
}
