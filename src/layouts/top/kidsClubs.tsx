/**
 * @name kidsClubs.tsx
 * @description キッズクラブ
 */
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GallerySlider } from "@/components/modules/common/common";
import helper from "@/libs/helper";
import Button from "@/components/modules/buttons/button";
import "./styles/kidsClubs.scss";

export default function KidsClubs() {
  const { getImagePath } = helper();
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const mm = gsap.matchMedia();
  const pc = "(min-width: 1025px)";
  const sp = "(max-width: 1024px)";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // スクロールアニメーションの設定
    const scrollAnimation = () => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: container,
          start: "top 50%",
          end: "top 50%",
          invalidateOnRefresh: true,
          onEnter: () => container.style.setProperty("--val", "0"),
          onEnterBack: () => container.style.setProperty("--val", "0.8"),
        });
      }, containerRef);

      return () => ctx.revert();
    };

    // PC用のアニメーション設定
    mm.add(pc, () => scrollAnimation());

    return () => {
      mm.revert();
      gsap.killTweensOf(container);
    };
  }, [pathname]);

  const CircleSlider = () => {
    const slideItems = () => {
      return Array.from({ length: 3 }, (_, i) => (
        <li className="circle-slide-item" key={i}>
          <Image
            src={getImagePath(`top/kidsclubs/img0${i + 1}.jpg`)}
            alt=""
            width={540}
            height={347}
          />
        </li>
      ));
    };

    return (
      <div className="t-kids-clubs__circle-slider">
        <div className="circle-slider" ref={containerRef}>
          <ul className="circle-slide-list">
            {slideItems()}
          </ul>
        </div>
      </div>
    );
  };

  const images_sp = {
    img01: {
      src: "top/kidsclubs/img01.jpg",
      alt: "",
      w: 349,
      h: 233,
    },
    img02: {
      src: "top/kidsclubs/img02.jpg",
      alt: "",
      w: 349,
      h: 233,
    },
    img03: {
      src: "top/kidsclubs/img03.jpg",
      alt: "",
      w: 349,
      h: 233,
    },
  };

  return (
    <section className="t-kids-clubs">
      <div className="container">
        <CircleSlider />
        <GallerySlider to="left" images={images_sp} />
        <hgroup className="t-kids-clubs__head">
          <p lang="en">Kids Clubs</p>
          <h2>キッズクラブ</h2>
        </hgroup>
        <div className="t-kids-clubs__text">
          <h3>アクション満載の冒険のはじまり！</h3>
          <p>
            お子様、10代前半、10代の若者は、
            <br className="nopc" />
            インタラクティブな楽しさがあふれる
            <br className="nopc" />
            ユニークな専用スペースで、
            <br className="nosp" />
            自分だけの
            <br className="nopc" />
            新しい冒険に乗り出すことができます。
          </p>
          <Button
            type="primary"
            label="View More"
            lang="en"
            link="/kids-clubs/"
            align="center"
          />
        </div>
      </div>
    </section>
  );
}
