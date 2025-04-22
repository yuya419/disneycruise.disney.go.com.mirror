/**
 * @name message.tsx
 * @description メッセージ
 */
"use client";
import Image from "next/image";
import helper from "@/libs/helper";
import { GSAPToggleContainer, GSAPMaskContainer } from "@/components/modules/gsap/container";
import { GallerySlider } from "@/components/modules/common/common";
import "./styles/message.scss";

export default function Message() {
    const { getImagePath } = helper();

    const images = {
        "img01": {
            src: "top/gallery/img01.jpg",
            alt: "",
            w: 390,
            h: 260,
        },
        "img02": {
            src: "top/gallery/img02.jpg",
            alt: "",
            w: 390,
            h: 260,
        },
        "img03": {
            src: "top/gallery/img03.jpg",
            alt: "",
            w: 390,
            h: 260,
        },
        "img04": {
            src: "top/gallery/img04.jpg",
            alt: "",
            w: 390,
            h: 260,
        },
    }

    return (
        <GSAPToggleContainer tag="section" className="t-message" toggle={{ logo: true, color: null }}>
            <GSAPMaskContainer tag="div" className="container" mask={"water"}>
                <hgroup className="t-message__head">
                    <p className="logo">
                        <Image
                            src={getImagePath("common/logo.svg")}
                            alt="サイト名"
                            width={470}
                            height={256}
                            priority
                        />
                    </p>
                    <h2>2025年、ディズニー・クルーズラインが<br />シンガポールにやってきます。</h2>
                </hgroup>
                <div className="t-message__body">
                    <p>壮大なスケールの<br className="nopc" />魅惑的なクルージングバケーションを<br />体験してみませんか。<br />
                        <br />
                        そこは、楽しさにあふれ、<br className="nopc" />くつろぎの時間で満たされた空間。<br />
                        ワールドクラスのエンターテインメント、<br />テーマ別のダイニング体験、<br />
                        卓越したゲストサービスを提供する<br className="nopc" />ディズニー・アドベンチャーは、<br />旅の道のりでありながら目的地でもあります。<br />
                        <br />
                        シンガポールから出航するこの客船では、<br />3泊〜5泊の航海をご用意しています。<br />
                        洋上で魔法のような日々をお過ごしください。</p>
                </div>
            </GSAPMaskContainer>
            <GallerySlider to="left" images={images} />
        </GSAPToggleContainer>
    )
}