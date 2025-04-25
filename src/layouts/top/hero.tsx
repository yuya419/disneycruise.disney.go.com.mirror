/**
 * @name hero.tsx
 * @description ヒーロー
 */
"use client";
import Image from "next/image";
import { HeroNews } from "@/layouts/post/pickup";
import helper from "@/libs/helper";
import "./styles/hero.scss";

export default function Hero() {
    const { getImagePath } = helper();

    const posts = {
        "post01": {
            link: "/news/detail/",
            title: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
            date: "2025.00.00",
            cat: {
                "cat01": { name: "カテゴリー1", },
                "cat02": { name: "カテゴリー2", }
            },
            thumbnail: {
                src: "/ships/adventure/common/dummy/feature.jpg",
                alt: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
                w: 115,
                h: 161,
            }
        },
    };

    return (
        <div className="t-hero">
            <div className="t-hero__logo">
                <Image
                    src={getImagePath("common/logo.svg")}
                    alt="サイト名"
                    width={290}
                    height={158}
                    priority
                />
            </div>
            <div className="t-hero__copy">
                <p lang="en"> Website presented by <a href="https://www.mikitourist.co.jp/" target="_blank" className="uline-r"><span className="line">Miki Tourist</span></a></p>
            </div>
            <div className="t-hero__scroll">
                <p>
                    <span className="label" lang="en">Scroll Down</span>
                    <span className="circle"></span>
                </p>
            </div>
            <HeroNews posts={posts} />
        </div>
    )
}