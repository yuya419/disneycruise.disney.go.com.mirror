/**
 * @name page.tsx
 * @description 7つのテーマエリアページ用レイアウト
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
import "./styles/themedAreas.scss";

export function Page() {
    const { getImagePath } = helper();

    const breadcrumbItems = [
        { label: "客船紹介・7つのテーマエリア", href: "/themed-areas/", },
    ];

    const navArray = {
        parent01: [
            {
                item: ["客船紹介", "sec01"],
            }
        ],
        parent02: [
            {
                item: ["7つのテーマエリア", "sec02"],
                child: [
                    { item: ['ディズニー<br class="nosp"/>イマジネーションガーデン', "area01"] },
                    { item: ['ディズニー<br class="nosp"/>ディスカバリーリーフ', "area02"] },
                    { item: ['トイストーリープレイス​', "area03"] },
                    { item: ['マーベルランディング​​', "area04"] },
                    { item: ['ウェイファインダーベイ​', "area05"] },
                    { item: ['サンフランソウキョウ・<br class="nosp"/>ストリート', "area06"] },
                    { item: ['タウン・スクエア', "area07"] },
                ]
            }
        ],
    }

    const heroSliderItems = [
        {
            dom: <><figure>
                <Image src={getImagePath("page/themed-areas/area01/hero.jpg")} alt="ディズニーイマジネーションガーデン" width={1366} height={768} priority />
                <figcaption>Artist Concept Only<br />&copy;Disney &copy;Disney/Pixar<br />&copy;2024 MARVEL</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/themed-areas/area02/hero.jpg")} alt="ディズニーディスカバリーリーフ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only<br />&copy;Disney &copy;Disney/Pixar</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/themed-areas/area03/hero.jpg")} alt="トイストーリープレイス​" width={1366} height={768} priority />
                <figcaption>Artist Concept Only<br />&copy;Disney &copy;Disney/Pixar</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/themed-areas/area04/hero.jpg")} alt="マーベルランディング​​" width={1366} height={768} priority />
                <figcaption>Artist Concept Only<br />&copy;Disney &copy;2024 MARVEL</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/themed-areas/area05/hero.jpg")} alt="ウェイファインダーベイ​" width={1366} height={768} priority />
                <figcaption>Artist Concept Only<br />&copy;Disney</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/themed-areas/area06/hero.jpg")} alt="サンフランソウキョウ・ストリート" width={1366} height={768} priority />
                <figcaption>Artist Concept Only<br />&copy;Disney</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/themed-areas/area07/hero.jpg")} alt="タウン・スクエア" width={1366} height={768} priority />
                <figcaption>Artist Concept Only<br />&copy;Disney &copy;Disney/Pixar</figcaption>
            </figure></>
        }
    ]

    const areaArray = [
        {
            id: "area01",
            name: `ディズニー<br class="nopc"/>イマジネーションガーデン`,
            en: "Disney Imagination Garden",
            desc: "ディズニー・アドベンチャーに乗り込んだゲストは、まず「ディズニー・イマジネーション・ガーデン」でその旅をスタートします。ここは、開放感あふれる魔法の谷、魅力的な庭園、そしてユニークなパフォーマンス会場が一体となった場所です。この場所では、ゲスト自身が魔法を創り出すインスピレーションを得るとともに、次の冒険の扉を開けることができるでしょう。​",
            slides: [
                { dom: <Image src={getImagePath("page/themed-areas/area01/slide01.jpg")} alt="ディズニーイマジネーションガーデンのイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area01/slide01.jpg")} alt="ディズニーイマジネーションガーデンのイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area01/slide01.jpg")} alt="ディズニーイマジネーションガーデンのイメージ" width={704} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney &copy;Disney/Pixar &copy;2024 MARVEL"
        },
        {
            id: "area02",
            name: "ディズニーディスカバリーリーフ",
            en: "Disney Discovery Reef",
            desc: "「ディズニー・ディスカバリー・リーフ」では、ディズニーやピクサーの愛される水中の物語が、風通しの良い開放的な通路で生き生きと再現されます。このエリアは、レストラン、バー、カフェが並び、ゲストに美味しい食事とドリンクを提供します。夕日が沈むと、ここはまるで幻想的な世界に変わり、バイオルミネセンスの輝く楽園へと姿を変えるのです。美しい光に包まれたこの場所で、心躍るひとときをお楽しみください。",
            slides: [
                { dom: <Image src={getImagePath("page/themed-areas/area02/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area02/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area02/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney &copy;Disney/Pixar"
        },
        {
            id: "area03",
            name: "トイストーリープレイス​",
            en: "Toy Story Place",
            desc: "ディズニー・アドベンチャーの上層デッキに広がる「トイ・ストーリー・プレイス」では、家族向けのプールや複数のジャグジー、さまざまなウォーターアトラクションが楽しめます。飛行円盤型のスプラッシュ・ゾーンや、小さなお子さま向けの「トイ・ストーリー・スプラッシュ・パッド」、そしてウッディとジェシーのワイルド・スライドなど、アクション満載の水遊びが待っています。また、サンデッキ周辺には十分な座席があり、2つの巨大なファンネル・ビジョンスクリーンでエンターテイメントも楽しむことができます。",
            slides: [
                { dom: <Image src={getImagePath("page/themed-areas/area03/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area03/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area03/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney &copy;Disney/Pixar"
        },
        {
            id: "area04",
            name: "マーベルランディング​​",
            en: "Marvel Landing",
            desc: "ディズニー・アドベンチャーの上層デッキに広がるこの壮大なエリアは、マーベル・ユニバースから飛び出した、ビッグな個性を持つヒーローたちを祝う場所です。新米ヒーローからベテランのスーパーヒーローまで、ゲストは3つのダイナミックなアトラクションで、超パワーを発揮するヒーロー技術を体験できます。アトラクションには、アイアンサイクル・テストラン、ピム・クォンタム・レーサーズ、グルート・ギャラクシー・スピンがあり、まさにヒーロー気分を満喫できます。",
            slides: [
                { dom: <Image src={getImagePath("page/themed-areas/area04/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area04/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area04/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney &copy;2024 MARVEL"
        },
        {
            id: "area05",
            name: "ウェイファインダーベイ​",
            en: "Wayfinder Bay",
            desc: "ゲストは、ディズニー映画『モアナと伝説の海』にインスパイアされた「ウェイファインダー・ベイ」へと心を導かれることでしょう。この開放的なリトリートエリアには、プールやバー、広々としたアムフィシアター型の座席があり、ユニークなパフォーマンス会場としても機能しています。ここでは、インタラクティブなイベントや魅力的なライブショーが繰り広げられ、ゲストは魔法のようなひとときを楽しむことができます。​",
            slides: [
                { dom: <Image src={getImagePath("page/themed-areas/area05/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area05/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area05/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney"
        },
        {
            id: "area06",
            name: "サンフランソウキョウ・ストリート",
            en: "San Fransokyo Street",
            desc: "「サンフランソウキョウ・ストリート」は、ディズニー映画『ベイマックス』に登場する活気あふれる都市、サンフランソウキョウにインスパイアされたファミリー向けエンターテイメントエリアです。東京のエネルギッシュな雰囲気と、サンフランシスコののんびりとした魅力が融合したこの場所では、まるで賑やかなストリートマーケットを歩いているかのような体験ができます。インタラクティブなアーケードゲーム、アクティビティ、ショップ、映画館など、楽しさが満載のこのエリアで、家族全員が一緒にワクワクするひとときを過ごせます。​",
            slides: [
                { dom: <Image src={getImagePath("page/themed-areas/area06/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area06/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area06/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney"
        },
        {
            id: "area07",
            name: "タウン・スクエア",
            en: "Town Square",
            desc: "「タウン・スクエア」では、ディズニーの魔法の世界から集められた王族たちを祝う特別な空間が広がっています。ここには、船の森の願いの井戸の前に優雅に立つ白雪姫の美しいブロンズ像が飾られています。この魅力的なエリアでは、ゲストはまるでディズニーの王族のように食事を楽しんだり、素朴でおしゃれなカフェやラウンジでくつろいだり、楽しいショップで幻想的な記念品を見つけたりできます。魔法のようなひとときをお楽しみください。",
            slides: [
                { dom: <Image src={getImagePath("page/themed-areas/area07/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area07/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
                { dom: <Image src={getImagePath("page/themed-areas/area07/slide01.jpg")} alt="のイメージ" width={704} height={440} /> },
            ],
            caption: "Artist Concept Only &copy;Disney &copy;Disney/Pixar"
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
        const { id, name, en, desc, slides } = props;
        const num = Number(id.replace("area", ""));

        return (
            <div id={id} className="area-block">
                <div className="area-block__inner">
                    <OnmHeadline02 hlLevel="h3" jp={name} en={en} label="Area" num={num} />
                    <Slider type="default" slides={slides} options={{ loop: true }} />
                    <div className="caption" dangerouslySetInnerHTML={{ __html: props.caption }}></div>
                    <p>{desc}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="p-themed-areas">
            <Breadcrumb items={breadcrumbItems} />
            <Title type="slider" title="7つのテーマエリア・客船紹介" en="<span>7</span>Themed Areas" slider={heroSliderItems} />
            <GSAPToggleContainer tag="div" className="l-has-aside-container" toggle={{ logo: false, color: "blue" }}>
                <main className="l-main">
                    <article className="l-article">
                        <section id="sec01" className="p-themed-areas-section">
                            <OnmHeadline01 hlLevel="h2" jp="客船紹介" en="Our Cruise Ship" />
                            <div className="themed-areas-block">
                                <Headline design="01" hlLevel="h3">ディズニー・アドベンチャー​</Headline>
                                <div className="img">
                                    <Image src={getImagePath("page/themed-areas/img01.jpg")} alt="ディズニー・アドベンチャー​イメージ" width={784} height={407} />
                                </div>
                                <div className="outline">
                                    <dl>
                                        <dt>総トン数</dt>
                                        <dd>約208,000総トン</dd>
                                        <dt>乗客定員</dt>
                                        <dd>約6,700名</dd>
                                        <dt>乗務員数</dt>
                                        <dd>約2,500名</dd>
                                        <dt>全長</dt>
                                        <dd>1,122フィート（342メートル）</dd>
                                        <dt>デッキ数</dt>
                                        <dd>19デッキ</dd>
                                        <dt>就航</dt>
                                        <dd>2025年12月15日</dd>
                                        <dt>建造地</dt>
                                        <dd>マイヤー・ヴェルフト造船所 - ヴィスマー、ドイツ</dd>
                                        <dt>母港</dt>
                                        <dd>シンガポール</dd>
                                        <dt>船の登録地</dt>
                                        <dd>バハマ</dd>
                                        <dt>燃料</dt>
                                        <dd>HVO</dd>
                                    </dl>
                                </div>
                            </div>
                        </section>
                        <section id="sec02" className="p-themed-areas-section">
                            <OnmHeadline01 hlLevel="h2" jp="7つのテーマエリア" en="7 Themed Areas" />
                            <div className="themed-areas-block">
                                <div className="lead">
                                    <p>船内の想像力豊かなテーマの7つのエリアを探索しながら、魔法のような冒険に出発します。<br />
                                        各エリアには、ディズニー、マーベル、ピクサーの物語を壮大なスケールで再現した<br className="nosp" />没入感あふれる体験が満載です。</p>
                                </div>
                                {
                                    areaArray.map((area, index) => (
                                        <AreaBlcok key={index} {...area} />
                                    ))
                                }
                            </div>
                        </section>
                    </article>
                </main>
                <Aside page="page" nav={navArray} />
            </GSAPToggleContainer>
        </div>
    )
}