/**
 * @name layout.tsx
 * @description 共通レイアウト
 */
"use client";
import { NotoSansJP, PhilosopherFont } from "@/libs/font";
import "@/assets/styles/style.scss";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { RefProvider } from "@/hooks/useRefContext";
import Header from "@/components/utils/header";
import Footer from "@/components/utils/footer";
import DrawerNav from "@/components/modules/nav/drawerNav";
import RequestButton from "@/components/modules/buttons/requestButton";
import { Bg } from "@/components/modules/common/common";
import { Symbol } from "@/libs/symbol";
import { useHeadColor } from "@/hooks/useHead";
import { useRefContext } from "@/hooks/useRefContext";
import LoadingScreen from "@/components/modules/loading/loadingScreen";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname();
  const [isColor, setIsColor] = useState<"white" | "blue" | null>(null);

  return (
    <html lang="ja">
      <body className={`${NotoSansJP.variable} ${PhilosopherFont.variable}`} data-head-color={isColor}>
        <RefProvider>
          <LoadingScreen />
          <Layout
            children={children}
            pathname={pathname}
            isColor={isColor}
            setIsColor={setIsColor}
          />
        </RefProvider>
      </body>
    </html>
  );
}
/**
 * @name Layout
 * @description 共通レイアウト
 */
function Layout({ children, pathname, isColor, setIsColor, }: {
  children: React.ReactNode;
  pathname: string;
  isColor: "white" | "blue" | null;
  setIsColor: (color: "white" | "blue") => void;
}) {

  const { overlay } = useRefContext() as {
    overlay: React.RefObject<HTMLDivElement>;
  };

  useHeadColor(setIsColor);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <DrawerNav />
      {pathname !== "/book/" && pathname !== "/book/confirm/" && pathname !== "/book/complete/" && (
        <RequestButton />
      )}
      <Bg />
      <Symbol />
      <div className="overlay" ref={overlay}></div>
    </>
  );
}
