/**
 * @name sitemap.tsx
 * @description サイトマップ
 */
'use client';
import Link from "next/link";
import { AccordionType01 as Accordion } from "@/components/modules/acdn/acdn";
import "./styles/sitemap.scss";

export default function Sitemap() {
    return (
        <div className="sitemap">
            <div className="accent">
                <svg className="onm is-left"><use href="#i-onm-01"></use></svg>
                <span className="bar"></span>
                <svg className="onm is-right"><use href="#i-onm-01"></use></svg>
            </div>
            <nav className="nav">
                <ul className="nav-menu">
                    <li className="menu-item">
                        <Accordion
                            label={
                                <Link href="/themed-areas/" className="menu-item-link">
                                    <span className="label">
                                        <span className="en" lang="en">7 Themed Areas</span>
                                        <span className="jp">7つのテーマエリア・客船紹介</span>
                                    </span>
                                </Link>
                            }
                            content={
                                <ul className="child-nav-menu">
                                    <li className="child-menu-item">
                                        <Link href="/themed-areas/#area01" className="child-menu-item-link uline"><span className="line">ディズニーイマジネーションガーデン</span></Link>
                                    </li>
                                    <li className="child-menu-item">
                                        <Link href="/themed-areas/#area02" className="child-menu-item-link uline"><span className="line">ディズニーディスカバリーリーフ</span></Link>
                                    </li>
                                    <li className="child-menu-item">
                                        <Link href="/themed-areas/#area03" className="child-menu-item-link uline"><span className="line">トイストーリープレイス​</span></Link>
                                    </li>
                                    <li className="child-menu-item">
                                        <Link href="/themed-areas/#area04" className="child-menu-item-link uline"><span className="line">マーベルランディング​​</span></Link>
                                    </li>
                                    <li className="child-menu-item">
                                        <Link href="/themed-areas/#area05" className="child-menu-item-link uline"><span className="line">ウェイファインダーベイ​</span></Link>
                                    </li>
                                    <li className="child-menu-item">
                                        <Link href="/themed-areas/#area06" className="child-menu-item-link uline"><span className="line">サンフランソウキョウ・ストリート</span></Link>
                                    </li>
                                    <li className="child-menu-item">
                                        <Link href="/themed-areas/#area07" className="child-menu-item-link uline"><span className="line">タウン・スクエア</span></Link>
                                    </li>
                                </ul>
                            } />
                    </li>
                </ul>
                <ul className="nav-menu">
                    <li className="menu-item">
                        <Accordion
                            label={
                                <Link href="/accommodations/" className="menu-item-link">
                                    <span className="label">
                                        <span className="en" lang="en">Accommodations</span>
                                        <span className="jp">客室案内</span>
                                    </span>
                                </Link>
                            }
                            content={
                                <ul className="child-nav-menu">
                                    <li className="child-menu-item">
                                        <Link href="/accommodations/?type=room01" className="child-menu-item-link uline"><span className="line">コンシェルジュ・スイート</span></Link>
                                    </li>
                                    <li className="child-menu-item">
                                        <Link href="/accommodations/?type=room02" className="child-menu-item-link uline"><span className="line">ベランダ客室</span></Link>
                                    </li>
                                    <li className="child-menu-item">
                                        <Link href="/accommodations/?type=room03" className="child-menu-item-link uline"><span className="line">オーシャンビュー客室</span></Link>
                                    </li>
                                    <li className="child-menu-item">
                                        <Link href="/accommodations/?type=room04" className="child-menu-item-link uline"><span className="line">内側​​​客室</span></Link>
                                    </li>
                                </ul>
                            } />
                    </li>
                    <li className="menu-item">
                        <Link href="/entertainment/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Entertainment</span>
                                <span className="jp">エンターテイメント</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/dining/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Dining</span>
                                <span className="jp">ダイニング</span>
                            </span>
                        </Link>
                    </li>
                </ul>
                <ul className="nav-menu">
                    <li className="menu-item">
                        <Link href="/kids-clubs/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Kids Clubs</span>
                                <span className="jp">キッズクラブ</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/spa-lounges-bar/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Adults</span>
                                <span className="jp">大人のための施設</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/concierge/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Concierge</span>
                                <span className="jp">コンシェルジュルーム</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/feature/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Special Feature</span>
                                <span className="jp">特集記事</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/news/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">News</span>
                                <span className="jp">お知らせ</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/qa/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Faq</span>
                                <span className="jp">よくあるご質問</span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="accent">
                <svg className="onm is-left"><use href="#i-onm-01"></use></svg>
                <span className="bar"></span>
                <svg className="onm is-right"><use href="#i-onm-01"></use></svg>
            </div>
        </div >
    )
}