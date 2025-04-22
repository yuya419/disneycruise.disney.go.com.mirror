/**
 * @flile common.tsx
 * @description 共通コンポーネント
 */
'use client';
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import helper from "@/libs/helper";
import { useRefContext } from "@/hooks/useRefContext";
import "./styles/common.scss";

/**
 * @name GallerySlider
 * @description ギャラリースライダー
 * @param props.to スライドの方向
 * @param props.images 画像の情報
 */
const GallerySlider = (props: {
    to: "left" | "right",
    images: {
        [key: string]: {
            src: string,
            alt: string,
            w: number,
            h: number,
        }
    }
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { getImagePath } = helper();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const container = containerRef.current;
            if (!container) return;

            ScrollTrigger.create({
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => container.classList.add("isPlay"),
                onLeave: () => container.classList.remove("isPlay"),
                onEnterBack: () => container.classList.add("isPlay"),
                onLeaveBack: () => container.classList.remove("isPlay"),
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const gallerySliderList = () => {
        return (
            <div className="gallery-slider-list">
                {
                    Object.keys(props.images).map((key) => {
                        return (
                            <div key={key} className="gallery-slider-item">
                                <Image
                                    src={getImagePath(props.images[key].src)}
                                    alt={props.images[key].alt}
                                    width={props.images[key].w}
                                    height={props.images[key].h}
                                    priority
                                />
                            </div>
                        );
                    })
                }
            </div>
        )
    }

    return (
        <div className="gallery-slider" data-slide-to={props.to} ref={containerRef}>
            {gallerySliderList()}
            {gallerySliderList()}
            {gallerySliderList()}
        </div>
    )
}

/**
 * @name GalleryParallax
 * @description ギャラリーパララックス
 * @param props.images 画像の情報
 */
const GalleryParallax = (props: {
    images: {
        [key: string]: {
            src: string,
            alt: string,
            w: number,
            h: number,
        }
    }
}) => {
    const pathname = usePathname();
    const { getImagePath } = helper();

    const galleryParallaxItems = () => {
        return (
            Object.keys(props.images).map((key) => {
                const itemref = useRef<HTMLDivElement>(null);

                useEffect(() => {
                    const ctx = gsap.context(() => {
                        const item = itemref.current;
                        if (!item) return;

                        gsap.to(item, {
                            y: () => {
                                const windowHeight = window.innerHeight;
                                const itemHeight = item.clientHeight;
                                const scrollTriggerStart = (windowHeight - itemHeight) * -0.2;
                                return scrollTriggerStart;
                            },
                            ease: "none",
                            scrollTrigger: {
                                trigger: item,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: 2,
                                invalidateOnRefresh: true,
                            },
                        })
                    }, itemref);

                    return () => ctx.revert();
                }, []);

                return (
                    <div key={key} className={`gallery-parallax-item is-item-${key}`} ref={itemref}>
                        <Image
                            src={getImagePath(props.images[key].src)}
                            alt={props.images[key].alt}
                            width={props.images[key].w}
                            height={props.images[key].h}
                            priority
                        />
                    </div>
                );
            })
        )
    }

    return (
        <div className="gallery-parallax">
            {galleryParallaxItems()}
        </div>
    )
}

/**
 * @name Bg
 * @description 背景動画
 * @param props.state 動画の再生状態
 */
const Bg = () => {
    const { getImagePath } = helper();
    const pathname = usePathname();
    const { hero, water, colorBlue, colorWhite } = useRefContext() as {
        hero: React.RefObject<HTMLDivElement>;
        water: React.RefObject<HTMLDivElement>;
        colorBlue: React.RefObject<HTMLDivElement>;
        colorWhite: React.RefObject<HTMLDivElement>;
    };

    return (
        <div className="bg">
            <div className="video is-video-hero" ref={hero}>
                <video autoPlay muted loop playsInline preload="metadata">
                    <source src={getImagePath("movie/dcl_da_sp.webm")} media="(max-width: 1024px)" type="video/webm" />
                    <source src={getImagePath("movie/dcl_da_sp.mp4")} media="(max-width: 1024px)" type="video/mp4" />
                    <source src={getImagePath("movie/dcl_da_pc.webm")} type="video/webm" />
                    <source src={getImagePath("movie/dcl_da_pc.mp4")} type="video/mp4" />
                </video>
            </div>
            <div className="video is-video-water is-set-mask" ref={water}>
                <video autoPlay muted loop playsInline preload="metadata">
                    <source src={getImagePath("movie/water.webm")} type="video/webm" />
                    <source src={getImagePath("movie/water.mp4")} type="video/mp4" />
                </video>
            </div>
            <div className="color is-color-blue is-set-mask" ref={colorBlue}></div>
            <div className="color is-color-white is-set-mask" ref={colorWhite}></div>
        </div>
    )
}

export {
    GallerySlider,
    GalleryParallax,
    Bg,
}