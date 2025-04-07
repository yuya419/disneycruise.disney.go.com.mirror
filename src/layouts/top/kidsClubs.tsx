/**
 * @name kidsClubs.tsx
 * @description キッズクラブ
 */
'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";
import helper from "@/libs/helper";
import Button from "@/components/modules/buttons/button";
import "./styles/kidsClubs.scss";

export default function KidsClubs() {
    const { getImagePath } = helper();
    const wrapRef = useRef<HTMLDivElement>(null);

    const CircleSlider = () => {

        const slideItems = () => {
            return Array.from({ length: 3 }, (_, i) => (
                <li className="circle-slide-item" key={i}>
                    <Image src={getImagePath(`top/kidsclubs/img0${i + 1}.jpg`)} alt="" width={540} height={347} />
                </li>
            ));
        }

        return (
            <div className="t-kids-clubs__circle-slider" ref={wrapRef}>
                <div className="circle-slider">
                    <ul className="circle-slide-list">
                        {slideItems()}
                        {slideItems()}
                        {slideItems()}
                        {slideItems()}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <section className="t-kids-clubs">
            <div className="container">
                <CircleSlider />
                <hgroup className="t-kids-clubs__head">
                    <p lang="en">Kids Clubs</p>
                    <h2>キッズクラブ</h2>
                </hgroup>
                <div className="t-kids-clubs__text">
                    <h3>アクション満載の冒険のはじまり！</h3>
                    <p>お子様、10代前半、10代の若者は、<br className="nopc" />インタラクティブな楽しさがあふれる<br className="nopc" />ユニークな専用スペースで、<br className="nosp" />自分だけの<br className="nopc" />新しい冒険に乗り出すことができます。</p>
                    <Button type="primary" label="View More" lang="en" link="/kids-clubs/" align="center" />
                </div>
            </div>
        </section>
    )
}