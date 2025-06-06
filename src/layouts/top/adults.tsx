/**
 * @name adults.tsx
 * @description 大人のための施設
 */
"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { Link as Scroll } from "react-scroll";
import Image from "next/image";
import helper from "@/libs/helper";
import Button from "@/components/modules/buttons/button";
import LargeButton from "@/components/modules/buttons/largeButton";
import { GSAPToggleContainer } from "@/components/modules/gsap/container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// array
import { topRelaxations } from "@/libs/array";

// embla-carousel
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

// tools
import {
  DotButton,
  useDotButton,
} from "@/components/modules/slider/sliderDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/modules/slider/sliserArrowButton";

// styles
import "./styles/adults.scss";

export default function Adults() {
  const [isOffset, setIsOffset] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { getImagePath } = helper();

  /**
   * @name generateElements
   * @description 各施設の要素を生成する
   */
  const generateElements = (
    array: Record<string, { name: string; en: string; desp: string }>,
  ) => {
    const outline = Object.keys(array).map((key) => {
      return (
        <div
          key={key}
          className={`outline-item ${key == "01" ? "isActive" : "isNext"}`}
          data-num={key}
        >
          <dl className="outline-box">
            <dt className="outline-title">
              <p className="ja">{array[key].name}</p>
              <p className="en" lang="en">
                {array[key].en}
              </p>
            </dt>
            <dd className="outline-text">
              <p>{array[key].desp}</p>
            </dd>
          </dl>
          <div className="outline-image">
            <Image
              src={getImagePath(`top/adults/img${key}.jpg`)}
              alt={array[key].name + "のイメージ写真"}
              width={580}
              height={387}
              priority
            />
          </div>
        </div>
      );
    });

    const bg = Object.keys(array).map((key) => {
      return (
        <div
          key={key}
          id={"outline" + key}
          className={`${key == "01" ? "relaxation-bg-item isActive" : "relaxation-bg-item"}`}
          data-num={key}
        >
          <Image
            src={getImagePath(`top/adults/bg${key}.jpg`)}
            alt=""
            width={1300}
            height={640}
            priority
          />
        </div>
      );
    });

    return { outline, bg };
  };

  const Relaxation = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
      ClassNames(),
    ]);
    const { outline, bg } = useMemo(
      () => generateElements(topRelaxations),
      [topRelaxations],
    );

    // dotButtonとprevNextButtonsのカスタムフックを使用
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(emblaApi);
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      const pc = "(min-width: 1025px)";

      const container = containerRef.current;
      if (!container) return;

      // スクロールアニメーションの設定
      const scrollAnimation = () => {
        const ctx = gsap.context(() => {
          const propaty = {
            current: container.querySelector(
              ".relaxation-outline",
            ) as HTMLElement,
            outlineItems: container.querySelectorAll(".outline-item"),
            bgItems: container.querySelectorAll(".relaxation-bg-item"),
            paginationItems: container.querySelectorAll(".balet"),
            currentNumber: container.querySelectorAll(".current .val"),
          };

          const setCurrent = (num: number) => {
            if (!num) return;

            // 2. outline
            propaty.outlineItems.forEach((item, index) => {
              item.classList.remove("isActive", "isPrev", "isNext");
              if (index + 1 === num) {
                item.classList.add("isActive");
              } else if (index + 1 < num) {
                item.classList.add("isPrev");
              } else {
                item.classList.add("isNext");
              }
            });

            // 3. current number
            propaty.currentNumber.forEach((item) =>
              item.classList.remove("isCurrent"),
            );
            propaty.currentNumber[num - 1].classList.add("isCurrent");

            // 4. pagination
            propaty.paginationItems.forEach((item) =>
              item.classList.remove("isCurrent"),
            );
            propaty.paginationItems[num - 1].classList.add("isCurrent");
          };

          propaty.bgItems.forEach((el) => {
            gsap.to(el, {
              scrollTrigger: {
                trigger: el,
                start: "top 50%",
                end: "bottom 50%",
                invalidateOnRefresh: true,
                onEnter: () =>
                  setCurrent(parseInt(el.getAttribute("data-num") as string)),
                onEnterBack: () =>
                  setCurrent(parseInt(el.getAttribute("data-num") as string)),
              },
            });
          });
        }, containerRef);

        return () => ctx.revert();
      };

      // オフセットの更新
      const updateOffsets = () => {
        const bgItem = container.querySelector(
          ".relaxation-bg-item",
        ) as HTMLElement;
        const offsets = () => {
          const itemHeight = bgItem.offsetHeight;
          const windowHeight = window.innerHeight;
          return (itemHeight - windowHeight) / 2;
        };
        setIsOffset(offsets());
      };

      const resizeObserver = new ResizeObserver(updateOffsets);
      resizeObserver.observe(container);

      // PC用のアニメーション設定
      mm.add(pc, () => scrollAnimation());

      // クリーンアップ
      return () => {
        mm.revert();
        resizeObserver.disconnect();
        gsap.killTweensOf(container);
      };
    }, []);

    return (
      <GSAPToggleContainer
        tag="div"
        className="t-adults__relaxation"
        toggle={{ logo: false, color: "white" }}
      >
        <div data-current={`is-relaxation0${selectedIndex + 1}`}>
          <div className="relaxation" ref={containerRef}>
            <div className="relaxation-outline">
              <div className="outline">
                <div className="current">
                  <span className="bar is-left"></span>
                  <svg className="onm is-left">
                    <use href="#i-onm-02"></use>
                  </svg>
                  <div className="label">
                    <span className="ttl" lang="en">
                      Relaxation
                    </span>
                    <span className="num" lang="en">
                      <span>0</span>
                      <span className="val isCurrent" data-num="1">
                        1
                      </span>
                      <span className="val" data-num="2">
                        2
                      </span>
                      <span className="val" data-num="3">
                        3
                      </span>
                    </span>
                  </div>
                  <svg className="onm is-right">
                    <use href="#i-onm-02"></use>
                  </svg>
                  <span className="bar is-right"></span>
                </div>
                <div className="outline-list">
                  <div className="outline-slider-box" ref={emblaRef}>
                    <div className="outline-slider-list" role="list">
                      {outline}
                    </div>
                  </div>
                </div>
                <div className="pagination">
                  <div className="pagination-list">
                    <Scroll
                      to="outline01"
                      smooth={true}
                      duration={500}
                      offset={isOffset}
                      lang="en"
                      className="balet isCurrent"
                      data-num="1"
                    >
                      1
                    </Scroll>
                    <Scroll
                      to="outline02"
                      smooth={true}
                      duration={500}
                      offset={isOffset}
                      lang="en"
                      className="balet"
                      data-num="2"
                    >
                      2
                    </Scroll>
                    <Scroll
                      to="outline03"
                      smooth={true}
                      duration={500}
                      offset={isOffset}
                      lang="en"
                      className="balet"
                      data-num="3"
                    >
                      3
                    </Scroll>
                  </div>
                </div>
                <div className="tool-box-buttons">
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </div>
                <div className="tool-box-dots">
                  {scrollSnaps.map((_, index) => (
                    <DotButton
                      key={index}
                      onClick={() => onDotButtonClick(index)}
                      className={"dotButton".concat(
                        index === selectedIndex ? " isActive" : "",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="relaxation-bg">{bg}</div>
          </div>
        </div>
      </GSAPToggleContainer>
    );
  };

  return (
    <section className="t-adults">
      <div className="container">
        <div className="accent">
          <span className="bar"></span>
          <svg className="onm">
            <use href="#i-onm-03"></use>
          </svg>
          <span className="bar"></span>
        </div>
        <div className="t-adults__detail">
          <hgroup className="t-adults__head">
            <p lang="en">For Adults</p>
            <h2>大人のための施設</h2>
          </hgroup>
          <hgroup className="t-adults__text">
            <h3>ワンランク上の大人の時間を堪能する。</h3>
            <p>
              お子様がお子様専用のクラブで
              <br className="nopc" />
              楽しい時間を過ごしている間、
              <br className="nopc" />
              ご自身にはワンランク上の大人の体験を。
              <br />
              贅沢なスパトリートメント、
              <br className="nopc" />
              アットホームなダイニング、専門店のショッピング、
              <br className="nopc" />
              魅惑的なラウンジをお楽しみください。
            </p>
          </hgroup>
        </div>
        <Relaxation />
        <GSAPToggleContainer
          tag="div"
          className="t-adults__button"
          toggle={{ logo: false, color: "blue" }}
        >
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
        </GSAPToggleContainer>
      </div>
    </section>
  );
}
