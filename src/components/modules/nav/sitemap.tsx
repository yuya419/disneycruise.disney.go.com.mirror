/**
 * @name sitemap.tsx
 * @description サイトマップ
 */
'use client';
import { useEffect, useRef } from "react";
import Link from "next/link";
import "./styles/sitemap.scss";

export default function Sitemap() {
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrap = wrapRef.current;
        if (!wrap) return;

        // メディアクエリの設定
        const mediaQuery = window.matchMedia("(max-width: 1024px)");

        // 要素の取得
        const toggleButton = wrap.querySelectorAll(".has-toggle-menu .toggle-icon");

        // イベントリスナーの設定
        const handleClick = (e: Event) => toggelACDN(e);

        /**
         * @name toggleACDN
         * @description アコーディオンメニューのトグル処理
         * @param e
         * @returns
         */
        const toggelACDN = (e: Event) => {
            const target = e.currentTarget as HTMLButtonElement;
            const parent = target.closest(".has-toggle-menu");
            if (!parent) return;

            const content = parent.querySelector(".acdn-content");
            if (!content) return;

            const isExpanded = target.getAttribute("data-expanded") === "true";
            target.setAttribute("data-expanded", String(!isExpanded));
            content.setAttribute("data-hidden", String(isExpanded));
        }

        // メディアクエリの変更時の処理
        const handleMediaChange = () => {
            if(mediaQuery.matches) {
                toggleButton.forEach((item) => item.addEventListener("click", handleClick));
            }
        }

        // 初期処理
        handleMediaChange();

        mediaQuery.addEventListener("change", handleMediaChange);

        return () => {
            // イベントリスナーの解除
            toggleButton.forEach((item) => item.removeEventListener("click", handleClick));
            mediaQuery.removeEventListener("change", handleMediaChange);
        }

    }, []);

    return (
        <div className="sitemap" ref={wrapRef}>
            <div className="accent">
                <svg className="onm is-left"><use href="#i-onm-01"></use></svg>
                <span className="bar"></span>
                <svg className="onm is-right"><use href="#i-onm-01"></use></svg>
            </div>
            <nav className="nav">
                <ul className="nav-menu">
                    <li className="menu-item has-toggle-menu">
                        <div className="toggle-label">
                            <Link href="/" className="menu-item-link">
                                <span className="label">
                                    <span className="en" lang="en">7 Themed Areas</span>
                                    <span className="jp">7つのテーマエリア・客船紹介</span>
                                </span>
                            </Link>
                            <button type="button" className="toggle-icon" data-expanded="false"><span className="icon"></span></button>
                        </div>
                        <div className="acdn-content" data-hidden="true">
                            <div className="acdn-inner">
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
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="nav-menu">
                    <li className="menu-item has-toggle-menu">
                        <div className="toggle-label">
                            <Link href="/" className="menu-item-link">
                                <span className="label">
                                    <span className="en" lang="en">Accommodations</span>
                                    <span className="jp">客室案内</span>
                                </span>
                            </Link>
                            <button type="button" className="toggle-icon" data-expanded="false"><span className="icon"></span></button>
                        </div>
                        <div className="acdn-content" data-hidden="true">
                            <div className="acdn-inner">
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
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <Link href="/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Entertainment</span>
                                <span className="jp">エンターテイメント</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Dining</span>
                                <span className="jp">ダイニング</span>
                            </span>
                        </Link>
                    </li>
                </ul>
                <ul className="nav-menu">
                    <li className="menu-item">
                        <Link href="/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Kids Clubs</span>
                                <span className="jp">キッズクラブ</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Adults</span>
                                <span className="jp">大人のための施設</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Concierge</span>
                                <span className="jp">コンシェルジュルーム</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">Special Feature</span>
                                <span className="jp">特集記事</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/" className="menu-item-link">
                            <span className="label">
                                <span className="en" lang="en">News</span>
                                <span className="jp">お知らせ</span>
                            </span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/" className="menu-item-link">
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