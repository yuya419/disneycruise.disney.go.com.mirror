/**
 * @name footer.tsx
 * @description 共通フッター
 */
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
import "./styles/footer.scss";

export default function Footer() {
    const triggerRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const { getImagePath } = helper();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        const pc = "(min-width: 1025px)";
        const scrollAnimation = () => {
            const ctx = gsap.context(() => {
                const trigger = triggerRef.current;
                const footer = footerRef.current;
                if (!trigger || !footer) return;

                gsap.to(footer, {
                    y: `0%`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: trigger,
                        start: 'top bottom',
                        end: 'bottom bottom',
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });
            }, triggerRef);

            return () => ctx.revert();
        };

        // PC用のアニメーション設定
        mm.add(pc, () => {
            return scrollAnimation();
        });

        // クリーンアップ処理
        return () => {
            mm.revert(); // すべてのメディアクエリを解除
            gsap.killTweensOf(triggerRef.current);
            gsap.killTweensOf(footerRef.current);
        };
    }, [pathname]);

    return (
        <div className="footer-wrap">
            <div className="space nosp" ref={triggerRef}></div>
            <footer className="footer" ref={footerRef}>
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
                        <SubNav />
                        <p className="copyright" translate="no">Copyright &copy; KK Miki Tourist, All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}