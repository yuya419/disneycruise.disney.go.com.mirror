/**
 * @name page.tsx
 * @description キッズクラブページ用レイアウト
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
import "./styles/kidsClubs.scss";

export function Page() {
  const { getImagePath } = helper();

  const breadcrumbItems = [{ label: "キッズクラブ", href: "/kids-club/" }];

  const navArray = {
    parent01: [{ item: ["ディズニーオーシャニア", "sec01"] }],
    parent02: [{ item: ["エッジ", "sec02"] }],
    parent03: [{ item: ["ヴァイブ", "sec03"] }],
    parent04: [
      {
        item: [
          '「イッツアスモールワールド」<br class="nosp"/>ナーサリー​',
          "sec04",
        ],
      },
    ],
    parent05: [
      {
        item: ['ミッキー＆ミニー<br class="nosp"/>キャプテンズデッキ', "sec05"],
      },
    ],
    parent06: [
      {
        item: [
          'ロイヤルソサエティ<br class="nosp"/>フォーフレンドシップ<br class="nosp"/>アンドティー',
          "sec06",
        ],
      },
    ],
  };

  const heroSliderItems = [
    {
      dom: (
        <>
          <figure>
            <Image
              src={getImagePath("page/kids-clubs/hero01.jpg")}
              alt="キッズクラブイメージ"
              width={1366}
              height={768}
              priority
            />
            <figcaption>&copy;DISNEY &copy;MARVEL</figcaption>
          </figure>
        </>
      ),
    },
    {
      dom: (
        <>
          <figure>
            <Image
              src={getImagePath("page/kids-clubs/hero02.jpg")}
              alt="キッズクラブイメージ"
              width={1366}
              height={768}
              priority
            />
            <figcaption>&copy;Disney</figcaption>
          </figure>
        </>
      ),
    },
    {
      dom: (
        <>
          <figure>
            <Image
              src={getImagePath("page/kids-clubs/hero03.jpg")}
              alt="キッズクラブイメージ"
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
      name: "ディズニーオーシャニア",
      en: `Disney's <br class="nopc"/>Oceaneer Club`,
      desc: "3歳から10歳までのお子様は、大好きなディズニー、ピクサー、マーベルの物語にインスパイアされたテーマ空間で、愛されるキャラクターたちと触れ合いながら想像力を広げることができます。物語の読み聞かせや没入感のあるゲームは、小さなお子様から少し年上の子どもたちまでを楽しませます。おもちゃやアート＆クラフトを楽しめる広々とした座席エリア、そして絶え間なく上映されるディズニー映画により、退屈する暇はありません。特別に訓練を受けたディズニーのユースカウンセラーの指導のもと、お子様たちは想像力あふれる楽しみを満喫し、一方で親御さんは船内の設備でリラックスしてお過ごしいただけます。​",
      slides: [
        {
          dom: (
            <Image
              src={getImagePath("page/kids-clubs/img01.jpg")}
              alt="ディズニーオーシャニアのイメージ"
              width={784}
              height={440}
            />
          ),
        },
      ],
      caption: "&copy;DISNEY &copy;MARVEL",
    },
    {
      id: "sec02",
      name: "エッジ",
      en: `Edge`,
      desc: "11歳から14歳の子どもたちには、自分たち専用の活気あふれるハングアウトスペースがあります。外観はサンフランソウキョウ・ストリートの普通のお店のように見えますが、中に入ると、ティーンたちが乗っ取り、ビクトリア調のカフェを改装したかのようなデザインに仕上がっています。この楽しく刺激的な空間は、どのコーナーも写真映えするスポットばかり。特別に訓練を受けたディズニーカウンセラーの指導のもと、リラックスしたり、友達を作ったり、映画を観たり、ビデオゲームやボードゲームを楽しんだりするのにぴったりの場所です。",
      slides: [
        {
          dom: (
            <Image
              src={getImagePath("page/kids-clubs/img02-slide01.jpg")}
              alt="エッジのイメージ"
              width={784}
              height={440}
            />
          ),
        },
      ],
      caption: "&copy;Disney",
    },
    {
      id: "sec03",
      name: "ヴァイブ",
      en: `Vibe`,
      desc: "14歳から17歳のティーンには、自分たち専用の特別なリトリートがあります。ヴィンテージのレコード店にインスパイアされたクールでレトロなデザインのこのクラブは、映画を観たり、ゲームを楽しんだり、時にはクラブの楽しいディズニー・ユースカウンセラーたちと一緒にセルフィーを撮ったりするのにぴったりの場所です。",
      slides: [
        {
          dom: (
            <Image
              src={getImagePath("page/kids-clubs/img03-slide01.jpg")}
              alt="ヴァイブのイメージ"
              width={784}
              height={440}
            />
          ),
        },
      ],
      caption: "&copy;Disney",
    },
    {
      id: "sec04",
      name: "「イッツアスモールワールド」ナーサリー​",
      en: `“it’s a small <br class="nopc"/>world” nursery`,
      desc: "大人気のディズニーアトラクションにインスパイアされたこの楽しい託児センターでは、生後6か月から3歳までの小さなお子様が遊んだり休んだりできます。特別に訓練を受けたカウンセラーが見守る中、ディズニーの仲間たちが訪れてくれることもあります。​",
      slides: [
        {
          dom: (
            <Image
              src={getImagePath("page/kids-clubs/img04-slide01.jpg")}
              alt="「イッツアスモールワールド」ナーサリー​のイメージ"
              width={784}
              height={440}
            />
          ),
        },
      ],
      caption: "&copy;Disney",
    },
    {
      id: "sec05",
      name: "ミッキー＆ミニー キャプテンズデッキ",
      en: `Mickey & Minnie <br />Captain’s Deck`,
      desc: "小さなクルーズ客のために設計された、海をテーマにしたこの遊び場は、新しい世界を探索する無限の機会を提供します。若い船員は、船の舵輪の後ろに座ったり、パイプを滑り抜けたり、橋をよじ登ったり、感覚を刺激するゲームで遊んだり、ミッキー船長やミニー船長が立ち寄ったときに一緒に遊んだりできます。",
      slides: [
        {
          dom: (
            <Image
              src={getImagePath("page/kids-clubs/img05-slide01.jpg")}
              alt="ミッキー＆ミニー キャプテンズデッキのイメージ"
              width={784}
              height={440}
            />
          ),
        },
      ],
      caption: "&copy;Disney",
    },
    {
      id: "sec06",
      name: `ロイヤルソサエティ<br class="nopc"/>フォーフレンドシップアンドティー`,
      en: `Royal Society <br />for Friendship & Tea`,
      desc: "3歳から12歳の小さなプリンセスとプリンスたち、お集りください。ディズニープリンセスたちと一緒に、ロイヤルソサエティフォーフレンドシップアンドティーで魔法のようなティーパーティーに参加しましょう。<br>保護者の方同伴で、おいしいスイーツ、魅惑的な物語、そして優しさや勇気を称える歌をお楽しみいただけます。参加する小さなプリンセス、プリンスたち全員に、お子様向けにデザインされた特別な持ち帰りギフトを差し上げます。<br>【ご注意】この体験には別途入場料が必要です。また、空き状況によりご参加いただけない場合があります。",
      slides: [
        {
          dom: (
            <Image
              src={getImagePath("page/kids-clubs/img06-slide01.jpg")}
              alt="ロイヤルソサエティフォーフレンドシップアンドティーのイメージ"
              width={784}
              height={440}
            />
          ),
        },
      ],
      caption: "&copy;Disney",
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
      <section id={id} className="p-kids-clubs-section">
        <OnmHeadline01 hlLevel="h2" jp={name} en={en} />
        <div className="kids-clubs-block">
          {img && (
            <div className="img">
              <Image src={getImagePath(img)} alt="" width={784} height={440} />
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
    <div className="p-kids-clubs">
      <Breadcrumb items={breadcrumbItems} />
      <Title
        type="slider"
        title="キッズクラブ"
        en="Kids Club"
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
