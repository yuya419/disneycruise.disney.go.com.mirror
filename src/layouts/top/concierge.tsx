/**
 * @name concierge.tsx
 * @description コンシェルジュスイート ＆ ステートルーム​
 */
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import helper from "@/libs/helper";
import Button from "@/components/modules/buttons/button";
import { GSAPToggleContainer } from "@/components/modules/gsap/container";
import "./styles/concierge.scss";

export default function Concierge() {
    const { getImagePath } = helper();
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const mm = gsap.matchMedia();
    const pc = "(min-width: 1025px)";

    const scrollAnimation = () => {
        const ctx = gsap.context(() => {
            const container = containerRef.current as HTMLDivElement;
            const img = imageRef.current as HTMLImageElement;
            if (!container && !img) return;

            gsap.to(img, {
                y: () => {
                    const windowHeight = window.innerHeight;
                    const itemHeight = img.clientHeight * 1.15;
                    const scrollTriggerStart = (windowHeight - itemHeight);
                    return scrollTriggerStart;
                },
                ease: "none",
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            })
        }, [containerRef, imageRef]);

        return () => ctx.revert();
    };

    useEffect(() => {

        // PC用のアニメーション設定
        mm.add(pc, () => scrollAnimation());

        // クリーンアップ処理
        return () => {
            mm.revert(); // すべてのメディアクエリを解除
            gsap.killTweensOf(containerRef.current);
            gsap.killTweensOf(imageRef.current);
        };
    }, []);

    return (
        <section className="t-concierge" ref={containerRef}>
            <div className="t-concierge__bg">
                <Image src={getImagePath("top/concierge/img.jpg")} alt="コンシェルジュスイート&ステートルーム​​の内装" width={1300} height={768} priority ref={imageRef} />
            </div>
            <GSAPToggleContainer tag="div" className="container" toggle={{ logo: false, color: null, movie: { video: "water", state: true } }}>
                <div className="t-concierge__detail">
                    <div className="detail">
                        <hgroup className="t-concierge__head">
                            <div className="accent is-top">
                                <span className="bar is-left"></span>
                                <svg className="onm"><use href="#i-onm-03"></use></svg>
                                <span className="bar is-right"></span>
                            </div>
                            <p lang="en">Concierge Suites<br /> & Staterooms</p>
                            <h2>コンシェルジュスイート ＆ ステートルーム​</h2>
                            <div className="accent is-bottom">
                                <span className="bar is-left"></span>
                                <svg className="onm"><use href="#i-onm-03"></use></svg>
                                <span className="bar is-right"></span>
                            </div>
                        </hgroup>
                        <div className="text">
                            <h3>心尽くしのおもてなしに包まれた、<br />上質な時間を。</h3>
                            <p>豪華に装飾された<br className="nopc" />コンシェルジュ・ステートルームと<br />スイートで、海の旅をさらに特別なものに。</p>
                        </div>
                        <div className="divider"></div>
                        <div className="guest">
                            <h4>コンシェルジュゲスト限定特典</h4>
                            <ul className="benefit-list">
                                <li className="list-item">
                                    <span className="icon"><svg className="i-check"><use xlinkHref="#i-check" /></svg></span>優先搭乗
                                </li>
                                <li className="list-item">
                                    <span className="icon"><svg className="i-check"><use xlinkHref="#i-check" /></svg></span>専用コンシェルジュラウンジ＆サンデッキへのアクセス
                                </li>
                                <li className="list-item">
                                    <span className="icon"><svg className="i-check"><use xlinkHref="#i-check" /></svg></span>専属チームによるサービス
                                </li>
                            </ul>
                            <p>その他、各種サービス</p>
                        </div>
                        <Button type="tertiary" label="View More" lang="en" link="/concierge/" align="center" />
                    </div>
                </div>
            </GSAPToggleContainer>
        </section>
    )
}