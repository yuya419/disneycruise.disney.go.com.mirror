/**
 * @flile common.tsx
 * @description 共通コンポーネント
 */
'use client';
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import helper from "@/libs/helper";
import "./styles/common.scss";
import { disconnect } from "process";

/**
 * @name Divider
 * @description 区切り線
 * @param props.dir 区切り線の方向
 * @param props.w 区切り線の幅
 * @param props.h 区切り線の高さ
 * @param props.color 区切り線の色
 */
const Divider = (props: { dir: "vert" | "hrzn", w: string, h: string, color: "white" | "blue" }) => {

    let style = {
        width: props.w + "px",
        height: props.h + "px",
        "--divider-color": props.color === "white" ? "#fff" : "#002D74",
    }

    return (
        <span className={{ vert: "divider is-vert", hrzn: "divider is-hrzn" }[props.dir]} style={style}></span>
    )
}

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
    const { getImagePath } = helper();

    const gallerySliderList = () => {
        return (
            <div className="gallery-slider-list">
                {
                    Object.keys(props.images).map((key) => {
                        return (
                            <div className="gallery-slider-item" key={key}>
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
        <div className="gallery-slider" data-slide-to={props.to}>
            {gallerySliderList()}
            {gallerySliderList()}
            {gallerySliderList()}
        </div>
    )
}

/**
 * @name Bg
 * @description 背景動画
 * @param props.state 動画の再生状態
 */
const Bg = (props: { state: boolean }) => {
    const { getImagePath } = helper();
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (props.state) {
            if (videoRef.current) {
                videoRef.current.play();
            }
        } else {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        }
    }, [props.state]);

    return (
        <div className="bg">
            <div className="color"></div>
            <div className="video">
                <div className="hero">
                    <video muted loop playsInline preload="metadata" ref={videoRef} onLoadedData={() => {
                        setIsLoaded(true);
                        if (videoRef.current) {
                            videoRef.current.play();
                        }
                    }} onEnded={() => {
                        if (videoRef.current) {
                            videoRef.current.play();
                        }
                    }}>
                        <source src={getImagePath("movie/dcl_da_sp.mp4")} media="(max-width: 1024px)" type="video/mp4" />
                        <source src={getImagePath("movie/dcl_da_pc.mp4")} type="video/mp4" />
                    </video>
                </div>
                <div className="water">
                    <video autoPlay muted loop playsInline preload="metadata">
                        <source src={getImagePath("movie/water.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

/**
 * @name PostThumbnailList
 * @description 投稿のサムネイル一覧
 * @param props
 * @returns 
 */
const PostThumbnailList = (props: {
    posts: {
        [key: string]: {
            thumbnail: {
                src: string,
                alt: string,
                w: number,
                h: number,
            }
        }
    },
}) => {
    const thumbnailItems = Object.keys(props.posts).map((key) => {
        return (
            <div className="post-thumbnail-item" key={key}>
                <Image
                    src={props.posts[key].thumbnail.src}
                    alt={props.posts[key].thumbnail.alt + "のサムネイル"}
                    width={props.posts[key].thumbnail.w}
                    height={props.posts[key].thumbnail.h}
                    priority
                />
            </div>
        )
    });

    return (
        <div className="post-thumbnail-list">
            {thumbnailItems}
        </div>
    )
}

export {
    Divider,
    GallerySlider,
    Bg,
    PostThumbnailList,
}