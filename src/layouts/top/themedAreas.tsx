/**
 * @name themedAreas
 * @description 7つのテーマ別エリア
 */
'use client';
import { useEffect, useState, useRef, useMemo, use } from "react";
import { Link as Scroll } from 'react-scroll'
import Image from "next/image";
import Link from "next/link";
import helper from "@/libs/helper";
import Button from "@/components/modules/buttons/button";
import { arrow } from "@/components/modules/icons/icon";
import { GSAPToggleContainer, GSAPMaskToggle } from "@/components/modules/gsap/container";

// array
import { topThemedAreas } from "@/libs/array";

// embla-carousel
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from "embla-carousel-class-names";

// tools
import { DotButton, useDotButton } from '@/components/modules/slider/sliderDotButton'
import { PrevButton, NextButton, usePrevNextButtons } from '@/components/modules/slider/sliserArrowButton'

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// styles
import "./styles/themedAreas.scss";

export default function ThemedAreas() {
    const { getImagePath } = helper();

    // refs
    const refs = {
        container: useRef<HTMLDivElement>(null),
        current: useRef<HTMLDivElement>(null),
        spaces: useRef<HTMLDivElement[]>([] as HTMLDivElement[]),
        areasHead: useRef<HTMLDivElement>(null),
        areasDetail: useRef<HTMLDivElement>(null),
        areaOutline: useRef<HTMLDivElement>(null),
        areaImages: useRef<HTMLDivElement[]>([] as HTMLDivElement[]),
        areaCV: useRef<HTMLDivElement>(null),
        bgItems: useRef<HTMLDivElement[]>([] as HTMLDivElement[]),
    }

    // spaceのrefをまとめる
    const addRef = () => {
        const addSpacesRef = (el: HTMLDivElement | null) => {
            if (el && refs.spaces.current && !refs.spaces.current.includes(el)) {
                refs.spaces.current.push(el);
            }
        }

        const addBgRef = (el: HTMLDivElement | null) => {
            if (el && refs.bgItems.current && !refs.bgItems.current.includes(el)) {
                refs.bgItems.current.push(el);
            }
        }
        const addAreaImageRef = (el: HTMLDivElement | null) => {
            if (el && refs.areaImages.current && !refs.areaImages.current.includes(el)) {
                refs.areaImages.current.push(el);
            }
        }

        return {
            addSpacesRef,
            addBgRef,
            addAreaImageRef,
        }
    };

    /**
     * @name generateElements
     * @description 各エリアの要素を生成する
     */
    const generateElements = (array: Record<string, { name: string, en: string, desp: string }>) => {
        const outline = Object.keys(array).map((key) => (
            <div key={key} className={`outline-item is-outline0${key}`} role="listitem">
                <dl className="outline-box">
                    <dt className="outline-title">
                        <p className="en" lang="en">{array[key].en}</p>
                        <p className="ja">{array[key].name}</p>
                    </dt>
                    <dd className="outline-text">
                        <p dangerouslySetInnerHTML={{ __html: array[key].desp }}></p>
                        <Button type="quaternary" label="View More" lang="en" link={`/themed-areas/#area${key}`} align="center" />
                    </dd>
                </dl>
                <div className="outline-image">
                    <div className="img" ref={addRef().addAreaImageRef} >
                        <Image src={getImagePath(`top/area/img0${key}.jpg`)} alt={`${array[key].name}エリアのイメージイラスト`} width={820} height={461} priority />
                    </div>
                    <Link href={`/themed-areas/#area0${key}`} className="outline-link"></Link>
                </div>
            </div>
        ));

        const bg = Object.keys(array).map((key) => (
            <div key={key} className={`areas-bg-item is-area0${key}`} ref={addRef().addBgRef}>
                <Image src={getImagePath(`top/area/grd/grd-0${key}.png`)} alt="" width={1300} height={830} priority className="grd nosp" />
                <Image src={getImagePath(`top/area/img0${key}_sp.jpg`)} alt="" width={1300} height={830} priority className="image nopc" />
                <Image src={getImagePath(`top/area/img0${key}.jpg`)} alt="" width={1300} height={830} priority className="image nosp" />
            </div>
        ));

        const space = () => {
            const spaceArray = [];
            for (let i = 0; i < 9; i++) {
                spaceArray.push(
                    <div key={i} id={`area${i}`} className="space" data-num={i} ref={addRef().addSpacesRef}></div>
                );
            }
            return spaceArray;
        }

        return { outline, bg, space };
    };

    /**
     * @name Areas
     * @description エリアの要素を生成するコンポーネント
     */
    const Areas = () => {

        // EmblaCarouselの初期化
        let options = {
            breakpoints: { '(min-width: 1025px)': { active: false } }
        }
        const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);
        const { outline, bg, space } = useMemo(() => generateElements(topThemedAreas), [topThemedAreas]);

        // dotButtonとprevNextButtonsのカスタムフックを使用
        const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
        const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

        return (
            <GSAPToggleContainer tag="div" className="areas" toggle={{ logo: false, color: "white" }}>
                <div data-current={`is-area0${selectedIndex + 1}`} ref={refs.current}>
                    {space()}
                    <div className="areas-bg">
                        {bg}
                    </div>
                    <div className="areas-outline" ref={refs.areaOutline}>
                        <div className="current">
                            <span className="bar is-left"></span>
                            <svg className="onm is-left"><use href="#i-onm-02"></use></svg>
                            <div className="label">
                                <span className="ttl" lang="en">Area</span>
                                <span className="num" lang="en">
                                    <span className="zero">0</span>
                                    {Object.keys(topThemedAreas).map((key) => (
                                        <span key={key} className={`val is-val0${key}`}>{key}</span>
                                    ))}
                                </span>
                            </div>
                            <svg className="onm is-right"><use href="#i-onm-02"></use></svg>
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
                                {Object.keys(topThemedAreas).map((key) => (
                                    <Scroll key={key} to={`area${key}`} smooth={true} duration={500} offset={0} lang="en" className="balet" data-num={key}>{key}</Scroll>
                                ))}
                            </div>
                        </div>
                        <div className="scroll-guide">
                            <p lang="en">Keep Scrolling</p>
                        </div>
                        <div className="tool-box-buttons">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                        </div>
                        <div className="tool-box-dots">
                            {scrollSnaps.map((_, index) => (
                                <DotButton key={index} onClick={() => onDotButtonClick(index)} className={'dotButton'.concat(index === selectedIndex ? ' isActive' : '')} />
                            ))}
                        </div>
                    </div>
                    <div className="areas-cv" ref={refs.areaCV}>
                        <div className="cv-box">
                            <div className="accent is-top">
                                <span className="bar is-left"></span>
                                <svg className="onm"><use href="#i-onm-03"></use></svg>
                                <span className="bar is-right"></span>
                            </div>
                            <div className="cv-lead">
                                <p className="en" lang="en">Welcome to <br />Disney Adventure!</p>
                                <p className="ja">夢と魔法がいっぱいの冒険をはじめましょう。</p>
                            </div>
                            <div className="cv-buttons">
                                <div className="cv-button">
                                    <Link href="/themed-areas/" className="cv-button-el is-button-area">
                                        <span className="label">
                                            <span className="en" lang="en">Explore <br className="nopc" />the Areas</span>
                                            <span className="ja">各エリアを詳しく見る</span>
                                        </span>
                                        {arrow({ bg: "blue", color: "white", })}
                                    </Link>
                                </div>
                                <div className="cv-button">
                                    <Link href="/book/" className="cv-button-el is-button-book">
                                        <span className="label">
                                            <span className="en" lang="en">Reservation</span>
                                            <span className="ja">ご予約はこちら</span>
                                        </span>
                                        <span className="icon">
                                            <svg className="i-calendar">
                                                <use xlinkHref="#i-calendar" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="accent is-bottom">
                                <span className="bar is-left"></span>
                                <svg className="onm"><use href="#i-onm-03"></use></svg>
                                <span className="bar is-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </GSAPToggleContainer>
        )
    }

    /**
     * @name scrollAnimation
     * @description スクロールアニメーションの設定
     */
    const scrollAnimation = () => {
        const el = {
            continer: refs.container.current,
            spaces: refs.spaces.current,
            current: refs.current.current,
            areaOutline: refs.areaOutline.current,
            areaImages: refs.areaImages.current,
            bgItems: refs.bgItems.current,
        }

        const toggleActive = (el: HTMLDivElement | null, Boolean: boolean) => {
            if (el) {
                el.classList.toggle('isActive', Boolean);
            }
        }

        const phase01 = () => {
            ScrollTrigger.create({
                trigger: el.continer,
                start: 'top 20%',
                end: 'top 20%',
                onEnter: () => {
                    toggleActive(refs.areasHead.current, true);
                    toggleActive(refs.areasDetail.current, true);
                },
                onLeaveBack: () => {
                    toggleActive(refs.areasHead.current, false);
                    toggleActive(refs.areasDetail.current, false);
                },
            });
        }

        const phase02 = () => {
            const animations = [
                {
                    configs: [
                        { trigger: el.spaces[0], start: 'center bottom', end: 'bottom bottom' },
                    ],
                    props: {
                        '--scale': {
                            start: 1140 / 1300,
                            end: 1,
                        }
                    },
                },
                {
                    configs: [
                        { trigger: el.spaces[0], start: 'center top', end: 'bottom top' },
                    ],
                    props: {
                        '--filter': {
                            start: 0,
                            end: 1,
                        }
                    },
                    onLeave: () => {
                        toggleActive(refs.areaOutline.current, true);
                    },
                    onEnterBack: () => {
                        toggleActive(refs.areaOutline.current, false);
                    }
                },
            ];

            animations.forEach((animation) => {
                animation.configs.forEach((config) => {
                    ScrollTrigger.create({
                        trigger: config.trigger,
                        start: config.start,
                        end: config.end,
                        scrub: true,
                        invalidateOnRefresh: true,
                        onLeave: animation.onLeave,
                        onEnterBack: animation.onEnterBack,
                        onUpdate: (self) => {
                            let progress = self.progress;
                            Object.entries(animation.props).forEach(([key, value]) => {
                                let start = value.start;
                                let end = value.end;
                                let newValue = start + (end - start) * progress;
                                el.current?.style.setProperty(key, `${newValue}`);
                            });
                        }
                    });
                });
            });
        }

        const phase03 = () => {
            el.spaces.slice(1, 8).forEach((space) => {
                ScrollTrigger.create({
                    trigger: space,
                    start: 'top center',
                    end: 'top center',
                    onEnter: () => {
                        refs.current.current?.setAttribute('data-current', `is-area0${space.dataset.num}`);
                    },
                    onLeaveBack: () => {
                        let num = Number(space.dataset.num) - 1;
                        refs.current.current?.setAttribute('data-current', `is-area${num.toString().padStart(2, '0')}`);
                    },
                });
            })
        }

        const phase04 = () => {
            let options = {
                start: '-50% center',
                end: 'center center',
                scrub: true,
                invalidateOnRefresh: true,
                overwrite: true,
            }

            // areaImage
            const areaImage = (img: HTMLImageElement, wrap: HTMLDivElement, progress: number) => {
                let areaImage = {
                    img: {
                        start: { cp: 0, y: 0 },
                        end: { cp: 75, y: -25 }
                    },
                    wrap: {
                        start: { cp: 75, y: 25 },
                        end: { cp: 0, y: 0 }
                    }
                }

                let imgCp = areaImage.img.start.cp + (areaImage.img.end.cp - areaImage.img.start.cp) * progress;
                let imgY = areaImage.img.start.y + (areaImage.img.end.y - areaImage.img.start.y) * progress;
                let wrapCp = areaImage.wrap.start.cp + (areaImage.wrap.end.cp - areaImage.wrap.start.cp) * progress;
                let wrapY = areaImage.wrap.start.y + (areaImage.wrap.end.y - areaImage.wrap.start.y) * progress;

                img.style.setProperty("--clip-path", `inset(0 0 ${imgCp}%)`);
                img.style.setProperty("--y", `${imgY}%`);

                wrap.style.setProperty("--wrap-clip-path", `inset(${wrapCp}% 0 0)`);
                wrap.style.setProperty("--wrap-y", `${wrapY}%`);
            }

            // maskPosition
            const maskPosition = (el: HTMLDivElement, progress: number) => {
                let maskPosition = {
                    start: { x: 30, y: -30 },
                    end: { x: 60, y: 77 }
                };
                let maskX = maskPosition.start.x + (maskPosition.end.x - maskPosition.start.x) * progress;
                let maskY = maskPosition.start.y + (maskPosition.end.y - maskPosition.start.y) * progress;
                el.style.setProperty("--mask-position", `${maskX}% ${maskY}%`);
            }

            el.spaces.slice(2, 8).forEach((space, index) => {
                ScrollTrigger.create({
                    trigger: space,
                    ...options,
                    onEnter: () => {
                        toggleActive(el.bgItems[index - 1], false)
                        toggleActive(el.bgItems[index + 1], true)
                    },
                    onLeaveBack: () => {
                        toggleActive(el.bgItems[index - 1], true)
                        toggleActive(el.bgItems[index + 1], false)
                    },
                    onUpdate: (self) => {
                        let progress = self.progress;
                        maskPosition(el.bgItems[index + 1], progress);
                        areaImage(el.areaImages[index].querySelector('img') as HTMLImageElement, el.areaImages[index + 1], progress);
                    }
                });
            })
        }

        const phase05 = () => {
            ScrollTrigger.create({
                trigger: el.spaces[8],
                start: 'top center',
                end: 'top center',
                onEnter: () => {
                    toggleActive(refs.areaCV.current, true);
                },
                onLeaveBack: () => {
                    toggleActive(refs.areaCV.current, false);
                },
            });
        }

        const run = () => {
            const ctx = gsap.context(() => {
                phase01();
                phase02();
                phase03();
                phase04();
                phase05();
            }, refs.container);
            return ctx;
        }

        return run();
    }

    /**
     * @name useEffect
     * @description GSAPの初期化
     */
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        const pc = "(min-width: 1025px)";

        // PC用のアニメーション設定
        mm.add(pc, () => scrollAnimation());

        // クリーンアップ
        return () => {
            mm.revert();
            gsap.killTweensOf(refs.container.current);
            gsap.killTweensOf(refs.spaces.current);
            gsap.killTweensOf(refs.current.current);
            gsap.killTweensOf(refs.areaOutline.current);
            gsap.killTweensOf(refs.areasHead.current);
            gsap.killTweensOf(refs.areasDetail.current);
            gsap.killTweensOf(refs.areaImages.current);
            gsap.killTweensOf(refs.areaCV.current);
            gsap.killTweensOf(refs.bgItems.current);
        }
    }, []);

    return (
        <GSAPToggleContainer tag="section" className="t-themed-areas" toggle={{ logo: false, color: "blue", movie: { video: "water", state: false } }}>
            <div className="container" ref={refs.container}>
                <div className="t-themed-areas__head" ref={refs.areasHead}>
                    <svg className="onm is-left"><use href="#i-onm-01"></use></svg>
                    <span className="bar is-left"></span>
                    <hgroup className="headline">
                        <p lang="en"><span className="num">7</span>Themed Areas</p>
                        <h2>7つのテーマ別エリア</h2>
                    </hgroup>
                    <span className="bar is-right"></span>
                    <svg className="onm is-right"><use href="#i-onm-01"></use></svg>
                </div>
                <div className="t-themed-areas__detail" ref={refs.areasDetail}>
                    <div className="lead">
                        <h3>7つのテーマエリアで、<br className="nopc" />あなたの楽しみを最大限に。</h3>
                        <p>船内の想像力豊かなテーマの7つのエリアを<br className="nopc" />探索しながら、<br className="nosp" />魔法のような冒険に出発します。<br />
                            各エリアには、ディズニー、マーベル、<br className="nopc" />ピクサーの物語を壮大なスケールで再現した<br />没入感あふれる体験が満載です。</p>
                    </div>
                    <div className="scroll-guide nosp">
                        <p lang="en">Start to Scroll</p>
                        <div className="circle"></div>
                        <div className="bar"></div>
                    </div>
                    <Areas />
                </div>
            </div>
            <GSAPMaskToggle mask={"white"} />
        </GSAPToggleContainer>
    )
}