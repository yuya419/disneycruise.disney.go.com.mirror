/**
 * @name layout.tsx
 * @description 共通レイアウト
 */
"use client";
import { NotoSansJP, PhilosopherFont } from "@/libs/font";
import "@/assets/styles/style.scss";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/utils/header";
import Footer from "@/components/utils/footer";
import DrawerNav from "@/components/modules/nav/drawerNav";
import RequestButton from "@/components/modules/buttons/requestButton";
import { Bg } from "@/components/modules/common/common";
import { Symbol } from "@/libs/symbol";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname();
  const [isColor, setIsColor] = useState<"white" | "blue" | null>(null);

  useEffect(() => {
    if (pathname === "/") {
      setIsColor("white");
    } else {
      setIsColor("blue");
    }
  }, [pathname, isColor]);

  return (
    <html lang="ja">
      <body className={`${NotoSansJP.variable} ${PhilosopherFont.variable}`} data-head-color={isColor}>
        <Header />
        {children}
        <Footer />
        <DrawerNav />
        <RequestButton />
        <Bg state={true} />
        <Symbol />
        <div className="overlay"></div>
      </body>
    </html>
  );
}
