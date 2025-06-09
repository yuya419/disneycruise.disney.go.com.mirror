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
import { Symbol } from "@/libs/symbol";
import { useHeadColor } from "@/hooks/useHead";
import { useRefContext } from "@/hooks/useRefContext";
import { Loader } from "@/components/modules/loader/loader";
import { Splash } from "@/components/modules/loader/splash";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [isColor, setIsColor] = useState<"white" | "blue" | null>(null);

  useEffect(() => {
    document.body.dataset.headColor = isColor ?? "white";
    document.body.classList.remove("isButtonHidden", "videoShow");
  }, [pathname, isColor]);

  return (
    <html lang="ja" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
      <head>
        {/* GTM script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PNSBK2Z5');`,
          }}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <body className={`${NotoSansJP.variable} ${PhilosopherFont.variable}`} data-head-color={isColor}>
        {/* GTM noscript */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PNSBK2Z5" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <RefProvider>
          <Layout
            children={children}
            pathname={pathname}
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
function Layout({ children, pathname, setIsColor, }: {
  children: React.ReactNode;
  pathname: string;
  setIsColor: (color: "white" | "blue") => void;
}) {
  const { overlay, loader } = useRefContext() as {
    overlay: React.RefObject<HTMLDivElement>;
    loader: React.RefObject<HTMLDivElement>;
  };

  useHeadColor(setIsColor);

  useEffect(() => {
    // ページ遷移後にvideo.videoがあれば再生
    setTimeout(() => {
      const videos = Array.from(document.querySelectorAll("video.video")) as HTMLVideoElement[];
      videos.forEach((video) => {
        video.play().catch(() => { });
      });
      loader.current?.classList.add("isOut");
      setTimeout(() => {
        loader.current?.classList.remove("isIn", "isOut");
      }, 1000);
    }, 100);
  }, [pathname]);

  return (
    <>
      <Splash />
      <Header />
      {children}
      <Footer />
      <DrawerNav />
      {pathname !== "/book/" &&
        pathname !== "/book/confirm/" &&
        pathname !== "/book/complete/" && <RequestButton />}
      <Symbol />
      <div className="overlay" ref={overlay}></div>
      <Loader />
    </>
  );
}
