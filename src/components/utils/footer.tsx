/**
 * @file footer.tsx
 * @description 共通フッター
 */
import Link from "next/link";
import Image from "next/image";
import helper from "@/libs/helper";
import CvNav from "../modules/nav/cvNav"
import Sitemap from "../modules/nav/sitemap";
import "./styles/footer.scss";

export default function Footer() {
    const { getImagePath } = helper();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <CvNav />
                <Sitemap />
                <div className="guideline">
                    <div className="guideline__miki-tourist">
                        <p className="logo">
                            <Image src={getImagePath("common/logo-miki-tourist.png")} alt="株式会社ミキ・ツーリスト" width={182} height={18} priority />
                        </p>
                        <p>ディズニークルーズライン日本正規販売代理店　株式会社ミキ・ツーリスト<br />
                            1967年創立。1998年より様々なクルーズ商品の取り扱いをしています。<a href="#" target="_blank" className="uline-r"><span className="line">詳しくはこちら</span></a></p>
                    </div>
                    <div className="guideline__image">
                        <p className="ttl">画像に関する免責事項</p>
                        <p>画像はディズニーのクルーズで提供される一般的な体験、エンターテインメント、会場のイメージです。<br />ディズニー・アドベンチャーでの体験、エンターテインメント、会場は変更される場合があります。</p>
                    </div>
                    <div className="accent">
                        <svg className="onm is-left"><use href="#i-onm-01"></use></svg>
                        <span className="bar"></span>
                        <svg className="onm is-right"><use href="#i-onm-01"></use></svg>
                    </div>
                </div>
                <div className="company">
                    <p className="logo">
                        <Link href="/">
                            <picture>
                                <source srcSet={getImagePath("common/logo-sm-hrzn.svg")} type="image/svg+xml" media="(max-width: 1024px)" />
                                <img src={getImagePath("common/logo-sm.svg")} alt="サイトタイトル" width="414" height="50" />
                            </picture>
                        </Link>
                    </p>
                    <div className="sub-nav">
                        <nav className="nav">
                            <ul className="nav-menu">
                                <li className="menu-item">
                                    <Link href="/" target="_blank" className="menu-item-link uline-r">
                                        <span className="line">約款</span>
                                        <svg className="i-target">
                                            <use href="#i-target"></use>
                                        </svg>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link href="/" target="_blank" className="menu-item-link uline-r">
                                        <span className="line">プライバシーポリシー</span>
                                        <svg className="i-target">
                                            <use href="#i-target"></use>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <p className="copyright" translate="no">Copyright &copy; KK Miki Tourist, All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}