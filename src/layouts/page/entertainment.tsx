/**
 * @name page.tsx
 * @description エンターテイメントページ用レイアウト
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
import "./styles/entertainment.scss";

export function Page() {
    const { getImagePath } = helper();

    const breadcrumbItems = [
        { label: "エンターテイメント", href: "/entertainment/", },
    ];

    const navArray = {
        parent01: [{ item: ['アベンジャーズ<br class="nosp"/>アッセンブル！​​', "sec01"], }],
        parent02: [{ item: ['ダッフィーとフレンドシップ', "sec02"], }],
        parent03: [{ item: ['ジャック・スパロウ船長と<br class="nosp"/>セイレーンの女王', "sec03"], }],
        parent04: [{ item: ['リメンバー', "sec04"], }],
        parent05: [{ item: ['ディズニーシーズ ザ・<br class="nosp"/>アドベンチャー​', "sec05"], }],
        parent06: [{ item: ['モアナ：コールトゥザシー​', "sec06"], }],
        parent07: [{ item: ['ベイマックス スーパー<br class="nosp"/>エクササイズエキスポ​​', "sec07"], }],
    }

    const heroSliderItems = [
        {
            dom: <><figure>
                <Image src={getImagePath("page/entertainment/hero01.jpg")} alt="「アベンジャーズアッセンブル！​​」イメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only<br />&copy;DISNEY ©MARVEL</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/entertainment/hero02.jpg")} alt="「ジャック・スパロウ船長とセイレーンの女王​」イメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only<br />&copy;Disney</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/entertainment/hero03.jpg")} alt="「ディズニーシーズ ザ・アドベンチャー​​​」イメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only<br />&copy;Disney</figcaption>
            </figure></>
        },
    ]

    const sectionArray = [
        {
            id: "sec01",
            name: `アベンジャーズ アッセンブル！​​`,
            en: `Avengers Assemble`,
            desc: "ディズニー・イマジネーション・ガーデンのガーデンステージで繰り広げられる、アクション満載のステージスペクタクルで、マーベルのヒーローとヴィランの壮大な戦いに備えましょう！驚異的なスタントや目を見張るスペシャルエフェクトの数々に、思わず手に汗握ること間違いなしです。スパイダーマン、アイアンマン、キャプテン・アメリカ、ブラック・ウィドウ、ソー、ブラックパンサーなど、マーベル・シネマティック・ユニバースの人気キャラクターたちの驚くべき力を目撃してください。そして、ユーモアたっぷりの「おしゃべり傭兵」デッドプール本人も登場する、笑いと興奮に満ちた瞬間をお見逃しなく！​",
            slides: [
                { dom: <Image src={getImagePath("page/entertainment/img01-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img01-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img01-slide01.jpg")} alt="" width={784} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;DISNEY &copy;2024 MARVEL"
        },
        {
            id: "sec02",
            name: `ダッフィーとフレンドシップ`,
            en: `Duffy & <br class="nopc" />the Friend Ship`,
            desc: "愛らしいキャラクターたちと陽気なガイド、ティッピー・ブルーと一緒に、心温まる大海原の冒険に出かけましょう。魅惑的な歌、素晴らしい映像、楽しいひとときとともに、海の魔法、想像力の力、そして友情の本当の意味を学びましょう。<br />ショーの後はキャラクターたちに会い、ダッフィー＆フレンズ・ショップで大切な記念品を手に入れましょう。ダッフィー＆フレンズ・ディスカバリー・クエストで楽しみを広げましょう。船内の手がかりをたどって失くしたものを見つけ、特別な賞品を獲得しましょう。",
            slides: [
                { dom: <Image src={getImagePath("page/entertainment/img02-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img02-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img02-slide01.jpg")} alt="" width={784} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney"
        },
        {
            id: "sec03",
            name: `ジャック・スパロウ船長とセイレーンの女王`,
            en: `Capt. Jack Sparrow <br />& the Siren Queen`,
            desc: "帆を揚げ、いたずら好きで魅力的なジャック・スパロウ船長とその海賊仲間とともに、邪悪な呪いを解くための大胆な冒険に出発します。この冒険ショーでは、ジャック船長が、LED スクリーンで生き生きと映し出される巨大なセイレーン・クイーンと対決しながら、希少で素晴らしい宝物を探します。",
            slides: [
                { dom: <Image src={getImagePath("page/entertainment/img03-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img03-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img03-slide01.jpg")} alt="" width={784} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney"
        },
        {
            id: "sec04",
            name: `リメンバー`,
            en: `Remember`,
            desc: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語。この全く新しいミュージカル・エクストラバガンザでは、『リメンバー・ミー』、『リトル・マーメイド』、『アラジン』、そしてその他のディズニー＆ピクサーの人気アニメーション映画のヒーローたちが登場し、音楽、希望、そして大切な思い出の力でEVEの記憶を取り戻す冒険を繰り広げます。",
            slides: [
                { dom: <Image src={getImagePath("page/entertainment/img04-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img04-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img04-slide01.jpg")} alt="" width={784} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney/Pixar"
        },
        {
            id: "sec05",
            name: `ディズニーシーズ ザ・アドベンチャー​`,
            en: `Disney Seas <br class="nopc" />The Adventure`,
            desc: "お気に入りのディズニー＆ピクサーの仲間たちと一緒に、活気あふれるミュージカルの旅で美しい青い海を航海しましょう！ショーの中では、『アナと雪の女王』、『塔の上のラプンツェル』、『ファインディング・ニモ』、『ヘラクレス』など、さまざまなキャラクターの登場やパフォーマンスを楽しむことができます。​",
            slides: [
                { dom: <Image src={getImagePath("page/entertainment/img05-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img05-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img05-slide01.jpg")} alt="" width={784} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney"
        },
        {
            id: "sec06",
            name: `モアナ：コールトゥザシー​`,
            en: `Call to the Sea`,
            desc: "「ウェイファインダー・ベイ」の“岸辺”で繰り広げられる、ユニークなミュージカル版『モアナと伝説の海』をリラックスしてお楽しみください。この壮大なミュージカルは、島の語り手たちによる魅力的な物語を通して、モアナの勇気、自己発見、友情に満ちた冒険を描きます。音楽、ダンス、人形劇、そして水の演出が織りなす感動のステージをご堪能ください。​",
            slides: [
                { dom: <Image src={getImagePath("page/entertainment/img06-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img06-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img06-slide01.jpg")} alt="" width={784} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney/Pixar"
        },
        {
            id: "sec07",
            name: `ベイマックス スーパーエクササイズエキスポ​​`,
            en: `Baymax Super <br class="nopc" />Exercise Expo`,
            desc: "ディズニー・イマジネーション・ガーデンのガーデンステージで、『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！この特別なエンターテイメント体験では、ディズニー映画スタジオの作品にインスパイアされた楽しい動きを楽しめます。​",
            slides: [
                { dom: <Image src={getImagePath("page/entertainment/img07-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img07-slide01.jpg")} alt="" width={784} height={440} /> },
                { dom: <Image src={getImagePath("page/entertainment/img07-slide01.jpg")} alt="" width={784} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney/Pixar"
        },
    ]

    const Section = (props: {
        id: string,
        name: string,
        en: string,
        desc: string,
        img?: string
        slides?: {
            dom: React.ReactNode
        }[],
        caption: string
    }) => {
        const { id, name, en, desc, img, slides } = props;

        return (
            <section id={id} className="p-entertainment-section">
                <OnmHeadline01 hlLevel="h2" jp={name} en={en} />
                <div className="entertainment-block">
                    {img &&
                        <div className="img">
                            <Image src={getImagePath(img)} alt="" width={784} height={440} />
                        </div>
                    }
                    {slides && slides.length > 0 && <Slider type="default" slides={slides} options={{ loop: true }} />}
                    <div className="caption" dangerouslySetInnerHTML={{ __html: props.caption }}></div>
                    <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                </div>
            </section>
        )
    }

    return (
        <div className="p-entertainment">
            <Breadcrumb items={breadcrumbItems} />
            <Title type="slider" title="エンターテイメント" en="Entertainment" slider={heroSliderItems} />
            <GSAPToggleContainer tag="div" className="l-has-aside-container" toggle={{ logo: false, color: "blue" }}>
                <main className="l-main">
                    <article className="l-article">
                        <section className="p-entertainment-section">
                            <div className="message">
                                <div className="accent is-top">
                                    <span className="bar"></span>
                                    <svg className="onm"><use href="#i-onm-03"></use></svg>
                                    <span className="bar"></span>
                                </div>
                                <div className="message-box">
                                    <hgroup className="message__head">
                                        <h2>伝説のエンターテイメント</h2>
                                        <p lang="en">Legendary <br className="nopc" />Entertainment</p>
                                    </hgroup>
                                    <div className="message__detail">
                                        <p>華やかなブロードウェイスタイルのショー、楽しいデッキパーティー、映画上映、<br className="nosp"/>ディズニー、ピクサー、マーベルのお気に入りの仲間たちとの忘れられない交流会など、<br className="nosp"/>ディズニーの魔法を体験してください。</p>
                                    </div>
                                </div>
                                <div className="accent is-bottom">
                                    <span className="bar"></span>
                                    <svg className="onm"><use href="#i-onm-03"></use></svg>
                                    <span className="bar"></span>
                                </div>
                            </div>
                        </section>
                        {
                            sectionArray.map((item, index) => {
                                return (
                                    <Section
                                        key={index}
                                        id={item.id}
                                        name={item.name}
                                        en={item.en}
                                        desc={item.desc}
                                        slides={item.slides}
                                        caption={item.caption}
                                    />
                                )
                            })
                        }
                    </article>
                </main>
                <Aside page="page" nav={navArray} />
            </GSAPToggleContainer>
        </div>
    )
}