/**
 * @name page.tsx
 * @description スパ・ラウンジ・バーページ用レイアウト
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
import "./styles/spaLoungesBar.scss";

export function Page() {
    const { getImagePath } = helper();

    const breadcrumbItems = [
        { label: "大人のための施設", href: "/spa-lounges-bar/", },
    ];

    const navArray = {
        parent01: [{ item: ['スパ、サロン、フィットネス', "sec01"], }],
        parent02: [{ item: ['ラウンジ', "sec02"], }],
        parent03: [{ item: ['バッカニアバー', "sec03"], }],
    }

    const heroSliderItems = [
        {
            dom: <><figure>
                <Image src={getImagePath("page/spa-lounges-bar/hero01.jpg")} alt="スパ、サロン、フィットネスイメージ" width={1366} height={768} priority />
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/spa-lounges-bar/hero02.jpg")} alt="ラウンジイメージ" width={1366} height={768} priority />
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/spa-lounges-bar/hero03.jpg")} alt="バッカニアバーイメージ" width={1366} height={768} priority />
                <figcaption>&copy;Disney</figcaption>
            </figure></>
        },
    ]

    const sectionArray = [
        {
            id: "sec01",
            name: `スパ、サロン、フィットネス`,
            en: `Spa, Salon & Fitness`,
            desc: "このリラクゼーションのオアシスでは、自然と贅沢が融合しています。心身を元気にするよう設計された、心地よいスパと美容トリートメントをお楽しみください。または、ウォークスルー体験型シャワー、温水ラウンジ、アロマセラピースチームルーム、ドライサウナを備えた広々としたレインフォレストルームでくつろぐこともできます。海上では、最先端の設備を備えた隣接するフィットネスセンターで体を鍛えましょう。ジュースバー、健康相談、瞑想ルーム、サイクリングやヨガなどのアクティビティ専用スペースもご利用いただけます。予約が必要です。追加料金が発生します。",
            img: "page/spa-lounges-bar/img01.jpg",
            slides: [],
            caption: ""
        },
        {
            id: "sec02",
            name: `ラウンジ`,
            en: `Lounges`,
            desc: "エレガントなラウンジや、Spellbound、Taverna Portorosso、Tiana's Bayou Lounge、Buccaneer Bar などの活気あるディズニーをテーマにしたラウンジでくつろぎのひとときをお過ごしください。特製コーヒー、高級紅茶、独創的なモクテルなどをご用意しています。",
            img: "page/spa-lounges-bar/img02.jpg",
            slides: [],
            caption: ""
        },
        {
            id: "sec03",
            name: `バッカニアバー`,
            en: `Buccaneer Bar`,
            desc: "ゲストは、豪快な乾杯とともにブーツを踏み鳴らし、スワッシュバッカリングなスタイルでライブスポーツを楽しみながら、高級なビールを味わうことができる、パイレーツをテーマにしたバーで盛り上がることができます。このバーは、船内にある多くのラウンジのひとつで、冒険心あふれる雰囲気が漂う場所です。​",
            img: "page/spa-lounges-bar/img03.jpg",
            slides: [],
            caption: "Artist Concept Only &copy;Disney"
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
            <section id={id} className="p-spa-lounges-bar-section">
                <OnmHeadline01 hlLevel="h2" jp={name} en={en} />
                <div className="spa-lounges-bar-block">
                    {img &&
                        <div className="img">
                            <Image src={getImagePath(img)} alt="" width={784} height={440} />
                        </div>
                    }
                    {slides && slides.length > 0 && <Slider type="default" slides={slides} options={{ loop: true }} />}
                    <div className="caption" dangerouslySetInnerHTML={{ __html: props.caption }}></div>
                    <p>{desc}</p>
                </div>
            </section>
        )
    }

    return (
        <div className="p-spa-lounges-bar">
            <Breadcrumb items={breadcrumbItems} />
            <Title type="slider" title="大人のための施設" en="Adults" slider={heroSliderItems} />
            <GSAPToggleContainer tag="div" className="l-has-aside-container" toggle={{ logo: false, color: "blue" }}>
                <main className="l-main">
                    <article className="l-article">
                        {
                            sectionArray.map((item, index) => {
                                return (
                                    <Section
                                        key={index}
                                        id={item.id}
                                        name={item.name}
                                        en={item.en}
                                        desc={item.desc}
                                        img={item.img}
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