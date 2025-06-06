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
import {
  Headline,
  OnmHeadline01,
  OnmHeadline02,
} from "@/components/modules/headline/headline";
import { Slider } from "@/components/modules/slider/slider";
import { GSAPToggleContainer } from "@/components/modules/gsap/container";
import "./styles/spaLoungesBar.scss";

export function Page() {
  const { getImagePath } = helper();

  const breadcrumbItems = [
    { label: "大人のための施設", href: "/spa-lounges-bar/" },
  ];

  const navArray = {
    parent01: [{ item: ["スパ、サロン、フィットネス", "sec01"] }],
    parent02: [{ item: ["ラウンジ", "sec02"] }],
    parent03: [{ item: ["バッカニアバー", "sec03"] }],
  };

  const heroSliderItems = [
    {
      dom: (
        <>
          <figure>
            <Image
              src={getImagePath("page/spa-lounges-bar/hero01.jpg")}
              alt="スパ、サロン、フィットネスイメージ"
              width={1366}
              height={768}
              priority
            />
          </figure>
        </>
      ),
    },
    {
      dom: (
        <>
          <figure>
            <Image
              src={getImagePath("page/spa-lounges-bar/hero03.jpg")}
              alt="バッカニアバーイメージ"
              width={1366}
              height={768}
              priority
            />
            <figcaption>&copy;Disney</figcaption>
          </figure>
        </>
      ),
    },
  ];

  const sectionArray = [
    {
      id: "sec01",
      name: `スパ、サロン、フィットネス`,
      en: `Spa, Salon & Fitness`,
      desc: "自然と贅沢が融合した、心安らぐオアシスへようこそ。心身ともにリフレッシュできる、極上のスパ＆ビューティートリートメントをご堪能ください。<br>または、広々としたレインフォレストルームでくつろぎのひとときを。ウォークスルー型シャワー、温水ラウンジ、アロマテラピースチームルーム、ドライサウナが完備されています。洋上でのご滞在中も健康を維持できるよう、隣接するフィットネスセンターでは最新鋭の設備をご利用いただけます。ジュースバー、ウェルネスコンサルテーション、瞑想室に加え、サイクリングやヨガなどのアクティビティ専用スペースもご用意しています。<br>【ご注意】ご利用には事前のご予約が必要です。別途料金がかかります。",
      img: "page/spa-lounges-bar/img01.jpg",
      slides: [],
      caption: "",
    },
    {
      id: "sec02",
      name: `ラウンジ`,
      en: `Lounges`,
      desc: "くつろぎのひとときを過ごすなら、エレガントなラウンジや、ディズニーをテーマにした賑やかなラウンジがおすすめです。スペルバウンド、タベルナポルトロッソ、ティアナズバイユーラウンジ、バッカニアバーなどがあり、こだわりのコーヒーや上質な紅茶、独創的なモクテルなどをお楽しみいただけます。",
      img: "page/spa-lounges-bar/img02.jpg",
      slides: [],
      caption: "",
    },
    {
      id: "sec03",
      name: `バッカニアバー`,
      en: `Buccaneer Bar`,
      desc: "「ピーターパン」に登場するフック船長にインスパイアされた、海賊らしいパブ「バッカニアバー」で盛り上がりましょう。ここでは、爽やかな飲み物を片手に、スポーツ中継を観戦したり、特大の丸窓から広がる美しい海の景色を堪能したりできます。メインバーでブーツを脱いでくつろぐもよし、2つのプライベートな「船長室」風のベンチシートでゆったり過ごすもよし。まるで自分が大海原の冒険を指揮する船長になったような気分に浸れること間違いなしです。",
      img: "page/spa-lounges-bar/img03.jpg",
      slides: [],
      caption: "Artist Concept Only &copy;Disney",
    },
  ];

  const Section = (props: {
    id: string;
    name: string;
    en: string;
    desc: string;
    img?: string;
    slides?: {
      dom: React.ReactNode;
    }[];
    caption: string;
  }) => {
    const { id, name, en, desc, img, slides } = props;

    return (
      <section id={id} className="p-spa-lounges-bar-section">
        <OnmHeadline01 hlLevel="h2" jp={name} en={en} />
        <div className="spa-lounges-bar-block">
          {img && (
            <div className="img">
              <Image
                src={getImagePath(img)}
                alt={name + "のイメージ"}
                width={784}
                height={440}
              />
            </div>
          )}
          {slides && slides.length > 0 && (
            <Slider type="default" slides={slides} options={{ loop: true }} />
          )}
          <div
            className="caption"
            dangerouslySetInnerHTML={{ __html: props.caption }}
          ></div>
          <p dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
      </section>
    );
  };

  return (
    <div className="p-spa-lounges-bar">
      <Breadcrumb items={breadcrumbItems} />
      <Title
        type="slider"
        title="大人のための施設"
        en="Adults"
        slider={heroSliderItems}
      />
      <GSAPToggleContainer
        tag="div"
        className="l-has-aside-container"
        toggle={{ logo: false, color: "blue" }}
      >
        <main className="l-main">
          <article className="l-article">
            {sectionArray.map((item, index) => {
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
              );
            })}
          </article>
        </main>
        <Aside page="page" nav={navArray} />
      </GSAPToggleContainer>
    </div>
  );
}
