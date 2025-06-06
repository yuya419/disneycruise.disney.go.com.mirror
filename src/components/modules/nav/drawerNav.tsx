/**
 * @name drawerNav.tsx
 * @description ドロワーナビゲーション
 */
"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import helper from "@/libs/helper";
import { AccordionType01 as Accordion } from "@/components/modules/acdn/acdn";
import CvNav from "@/components/modules/nav/cvNav";
import SubNav from "@/components/modules/nav/subNav";
import { useRefContext } from "@/hooks/useRefContext";
import { useHeaderHeight } from "@/hooks/useHead";
import { usePageTransition } from "@/hooks/usePageTransition";
import "./styles/drawerNav.scss";

interface DrawerNavProps {
  isOpenDefault?: boolean;
}

type LinkEvent = React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>;

const useDrawerNavTransition = (closeDrawer: () => void, startTransition: (to: string) => void) => {
  return (e: LinkEvent, to: string) => {
    closeDrawer();

    // TouchEventの場合はボタンや修飾キーは無視
    if ("button" in e && (
      e.ctrlKey ||
      e.shiftKey ||
      e.metaKey ||
      e.button === 1
    )) {
      return;
    }

    const target = (e.currentTarget as HTMLAnchorElement).target;
    const href = (e.currentTarget as HTMLAnchorElement).href;
    const url = new URL(href);
    const currentUrl = new URL(window.location.href);

    // target="_blank"は通常遷移
    if (target === "_blank") {
      return;
    }

    // プロトコル・ホスト・パスが同じなら（パラメータやハッシュが違っても）return
    if (
      url.protocol === currentUrl.protocol &&
      url.host === currentUrl.host &&
      url.pathname === currentUrl.pathname
    ) {
      return;
    }

    e.preventDefault();
    startTransition(to);
  };
};

export default function DrawerNav({ isOpenDefault }: DrawerNavProps) {
  const { getImagePath } = helper();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const pathName = usePathname();

  const { drawerButton } = useRefContext() as {
    drawerButton: React.RefObject<HTMLButtonElement>;
  };

  const toggleDrawer = () => setIsOpen((prev) => !prev);

  const closeDrawer = () => setIsOpen(false);

  const { startTransition } = usePageTransition();
  const handleDrawerNavTransition = useDrawerNavTransition(closeDrawer, startTransition);

  useEffect(() => {
    const video = videoRef.current;

    if (isOpen) {
      document.body.dataset.state = "navOpen";
      video?.play();
    } else {
      document.body.dataset.state = "";
      video?.pause();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.dataset.state = "";
      video?.pause();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  useHeaderHeight();

  return (
    <>
      <div className="drawerNav">
        <div className="drawerNav-scrollarea">
          <div className="drawerNav-inner">
            <div className="drawerNav-block">
              <p className="logo">
                <Link href="/" onClick={e => handleDrawerNavTransition(e, "/")}>
                  <picture>
                    <source
                      srcSet={getImagePath("common/logo-sm.svg")}
                      type="image/svg+xml"
                      media="(max-width: 1024px)"
                    />
                    <img
                      src={getImagePath("common/logo-sm-hrzn.svg")}
                      alt="ディズニークルーズライン"
                      width="330"
                      height="120"
                    />
                  </picture>
                </Link>
              </p>
              <SubNav />
            </div>
            <div className="drawerNav-block">
              <CvNav />
              <div className="mainNav">
                <nav className="nav">
                  <ul className="nav-menu">
                    <li className="menu-item">
                      <Accordion
                        label={
                          <Link
                            href="/themed-areas/"
                            className="menu-item-link"
                            onClick={e => handleDrawerNavTransition(e, "/themed-areas/")}
                          >
                            <span className="en" lang="en">
                              7 Themed Areas
                            </span>
                            <span className="jp">
                              7つのテーマエリア・客船紹介
                            </span>
                          </Link>
                        }
                        content={
                          <ul className="child-nav-menu">
                            <li className="child-menu-item">
                              <Link
                                href="/themed-areas/#area01"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/themed-areas/#area01")}
                              >
                                <span className="line">
                                  ディズニーイマジネーションガーデン
                                </span>
                              </Link>
                            </li>
                            <li className="child-menu-item">
                              <Link
                                href="/themed-areas/#area02"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/themed-areas/#area02")}
                              >
                                <span className="line">
                                  ディズニーディスカバリーリーフ
                                </span>
                              </Link>
                            </li>
                            <li className="child-menu-item">
                              <Link
                                href="/themed-areas/#area03"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/themed-areas/#area03")}
                              >
                                <span className="line">
                                  トイストーリープレイス
                                </span>
                              </Link>
                            </li>
                            <li className="child-menu-item">
                              <Link
                                href="/themed-areas/#area04"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/themed-areas/#area04")}
                              >
                                <span className="line">
                                  マーベルランディング
                                </span>
                              </Link>
                            </li>
                            <li className="child-menu-item">
                              <Link
                                href="/themed-areas/#area05"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/themed-areas/#area05")}
                              >
                                <span className="line">
                                  ウェイファインダーベイ
                                </span>
                              </Link>
                            </li>
                            <li className="child-menu-item">
                              <Link
                                href="/themed-areas/#area06"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/themed-areas/#area06")}
                              >
                                <span className="line">
                                  サンフランソウキョウ・ストリート
                                </span>
                              </Link>
                            </li>
                            <li className="child-menu-item">
                              <Link
                                href="/themed-areas/#area07"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/themed-areas/#area07")}
                              >
                                <span className="line">タウン・スクエア</span>
                              </Link>
                            </li>
                          </ul>
                        }
                        pageTo={true}
                      />
                    </li>
                    <li className="menu-item">
                      <Accordion
                        label={
                          <Link
                            href="/accommodations/"
                            className="menu-item-link"
                            onClick={e => handleDrawerNavTransition(e, "/accommodations/")}
                          >
                            <span className="en" lang="en">
                              Accommodations
                            </span>
                            <span className="jp">客室案内</span>
                          </Link>
                        }
                        content={
                          <ul className="child-nav-menu">
                            <li className="child-menu-item">
                              <Link
                                href="/accommodations/?type=room01"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/accommodations/?type=room01")}
                              >
                                <span className="line">
                                  コンシェルジュ・スイート
                                </span>
                              </Link>
                            </li>
                            <li className="child-menu-item">
                              <Link
                                href="/accommodations/?type=room02"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/accommodations/?type=room02")}
                              >
                                <span className="line">ベランダ客室</span>
                              </Link>
                            </li>
                            <li className="child-menu-item">
                              <Link
                                href="/accommodations/?type=room03"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/accommodations/?type=room03")}
                              >
                                <span className="line">
                                  オーシャンビュー客室
                                </span>
                              </Link>
                            </li>
                            <li className="child-menu-item">
                              <Link
                                href="/accommodations/?type=room04"
                                className="child-menu-item-link uline"
                                onClick={e => handleDrawerNavTransition(e, "/accommodations/?type=room04")}
                              >
                                <span className="line">内側​​​客室</span>
                              </Link>
                            </li>
                          </ul>
                        }
                        pageTo={true}
                      />
                    </li>
                    <li className="menu-item">
                      <Link
                        href="/entertainment/"
                        className="menu-item-link"
                        onClick={e => handleDrawerNavTransition(e, "/entertainment/")}
                      >
                        <span className="en" lang="en">
                          Entertainment
                        </span>
                        <span className="jp">エンターテイメント</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href="/dining/"
                        className="menu-item-link"
                        onClick={e => handleDrawerNavTransition(e, "/dining/")}
                      >
                        <span className="en" lang="en">
                          Dining
                        </span>
                        <span className="jp">ダイニング</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href="/kids-clubs/"
                        className="menu-item-link"
                        onClick={e => handleDrawerNavTransition(e, "/kids-clubs/")}
                      >
                        <span className="en" lang="en">
                          Kids Clubs
                        </span>
                        <span className="jp">キッズクラブ</span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="nav-menu">
                    <li className="menu-item">
                      <Link
                        href="/spa-lounges-bar/"
                        className="menu-item-link"
                        onClick={e => handleDrawerNavTransition(e, "/spa-lounges-bar/")}
                      >
                        <span className="en" lang="en">
                          Adults
                        </span>
                        <span className="jp">大人のための施設</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href="/concierge/"
                        className="menu-item-link"
                        onClick={e => handleDrawerNavTransition(e, "/concierge/")}
                      >
                        <span className="en" lang="en">
                          Concierge
                        </span>
                        <span className="jp">コンシェルジュルーム</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href="/page/accommodations/document/DCL-DA_Deck_Plan_V1_16_Oct.pdf"
                        target="_blank"
                        className="menu-item-link"
                      >
                        <span className="en" lang="en">
                          Deck Plan
                        </span>
                        <span className="jp">デッキプラン</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href="/news/"
                        className="menu-item-link"
                        onClick={e => handleDrawerNavTransition(e, "/news/")}
                      >
                        <span className="en" lang="en">
                          News
                        </span>
                        <span className="jp">お知らせ</span>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href="/qa/"
                        className="menu-item-link"
                        onClick={e => handleDrawerNavTransition(e, "/qa/")}
                      >
                        <span className="en" lang="en">
                          Faq
                        </span>
                        <span className="jp">よくあるご質問</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
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
        </div>
        <div className="drawerNav-bg">
          <video muted loop playsInline preload="atuo" ref={videoRef} className="video">
            <source src={getImagePath("movie/water.webm")} type="video/webm" />
            <source src={getImagePath("movie/water.mp4")} type="video/mp4" />
          </video>
        </div>
      </div>
      <button
        type="button"
        className="drawerButton"
        onClick={toggleDrawer}
        data-open={isOpen}
        ref={drawerButton}
      >
        <div className="drawerButton-inner">
          <span className="icon">
            <svg className="i-menu">
              <use xlinkHref="#i-menu" />
            </svg>
          </span>
          <span className="text" lang="en">
            MENU
          </span>
          <span className="close"></span>
        </div>
      </button>
    </>
  );
}
