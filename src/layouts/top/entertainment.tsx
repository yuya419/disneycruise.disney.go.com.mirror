/**
 * @name entertainment.tsx
 * @description Legendary Entertainment 船上で味わう、最高のエンターテイメント
 */
"use client";
import Button from "@/components/modules/buttons/button";
import {
  GallerySlider,
  GalleryParallax,
} from "@/components/modules/common/common";
import { GSAPToggleContainer } from "@/components/modules/gsap/container";
import "./styles/entertainment.scss";

export default function Entertainment() {
  const images = {
    img01: {
      src: "top/entertainment/img01.jpg",
      alt: "",
      w: 220,
      h: 172,
    },
    img02: {
      src: "top/entertainment/img02.jpg",
      alt: "",
      w: 290,
      h: 226,
    },
    img03: {
      src: "top/entertainment/img03.jpg",
      alt: "",
      w: 110,
      h: 86,
    },
    img04: {
      src: "top/entertainment/img04.jpg",
      alt: "",
      w: 190,
      h: 148,
    },
    img05: {
      src: "top/entertainment/img05.jpg",
      alt: "",
      w: 230,
      h: 180,
    },
    img06: {
      src: "top/entertainment/img06.jpg",
      alt: "",
      w: 320,
      h: 250,
    },
    img07: {
      src: "top/entertainment/img07.jpg",
      alt: "",
      w: 160,
      h: 125,
    },
  };

  const reverseImages = Object.keys(images)
    .reverse()
    .reduce(
      (acc, key) => {
        acc[key] = images[key as keyof typeof images];
        return acc;
      },
      {} as {
        [key: string]: { src: string; alt: string; w: number; h: number };
      },
    );

  return (
    <GSAPToggleContainer
      tag="section"
      className="t-entertainment"
      toggle={{ logo: false, color: "blue" }}
    >
      <GallerySlider to="left" images={reverseImages} />
      <div className="container">
        <hgroup className="t-entertainment__head">
          <p>船上で味わう、最高のエンターテイメント</p>
          <h2 lang="en">
            Legendary <br className="nopc" />
            Entertainment
          </h2>
        </hgroup>
        <div className="t-entertainment__detail">
          <div className="detail">
            <div className="accent is-top">
              <span className="bar"></span>
              <svg className="onm">
                <use href="#i-onm-03"></use>
              </svg>
              <span className="bar"></span>
            </div>
            <div className="text-box">
              <h3>
                きっとあなたは、
                <br />
                忘れられない魔法にかかる。
              </h3>
              <p>
                華やかなブロードウェイ
                <br className="nopc" />
                スタイルのショー、
                <br />
                楽しいデッキパーティー、映画上映。
                <br />
                ディズニー、ピクサー、
                <br />
                マーベルのお気に入りの仲間たちとの
                <br />
                忘れられない交流会など、
                <br />
                ディズニーの魔法を体験してください。
              </p>
              <Button
                type="primary"
                label="View More"
                lang="en"
                link="/entertainment/"
                align="center"
              />
            </div>
            <div className="accent is-bottom">
              <span className="bar"></span>
              <svg className="onm">
                <use href="#i-onm-03"></use>
              </svg>
              <span className="bar"></span>
            </div>
          </div>
          <p className="en" lang="en">
            The magic of Disney for all guests.
          </p>
        </div>
      </div>
      <GallerySlider to="left" images={images} />
      <GalleryParallax images={images} />
    </GSAPToggleContainer>
  );
}
