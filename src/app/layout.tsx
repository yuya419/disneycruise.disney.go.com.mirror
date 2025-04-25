/**
 * @name layout.tsx
 * @description 共通レイアウト
 */
"use client";
import { NotoSansJP, PhilosopherFont } from "@/libs/font";
import "@/assets/styles/style.scss";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { RefProvider } from "@/hooks/useRefContext";
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
    const whitePaths = ["/", "/themed-areas/", "/entertainment/", "/dining/", "/accommodations/", "/kids-clubs/", "/spa-lounges-bar/", "/concierge/"];
    setIsColor(whitePaths.includes(pathname) ? "white" : "blue");
  }, [pathname, isColor]);

  return (
    <html lang="ja">
      <body className={`${NotoSansJP.variable} ${PhilosopherFont.variable}`} data-head-color={isColor}>
        <RefProvider>
          <Header />
          {children}
          <Footer />
          <DrawerNav />
          {pathname !== "/book/" && pathname !== "/book/confirm/" && pathname !== "/book/complete/" && (
            <RequestButton />
          )}
          <Bg />
          <Symbol />
          <div className="overlay"></div>
        </RefProvider>
      </body>
    </html>
  );
}
