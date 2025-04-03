/**
 * @name accommodations.tsx
 * @description 客室案内
 */
"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import helper from "@/libs/helper";
import Button from "@/components/modules/buttons/button";
import { Divider } from "@/components/modules/common/common";
import { arrow } from "@/components/modules/icons/icon";
import "./styles/accommodations.scss";

export default function Accommodations() {
    const { getImagePath } = helper();

    const rooms: Record<string, { name: string; en: string; desp: string; link: string; image: string }> = {
        "room01": {
            name: "コンシェルジュ・スイート",
            en: "Concierge Suites & Staterooms",
            desp: "最も豪華な客室で、海上でもパーソナルなサービスと自宅のような快適さをご提供します。",
            link: "/accommodations/",
            image: "accommodations/room01.jpg",
        },
        "room02": {
            name: "ベランダ客室",
            en: "Verandah Stateroom",
            desp: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
            link: "/accommodations/",
            image: "accommodations/room01.jpg",
        },
        "room03": {
            name: "オーシャンビュー客室",
            en: "Oceanview Stateroom",
            desp: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
            link: "/accommodations/",
            image: "accommodations/room01.jpg",
        },
        "room04": {
            name: "内側​​​客室",
            en: "Inside Stateroom",
            desp: "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
            link: "/accommodations/",
            image: "accommodations/room01.jpg",
        },
    }

    const [isRooms, setIsRooms] = useState({});

    // useEffect(() => {
    //     const detail = () => {

    //         const roomImages = Object.keys(rooms).map((key) => {
    //             return (
    //                 <div key={key} className="room-image-item">
    //                     <Image src={getImagePath(rooms[key].image)} alt={`${rooms[key].name}の内装`} width={550} height={455} priority />
    //                 </div>
    //             )
    //         });

    //         const roomDetails = Object.keys(rooms).map((key) => {
    //             return (
    //                 <dl className="room-detail-item" key={key}>
    //                     <dt className="room-name">
    //                         <Image src={getImagePath(rooms[key].image)} alt={`${rooms[key].name}の内装`} width={550} height={455} priority />
    //                         <button type="button" className="acdn-toggle">
    //                             <div className="name">
    //                                 <span className="ja">{rooms[key].name}</span>
    //                                 <span className="en" lang="en">{rooms[key].en}</span>
    //                             </div>
    //                             <span className="acdn-icon">
    //                                 {arrow({ bg: "blue", color: "white" })}
    //                             </span>
    //                         </button>
    //                     </dt>
    //                     <dd className="room-desp">
    //                         <p className="desp">{rooms[key].desp}</p>
    //                         <Button type="primary" label="View More" lang="en" link={rooms[key].link} align="left" />
    //                     </dd>
    //                 </dl>
    //             )
    //         });

    //         return (
    //             <div className="detail">
    //                 <div className="room-image">
    //                     {roomImages}
    //                 </div>
    //                 <div className="room-detail">
    //                 </div>
    //             </div>
    //         )
    //     }

    //     setIsRooms(detail);
    // }, [isRooms]);

    return (
        <section className="t-accommodations">
            <div className="container">
                <div className="accent">
                    <span className="bar is-left"></span>
                    <svg className="onm"><use href="#i-onm-03"></use></svg>
                    <span className="bar is-right"></span>
                </div>
                <hgroup className="t-accommodations__head">
                    <p lang="en">Accommodations</p>
                    <h2>客室案内</h2>
                </hgroup>
                <div className="t-accommodations__text">
                    <h3>最高の快適さと利便性を<br className="nopc" />追求した客室で、旅を満喫。</h3>
                    <p>楽しい家族旅行、友人との小旅行、<br className="nopc" />カップルでの小旅行など、<br />
                        ディズニーの客室とスイートなら、<br className="nopc" />リラックスして快適にお過ごしいただけます。<br />
                        各客室とスイートには、ディズニー、ピクサー、<br className="nopc" />マーベルのストーリーにインスピレーションを得たアートワークなど、<br className="nosp" />他では見られない<br className="nopc" />魔法のような雰囲気が漂います。</p>
                </div>
                <div className="t-accommodations__detail">
                    <div className="large-button">
                        <Link href="/accommodations/" className="large-button-el">
                            <span className="en-label" lang="en">Learn Accommodations More</span>
                            <span className="ja-label">
                                <Divider dir="vert" w="2" h="18" color="blue" />
                                <span className="label">すべての客室案内はこちら</span>
                                {arrow({ bg: "blue", color: "white" })}
                            </span>
                        </Link>
                    </div>
                    <Button type="primary" label="すべての客室案内はこちら" link="/accommodations/" align="center" />
                </div>
            </div>
        </section>
    )
}