/**
 * @name page.tsx
 * @description コンシェルジュページ用レイアウト
 */
"use client";
import Image from "next/image";
import helper from "@/libs/helper";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import Title from "@/layouts/title/title";
import Aside from "../aside/aside";
import { Headline, OnmHeadline01, OnmHeadline02 } from "@/components/modules/headline/headline";
import { Slider } from "@/components/modules/slider/slider";
import { GSAPToggleContainer } from "@/components/modules/gsap/container";
import "./styles/concierge.scss";

export function Page() {
    const { getImagePath } = helper();

    const breadcrumbItems = [
        { label: "コンシェルジュルーム", href: "/concierge/", },
    ];

    const navArray = {
        parent01: [{ item: ['コンシェルジュ スイートと<br class="nosp"/>客室', "sec01"], }],
        parent02: [{ item: ['海上の家へようこそ', "sec02"], }],
        parent03: [{ item: ['コンシェルジュラウンジ', "sec03"], }],
        parent04: [{ item: ['屋外サンデッキ', "sec04"], }],
        parent05: [{ item: ['スパスイート', "sec05"], }],
        parent06: [{ item: ['特別なアメニティ', "sec06"], }],
    }

    const heroSliderItems = [
        {
            dom: <><figure>
                <Image src={getImagePath("page/concierge/hero01.jpg")} alt="コンシェルジュルームイメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only <br />&copy;Disney</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/concierge/hero02.jpg")} alt="コンシェルジュルームイメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only <br />&copy;Disney</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/concierge/hero03.jpg")} alt="コンシェルジュルームイメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only <br />&copy;Disney</figcaption>
            </figure></>
        },
    ]

    const sectionArray = [
        {
            id: "sec01",
            name: `コンシェルジュ スイートと客室`,
            en: `Concierge Suites`,
            desc: `贅沢に装飾されたコンシェルジュステートルームとスイートで、海上での休暇をさらに充実させましょう。コンシェルジュゲストとして、優先搭乗、専用コンシェルジュラウンジとサンデッキへの専用アクセス、専属チームによるおもてなしなどの特別な特典を受けられ、航海前と航海中に贅沢なひとときをお過ごしいただけます。`,
            img: `page/concierge/img01.jpg`,
            caption: "Artist Concept Only &copy;Disney"
        },
        {
            id: "sec02",
            name: `海上の家へようこそ`,
            en: `A Home at Sea`,
            lead: `5つの客室タイプであなたの旅を彩ります。<br />お気に入りの一室で、特別なひとときを<br class="nopc" />お過ごしください。`,
            desc: `モダンなオープンコンセプトの客室や広々とした 1 ベッドルームの客室など、お好みに応じてお選びいただけるコンシェルジュステートルームとスイートは、パーソナライズされたサービスと特別な特典を備えた、海上での完璧な住まいです。各客室には、アラジン、アナと雪の女王、リトルマーメイド、アベンジャーズなど、人気のディズニーやマーベル映画からインスピレーションを得た、思慮深いデザイン要素と厳選されたアートワークがあしらわれています。`,
            carousel: [
                {
                    dom: <dl className="card-item">
                        <dt className="card-item__head">
                            <span className="jp">ロイヤルスイート</span>
                            <span className="en" lang="en">Royal Suite</span>
                        </dt>
                        <dd className="card-item__body">
                            <figure>
                                <Image src={getImagePath("page/concierge/img02-slide01.jpg")} alt="ロイヤルスイートイメージ" width={297} height={170} />
                                <figcaption>Artist Concept Only &copy;Disney</figcaption>
                            </figure>
                        </dd>
                    </dl>
                },
                {
                    dom: <dl className="card-item">
                        <dt className="card-item__head">
                            <span className="jp">オーシャンビュースイート</span>
                            <span className="en" lang="en">Oceanview Suite</span>
                        </dt>
                        <dd className="card-item__body">
                            <figure>
                                <Image src={getImagePath("page/concierge/img02-slide02.jpg")} alt="オーシャンビュースイートイメージ" width={297} height={170} />
                                <figcaption>Artist Concept Only &copy;Disney</figcaption>
                            </figure>
                        </dd>
                    </dl>
                },
                {
                    dom: <dl className="card-item">
                        <dt className="card-item__head">
                            <span className="jp">ベランダ</span>
                            <span className="en" lang="en">Garden View Verandah</span>
                        </dt>
                        <dd className="card-item__body">
                            <figure>
                                <Image src={getImagePath("page/concierge/img02-slide03.jpg")} alt="ベランダイメージ" width={297} height={170} />
                                <figcaption>Artist Concept Only &copy;Disney</figcaption>
                            </figure>
                        </dd>
                    </dl>
                },
                {
                    dom: <dl className="card-item">
                        <dt className="card-item__head">
                            <span className="jp">オーシャンビュー</span>
                            <span className="en" lang="en">Oceanview Stateroom</span>
                        </dt>
                        <dd className="card-item__body">
                            <figure>
                                <Image src={getImagePath("page/concierge/img02-slide04.jpg")} alt="オーシャンビューイメージ" width={297} height={170} />
                                <figcaption>Artist Concept Only &copy;Disney</figcaption>
                            </figure>
                        </dd>
                    </dl>
                },
                {
                    dom: <dl className="card-item">
                        <dt className="card-item__head">
                            <span className="jp">インサイド</span>
                            <span className="en" lang="en">Inside Stateroom</span>
                        </dt>
                        <dd className="card-item__body">
                            <figure>
                                <Image src={getImagePath("page/concierge/img02-slide05.jpg")} alt="インサイドイメージ" width={297} height={170} />
                                <figcaption>Artist Concept Only &copy;Disney</figcaption>
                            </figure>
                        </dd>
                    </dl>
                },
            ],
            caption: ""
        },
        {
            id: "sec03",
            name: `コンシェルジュラウンジ`,
            en: `Lounges`,
            desc: `ディズニーアニメ映画「アラジン」に登場する神話の都市アグラバーにインスピレーションを得たこの洗練されたラウンジで、まったく新しい世界に足を踏み入れてください。一日中、くつろぎながら、軽食やグルメな軽食をお楽しみください。ラウンジのワインバーは魔法のじゅうたんの形をしており、曲線とタッセルライトが遊び心を加えています。ジーニー風のタッチはキッズコーナーにも広がっており、小さな冒険家たちは軽食を楽しみながらディズニー映画を鑑賞できます。`,
            slides: [
                { dom: <Image src={getImagePath("page/concierge/img03-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/concierge/img03-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/concierge/img03-slide01.jpg")} alt="" width={784} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney"
        },
        {
            id: "sec04",
            name: `屋外サンデッキ`,
            en: `Outdoor Sundeck`,
            desc: `キラキラと輝き、壮麗な、広々としたコンシェルジュ サンデッキ。豪華なラウンジャーでゆったりとくつろぎましょう。ジェットスパで体を温めたり、日陰のある大きなプールで日光浴を楽しんだり。船の前方から壮大な海のパノラマビューを眺めながら、これらすべてをお楽しみください。`,
            slides: [
                { dom: <Image src={getImagePath("page/concierge/img04-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/concierge/img04-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/concierge/img04-slide01.jpg")} alt="" width={784} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney"
        },
        {
            id: "sec05",
            name: `スパスイート`,
            en: `Spa`,
            desc: `専用のコンシェルジュスパで心身ともにリフレッシュしましょう。このスパには、メリー・ポピンズにインスピレーションを得た「プラクティカリー・パーフェクト・スパスイート」と、「ズートピア」の遊び心と魅力が特徴の「ホップス・ヘブン・スパスイート」の2つのスーペリアスパスイートがあります。どちらの洗練されたスペースにも、海を一望できる屋内と屋外のラウンジエリア、ヘアとネイルのサービスのためのサロン席、トリートメントルーム、間接照明の心地よいシャワーが備わっています。スイートを別々に予約することも、組み合わせて最低4時間、最大8名様までご予約いただくこともできます。スイートとスパサービスは別々にご購入いただけます。`,
            slides: [
                { dom: <Image src={getImagePath("page/concierge/img05-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/concierge/img05-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/concierge/img05-slide01.jpg")} alt="" width={784} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney"
        },
    ]

    const Section = (props: {
        id: string,
        name: string,
        en: string,
        lead?: string,
        desc: string,
        img?: string
        slides?: {
            dom: React.ReactNode
        }[],
        carousel?: {
            dom: React.ReactNode
        }[],
        caption: string
    }) => {
        const { id, name, en, desc, lead, img, slides, carousel, caption } = props;

        return (
            <section id={id} className="p-concierge-section">
                <OnmHeadline01 hlLevel="h2" jp={name} en={en} />
                <div className="concierge-block">
                    {lead &&
                        <div className="lead">
                            <p dangerouslySetInnerHTML={{ __html: lead }}></p>
                        </div>
                    }
                    {img &&
                        <div className="img">
                            <Image src={getImagePath(img)} alt="" width={784} height={440} />
                        </div>
                    }
                    {slides && slides.length > 0 && <Slider type="default" slides={slides} options={{ loop: true }} />}
                    {carousel && carousel.length > 0 && <Slider type="carousel" slides={carousel} options={{ align: 'start' }} />}
                    {caption && <div className="caption" dangerouslySetInnerHTML={{ __html: caption }}></div>}
                    <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                </div>
            </section>
        )
    }

    return (
        <div className="p-concierge">
            <Breadcrumb items={breadcrumbItems} />
            <Title type="slider" title="コンシェルジュルーム" en="Concierge" slider={heroSliderItems} />
            <GSAPToggleContainer tag="div" className="l-has-aside-container" toggle={{ logo: false, color: "blue" }}>
                <main className="l-main">
                    <article className="l-article">
                        {
                            sectionArray.map((section, index) => (
                                <Section
                                    key={index}
                                    id={section.id}
                                    name={section.name}
                                    en={section.en}
                                    lead={section.lead}
                                    desc={section.desc}
                                    img={section.img}
                                    slides={section.slides}
                                    carousel={section.carousel}
                                    caption={section.caption}
                                />
                            ))
                        }
                        <section id="sec06" className="p-concierge-section">
                            <OnmHeadline01 hlLevel="h2" jp="特別なアメニティ" en='Exclusive <br class="nopc" />Amenities' />
                            <div className="concierge-block">
                                <div className="card-list">
                                    <dl className="card-item">
                                        <dt className="card-item__head">
                                            <span className="jp">スパ＆フィットネスエリア</span>
                                            <span className="en" lang="en">Spa & Fitness Area</span>
                                        </dt>
                                        <dd className="card-item__body">
                                            <figure>
                                                <Image src={getImagePath("page/concierge/img06-card01.jpg")} alt="スパ＆フィットネスエリアイメージ" width={334} height={196} />
                                                <figcaption>Artist Concept Only &copy;Disney</figcaption>
                                            </figure>
                                            <span className="desc">コンシェルジュスパの自然からインスピレーションを得た静寂のオアシスでリラックスしてリフレッシュしてください。マッサージ、フェイシャル、鍼治療などの贅沢なスパと美容トリートメントをお楽しみください。また、コンシェルジュゲスト専用の設備の整ったエクササイズとヨガの施設がスパに隣接しており、海上でも体調を整えてお過ごしいただけます。</span>
                                        </dd>
                                    </dl>
                                    <dl className="card-item">
                                        <dt className="card-item__head">
                                            <span className="jp">限定ショッピング</span>
                                            <span className="en" lang="en">Exclusive Shopping</span>
                                        </dt>
                                        <dd className="card-item__body">
                                            <figure>
                                                <Image src={getImagePath("page/concierge/img06-card01.jpg")} alt="限定ショッピングイメージ" width={334} height={196} />
                                                <figcaption>Artist Concept Only &copy;Disney</figcaption>
                                            </figure>
                                            <span className="desc">船内の豊富なアメニティに加え、コンシェルジュゲストは、高級品、高級ジュエリー、ディズニーのコレクションや商品を取り揃えた特別なショッピング体験もお楽しみいただけます。</span>
                                        </dd>
                                    </dl>
                                    <dl className="card-item">
                                        <dt className="card-item__head">
                                            <span className="jp">パーソナライズされたサービスの<br />レベルの向上</span>
                                            <span className="en" lang="en">Heightened Level of Personalized Service</span>
                                        </dt>
                                        <dd className="card-item__body">
                                            <figure>
                                                <Image src={getImagePath("page/concierge/img06-card01.jpg")} alt="パーソナライズされたサービスのレベルの向上イメージ" width={334} height={196} />
                                                <figcaption>Artist Concept Only &copy;Disney</figcaption>
                                            </figure>
                                            <span className="desc">ディズニーならではのホスピタリティを極限まで高めたサービスをご体験ください。専属チームがご旅行前とご旅行中にお手伝いいたします。旅程の作成やご予約の管理から、スイート内でのお食事やお祝いのプランニングまで、専属のコンシェルジュチームが細部まで細心の注意を払って対応いたします。</span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </section>
                    </article>
                </main>
                <Aside page="page" nav={navArray} />
            </GSAPToggleContainer>
        </div>
    )
}