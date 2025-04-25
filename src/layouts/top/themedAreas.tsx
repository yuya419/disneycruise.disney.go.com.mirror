/**
 * @name themedAreas
 * @description 7つのテーマ別エリア
 */
'use client';
import { useEffect, useLayoutEffect, useState, useRef, useMemo } from "react";
import { Link as Scroll } from 'react-scroll'
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import Link from "next/link";
import helper from "@/libs/helper";
import Button from "@/components/modules/buttons/button";
import { arrow } from "@/components/modules/icons/icon";
import { GSAPToggleContainer, GSAPMaskToggle } from "@/components/modules/gsap/container";
import "./styles/themedAreas.scss";

export default function ThemedAreas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const themeAreaRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const { getImagePath } = helper();

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const mm = gsap.matchMedia();
    const pc = "(min-width: 1025px)";
    const sp = "(max-width: 1024px)";

    // area
    const areas: Record<string, { name: string, en: string, desp: string }> = {
        "1": {
            name: "ディズニーイマジネーションガーデン",
            en: "Disney Imagination Garden",
            desp: '旅のはじまりはここから。<br class="nopc"/>魔法の谷と庭園で、冒険の扉がひらく。',
        },
        "2": {
            name: "ディズニーディスカバリーリーフ",
            en: "Disney Discovery Reef",
            desp: '美しい光に包まれたこの場所で、<br class="nopc"/>美味しい食事を心躍るひとときと共に。',
        },
        "3": {
            name: "トイストーリープレイス​",
            en: "Toy Story Place",
            desp: '上層デッキでは、プールやジャグジーなど<br class="nopc"/>ウォーターアトラクションが楽しめます。',
        },
        "4": {
            name: "マーベルランディング​​",
            en: "Marvel Landing",
            desp: 'アベンジャーズ集合！アドベンチャー満載の<br class="nopc"/>マーベルワールドで、ヒーロー気分を満喫。',
        },
        "5": {
            name: "ウェイファインダーベイ​",
            en: "Wayfinder Bay",
            desp: '映画『モアナと伝説の海』にインスパイアされた<br class="nopc"/>屋外のオアシスで、心のままにリラックス。',
        },
        "6": {
            name: "サンフランソウキョウ・ストリート",
            en: "San Fransokyo Street",
            desp: 'ワクワクする体験なら、映画『ベイマックス』に<br class="nopc"/>登場する都市をモチーフにしたエリアで。',
        },
        "7": {
            name: "タウン・スクエア",
            en: "Town Square",
            desp: 'ようこそおとぎ話の世界へ。カフェやラウンジ、<br class="nopc"/>ショッピングで魔法のようなひとときを。',
        },
    }

    // refs
    const refs = {
        first: useRef<HTMLDivElement>(null),
        bgList: useRef<HTMLDivElement>(null),
        bgItems: useRef<HTMLDivElement[]>([] as HTMLDivElement[]),
        outlineWrap: useRef<HTMLDivElement>(null),
        outlineList: useRef<HTMLDivElement>(null),
        outlineItems: useRef<HTMLDivElement[]>([] as HTMLDivElement[]),
        spaceItems: useRef<HTMLDivElement[]>([] as HTMLDivElement[]),
        currentVals: useRef<HTMLDivElement[]>([] as HTMLDivElement[]),
        navigationPrev: useRef<HTMLButtonElement>(null),
        navigationNext: useRef<HTMLButtonElement>(null),
        paginationList: useRef<HTMLDivElement>(null),
        cvWrap: useRef<HTMLDivElement>(null),
        sliderTrack: useRef<HTMLDivElement>(null),
    }

    const addToBgItemsRef = (el: HTMLDivElement | null) => {
        if (el && refs.bgItems.current && !refs.bgItems.current.includes(el)) {
            refs.bgItems.current.push(el);
        }
    };

    const addToOutlineItemsRef = (el: HTMLDivElement | null) => {
        if (el && refs.outlineItems.current && !refs.outlineItems.current.includes(el)) {
            refs.outlineItems.current.push(el);
        }
    };

    const addToSpaceItemsRef = (el: HTMLDivElement | null) => {
        if (el && refs.spaceItems.current && !refs.spaceItems.current.includes(el)) {
            refs.spaceItems.current.push(el);
        }
    };

    const addToCurrentValsRef = (el: HTMLDivElement | null) => {
        if (el && refs.currentVals.current && !refs.currentVals.current.includes(el)) {
            refs.currentVals.current.push(el);
        }
    };

    const generateElements = (areas: Record<string, { name: string, en: string, desp: string }>) => {
        const outline = Object.keys(areas).map((key) => (
            <div key={key} className={`outline-item ${key === "1" ? "isNext" : "isNext"}`} data-num={key} ref={addToOutlineItemsRef}>
                <dl className="outline-box">
                    <dt className="outline-title">
                        <p className="en" lang="en">{areas[key].en}</p>
                        <p className="ja">{areas[key].name}</p>
                    </dt>
                    <dd className="outline-text">
                        <p dangerouslySetInnerHTML={{ __html: areas[key].desp }}></p>
                        <Button type="quaternary" label="View More" lang="en" link={`/themed-areas/#area${key}`} align="center" />
                    </dd>
                </dl>
                <div className="outline-image">
                    <Image src={getImagePath(`top/area/img0${key}.jpg`)} alt={`${areas[key].name}エリアのイメージイラスト`} width={820} height={461} priority />
                    <Link href={`/themed-areas/#area0${key}`} className="outline-link"></Link>
                </div>
            </div>
        ));

        const bg = Object.keys(areas).map((key) => (
            <div key={key} id={`outline${key}`} className={`${key === "1" ? "bg-item isActive" : "bg-item"}`} data-num={key} ref={addToBgItemsRef}>
                <Image src={getImagePath(`top/area/img0${key}.jpg`)} alt="" width={1300} height={830} priority />
            </div>
        ));

        const space = Object.keys(areas).map((key) => (
            <div key={key} id={`area${key}`} className="space area-space" ref={addToSpaceItemsRef}></div>
        ));

        return { outline, bg, space };
    };

    const Areas = () => {

        const { outline, bg, space } = useMemo(() => generateElements(areas), [areas]);

        return (
            <GSAPToggleContainer tag="div" className="areas" toggle={{ logo: false, color: "white" }}>
                <div className="space" ref={refs.first}></div>
                {space}
                <div id="area8" className="space area-space" ref={addToSpaceItemsRef}></div>
                <div className="areas-bg">
                    <div className="bg-list" ref={refs.bgList}>
                        {bg}
                    </div>
                </div>
                <div className="areas-outline" data-current="1" ref={refs.outlineWrap}>
                    <div className="current">
                        <span className="bar is-left"></span>
                        <svg className="onm is-left"><use href="#i-onm-02"></use></svg>
                        <div className="label">
                            <span className="ttl" lang="en">Area</span>
                            <span className="num" lang="en">
                                <span>0</span>
                                {Object.keys(areas).map((key) => (
                                    <span key={key} className={`val ${key === "1" ? "isCurrent" : ""}`} data-num={key} ref={addToCurrentValsRef}>{key}</span>
                                ))}
                            </span>
                        </div>
                        <svg className="onm is-right"><use href="#i-onm-02"></use></svg>
                        <span className="bar is-right"></span>
                    </div>
                    <div className="outline-list" ref={refs.outlineList}>
                        {outline}
                    </div>
                    <div className="navigation">
                        <button type="button" className="nav-el isPrev" ref={refs.navigationPrev} disabled>
                            <svg className="i-arw-r">
                                <use href="#i-arw-r"></use>
                            </svg>
                        </button>
                        <button type="button" className="nav-el isNext" ref={refs.navigationNext}>
                            <svg className="i-arw-r">
                                <use href="#i-arw-r"></use>
                            </svg>
                        </button>
                    </div>
                    <div className="pagination">
                        <div className="pagination-list" ref={refs.paginationList}>
                            {Object.keys(areas).map((key) => (
                                <Scroll key={key} to={`area${key}`} smooth={true} duration={0} offset={0} lang="en" className={`balet ${key === "1" ? "isCurrent" : ""}`} data-num={key}>{key}</Scroll>
                            ))}
                        </div>
                    </div>
                    <div className="scroll-guide">
                        <p lang="en">Keep Scrolling</p>
                    </div>
                    <div className="slider-track" ref={refs.sliderTrack}></div>
                </div>
                <div className="areas-cv" ref={refs.cvWrap}>
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
            </GSAPToggleContainer>
        )
    }

    // property
    const property = useMemo(() => ({
        trigger: {
            scale: refs.first,
        },
        bg: {
            list: refs.bgList,
            items: refs.bgItems,
        },
        outline: {
            wrap: refs.outlineWrap,
            list: refs.outlineList,
            items: refs.outlineItems,
        },
        space: {
            items: refs.spaceItems,
        },
        current: {
            vals: refs.currentVals,
        },
        navigation: {
            prev: refs.navigationPrev,
            next: refs.navigationNext,
        },
        pagination: {
            list: refs.paginationList,
        },
        cv: {
            wrap: refs.cvWrap,
        },
        track: refs.sliderTrack,
    }), [refs]);

    // スクロールアニメーションの設定
    const scrollAnimation = () => {
        const container = containerRef.current;
        if (!container) return;
        const balets = property.pagination.list.current?.querySelectorAll(".balet");

        const ctx = gsap.context(() => {

            // phase01
            const phase01 = () => {
                const bg1 = property.bg.items ? property.bg.items.current[0] : null;

                gsap.timeline()
                    .to(bg1, {
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: property.trigger.scale.current,
                            start: "center bottom",
                            end: "bottom bottom",
                            scrub: true,
                            invalidateOnRefresh: true,
                        }
                    })
                    .to(property.bg.list.current, {
                        "--val": 1,
                        scrollTrigger: {
                            trigger: property.trigger.scale.current,
                            start: "center top",
                            end: "bottom top",
                            scrub: true,
                            invalidateOnRefresh: true,
                        }
                    });
            }

            // phase02
            const phase02 = () => {
                property.space.items.current?.forEach((space, index) => {
                    let isScrolling = false;
                    ScrollTrigger.create({
                        trigger: space,
                        start: "top top",
                        end: "bottom top",
                        invalidateOnRefresh: true,
                        onUpdate: (self) => {
                            let progress = self.progress.toFixed(1);
                            if (!self.isActive) return;

                            if (!isScrolling) {
                                const targetId = progress === "0.3" ? `area${index + 2}` : progress === "0.7" && index != 7 ? `area${index + 1}` : null;
                                const targetElement = targetId ? document.getElementById(targetId) : null;
                                if (targetElement) {
                                    gsap.to(window, {
                                        scrollTo: { y: targetElement, offsetY: 0 },
                                        duration: 0.5,
                                        ease: "linear",
                                        onStart: () => {
                                            isScrolling = true;
                                        },
                                        onComplete: () => {
                                            isScrolling = false;
                                        }
                                    });
                                }
                            }
                        },
                    });
                    ScrollTrigger.create({
                        trigger: space,
                        start: "-2px top",
                        end: "90% top",
                        // markers: true,
                        invalidateOnRefresh: true,
                        onEnter: () => {
                            index == 0 && property.outline.wrap.current?.classList.add("isActive");
                            index == 7 && property.cv.wrap.current?.classList.add("isActive");
                        },
                        onLeaveBack: () => {
                            index == 0 && property.outline.wrap.current?.classList.remove("isActive");
                            index == 7 && property.cv.wrap.current?.classList.remove("isActive");
                        },
                        onToggle: (self) => {
                            let current = property.outline.items ? property.outline.items.current[index] as HTMLElement : null;
                            if (!current) return;
                            let id = current.getAttribute("data-num");
                            property.outline.wrap.current?.setAttribute("data-current", id?.toString() as string);
                            property.outline.items.current?.forEach((item, idx) => {
                                const itemElement = item as HTMLElement;
                                if (idx < index) {
                                    itemElement.classList.add("isPrev");
                                    itemElement.classList.remove("isNext", "isActive");
                                } else if (idx === index) {
                                    itemElement.classList.add("isActive");
                                    itemElement.classList.remove("isPrev", "isNext");
                                } else {
                                    itemElement.classList.add("isNext");
                                    itemElement.classList.remove("isPrev", "isActive");
                                }
                            });
                            property.bg.items.current?.forEach((item, idx) => {
                                const itemElement = item as HTMLElement;
                                if (idx < index) {
                                    itemElement.classList.add("isActive");
                                } else if (idx === index) {
                                    itemElement.classList.add("isActive");
                                } else {
                                    itemElement.classList.remove("isActive");
                                }
                            });
                            property.current.vals.current?.forEach((val) => (val as HTMLElement).classList.toggle("isCurrent", (val as HTMLElement).dataset.num == id))
                            balets?.forEach((balet) => (balet as HTMLElement).classList.toggle("isCurrent", (balet as HTMLElement).dataset.num == id))
                        },
                    });
                })
            }

            phase01();
            phase02();

        }, container);

        return () => ctx.revert();
    }

    // スライダーの設定
    const slider = () => {
        let id = 0;
        let flag = false;
        let x = 0;

        let startX = 0;
        let endX = 0;
        let startY = 0;
        let endY = 0;

        let translate = 0;
        let val = 0;

        let interval: ReturnType<typeof setInterval> | null = null;
        const balets = property.pagination.list.current?.querySelectorAll(".balet");

        property.outline.wrap.current?.setAttribute("data-current", "1");
        property.outline.wrap.current?.style.setProperty("--move", "0");

        const outlineItemToggle = (id: number) => {
            property.outline.items.current.forEach((item, idx) => {
                const itemElement = item as HTMLElement;
                if (idx + 1 < id) {
                    itemElement.classList.add("isPrev");
                    itemElement.classList.remove("isNext", "isActive");
                } else if (idx + 1 === id) {
                    itemElement.classList.add("isActive");
                    itemElement.classList.remove("isPrev", "isNext");
                } else {
                    itemElement.classList.add("isNext");
                    itemElement.classList.remove("isPrev", "isActive");
                }
            });
        }

        const buttonToggle = (id: number) => {
            if (id === 1) {
                property.navigation.prev.current?.setAttribute("disabled", "true");
                property.navigation.next.current?.removeAttribute("disabled");
            } else if (id === 7) {
                property.navigation.prev.current?.removeAttribute("disabled");
                property.navigation.next.current?.setAttribute("disabled", "true");
            } else {
                property.navigation.prev.current?.removeAttribute("disabled");
                property.navigation.next.current?.removeAttribute("disabled");
            }
        }

        const bgItemToggle = (id: number) => {
            property.bg.items.current?.forEach((item, idx) => {
                const itemElement = item as HTMLElement;
                if (idx + 1 < id) {
                    itemElement.classList.add("isActive");
                } else if (idx + 1 === id) {
                    itemElement.classList.add("isActive");
                } else {
                    itemElement.classList.remove("isActive");
                }
            });
        }

        const moveSlide = (to: "left" | "right") => {
            if (interval) clearInterval(interval);
            id = parseInt(property.outline.wrap.current?.dataset.current as string);
            const direction = to === "left" ? 1 : -1;
            translate += direction;

            property.outline.wrap.current?.classList.add("isSliding");
            property.outline.wrap.current?.style.setProperty("--move", translate.toString());

            buttonToggle(id + direction);
            outlineItemToggle(id + direction);
            bgItemToggle(id + direction);
            balets?.forEach((balet) => (balet as HTMLElement).classList.toggle("isCurrent", (balet as HTMLElement).dataset.num == (id + direction).toString()))
            property.current.vals.current?.forEach((val) => (val as HTMLElement).classList.toggle("isCurrent", (val as HTMLElement).dataset.num == (id + direction).toString()))

            interval = setInterval(() => {
                property.outline.wrap.current?.classList.remove("isSliding");
                if (interval) clearInterval(interval);
                interval = null;
                property.outline.wrap.current?.setAttribute("data-current", (id + direction).toString());
            }, 300);
        }

        const updateSlide = (move: number) => {
            if (Math.abs(x) >= move) {
                moveSlide(x > 0 ? "right" : "left");
            }
            x = 0;
            flag = false;
        }

        const handleEvent = () => {

            // マウスの動きに合わせてスライドさせる
            property.track.current?.addEventListener("mousedown", () => (flag = true));
            property.track.current?.addEventListener("mouseup", () => (flag = false));
            property.track.current?.addEventListener("mouseleave", () => (flag = false));
            property.track.current?.addEventListener("mousemove", (e) => {
                if (flag) {
                    x = e.movementX;
                    updateSlide(30);
                }
            });

            // タッチの動きに合わせてスライドさせる
            property.track.current?.addEventListener("touchstart", (e) => {
                id = parseInt(property.outline.wrap.current?.dataset.current as string);
                flag = false;
                startX = e.changedTouches[0].pageX;
                startY = e.changedTouches[0].pageY;
                property.outline.wrap.current?.classList.add("isHandling");
            });

            property.track.current?.addEventListener("touchend", () => {
                property.outline.wrap.current?.classList.remove("isHandling");
                val = 0;
                property.outline.wrap.current?.style.setProperty("--val", val.toString());

                if (flag) {
                    x = (endX - startX) / 10;

                    if ((id === 1 && x > 0) || (id === 7 && x < 0)) {
                        x = 0;
                        flag = false;
                    } else {
                        updateSlide(10);
                    }
                }
            });

            property.track.current?.addEventListener("touchcancel", () => {
                flag = false;
            });

            property.track.current?.addEventListener("touchmove", (e) => {
                flag = true;
                endX = e.changedTouches[0].pageX;
                endY = e.changedTouches[0].pageY;

                if (Math.abs(endY - startY) < Math.abs(endX - startX)) {
                    e.preventDefault();

                    val = Math.max(-0.15, Math.min(0.15, (endX - startX) / 100)) * -1;

                    if ((id === 1 && endX > startX) || (id === 7 && endX < startX)) {
                        val = 0;
                    }

                    property.outline.wrap.current?.style.setProperty("--val", val.toString());
                }
            });

            // ボタンのクリックイベント
            property.navigation.prev.current?.addEventListener("click", () => {
                moveSlide("right");
            })
            property.navigation.next.current?.addEventListener("click", () => {
                moveSlide("left");
            })
        }

        handleEvent();

        return () => {
            if (interval) clearInterval(interval);
        }
    }

    // スクロールアニメーションのトグル
    const toggleAnimation = () => {
        const container = containerRef.current;
        const themeArea = themeAreaRef.current;
        if (!container || !themeArea) return;
        const ctx = gsap.context(() => {
            [container, themeArea].forEach((element, index) => {
                ScrollTrigger.create({
                    trigger: element,
                    start: index === 0 ? "top 75%" : "top 50%",
                    end: index === 0 ? "top 75%" : "top 50%",
                    onEnter: () => element.classList.add("isActive"),
                });
            });
        }, container);
        return () => ctx.revert();
    }

    useLayoutEffect(() => {
        toggleAnimation();

        mm.add(pc, () => scrollAnimation())
            .add(sp, () => slider());

        return () => {
            mm.revert();
        }

    }, [])

    return (
        <GSAPToggleContainer tag="section" className="t-themed-areas" toggle={{ logo: false, color: "blue", movie: { video: "water", state: false } }}>
            <div className="container" ref={containerRef}>
                <div className="t-themed-areas__head">
                    <svg className="onm is-left"><use href="#i-onm-01"></use></svg>
                    <span className="bar is-left"></span>
                    <hgroup className="headline">
                        <p lang="en"><span className="num">7</span>Themed Areas</p>
                        <h2>7つのテーマ別エリア</h2>
                    </hgroup>
                    <span className="bar is-right"></span>
                    <svg className="onm is-right"><use href="#i-onm-01"></use></svg>
                </div>
                <div className="t-themed-areas__detail" ref={themeAreaRef}>
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