/**
 * @name adults.tsx
 * @description 大人のための施設
 */
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import helper from "@/libs/helper";
import Button from "@/components/modules/buttons/button";
import LargeButton from "@/components/modules/buttons/largeButton";
import "./styles/adults.scss";

export default function Adults() {
    const { getImagePath } = helper();

    const relaxations: Record<string, { name: string, en: string, desp: string }> = {
        "01": {
            name: "スパ・サロン・フィットネス",
            en: "Spa, Salon & Fitness",
            desp: "自然と贅沢が融合したオアシスで、至高のリラクゼーションをご提供します。スパや美容トリートメントを堪能できるほか、フィットネス、サイクリングやヨガなどのアクティビティスペースもご利用いただけます。",
        },
        "02": {
            name: "ラウンジ",
            en: "Lounges",
            desp: "エレガントな空間からディズニーをテーマにした、活気あるラウンジがゲストをお待ちしています。各種取り揃えたスペシャルなドリンクを片手に、くつろぎのひとときをお楽しみください。",
        },
        "03": {
            name: "バッカニアバー",
            en: "Buccaneer Bar",
            desp: "海賊気分を味わいたいなら、ぜひバッカニアバーへ。さわやかなドリンクを堪能しながら、スポーツ観戦、広大な海の観賞など、気分はまるで船長に。思いのままにおくつろぎいただけます。",
        },
    }

    const Relaxation = () => {

        const outline = Object.keys(relaxations).map((key) => {
            return (
                <div key={key} className={`outline-item ${key == "01" ? "isActive" : ""}`}>
                    <dl className="outline-box">
                        <dt className="outline-title">
                            <p className="ja">{relaxations[key].name}</p>
                            <p className="en" lang="en">{relaxations[key].en}</p>
                        </dt>
                        <dd className="outline-text">
                            <p>{relaxations[key].desp}</p>
                        </dd>
                    </dl>
                    <div className="outline-image">
                        <Image src={getImagePath(`top/adults/img${key}.jpg`)} alt="" width={580} height={387} priority />
                    </div>
                </div>
            )
        })

        const bg = Object.keys(relaxations).map((key) => {
            return (
                <div key={key} className="bg-item">
                    <Image src={getImagePath(`top/adults/bg${key}.jpg`)} alt="" width={1300} height={640} priority />
                </div>
            )
        })

        return (
            <div className="t-adults__relaxation">
                <div className="relaxation">
                    <div className="relaxation-outline" data-current="1">
                        <div className="outline">
                            <div className="current">
                                <span className="bar is-left"></span>
                                <svg className="onm is-left"><use href="#i-onm-02"></use></svg>
                                <div className="label">
                                    <span className="ttl" lang="en">Relaxation</span>
                                    <span className="num" lang="en">
                                        <span>0</span>
                                        <span className="val isCurrent" data-num="1">1</span>
                                        <span className="val" data-num="2">2</span>
                                        <span className="val" data-num="3">3</span>
                                    </span>
                                </div>
                                <svg className="onm is-right"><use href="#i-onm-02"></use></svg>
                                <span className="bar is-right"></span>
                            </div>
                            <div className="outline-list">
                                {outline}
                            </div>
                            <div className="pagination">
                                <div className="pagination-list">
                                    <button type="button" className="balet isCurrent" lang="en" data-num="1">1</button>
                                    <button type="button" className="balet" lang="en" data-num="2">2</button>
                                    <button type="button" className="balet" lang="en" data-num="3">3</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relaxation-bg">
                        <div className="bg-list">
                            {bg}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="t-adults">
            <div className="container">
                <div className="accent">
                    <span className="bar"></span>
                    <svg className="onm"><use href="#i-onm-03"></use></svg>
                    <span className="bar"></span>
                </div>
                <div className="t-adults__detail">
                    <hgroup className="t-adults__head">
                        <p lang="en">For Adults</p>
                        <h2>大人のための施設</h2>
                    </hgroup>
                    <hgroup className="t-adults__text">
                        <h3>ワンランク上の大人の時間を堪能する。</h3>
                        <p>お子様がお子様専用のクラブで<br className="nopc" />楽しい時間を過ごしている間、<br className="nopc" />ご自身にはワンランク上の大人の体験を。<br />
                            贅沢なスパトリートメント、<br className="nopc" />アットホームなダイニング、専門店のショッピング、<br className="nopc" />魅惑的なラウンジをお楽しみください。</p>
                    </hgroup>
                </div>
                <Relaxation />
                <div className="t-adults__button">
                    <LargeButton label="すべての客室案内はこちら" enLabel="Learn Accommodations More" link="/accommodations/" />
                    <Button type="primary" label="すべての客室案内はこちら" link="/accommodations/" align="center" />
                </div>
            </div>
        </section>
    )
}