/**
 * @name footer.tsx
 * @description 共通フッター
 */
"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import helper from "@/libs/helper";
import CvNav from "@/components/modules/nav/cvNav";
import Sitemap from "@/components/modules/nav/sitemap";
import SubNav from "@/components/modules/nav/subNav";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRefContext } from "@/hooks/useRefContext";
import { useHandleLinkClick } from "@/hooks/usePageTransition";
import "./styles/footer.scss";

export default function Footer() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { getImagePath } = helper();
  const handleLinkClick = useHandleLinkClick();

  gsap.registerPlugin(ScrollTrigger);

  const { colorBlue, colorWhite } = useRefContext();

  const scrollAnimation = () => {
    const trigger = triggerRef.current;
    const footer = footerRef.current;
    if (!trigger || !footer) return;

    const ctx = gsap.context(() => {
      gsap.to(footer, {
        y: `0%`,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top bottom",
          end: "90% bottom",
          scrub: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            document.body.classList.add("isButtonHidden");
            colorBlue.current?.classList.add("isShow");
            colorWhite.current?.classList.add("isShow");
          },
          onLeaveBack: () => {
            document.body.classList.remove("isButtonHidden");
            colorBlue.current?.classList.remove("isShow");
            colorWhite.current?.classList.remove("isShow");
          },
        },
      });
    }, [trigger, footer]);

    return () => ctx.revert();
  };

  useEffect(() => {
    scrollAnimation();

    // 高さ変動時にScrollTrigger.refresh()を呼ぶ
    let refreshTimeout: NodeJS.Timeout | null = null;
    let lastBodyHeight = document.body.offsetHeight;

    const refresh = () => {
      if (refreshTimeout) clearTimeout(refreshTimeout);
      refreshTimeout = setTimeout(() => {
        const newBodyHeight = document.body.offsetHeight;
        if (newBodyHeight !== lastBodyHeight) {
          lastBodyHeight = newBodyHeight;
          ScrollTrigger.refresh();
        }
      }, 100);
    };

    let observer: MutationObserver | null = null;
    const isPC = window.matchMedia("(min-width: 1025px)").matches;
    if (isPC) {
      window.addEventListener("resize", refresh);
      observer = new MutationObserver(refresh);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    return () => {
      gsap.killTweensOf(triggerRef.current);
      gsap.killTweensOf(footerRef.current);
      footerRef.current?.removeAttribute("style");
      document.body.classList.remove("isButtonHidden");
      colorBlue.current?.classList.remove("isShow");
      colorWhite.current?.classList.remove("isShow");
      if (isPC) {
        window.removeEventListener("resize", refresh);
        observer?.disconnect();
      }
      if (refreshTimeout) clearTimeout(refreshTimeout);
    };
  }, [pathname]);

  return (
    <div className="footer-wrap">
      <div className="space" ref={triggerRef}></div>
      <footer className="footer" ref={footerRef}>
        <div className="footer-inner">
          <CvNav />
          <Sitemap />
          <div className="guideline">
            <div className="guideline__miki-tourist">
              <p className="logo">
                <Image
                  src={getImagePath("common/logo-miki-tourist.png")}
                  alt="株式会社ミキ・ツーリスト"
                  width={182}
                  height={18}
                  priority
                />
              </p>
              <p>
                ディズニークルーズライン日本正規販売代理店　株式会社ミキ・ツーリスト
                <br />
                1967年創立。1998年より様々なクルーズ商品の取り扱いをしています。
                <a
                  href="https://www.mikitourist.co.jp/"
                  target="_blank"
                  className="uline-r"
                >
                  <span className="line">詳しくはこちら</span>
                </a>
              </p>
            </div>
            <div className="guideline__image">
              <p className="ttl">画像に関する免責事項</p>
              <p>
                画像はディズニーのクルーズで提供される一般的な体験、エンターテインメント、会場のイメージです。
                <br />
                ディズニー・アドベンチャーでの体験、エンターテインメント、会場は変更される場合があります。
              </p>
            </div>
            <div className="accent">
              <svg className="onm is-left">
                <use href="#i-onm-01"></use>
              </svg>
              <span className="bar"></span>
              <svg className="onm is-right">
                <use href="#i-onm-01"></use>
              </svg>
            </div>
          </div>
          <div className="company">
            <p className="logo">
              <Link href="/" onClick={(e) => handleLinkClick(e, "/")}>
                <picture>
                  <source
                    srcSet={getImagePath("common/logo-sm-hrzn.svg")}
                    type="image/svg+xml"
                    media="(max-width: 1024px)"
                  />
                  <img
                    src={getImagePath("common/logo-sm.svg")}
                    alt="ディズニークルーズライン"
                    width="414"
                    height="50"
                  />
                </picture>
              </Link>
            </p>
            <SubNav />
            <p className="copyright" translate="no">
              Copyright &copy; KK Miki Tourist, All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
