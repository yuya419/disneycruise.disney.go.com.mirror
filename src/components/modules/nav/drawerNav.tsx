/**
 * @name drawerNav.tsx
 * @description ドロワーナビゲーション
 */
"use client";
import Link from "next/link";
import helper from "@/libs/helper";
import { AccordionType01 as Accordion } from "@/components/modules/acdn/acdn";
import CvNav from "@/components/modules/nav/cvNav";
import SubNav from "@/components/modules/nav/subNav";
import DrawerButton from "@/components/modules/buttons/drawerButton";
import "./styles/drawerNav.scss";

interface DrawerNavProps {
    isOpenDefault?: boolean;
}

export default function DrawerNav({ isOpenDefault }: DrawerNavProps) {
    const { getImagePath } = helper();

    return (
        <>
            <div className="drawerNav">
                <div className="drawerNav-inner">
                    <p className="logo">
                        <Link href="/">
                            <picture>
                                <source srcSet={getImagePath("common/logo-sm.svg")} type="image/svg+xml" media="(max-width: 1024px)" />
                                <img src={getImagePath("common/logo-sm-hrzn.svg")} alt="サイトタイトル" width="330" height="120" />
                            </picture>
                        </Link>
                    </p>
                    <CvNav />
                    <div className="mainNav">
                        <nav className="nav">
                            <ul className="nav-menu">
                                <li className="menu-item">
                                    <Accordion
                                        label={
                                            <Link href="/themed-areas/" className="menu-item-link">
                                                <span className="en" lang="en">7 Themed Areas</span>
                                                <span className="jp">7つのテーマエリア・客船紹介</span>
                                            </Link>
                                        }
                                        content={
                                            <ul className="child-nav-menu">
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">ディズニーイマジネーションガーデン</span></Link>
                                                </li>
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">ディズニーディスカバリーリーフ</span></Link>
                                                </li>
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">トイストーリープレイス​</span></Link>
                                                </li>
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">マーベルランディング​​</span></Link>
                                                </li>
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">ウェイファインダーベイ​</span></Link>
                                                </li>
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">サンフランソウキョウ・ストリート</span></Link>
                                                </li>
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">タウン・スクエア</span></Link>
                                                </li>
                                            </ul>
                                        } />
                                </li>
                                <li className="menu-item">
                                    <Accordion
                                        label={
                                            <Link href="/" className="menu-item-link">
                                                <span className="en" lang="en">Accommodations</span>
                                                <span className="jp">客室案内</span>
                                            </Link>
                                        }
                                        content={
                                            <ul className="child-nav-menu">
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">コンシェルジュ・スイート</span></Link>
                                                </li>
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">ベランダ客室</span></Link>
                                                </li>
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">オーシャンビュー客室</span></Link>
                                                </li>
                                                <li className="child-menu-item">
                                                    <Link href="/" className="child-menu-item-link uline"><span className="line">内側​​​客室</span></Link>
                                                </li>
                                            </ul>
                                        } />
                                </li>
                                <li className="menu-item">
                                    <Link href="/" className="menu-item-link">
                                        <span className="en" lang="en">Entertainment</span>
                                        <span className="jp">エンターテイメント</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/" className="menu-item-link">
                                        <span className="en" lang="en">Dining</span>
                                        <span className="jp">ダイニング</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/" className="menu-item-link">
                                        <span className="en" lang="en">Kids Clubs</span>
                                        <span className="jp">キッズクラブ</span>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav-menu">
                                <li className="menu-item">
                                    <Link href="/" className="menu-item-link">
                                        <span className="en" lang="en">Adults</span>
                                        <span className="jp">大人のための施設</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/" className="menu-item-link">
                                        <span className="en" lang="en">Concierge</span>
                                        <span className="jp">コンシェルジュルーム</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/" className="menu-item-link">
                                        <span className="en" lang="en">Special Feature</span>
                                        <span className="jp">特集記事</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/" className="menu-item-link">
                                        <span className="en" lang="en">News</span>
                                        <span className="jp">お知らせ</span>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/" className="menu-item-link">
                                        <span className="en" lang="en">Faq</span>
                                        <span className="jp">よくあるご質問</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="accent">
                        <svg className="onm is-left"><use href="#i-onm-01"></use></svg>
                        <span className="bar"></span>
                        <svg className="onm is-right"><use href="#i-onm-01"></use></svg>
                    </div>
                    <SubNav />
                </div>
                <div className="drawerNav-bg">
                    <video autoPlay muted loop playsInline preload="metadata">
                        <source src={getImagePath("movie/water.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
            <DrawerButton />
        </>
    )
}