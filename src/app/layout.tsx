/**
 * @name layout.tsx
 * @description 共通レイアウト
 */
import { NotoSansJP, PhilosopherFont } from "@/libs/font";
import "@/assets/styles/style.scss";

import Header from "@/components/utils/header";
import Footer from "@/components/utils/footer";
import DrawerNav from "@/components/modules/nav/drawerNav";
import RequestButton from "@/components/modules/buttons/requestButton";
import { Symbol } from "@/libs/symbol";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.variable} ${PhilosopherFont.variable}`} >
        <Header />
        {children}
        <Footer />
        <DrawerNav />
        <RequestButton />
        <Symbol />
        <div className="overlay"></div>
      </body>
    </html>
  );
}
