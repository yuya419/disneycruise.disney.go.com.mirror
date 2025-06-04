/**
 * @name page.tsx
 * @description ダイニングページ用レイアウト
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
import "./styles/dining.scss";

export function Page() {
    const { getImagePath } = helper();

    const breadcrumbItems = [
        { label: "ダイニング", href: "/dining/", },
    ];

    const navArray = {
        parent01: [
            {
                item: ["ローテーショナル・ダイニング", "sec01"],
                child: [
                    { item: ['キャラクターと会える', "theme01"] },
                    { item: ['アニメ制作がテーマ', "theme02"] },
                    { item: ['キャラクターオマージュ', "theme03"] },
                ]
            }
        ],
        parent02: [
            {
                item: ['プレミアムダイニング<br class="nosp"/>& ラウンジ', "sec02"],
                child: [
                    { item: ['パロ・トラットリア', "area01"] },
                    { item: ['マイク＆サリーズ​', "area02"] },
                    { item: ['バッカニアバー', "area03"] },
                ]
            }
        ],
        parent03: [
            {
                item: ['クイックサービスダイニング​', "sec03"],
            }
        ],
    }

    const heroSliderItems = [
        {
            dom: <><figure>
                <Image src={getImagePath("page/dining/hero01.jpg")} alt="ダイニングイメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only <br />&copy;Disney &copy;Disney/Pixar</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/dining/hero02.jpg")} alt="ダイニングイメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only <br />&copy;Disney</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/dining/hero03.jpg")} alt="ダイニングイメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only <br />&copy;Disney</figcaption>
            </figure></>
        },
    ]

    const themeArray = [
        {
            id: "theme01",
            label: "Theme",
            jp: "キャラクターと会える",
            en: "Meet the characters",
            num: 1,
            attention: `※「ハリウッドスポットライトクラブ」又は<br class="nopc" />「ナビゲーターズクラブ」`,
            cards: [
                {
                    src: "page/dining/theme01-img01.jpg",
                    alt: "スパ＆フィットネスエリアイメージ",
                    caption: "Artist Concept Only &copy;Disney",
                    jp: "ハリウッドスポットライトクラブ​",
                    en: "Hollywood Spotlight Club",
                    desc: "「ハリウッド・スポットライト・クラブ」は、ハリウッドの黄金時代を彷彿とさせるエクスクルーシブなダイニングクラブです。食事が始まると同時にショーもスタート。ミッキーマウスとその仲間たちが華やかな衣装を身にまとい、ステージで家族、友達、そして楽しさを祝う忘れられないミュージカルパフォーマンスを披露します。",
                },
                {
                    src: "page/dining/theme01-img02.jpg",
                    alt: "ナビゲーターズクラブ​",
                    caption: "Artist Concept Only &copy;Disney",
                    jp: "ナビゲーターズクラブ​",
                    en: "Navigators Club",
                    desc: "「ナビゲーターズ・クラブ」では、ゲストはクルーズの黄金時代へとタイムスリップします。船の伝統であるエクスクルーシブな「キャプテン・テーブル」のディナーを楽しみながら、ミッキーマウスとその仲間たちが織り成す世界を旅するようなワクワクする物語と、魅力的な音楽パフォーマンスが繰り広げられます。​"
                }
            ]
        },
        {
            id: "theme02",
            label: "Theme",
            jp: "アニメ制作がテーマ",
            en: "Anime Production",
            num: 2,
            attention: `※「アニメーターズパレット」又は<br class="nopc" />「アニメーターズテーブル」`,
            cards: [
                {
                    src: "page/dining/theme02-img01.jpg",
                    alt: "アニメーターズパレット",
                    caption: "Artist Concept Only &copy;Disney &copy;Disney/Pixar",
                    jp: "アニメーターズパレット",
                    en: "Animator's Palate",
                    desc: "「アニメーターズ・パレット」では、ディズニーとピクサーのアニメーションの遺産が祝われます。夕食が進むにつれて、このエレガントなダイニングルームは、モノクロから鮮やかなフルカラーへと変化し、まるで映画のような体験が広がります。お気に入りのディズニーとピクサー映画からのアートワークや小道具に囲まれ、映画制作の魔法に敬意を表する細部までこだわりが感じられます。​"
                },
                {
                    src: "page/dining/theme02-img02.jpg",
                    alt: "アニメーターズテーブル​",
                    caption: "Artist Concept Only &copy;Disney/Pixar",
                    jp: "アニメーターズテーブル​",
                    en: "Animator's Table",
                    desc: "「アニメーターズ・テーブル」では、インクとペイントで描かれたアニメーションの時を超えた魔法に、ゲストはきっと魅了されることでしょう。ここでは、ゲストが手描きしたスケッチが目の前で鮮やかなアニメーションとして命を吹き込まれます。この親密なダイニングギャラリーは、アイコニックな映画からの本物のアートワークで飾られ、創造性を讃え、想像力をかき立てる雰囲気が漂います。​"
                }
            ]
        },
        {
            id: "theme03",
            label: "Theme",
            jp: "キャラクターオマージュ",
            en: "Character Homage",
            num: 3,
            attention: `※「ピクサーマーケットレストラン」又は<br class="nopc" />「エンチャンテッドサマーレストラン」`,
            cards: [
                {
                    src: "page/dining/theme03-img01.jpg",
                    alt: "ピクサーマーケットレストラン​",
                    caption: "Artist Concept Only &copy;Disney &copy;Disney/Pixar",
                    jp: "ピクサーマーケットレストラン​",
                    en: "Pixar Market Restaurant",
                    desc: "「ピクサー・マーケット・レストラン」では、ピクサー・アニメーション・スタジオの創造的な精神を祝福し、数々の愛されるピクサー映画の魅力を感じることができます。昼間は、ビュッフェスタイルの朝食とランチが楽しめ、夕方には特別なディナーメニューが提供されます。ピクサー映画の世界観に包まれたこのレストランで、味覚だけでなく心も満たされるひとときをお過ごしください。​"
                },
                {
                    src: "page/dining/theme03-img02.jpg",
                    alt: "エンチャンテッドサマーレストラン​​",
                    caption: "Artist Concept Only &copy;Disney",
                    jp: "エンチャンテッドサマーレストラン​​",
                    en: "Enchanted Summer Restaurant",
                    desc: "「エンチャンテッド・サマー・レストラン」では、ディズニー映画『塔の上のラプンツェル』と『アナと雪の女王』にインスパイアされた2つの異なるダイニングルームが待っています。ゲストは、温かみのある村の食堂のような魅力的な空間で、永遠に続く夏の喜びを感じながら食事を楽しむことができます。それぞれのエリアは、映画の世界観に包まれた特別な体験を提供し、心温まるひとときをお届けします。​"
                }
            ]
        },
    ]

    const themeBlock = (props: {
        id: string;
        label: string;
        jp: string;
        en: string;
        num: number;
        attention?: string;
        cards?: {
            src: string;
            alt: string;
            caption: string;
            jp: string;
            en: string;
            desc: string;
        }[];
    }) => {
        const { id, label, jp, en, num, attention, cards } = props;

        return (
            <div key={id} id={id} className="theme-block">
                <OnmHeadline02 hlLevel="h3" jp={jp} en={en} label={label} num={num} />
                {attention &&
                    <div className="attention">
                        <p dangerouslySetInnerHTML={{ __html: attention }}></p>
                    </div>
                }
                {cards &&
                    <div className="card-list">
                        {
                            cards.map((card, index) => {
                                return (
                                    <dl key={index} className="card-item">
                                        <dt className="card-item__head">
                                            <figure>
                                                <Image src={getImagePath(card.src)} alt={card.alt} width={640} height={380} />
                                                <figcaption dangerouslySetInnerHTML={{ __html: card.caption }}></figcaption>
                                            </figure>
                                            <span className="jp" dangerouslySetInnerHTML={{ __html: card.jp }}></span>
                                            <span className="en" lang="en" dangerouslySetInnerHTML={{ __html: card.en }}></span>
                                        </dt>
                                        <dd className="card-item__body">
                                            <span className="desc" dangerouslySetInnerHTML={{ __html: card.desc }}></span>
                                        </dd>
                                    </dl>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }

    const areaArray = [
        {
            id: "area01",
            name: "パロ・トラットリア",
            en: "Palo Trattoria",
            desc: "「パロ・トラットリア」では、18歳以上の大人のゲストが贅沢なひとときを楽しめます。ここでは、アンティパスティ、パスタ、ピザ、シーフード、ステーキなど、アートのように仕上げられたメニューを堪能できます。さらに、厳選された上質なイタリアワインや力強いクラフトビールと共に、至高の食事をお楽しみいただけます。",
            slides: [
                { dom: <Image src={getImagePath("page/dining/img01-slide01.jpg")} alt="パロ・トラットリアのイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/dining/img01-slide01.jpg")} alt="パロ・トラットリアのイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/dining/img01-slide01.jpg")} alt="パロ・トラットリアのイメージ" width={704} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney"
        },
        {
            id: "area02",
            name: "マイク＆サリーズ",
            en: "Mike & Sally's",
            desc: "ピクサーの映画『モンスターズ・インク』に登場する有名な和風の食堂にインスパイアされたこのファミリー向けレストランでは、世界的に有名なアジア料理を3つの異なるダイニング体験でお楽しみいただけます。フルサービスの日本風ステーキハウス、活気ある鉄板焼きルーム、そして洗練された寿司と酒バーが、ゲストに特別な食のひとときを提供します。",
            slides: [
                { dom: <Image src={getImagePath("page/dining/img02-slide01.jpg")} alt="マイク＆サリーズのイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/dining/img02-slide01.jpg")} alt="マイク＆サリーズのイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/dining/img02-slide01.jpg")} alt="マイク＆サリーズのイメージ" width={704} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney/Pixar"
        },
        {
            id: "area03",
            name: "バッカニアバー",
            en: "Buccaneer Bar",
            desc: "ゲストは、豪快な乾杯とともにブーツを踏み鳴らし、スワッシュバッカリングなスタイルでライブスポーツを楽しみながら、高級なビールを味わうことができる、パイレーツをテーマにしたバーで盛り上がることができます。このバーは、船内にある多くのラウンジのひとつで、冒険心あふれる雰囲気が漂う場所です。​",
            slides: [
                { dom: <Image src={getImagePath("page/dining/img03-slide01.jpg")} alt="バッカニアバーのイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/dining/img03-slide01.jpg")} alt="バッカニアバーのイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/dining/img03-slide01.jpg")} alt="バッカニアバーのイメージ" width={704} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney"
        },
    ]

    const AreaBlcok = (props: {
        id: string,
        name: string,
        en: string,
        desc: string,
        slides: {
            dom: React.ReactNode
        }[],
        caption: string
    }) => {
        const { id, name, en, desc, slides, caption } = props;
        const num = Number(id.replace("area", ""));

        return (
            <div id={id} className="area-block">
                <hgroup className="area-block__head">
                    <h3 dangerouslySetInnerHTML={{ __html: name }}></h3>
                    <p lang="en" dangerouslySetInnerHTML={{ __html: en }}></p>
                </hgroup>
                <Slider type="default" slides={slides} options={{ loop: true }} />
                <div className="caption" dangerouslySetInnerHTML={{ __html: caption }}></div>
                <p>{desc}</p>
            </div>
        )
    }

    const carousel = [
        {
            dom: <dl className="card-item">
                <dt className="card-item__head">
                    <span className="jp">グランマタラズキッチン​</span>
                    <span className="en" lang="en">Gramma Tala’s Kitchen</span>
                </dt>
                <dd className="card-item__body">
                    <figure>
                        <Image src={getImagePath("page/dining/img04-slide01.jpg")} alt="グランマタラズキッチン​" width={297} height={170} />
                        <figcaption>Artist Concept Only &copy;Disney</figcaption>
                    </figure>
                    <span className="desc">ディズニーの映画『モアナ』にインスパイアされたこの場所では、アジアと南太平洋の風味を取り入れた料理を、素早く提供します。​</span>
                </dd>
            </dl>
        },
        {
            dom: <dl className="card-item">
                <dt className="card-item__head">
                    <span className="jp">モーグリズイータリー</span>
                    <span className="en" lang="en">Mowgli’s Eatery</span>
                </dt>
                <dd className="card-item__body">
                    <figure>
                        <Image src={getImagePath("page/dining/img04-slide02.jpg")} alt="モーグリズイータリー" width={297} height={170} />
                        <figcaption>Artist Concept Only &copy;Disney</figcaption>
                    </figure>
                    <span className="desc">ディズニーの映画『ジャングル・ブック』にインスパイアされたこのレストランでは、インディアン、ベジタリアン、そして地域特有の料理が楽しめます。​</span>
                </dd>
            </dl>
        },
        {
            dom: <dl className="card-item">
                <dt className="card-item__head">
                    <span className="jp">スティッチズオハナグリル​</span>
                    <span className="en" lang="en">Stitch’s Ohana Grill</span>
                </dt>
                <dd className="card-item__body">
                    <figure>
                        <Image src={getImagePath("page/dining/img04-slide03.jpg")} alt="スティッチズオハナグリル​" width={297} height={170} />
                        <figcaption>Artist Concept Only &copy;Disney</figcaption>
                    </figure>
                    <span className="desc">テイクアウト店。クラシックなアメリカン料理にアイランド風のひねりを加えた料理が楽しめます。​</span>
                </dd>
            </dl>
        },
        {
            dom: <dl className="card-item">
                <dt className="card-item__head">
                    <span className="jp">ビウィッチングボバ＆ブリューズ​​</span>
                    <span className="en" lang="en">Bewitching Boba & Brews</span>
                </dt>
                <dd className="card-item__body">
                    <figure>
                        <Image src={getImagePath("page/dining/img04-slide04.jpg")} alt="ビウィッチングボバ＆ブリューズ​​" width={297} height={170} />
                        <figcaption>Artist Concept Only &copy;Disney</figcaption>
                    </figure>
                    <span className="desc">ディズニーのヴィランズにインスパイアされたこのカフェでは、魅力的で少し悪魔的なボバドリンクを楽しむことができます。​</span>
                </dd>
            </dl>
        },
    ]

    return (
        <div className="p-dining">
            <Breadcrumb items={breadcrumbItems} />
            <Title type="slider" title="ダイニング" en="Dining" slider={heroSliderItems} />
            <GSAPToggleContainer tag="div" className="l-has-aside-container" toggle={{ logo: false, color: "blue" }}>
                <main className="l-main">
                    <article className="l-article">
                        <section id="sec01" className="p-dining-section">
                            <OnmHeadline01 hlLevel="h2" jp="ローテーショナル・ダイニング" en={`3 Dining <br class="nopc" />Experiences`} />
                            <div className="dining-block">
                                <div className="lead">
                                    <p>ゲストの航海中に、ディズニーならではの3つの異なるダイニング体験をお楽しみいただけます。<br />※指定のレストランをご利用いただきます。<br className="nopc" />お選びいただく事はできません。</p>
                                </div>
                                <div className="theme">
                                    {themeArray.map((theme, index) => {
                                        return themeBlock(theme);
                                    })}
                                </div>
                            </div>
                        </section>
                        <section id="sec02" className="p-dining-section">
                            <OnmHeadline01 hlLevel="h2" jp="プレミアムダイニング＆ラウンジ" en={`Premium Dining <br class="nopc" />& Lounge`} />
                            <div className="dining-block">
                                <div className="area">
                                    {
                                        areaArray.map((area, index) => (
                                            <AreaBlcok key={index} {...area} />
                                        ))
                                    }
                                </div>
                            </div>
                        </section>
                        <section id="sec03" className="p-dining-section">
                            <OnmHeadline01 hlLevel="h2" jp="クイックサービスダイニング​" en={`Quick Service <br className="nopc" />Dining`} />
                            <div className="dining-block">
                                <div className="servise">
                                    <Slider type="carousel" slides={carousel} options={{ align: 'start' }} />
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