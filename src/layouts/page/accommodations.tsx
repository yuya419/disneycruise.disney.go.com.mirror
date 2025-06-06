/**
 * @name page.tsx
 * @description 客室案内ページ用レイアウト
 */
"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import helper from "@/libs/helper";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import Title from "@/layouts/title/title";
import Aside from "../aside/aside";
import {
  Headline,
  OnmHeadline01,
} from "@/components/modules/headline/headline";
import { Slider } from "@/components/modules/slider/slider";
import { GSAPToggleContainer } from "@/components/modules/gsap/container";
import { roomType, roomOutline } from "@/libs/array";
import { useRefContext } from "@/hooks/useRefContext";
import { Deckplan } from "@/components/modules/common/common";
import "./styles/accommodations.scss";

export function Page() {
  const { getImagePath } = helper();
  const [currentTab, setCurrentTab] = useState("room01");
  const [modalId, setModalId] = useState<string | null>(null); // モーダルの状態を管理
  const roomSelectorRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]; // 2つのセレクター用の参照を作成
  const sec01Ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの開閉状態を管理
  const { overlay } = useRefContext();

  const breadcrumbItems = [{ label: "客室案内", href: "/accommodations/" }];

  const navArray = {
    parent01: [{ item: ["客室タイプ", "sec01"] }],
    parent02: [{ item: ["デッキプラン", "sec02"] }],
  };

  const heroSliderItems = [
    {
      dom: (
        <>
          <figure>
            <Image
              src={getImagePath("page/accommodations/hero01.jpg")}
              alt="客室イメージ"
              width={1366}
              height={768}
              priority
            />
            <figcaption>
              Artist Concept Only <br />
              &copy;Disney
            </figcaption>
          </figure>
        </>
      ),
    },
    {
      dom: (
        <>
          <figure>
            <Image
              src={getImagePath("page/accommodations/hero02.jpg")}
              alt="客室イメージ"
              width={1366}
              height={768}
              priority
            />
            <figcaption>
              Artist Concept Only <br />
              &copy;Disney
            </figcaption>
          </figure>
        </>
      ),
    },
    {
      dom: (
        <>
          <figure>
            <Image
              src={getImagePath("page/accommodations/hero03.jpg")}
              alt="客室イメージ"
              width={1366}
              height={768}
              priority
            />
            <figcaption>
              Artist Concept Only <br />
              &copy;Disney
            </figcaption>
          </figure>
        </>
      ),
    },
  ];

  // モーダルを開く関数
  const handleModalOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const id = target.dataset.id;
    if (id) {
      setModalId(id);
      setIsModalOpen(true);
    }
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 初期タブが画面外にある場合、横スクロールして表示
  const scrollToInitialTab = (type: string) => {
    roomSelectorRefs.forEach((ref) => {
      const track = ref.current;
      const target = track?.querySelector(
        '[data-tab="' + type + '"]',
      ) as HTMLButtonElement | null;
      if (target && track) {
        const targetRect = target.getBoundingClientRect();
        const trackRect = track.getBoundingClientRect();
        if (
          targetRect.right > trackRect.right ||
          targetRect.left < trackRect.left
        ) {
          const scrollLeft =
            target.offsetLeft -
            track.offsetLeft -
            trackRect.width / 2 +
            targetRect.width / 2 +
            track.scrollLeft;
          track.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
      }
    });
  };

  // モーダルの開閉状態を管理するuseEffect
  useEffect(() => {
    document.addEventListener("keydown", (event) =>
      event.key === "Escape" ? setIsModalOpen(false) : null,
    );
    overlay.current?.addEventListener("click", () => setIsModalOpen(false));

    document.body.dataset.state = isModalOpen ? "modalOpen" : "";

    return () => {
      document.removeEventListener("keydown", (event) =>
        event.key === "Escape" ? setIsModalOpen(false) : null,
      );
      overlay.current?.removeEventListener("click", () =>
        setIsModalOpen(false),
      );
      document.body.dataset.state = "";
    };
  }, [isModalOpen, overlay]);

  // URLのクエリパラメータを取得して、初期タブを設定
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const typeParam = urlParams.get("type");
      if (
        typeParam &&
        ["room01", "room02", "room03", "room04"].includes(typeParam)
      ) {
        setCurrentTab(typeParam);
        setTimeout(() => {
          scrollToInitialTab(typeParam);
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    scrollToInitialTab(currentTab);
  }, [currentTab]);

  /**
   * @name RoomSlector
   * @description 客室セレクター
   */
  const RoomSlector = ({
    selectorRef,
  }: {
    selectorRef?: React.RefObject<HTMLDivElement | null>;
  }) => {
    // タブ切り替え
    const handleTabClick = (tab: string) => {
      setCurrentTab(tab);

      // アンカーリンクと同じ挙動（スクロール）
      setTimeout(() => {
        const target = sec01Ref.current;
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    };

    return (
      <div className="room-selector" ref={selectorRef}>
        <button
          type="button"
          className={`room-selector-el${currentTab === "room01" ? " isSelect" : ""}`}
          data-tab="room01"
          onClick={() => handleTabClick("room01")}
        >
          <span className="label">
            コンシェルジュ
            <br />
            スイート
          </span>
        </button>
        <button
          type="button"
          className={`room-selector-el${currentTab === "room02" ? " isSelect" : ""}`}
          data-tab="room02"
          onClick={() => handleTabClick("room02")}
        >
          <span className="label">ベランダ</span>
        </button>
        <button
          type="button"
          className={`room-selector-el${currentTab === "room03" ? " isSelect" : ""}`}
          data-tab="room03"
          onClick={() => handleTabClick("room03")}
        >
          <span className="label">オーシャンビュー</span>
        </button>
        <button
          type="button"
          className={`room-selector-el${currentTab === "room04" ? " isSelect" : ""}`}
          data-tab="room04"
          onClick={() => handleTabClick("room04")}
        >
          <span className="label">インサイド</span>
        </button>
      </div>
    );
  };

  /**
   * @name Room
   * @description 客室セクション
   */
  const Room = ({ currentTab }: { currentTab: string }) => {
    const RoomCards = (props: {
      cardItems: {
        id: string;
        src: string;
        name: string;
        caption: string;
        desc: string;
      }[];
    }) => {
      return props.cardItems.map((item, index) => (
        <dl key={index} className="card-item">
          <dt className="card-item__head">
            <figure>
              <Image
                src={getImagePath(item.src)}
                alt={item.name}
                width={334}
                height={200}
              />
              {item.caption && (
                <figcaption
                  dangerouslySetInnerHTML={{ __html: item.caption }}
                ></figcaption>
              )}
            </figure>
            <span
              className="name"
              dangerouslySetInnerHTML={{ __html: item.name }}
            ></span>
          </dt>
          <dd className="card-item__body">
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></span>
            <div className="modal-button">
              <button
                type="button"
                className="modal-button-el"
                data-id={item.id}
                onClick={handleModalOpen}
              >
                <span className="label" lang="en">
                  View More
                </span>
                <span className="icon">
                  <svg className="i-modal">
                    <use xlinkHref="#i-modal" />
                  </svg>
                </span>
              </button>
            </div>
          </dd>
        </dl>
      ));
    };

    const RoomBlock = (props: {
      type: string;
      desc: string;
      cards: {
        id: string;
        src: string;
        name: string;
        caption: string;
        desc: string;
      }[];
    }) => {
      const { type, desc } = props;
      return (
        <div id={type} className="room-block">
          <div className="text">
            <p dangerouslySetInnerHTML={{ __html: desc }}></p>
          </div>
          <div className="card-list">
            {<RoomCards cardItems={props.cards} />}
          </div>
        </div>
      );
    };

    const RoomContent = () => {
      return (
        <div className="room-selector-content" data-current={currentTab}>
          <RoomBlock
            type="room01"
            desc="最も豪華な客室で、コンシェルジュのゲストが海上でもパーソナルなサービスと自宅のような快適さをお楽しみいただけます。洗練された優雅さ、豪華なアメニティ、ディズニーならではのタッチでデザインされた、広々とした贅沢な客室とスイートをお楽しみください。コンシェルジュサービスには、プライベートリトリートへの専用アクセス、高級ショッピング、一流のスパサービス、高級フィットネス施設などが含まれます。"
            cards={roomType().type01Array}
          />
          <RoomBlock
            type="room02"
            desc="ご家族向けに作られた最も人気のある客室タイプです。最大4名様までご宿泊いただけ、海、ディズニーイマジネーションガーデン、ディズニーディスカバリーリーフの息を呑むような景色をお楽しみいただける専用バルコニーを備えています。日の出を眺め、海風に吹かれ、朝のコーヒーや夜の寝酒をお楽しみください。"
            cards={roomType().type02Array}
          />
          <RoomBlock
            type="room03"
            desc="最大4名様までご宿泊いただけるよう設計され、自然光が差し込む大きな窓から、美しい海の景色を楽しめる快適な客室です。個別のシングルベッドが備わっており、どなたにもぐっすりとお休みいただけます。"
            cards={roomType().type03Array}
          />
          <RoomBlock
            type="room04"
            desc="最大4名様までご宿泊いただけるよう設計され、エンターテイメント、ダイニング、ショッピングエリアに便利な場所に位置しています。個別のシングルベッドが備わっており、どなたにもぐっすりとお休みいただけます。"
            cards={roomType().type04Array}
          />
        </div>
      );
    };

    return <RoomContent />;
  };

  const Modal = (id: string) => {
    const modalData = roomOutline.find((item) => item[id]);
    if (!modalData || !modalData[id].name) return null;

    const sliderItems = modalData[id].slider.map(
      (slide: { src: string; caption: string }) => ({
        dom: (
          <figure>
            <Image
              src={slide.src}
              alt={slide.caption}
              width={334}
              height={300}
              priority
            />
            <figcaption
              dangerouslySetInnerHTML={{ __html: slide.caption }}
            ></figcaption>
          </figure>
        ),
      }),
    );

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
                slide.src || slide.caption,
            ) && (
              <div className="room-outline__slider">
                <Slider
                  type="small"
                  slides={sliderItems}
                  options={{ loop: true }}
                  autoplay={true}
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
              <p dangerouslySetInnerHTML={{ __html: modalData[id].desc }}></p>
            </div>
          )}
          {modalData[id].cat.some(
            (item: { cat: string; area: string }) => item.cat || item.area,
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
                    (item: { cat: string; area: string }, index: number) => (
                      <tr key={index}>
                        <td>{item.cat}</td>
                        <td>{item.area}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          )}
          {modalData[id].roomFacilities.cat.some(
            (item: { name: string; list: string[] }) =>
              item.name.trim() !== "" || item.list.length > 0,
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
                  (item: { name: string; list: string[] }, index: number) => (
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
                  ),
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
                    ),
                  )}
                </ul>
              </div>
            </div>
          )}
          {modalData[id].specification.some(
            (spec: { dt: string; dd: string }) => spec.dt || spec.dd,
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
                      <dt dangerouslySetInnerHTML={{ __html: spec.dt }}></dt>
                      <dd dangerouslySetInnerHTML={{ __html: spec.dd }}></dd>
                    </dl>
                  ),
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
                    ),
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
                    ),
                  )}
                </ul>
              </div>
            </div>
          )}
          {modalData[id].balcony["list"].length > 0 && (
            <div className="room-balcony">
              <div className="room-balcony__head">
                <Headline design="01" hlLevel="p">
                  バルコニー
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
                    ),
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
                    ),
                  )}
                </ul>
              </div>
            </div>
          )}
          {modalData[id].preDepartureServices["list"].length > 0 && (
            <div className="room-preDepartureServices">
              <div className="room-preDepartureServices__head">
                <Headline design="01" hlLevel="p">
                  出発前サービス
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
                    ),
                  )}
                </ul>
              </div>
            </div>
          )}
          {modalData[id].onboardServices["list"].length > 0 && (
            <div className="room-onboardServices">
              <div className="room-onboardServices__head">
                <Headline design="01" hlLevel="p">
                  船内サービス
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
                    ),
                  )}
                </ul>
              </div>
            </div>
          )}
          {modalData[id].guest.length > 0 && (
            <div className="room-guest">
              <div className="room-guest__head">
                <Headline design="01" hlLevel="p">
                  コンシェルジュゲスト専用
                </Headline>
              </div>
              <div className="room-guest__body">
                {modalData[id].guest.map((item: string, index: number) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="page">
        <div className="p-accommodations">
          <Breadcrumb items={breadcrumbItems} />
          <Title
            type="slider"
            title="客室案内"
            en="Accommodations"
            slider={heroSliderItems}
          />
          <GSAPToggleContainer
            tag="div"
            className="l-has-aside-container"
            toggle={{ logo: false, color: "blue" }}
          >
            <main className="l-main">
              <article className="l-article">
                <section
                  id="sec01"
                  className="p-accommodations-section"
                  ref={sec01Ref}
                >
                  <OnmHeadline01
                    hlLevel="h2"
                    jp="客室タイプ"
                    en={`Staterooms`}
                  />
                  <div className="accommodations-block">
                    <div className="lead">
                      <p>
                        以下の4つのカテゴリーから、
                        <br className="nopc" />
                        あなたにぴったりの素敵な客室をお選びいただけます。
                      </p>
                    </div>
                    <div className="room">
                      <RoomSlector selectorRef={roomSelectorRefs[0]} />
                      <Room currentTab={currentTab} />
                      <RoomSlector selectorRef={roomSelectorRefs[1]} />
                    </div>
                  </div>
                </section>
                <Deckplan id="sec02" />
              </article>
            </main>
            <Aside page="page" nav={navArray} />
          </GSAPToggleContainer>
        </div>
      </div>
      <div className="room-modal" data-open={isModalOpen}>
        {isModalOpen && Modal(modalId!)}
      </div>
    </>
  );
}
