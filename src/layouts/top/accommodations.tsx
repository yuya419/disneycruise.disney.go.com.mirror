/**
 * @name accommodations.tsx
 * @description 客室案内
 */
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import helper from "@/libs/helper";
import Button from "@/components/modules/buttons/button";
import LargeButton from "@/components/modules/buttons/largeButton";
import { arrow } from "@/components/modules/icons/icon";
import { useHandleLinkClick } from "@/hooks/usePageTransition";
import "./styles/accommodations.scss";

export default function Accommodations() {
  const { getImagePath } = helper();
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = useHandleLinkClick();

  const rooms: Record<
    string,
    { name: string; en: string; desp: string; link: string; image: string }
  > = {
    room01: {
      name: "コンシェルジュ・スイート",
      en: "Concierge Suites & Staterooms",
      desp: "最高級の客室で、コンシェルジュによるきめ細やかなおもてなしと、まるで洋上のご自宅のような快適さをご堪能ください。",
      link: "/accommodations/?type=room01",
      image: "top/accommodations/room01.jpg",
    },
    room02: {
      name: "ベランダ客室",
      en: "Verandah Stateroom",
      desp: "プライベートバルコニーで新鮮な空気を感じながら、客室の快適さを保ったまま絶景をお楽しみいただけます。",
      link: "/accommodations/?type=room02",
      image: "common/dummy/course-list-type02-thumbnail.jpg",
    },
    room03: {
      name: "オーシャンビュー客室",
      en: "Oceanview Stateroom",
      desp: "自然光が差し込む大きな窓から、美しい海の景色を楽しめる快適な客室で、ゆったりとおくつろぎください。",
      link: "/accommodations/?type=room03",
      image: "common/dummy/course-list-type03-thumbnail.jpg",
    },
    room04: {
      name: "内側​​​客室",
      en: "Inside Stateroom",
      desp: "もっともリーズナブルに楽しめる内側客室は、エンターテイメント、ダイニング、ショッピングエリアに便利な場所に位置します。",
      link: "/accommodations/?type=room04",
      image: "common/dummy/course-list-type04-thumbnail.jpg",
    },
  };

  /**
   * @name Detail
   * @description 客室詳細
   */
  const Detail = () => {
    const roomImages = Object.keys(rooms).map((key) => {
      return (
        <div
          key={key}
          className={`room-image-item ${key == "room01" ? "isSelect" : "isNext"}`}
          data-room={key}
        >
          <Image
            src={getImagePath(rooms[key].image)}
            alt={`${rooms[key].name}の内装`}
            width={550}
            height={455}
            priority
          />
        </div>
      );
    });

    const roomDetails = Object.keys(rooms).map((key) => {
      return (
        <div
          className={`room-detail-item ${key == "room01" ? "isSelect" : ""}`}
          key={key}
          data-room={key}
        >
          <dl className="room-detail-box">
            <dt className="room-name">
              <div className="acdn-content">
                <div className="acdn-inner">
                  <Image
                    src={getImagePath(rooms[key].image)}
                    alt={`${rooms[key].name}の内装`}
                    width={550}
                    height={455}
                    priority
                  />
                </div>
                <div className="name-box">
                  <div className="name">
                    <span className="ja">{rooms[key].name}</span>
                    <span className="en" lang="en">
                      {rooms[key].en}
                    </span>
                  </div>
                  <span className="icon">
                    {arrow({ bg: "blue", color: "white" })}
                  </span>
                </div>
              </div>
            </dt>
            <dd className="room-desp">
              <div className="acdn-content">
                <div className="acdn-inner">
                  <p className="desp">{rooms[key].desp}</p>
                  <Button
                    type="primary"
                    label="View More"
                    lang="en"
                    link={rooms[key].link}
                    align="left"
                  />
                </div>
              </div>
            </dd>
          </dl>
          <Link href={rooms[key].link} className="room-link" onClick={(e) => handleLinkClick(e, rooms[key].link)} />
        </div>
      );
    });

    return (
      <div className="detail">
        <div className="room-image">{roomImages}</div>
        <div className="room-detail">{roomDetails}</div>
      </div>
    );
  };

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // メディアクエリの設定
    const mediaQuery = window.matchMedia("(min-width: 1025px)");

    // 要素の取得
    const roomImages = wrap.querySelectorAll(".room-image-item");
    const roomDetails = wrap.querySelectorAll(".room-detail-item");

    // イベントリスナーの設定
    const handleEnter = (e: Event) => toggleHover(e, true);
    const handleClick = (e: Event) => toggleClick(e);

    /**
     * @name toggleHover
     * @description ホバー時の処理
     * @param e
     * @param isSelect
     * @returns
     */
    const toggleHover = (e: Event, isSelect: boolean) => {
      const target = e.target as HTMLElement;
      const room = target.getAttribute("data-room");
      if (!room) return;

      // 選択された要素を取得
      const imageItem = wrap.querySelector(
        `.room-image-item[data-room="${room}"]`,
      );
      const detailItem = wrap.querySelector(
        `.room-detail-item[data-room="${room}"]`,
      );

      // すべてのクラスをリセット
      roomImages.forEach((item) =>
        item.classList.remove("isSelect", "isPrev", "isNext"),
      );
      roomDetails.forEach((item) =>
        item !== detailItem ? item.classList.remove("isSelect") : null,
      );

      // 選択された要素にクラスを付与
      if (imageItem && detailItem) {
        imageItem.classList.toggle("isSelect", isSelect);
        detailItem.classList.toggle("isSelect", isSelect);
      }

      // 前後の要素にクラスを付与
      if (imageItem) {
        const imageIndex = Array.from(roomImages).indexOf(imageItem);

        // 前の要素に isPrev を付与
        roomImages.forEach((item, index) => {
          if (index < imageIndex) {
            item.classList.add("isPrev");
          }
        });

        // 後の要素に isNext を付与
        roomImages.forEach((item, index) => {
          if (index > imageIndex) {
            item.classList.add("isNext");
          }
        });
      }
    };

    /**
     * @name toggleClick
     * @description クリック時の処理
     * @param e
     * @returns
     */
    const toggleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      target.classList.toggle("isSelect");
    };

    // メディアクエリに応じたイベントリスナーの設定
    const handleMediaChange = () => {
      if (mediaQuery.matches) {
        roomDetails.forEach((item, key) => {
          item.removeEventListener("click", handleClick);
          item.addEventListener("mouseenter", handleEnter);
        });
      } else {
        roomDetails.forEach((item) => {
          item.removeEventListener("mouseenter", handleEnter);
          item.addEventListener("click", handleClick);
        });
      }
    };

    // 初回実行
    handleMediaChange();

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      roomDetails.forEach((item) => {
        item.removeEventListener("mouseenter", handleEnter);
        item.removeEventListener("click", handleClick);
      });
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <section className="t-accommodations" ref={wrapRef}>
      <div className="container">
        <div className="accent">
          <span className="bar is-left"></span>
          <svg className="onm">
            <use href="#i-onm-03"></use>
          </svg>
          <span className="bar is-right"></span>
        </div>
        <hgroup className="t-accommodations__head">
          <p lang="en">Accommodations</p>
          <h2>客室案内</h2>
        </hgroup>
        <div className="t-accommodations__text">
          <h3>
            最高の快適さと利便性を
            <br className="nopc" />
            追求した客室で、旅を満喫。
          </h3>
          <p>
            家族や友人、
            <br className="nopc" />
            カップルで楽しむ旅行など、誰と過ごすにも
            <br />
            ディズニーの客室とスイートなら、
            <br className="nopc" />
            リラックスして快適にお過ごしいただけます。
            <br />
            各客室とスイートには、ディズニー、ピクサー、
            <br className="nopc" />
            マーベルのストーリーにインスピレーションを得たアートワークなど、
            <br className="nosp" />
            他では見られない
            <br className="nopc" />
            魔法のような雰囲気が漂います。
          </p>
        </div>
        <div className="t-accommodations__detail">
          <Detail />
          <LargeButton
            label="すべての客室案内はこちら"
            enLabel="Learn Accommodations More"
            link="/accommodations/"
          />
          <Button
            type="primary"
            label="すべての客室案内はこちら"
            link="/accommodations/"
            align="center"
          />
        </div>
      </div>
    </section>
  );
}
