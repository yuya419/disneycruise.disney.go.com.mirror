/**
 * @name page.tsx
 * @description 客室案内ページ用レイアウト
 */
"use client";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import helper from "@/libs/helper";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import Title from "@/layouts/title/title";
import Aside from "../aside/aside";
import { Headline, OnmHeadline01, OnmHeadline02 } from "@/components/modules/headline/headline";
import { Slider } from "@/components/modules/slider/slider";
import { GSAPToggleContainer } from "@/components/modules/gsap/container";
import { roomOutline } from "@/libs/array";
import "./styles/accommodations.scss";

export function Page() {
    const pathname = usePathname();
    const { getImagePath } = helper();
    const [modalId, setModalId] = useState<string | null>(null); // モーダルの状態を管理
    const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの開閉状態を管理

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsModalOpen(false); // ESCキーでモーダルを閉じる
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const closeModal = () => {
        setIsModalOpen(false); // モーダルを閉じる
    };

    useEffect(() => {
        const html = document.documentElement;
        if (isModalOpen) {
            html.dataset.state = "modalOpen";
        } else {
            html.dataset.state = "";
        }
    }, [isModalOpen]);

    const breadcrumbItems = [
        { label: "客室案内", href: "/accommodations/", },
    ];

    const navArray = {
        parent01: [{ item: ["客室タイプ", "sec01"], }],
        parent02: [{ item: ["デッキプラン", "sec02"], }],
    }

    const heroSliderItems = [
        {
            dom: <><figure>
                <Image src={getImagePath("page/accommodations/hero01.jpg")} alt="客室イメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only <br />&copy;Disney</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/accommodations/hero02.jpg")} alt="客室イメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only <br />&copy;Disney</figcaption>
            </figure></>
        },
        {
            dom: <><figure>
                <Image src={getImagePath("page/accommodations/hero03.jpg")} alt="客室イメージ" width={1366} height={768} priority />
                <figcaption>Artist Concept Only <br />&copy;Disney</figcaption>
            </figure></>
        },
    ]

    const type01Array = [
      {
        id: `type01-01`,
        src: `page/accommodations/type01/type01-01/Concierge Inside Family Stateroom.jpg`,
        name: `コンシェルジュファミリー内側客室`,
        caption: ``,
        desc: `ソーにインスパイアされた、この広々としたファミリー向け客室で、家のようにくつろげる空間を提供します。`,
      },
      {
        id: `type01-02`,
        src: `page/accommodations/type01/type01-02/Concierge Family Stateroom with Garden View Verandah.png`,
        name: `コンシェルジュファミリーガーデンビュー<br />ベランダ客室`,
        caption: ``,
        desc: `ディズニーの「イマジネーションガーデン」を見渡すプライベートベランダから、海の上の広々とした「ソー」テーマの家で、夢のような時間をお楽しみいただけます。`,
      },
      {
        id: `type01-03`,
        src: `page/accommodations/type01/type01-03/DCL-DA_Concierge Family w Verandah (Main Bedrm).png`,
        name: `コンシェルジュファミリーオーシャンビュー<br />ベランダ客室`,
        caption: `Artist Concept Only &copy;Disney &copy;2024 MARVEL`,
        desc: `モアナ、ソー、アラジンのいずれかのテーマにインスパイアされた、海の上の夢のような家のプライベートベランダから、素晴らしい海の景色をお楽しみいただけます。`,
      },
      {
        id: `type01-04`,
        src: `page/accommodations/type01/type01-04/Concierge Family Oceanview Suite.png`,
        name: `コンシェルジュファミリーオーシャンビュースイート​`,
        caption: ``,
        desc: `「アラジン」をテーマにした広々としたスイートで、巨大な窓から壮大な海の景色を楽しみながらくつろいでください。​`,
      },
      {
        id: `type01-05`,
        src: `page/accommodations/type01/type01-05/DCL-DA_Concierge Suite w Verandah (Main Bedrm).png`,
        name: `コンシェルジュスイートオーシャンビューベランダ客室`,
        caption: `Artist Concept Only &copy;Disney`,
        desc: `ディズニークルーズラインの「アナとエルサ」をテーマにした豪華なスイートで、氷の王国にいるような気分でクルーズを楽しんでください。​`,
      },
      {
        id: `type01-06`,
        src: `page/accommodations/type01/type01-06/Concierge Oceanview Suite.png`,
        name: `コンシェルジュオーシャンビュースイート<br />客室`,
        caption: `Artist Concept Only &copy;Disney`,
        desc: `広々としたスイートで、ベッドルームとリビングエリアを備え、究極の快適さとリラックスを提供します。海の景色を楽しみながら、特別なひとときをお過ごしください。`,
      },
      {
        id: `type01-07`,
        src: `page/accommodations/type01/type01-07/DCL-DA_Concierge 1-BR Oceanview Suite (Bedroom).png`,
        name: `コンシェルジュ1ベッドルームオーシャンビュースイート客室`,
        caption: `Artist Concept Only &copy;Disney`,
        desc: `ディズニー映画『アナと雪の女王』の心温まる物語を彷彿とさせる、豪華な装飾と一流のアメニティが整ったロイヤルスイートで、夢のような航海に出かけましょう。​`,
      },
      {
        id: `type01-08`,
        src: `page/accommodations/type01/type01-08/DCL-DA_Concierge Royal Suite - Elsa (Main Bedrm).png`,
        name: `コンシェルジュロイヤルスイートオーシャンビューベランダ客室​`,
        caption: `Artist Concept Only &copy;Disney`,
        desc: `ディズニー映画『アナと雪の女王』の心温まる物語を彷彿とさせる、豪華な装飾と一流のアメニティが整ったロイヤルスイートで、夢のような航海に出かけましょう。`,
      },
    ];

    const type02Array = [
      {
        id: `type02-01`,
        src: `page/accommodations/type02/type02-01/Stateroom with Verandah.webp`,
        name: `ベランダ客室​`,
        caption: ``,
        desc: `プライベートバルコニーで新鮮な空気を感じながら、客室の快適さを保ったまま絶景をお楽しみいただけます。​`,
      },
      {
        id: `type02-02`,
        src: `page/accommodations/type02/type02-02/DCL-DA_Accoms (Deluxe Oceanview with Verandah).webp`,
        name: `デラックスオーシャンビューベランダ客室`,
        caption: ``,
        desc: `ベランダ客室より広い家族向けの広さを誇り、プライベートベランダから壮大な海の景色をお楽しみいただけます。`,
      },
      {
        id: `type02-03`,
        src: `page/accommodations/type02/type02-03/DCL-DA_Accoms (Deluxe Gardenview w Verandah).webp`,
        name: `デラックスガーデンビューベランダ客室​`,
        caption: ``,
        desc: `ベランダ客室より広い家族向けの広さを誇り、プライベートベランダからディズニー・イマジネーション・ガーデンの素晴らしい景色をお楽しみいただけます。`,
      },
      {
        id: `type02-04`,
        src: `page/accommodations/type02/type02-04/Deluxe Reef View Stateroom with Verandah.webp`,
        name: `デラックスリーフビューベランダ客室`,
        caption: ``,
        desc: `ベランダ付き客室より広い家族向けの広さを誇り、プライベートベランダからディズニー・ディスカバリー・リーフの素晴らしい景色をお楽しみいただけます。`,
      },
    ];

    const type03Array = [
      {
        id: `type03-01`,
        src: `page/accommodations/type03/type03-01/DCL-DA_Accoms ( Oceanview Stateroom).webp`,
        name: `オーシャンビュー客室`,
        caption: ``,
        desc: `自然光が差し込む大きな窓から、美しい海の景色を楽しめる快適な客室で、ゆったりとおくつろぎください。`,
      },
      {
        id: `type03-02`,
        src: `page/accommodations/type03/type03-02/DCL-DA_Accoms (Deluxe Oceanview Staterm).webp`,
        name: `デラックス・オーシャンビュー客室​`,
        caption: ``,
        desc: `オーシャンビュー客室よりも広いスペースを誇り、大きな窓から美しい海の景色を堪能できる快適な客室です。​`,
      },
    ];

    const type04Array = [
      {
        id: `type04-01`,
        src: `page/accommodations/type04/type04-01/DCL-DA_Accoms (Inside Stateroom).webp`,
        name: `内側客室`,
        caption: ``,
        desc: `内側客室は、エンターテイメント、ダイニング、ショッピングエリアに便利な場所に位置しています。`,
      },
      {
        id: `type04-02`,
        src: `page/accommodations/type04/type04-02/DCL-DA_Accoms (Deluxe Inside Stateroom).webp`,
        name: `デラックス内側客室`,
        caption: ``,
        desc: `内側客室より広いスペースを誇る快適なキャビンで、リラックスして心身をリフレッシュできます。`,
      },
      {
        id: `type04-03`,
        src: `page/accommodations/type04/type04-03/DCL-DA_Accoms (Deluxe Inside w Reef View).webp`,
        name: `デラックス内側客室（リーフビュー付き）`,
        caption: ``,
        desc: `デラックス内側客室と同じ広さを備えたこの客室タイプでは、ディズニー・ディスカバリー・リーフの魅力的な景色を楽しむことができます。`,
      },
    ];

    const Room = () => {
        const roomRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (roomRef.current) {
                const buttons = roomRef.current.querySelectorAll(".room-selector-el");
                const modalButtons = roomRef.current.querySelectorAll(".modal-button-el");
                const content = roomRef.current.querySelector(".room-selector-content");
                const urlParams = new URLSearchParams(window.location.search);
                const typeParam = urlParams.get("type");

                if (typeParam) {
                    content?.setAttribute("data-current", typeParam);
                    Array.from(buttons).forEach((btn) => btn.classList.toggle("isSelect", btn.getAttribute("data-tab") === typeParam));
                }

                buttons.forEach((button) => {
                    button.addEventListener("click", () => {
                        const tabValue = button.getAttribute("data-tab");
                        if (tabValue) {
                            content?.setAttribute("data-current", tabValue);
                            Array.from(buttons).forEach((btn) => btn.classList.toggle("isSelect", btn.getAttribute("data-tab") === tabValue));
                        }
                    });
                });

                modalButtons.forEach((button) => {
                    button.addEventListener("click", () => {
                        const id = button.getAttribute("data-id");
                        if (id) {
                            const modalData = roomOutline.find((item) => item[id]);
                            if (!modalData || !modalData[id].name) return
                            setModalId(id);
                            setIsModalOpen(true);
                        }
                    });
                });
            }
        }, []);

        const RoomSlector = () => {

            return (
                <div className="room-selector">
                    <button type="button" className="room-selector-el isSelect" data-tab="room01"><span className="label">コンシェルジュ<br />スイート</span></button>
                    <button type="button" className="room-selector-el" data-tab="room02"><span className="label">ベランダ</span></button>
                    <button type="button" className="room-selector-el" data-tab="room03"><span className="label">オーシャンビュー</span></button>
                    <button type="button" className="room-selector-el" data-tab="room04"><span className="label">インサイド</span></button>
                </div>
            )
        }

        const RoomCards = (props: {
            cardItems: {
                id: string,
                src: string,
                name: string,
                caption: string,
                desc: string
            }[]
        }) => {
            return (
                props.cardItems.map((item, index) => (
                    <dl key={index} className="card-item">
                        <dt className="card-item__head">
                            <figure>
                                <Image src={getImagePath(item.src)} alt={item.name} width={334} height={300} />
                                <figcaption dangerouslySetInnerHTML={{ __html: item.caption }}></figcaption>
                            </figure>
                            <span className="name" dangerouslySetInnerHTML={{ __html: item.name }}></span>
                        </dt>
                        <dd className="card-item__body">
                            <span className="desc" dangerouslySetInnerHTML={{ __html: item.desc }}></span>
                            <div className="modal-button">
                                <button type="button" className="modal-button-el" data-id={item.id}>
                                    <span className="label" lang="en">View More</span>
                                    <span className="icon">
                                        <svg className="i-modal">
                                            <use xlinkHref="#i-modal" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </dd>
                    </dl>
                ))
            )
        }

        const RoomBlock = (props: {
            type: string,
            desc: string,
            cards: {
                id: string,
                src: string,
                name: string,
                caption: string,
                desc: string
            }[]
        }) => {
            const { type, desc } = props;
            return (
                <div id={type} className="room-block">
                    <div className="text">
                        <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                    </div>
                    <div className="card-list">
                        {
                            <RoomCards cardItems={props.cards} />
                        }
                    </div>
                </div>
            )
        }

        const RoomContent = () => {
            return (
                <div className="room-selector-content" data-current="room01">
                    <RoomBlock type="room01" desc="最も豪華な客室で、コンシェルジュのゲストが海上でもパーソナルなサービスと自宅のような快適さをお楽しみいただけます。洗練された優雅さ、豪華なアメニティ、ディズニーならではのタッチでデザインされた、広々とした贅沢な客室とスイートをお楽しみください。コンシェルジュサービスには、プライベートリトリートへの専用アクセス、高級ショッピング、一流のスパサービス、高級フィットネス施設などが含まれます。" cards={type01Array} />
                    <RoomBlock type="room02" desc="ご家族向けに作られた当ホテルの最も人気のある客室は、最大4名様までご宿泊いただけ、海、ディズニーイマジネーションガーデン、ディズニーディスカバリーリーフの息を呑むような景色をお楽しみいただける専用バルコニーを備えています。この風通しの良い聖域では、日の出を眺め、海風に吹かれ、朝のコーヒーや夜の寝酒をお楽しみいただけます。" cards={type02Array} />
                    <RoomBlock type="room03" desc="最大4名様までご宿泊いただけるよう設計された、美しく整えられた客室には、個別のシングルベッドが備わっており、どなたにもぐっすりとお休みいただけます。大きな舷窓から、息を呑むような海の眺めをお楽しみください。" cards={type03Array} />
                    <RoomBlock type="room04" desc="最大4名様までご宿泊いただけるよう設計された、美しく整えられた客室には、個別のシングルベッドが備わっており、どなたにもぐっすりとお休みいただけます。大きな舷窓から、息を呑むような海の眺めをお楽しみください。" cards={type04Array} />
                </div>
            )
        }

        return (
            <div className="room" ref={roomRef}>
                <RoomSlector />
                <RoomContent />
                <RoomSlector />
            </div>
        )
    }

    const Modal = (id: string) => {
        const modalData = roomOutline.find((item) => item[id]);
        if (!modalData || !modalData[id].name) return null;

        const sliderItems = modalData[id].slider.map((slide: { src: string; caption: string }) => ({
            dom: (
                <figure>
                    <Image src={slide.src} alt={slide.caption} width={334} height={300} priority />
                    <figcaption dangerouslySetInnerHTML={{ __html: slide.caption }}></figcaption>
                </figure>
            ),
        }));

        return (
          <div className="room-modal-container">
            <button
              type="button"
              className="close-button"
              onClick={closeModal}
            ></button>
            <div className="room-modal-inner">
              <div className="room-outline">
                {modalData[id].slider.some(
                  (slide: { src: string; caption: string }) =>
                    slide.src || slide.caption
                ) && (
                  <div className="room-outline__slider">
                    <Slider
                      type="small"
                      slides={sliderItems}
                      options={{ loop: true }}
                    />
                  </div>
                )}
                <div className="room-outline__head">
                  {modalData[id].name && (
                    <p
                      className="jp"
                      dangerouslySetInnerHTML={{ __html: modalData[id].name }}
                    ></p>
                  )}
                  {modalData[id].en && (
                    <p
                      className="en"
                      lang="en"
                      dangerouslySetInnerHTML={{ __html: modalData[id].en }}
                    ></p>
                  )}
                </div>
              </div>
              {modalData[id].desc && (
                <div className="room-desc">
                  <p
                    dangerouslySetInnerHTML={{ __html: modalData[id].desc }}
                  ></p>
                </div>
              )}
              {modalData[id].cat.some(
                (item: { cat: string; area: string }) => item.cat || item.area
              ) && (
                <div className="room-cat">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          客室
                          <br className="nopc" />
                          カテゴリー
                        </th>
                        <th>エリア</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modalData[id].cat.map(
                        (
                          item: { cat: string; area: string },
                          index: number
                        ) => (
                          <tr key={index}>
                            <td>{item.cat}</td>
                            <td>{item.area}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              )}
              {modalData[id].roomFacilities.cat.some(
                (item: { name: string; list: string[] }) =>
                  item.name.trim() !== "" || item.list.length > 0
              ) && (
                <div className="room-facilities">
                  <div className="room-facilities__head">
                    <p>
                      <span className="icon">
                        <svg className="i-facilities">
                          <use xlinkHref="#i-facilities" />
                        </svg>
                      </span>
                      <span className="label">客室設備</span>
                    </p>
                  </div>
                  <div className="room-facilities__body">
                    {modalData[id].roomFacilities.cat.map(
                      (
                        item: { name: string; list: string[] },
                        index: number
                      ) => (
                        <div className="room-facilities-item" key={index}>
                          {item.name && (
                            <p
                              className="name"
                              dangerouslySetInnerHTML={{ __html: item.name }}
                            ></p>
                          )}
                          <ul>
                            {item.list.map((listItem, listIndex) => (
                              <li
                                key={listIndex}
                                dangerouslySetInnerHTML={{ __html: listItem }}
                              ></li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
              {modalData[id].benefits["list"].length > 0 && (
                <div className="room-benefits">
                  <div className="room-benefits__head">
                    <span className="bar is-left"></span>
                    <svg className="onm is-left">
                      <use href="#i-onm-02"></use>
                    </svg>
                    <p className="label">お部屋の宿泊特典</p>
                    <svg className="onm is-right">
                      <use href="#i-onm-02"></use>
                    </svg>
                    <span className="bar is-right"></span>
                  </div>
                  <div className="room-benefits__body">
                    {modalData[id].benefits["desc"] && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: modalData[id].benefits["desc"],
                        }}
                      ></p>
                    )}
                    <ul>
                      {modalData[id].benefits["list"].map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
              {modalData[id].specification.some(
                (spec: { dt: string; dd: string }) => spec.dt || spec.dd
              ) && (
                <div className="room-specification">
                  <div className="room-specification__head">
                    <Headline design="01" hlLevel="p">
                      仕様
                    </Headline>
                  </div>
                  <div className="room-specification__body">
                    {modalData[id].specification.map(
                      (spec: { dt: string; dd: string }, index: number) => (
                        <dl key={index}>
                          <dt
                            dangerouslySetInnerHTML={{ __html: spec.dt }}
                          ></dt>
                          <dd
                            dangerouslySetInnerHTML={{ __html: spec.dd }}
                          ></dd>
                        </dl>
                      )
                    )}
                  </div>
                </div>
              )}
              {modalData[id].amenities.length > 0 && (
                <div className="room-amenities">
                  <div className="room-amenities__head">
                    <Headline design="01" hlLevel="p">
                      アメニティ
                    </Headline>
                  </div>
                  <div className="room-amenities__body">
                    <ul>
                      {modalData[id].amenities.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
              {modalData[id].upgrade["list"].length > 0 && (
                <div className="room-upgrade">
                  <div className="room-upgrade__head">
                    <Headline design="01" hlLevel="p">
                      アップグレートアメニティ
                    </Headline>
                  </div>
                  <div className="room-upgrade__body">
                    {modalData[id].upgrade["desc"] && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: modalData[id].upgrade["desc"],
                        }}
                      ></p>
                    )}
                    <ul>
                      {modalData[id].upgrade["list"].map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
              {modalData[id].balcony["list"].length > 0 && (
                <div className="room-balcony">
                  <div className="room-balcony__head">
                    <Headline design="01" hlLevel="p">
                      ベランダ
                    </Headline>
                  </div>
                  <div className="room-balcony__body">
                    {modalData[id].balcony["desc"] && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: modalData[id].balcony["desc"],
                        }}
                      ></p>
                    )}
                    <ul>
                      {modalData[id].balcony["list"].map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
              {modalData[id].design["list"].length > 0 && (
                <div className="room-design">
                  <div className="room-design__head">
                    <Headline design="01" hlLevel="p">
                      デザイン
                    </Headline>
                  </div>
                  <div className="room-design__body">
                    {modalData[id].design["desc"] && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: modalData[id].design["desc"],
                        }}
                      ></p>
                    )}
                    <ul>
                      {modalData[id].design["list"].map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
              {modalData[id].preDepartureServices["list"].length > 0 && (
                <div className="room-preDepartureServices">
                  <div className="room-preDepartureServices__head">
                    <Headline design="01" hlLevel="p">
                      出発前サービス​
                    </Headline>
                  </div>
                  <div className="room-preDepartureServices__body">
                    {modalData[id].preDepartureServices["desc"] && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: modalData[id].preDepartureServices["desc"],
                        }}
                      ></p>
                    )}
                    <ul>
                      {modalData[id].preDepartureServices["list"].map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
              {modalData[id].onboardServices["list"].length > 0 && (
                <div className="room-onboardServices">
                  <div className="room-onboardServices__head">
                    <Headline design="01" hlLevel="p">
                      船内サービス​​
                    </Headline>
                  </div>
                  <div className="room-onboardServices__body">
                    {modalData[id].onboardServices["desc"] && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: modalData[id].onboardServices["desc"],
                        }}
                      ></p>
                    )}
                    <ul>
                      {modalData[id].onboardServices["list"].map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
              {modalData[id].guest.length > 0 && (
                <div className="room-guest">
                  <div className="room-guest__head">
                    <Headline design="01" hlLevel="p">
                      コンシェルジュゲスト専用​​
                    </Headline>
                  </div>
                  <div className="room-guest__body">
                    {modalData[id].guest.map((item: string, index: number) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                      ></p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
    }

    return (
        <div className="p-accommodations">
            <Breadcrumb items={breadcrumbItems} />
            <Title type="slider" title="客室案内" en="Accommodations" slider={heroSliderItems} />
            <GSAPToggleContainer tag="div" className="l-has-aside-container" toggle={{ logo: false, color: "blue" }}>
                <main className="l-main">
                    <article className="l-article">
                        <section id="sec01" className="p-accommodations-section">
                            <OnmHeadline01 hlLevel="h2" jp="客室タイプ" en={`Staterooms`} />
                            <div className="accommodations-block">
                                <div className="lead">
                                    <p>以下の4つのカテゴリーから、<br className="nopc" />あなたにぴったりの素敵な客室をお選びいただけます。</p>
                                </div>
                                <Room />
                            </div>
                        </section>
                        <section id="sec02" className="p-accommodations-section">
                            <OnmHeadline01 hlLevel="h2" jp="デッキプラン" en={`deck`} />
                            <div className="accommodations-block">
                                <div className="deck">
                                    <div className="img">
                                        <Image src={getImagePath("page/accommodations/deck.jpg")} alt="デッキプラン" width={374} height={194} />
                                    </div>
                                    <div className="text">
                                        <p>ディズニーアドベンチャーの客室タイプとパブリックスペースの位置をご確認いただけます。</p>
                                        <div className="pdf-button">
                                            <Link href="#" target="_blank" rel="noopener noreferrer" className="pdf-button-el">
                                                <span className="label">デッキプラン</span>
                                                <span className="icon">
                                                    <svg className="i-pdf">
                                                        <use xlinkHref="#i-pdf" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </main>
                <Aside page="page" nav={navArray} />
            </GSAPToggleContainer>
            <div className="room-modal" data-open={isModalOpen}>
                {isModalOpen && Modal(modalId!)}
            </div>
        </div>
    )
}