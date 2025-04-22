/**
 * @name themedAreas
 * @description 7つのテーマ別エリア
 */
'use client';
import { useEffect, useState, useRef } from "react";
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
import { GSAPToggleContainer, GSAPMaskContainer } from "@/components/modules/gsap/container";
import "./styles/themedAreas.scss";

export default function ThemedAreas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const { getImagePath } = helper();

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

    const Areas = () => {
        const scaleTriggerRef = useRef<HTMLDivElement>(null);

        const outline = Object.keys(areas).map((key) => {
            return (
                <div key={key} className={`outline-item ${key == "1" ? "isNext" : "isNext"}`} data-num={key}>
                    <dl className="outline-box">
                        <dt className="outline-title">
                            <p className="en" lang="en">{areas[key].en}</p>
                            <p className="ja">{areas[key].name}</p>
                        </dt>
                        <dd className="outline-text">
                            <p dangerouslySetInnerHTML={{ __html: areas[key].desp }}></p>
                            <Button type="quaternary" label="View More" lang="en" link={`/themed-areas/#area` + key} align="center" />
                        </dd>
                    </dl>
                    <div className="outline-image">
                        <Image src={getImagePath(`top/area/img0${key}.jpg`)} alt={areas[key].name + 'エリアのイメージイラスト'} width={820} height={461} priority />
                        <Link href={`/themed-areas/#area${key}`} className="outline-link"></Link>
                    </div>
                </div>
            )
        })

        const bg = Object.keys(areas).map((key) => {
            return (
                <div key={key} id={"outline" + key} className={`${key == "1" ? "bg-item isActive" : "bg-item"}`} data-num={key}>
                    <Image src={getImagePath(`top/area/img0${key}.jpg`)} alt="" width={1300} height={830} priority />
                </div>
            )
        })

        const space = Object.keys(areas).map((key) => {
            return (
                <div key={key} id={"area" + key} className="space area-space"></div>
            )
        })

        useEffect(() => {
            const mm = gsap.matchMedia();
            const pc = "(min-width: 1025px)";
            const sp = "(max-width: 1024px)";

            const container = containerRef.current;
            if (!container) return;

            const triggerRef = {
                scale: scaleTriggerRef.current as HTMLDivElement,
            }

            // property
            const property = {
                bg: {
                    list: container.querySelector(".bg-list") as HTMLDivElement,
                    items: container.querySelectorAll(".bg-item"),
                    bg1: container.querySelector(".bg-item[data-num='1']") as HTMLDivElement,
                },
                outline: {
                    wrap: container.querySelector(".areas-outline") as HTMLDivElement,
                    list: container.querySelector(".outline-list") as HTMLDivElement,
                    items: container.querySelectorAll(".outline-item"),
                },
                space: {
                    items: container.querySelectorAll(".area-space"),
                    space01: container.querySelector(".area-space#area1"),
                },
                current: {
                    vals: container.querySelectorAll(".current .val"),
                },
                navigation: {
                    prev: container.querySelector("button.isPrev") as HTMLButtonElement,
                    next: container.querySelector("button.isNext") as HTMLButtonElement,
                },
                pagination: {
                    balets: container.querySelectorAll(".pagination .balet"),
                },
                cv: {
                    wrap: container.querySelector(".areas-cv") as HTMLDivElement,
                },
                track: container.querySelector(".slider-track") as HTMLDivElement,
            }

            // スクロールアニメーションの設定
            const scrollAnimation = () => {
                gsap.registerPlugin(ScrollTrigger);
                gsap.registerPlugin(ScrollToPlugin);

                const ctx = gsap.context(() => {

                    // phase01
                    const phase01 = () => {
                        gsap.timeline()
                            .to(property.bg.bg1, {
                                scale: 1,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: triggerRef.scale,
                                    start: "center bottom",
                                    end: "bottom bottom",
                                    scrub: true,
                                    invalidateOnRefresh: true,
                                }
                            })
                            .to(property.bg.list, {
                                "--val": 1,
                                scrollTrigger: {
                                    trigger: triggerRef.scale,
                                    start: "center top",
                                    end: "bottom top",
                                    scrub: true,
                                    invalidateOnRefresh: true,
                                }
                            });
                    }

                    // phase02
                    const phase02 = () => {
                        property.space.items.forEach((space, index) => {
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
                                    index == 0 && property.outline.wrap.classList.add("isActive");
                                    index == 7 && property.cv.wrap.classList.add("isActive");
                                },
                                onLeaveBack: () => {
                                    index == 0 && property.outline.wrap.classList.remove("isActive");
                                    index == 7 && property.cv.wrap.classList.remove("isActive");
                                },
                                onToggle: (self) => {
                                    let current = property.outline.items[index];
                                    if (!current) return;
                                    let id = current.getAttribute("data-num");
                                    property.outline.wrap.dataset.current = id?.toString();
                                    property.outline.items.forEach((item, idx) => {
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
                                    property.bg.items.forEach((item) => (item as HTMLElement).classList.toggle("isActive", (item as HTMLElement).dataset.num == id));
                                    property.current.vals.forEach((val) => (val as HTMLElement).classList.toggle("isCurrent", (val as HTMLElement).dataset.num == id))
                                    property.pagination.balets.forEach((balet) => (balet as HTMLElement).classList.toggle("isCurrent", (balet as HTMLElement).dataset.num == id))
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

                property.outline.wrap.dataset.current = "1";
                property.outline.wrap.style.setProperty("--move", "0");

                const outlineItemToggle = (id: number) => {
                    property.outline.items.forEach((item, idx) => {
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
                        property.navigation.prev.disabled = true;
                        property.navigation.next.disabled = false;
                    } else if (id === 7) {
                        property.navigation.prev.disabled = false;
                        property.navigation.next.disabled = true;
                    } else {
                        property.navigation.prev.disabled = false;
                        property.navigation.next.disabled = false;
                    }
                }

                const updateActiveState = (direction: number, elements: NodeListOf<Element>, attribute: string, className: string) => {
                    elements.forEach((element) => {
                        const num = parseInt(element.getAttribute(attribute) as string);
                        if (num === direction) {
                            element.classList.add(className);
                        } else {
                            element.classList.remove(className);
                        }
                    });
                };

                const moveSlide = (to: "left" | "right") => {
                    if (interval) clearInterval(interval);
                    id = parseInt(property.outline.wrap.dataset.current as string);
                    const direction = to === "left" ? 1 : -1;
                    translate += direction;

                    property.outline.wrap.classList.add("isSliding");
                    property.outline.wrap.style.setProperty("--move", translate.toString());

                    buttonToggle(id + direction);
                    outlineItemToggle(id + direction);
                    updateActiveState(id + direction, container.querySelectorAll(".bg-item"), "data-num", "isActive");
                    updateActiveState(id + direction, property.pagination.balets, "data-num", "isCurrent");
                    updateActiveState(id + direction, property.current.vals, "data-num", "isCurrent");

                    interval = setInterval(() => {
                        property.outline.wrap.classList.remove("isSliding");
                        if (interval) clearInterval(interval);
                        interval = null;
                        property.outline.wrap.setAttribute("data-current", (id + direction).toString());
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
                    property.track.addEventListener("mousedown", () => (flag = true));
                    property.track.addEventListener("mouseup", () => (flag = false));
                    property.track.addEventListener("mouseleave", () => (flag = false));
                    property.track.addEventListener("mousemove", (e) => {
                        if (flag) {
                            x = e.movementX;
                            updateSlide(30);
                        }
                    });

                    // タッチの動きに合わせてスライドさせる
                    property.track.addEventListener("touchstart", (e) => {
                        id = parseInt(property.outline.wrap.dataset.current as string);
                        flag = false;
                        startX = e.changedTouches[0].pageX;
                        startY = e.changedTouches[0].pageY;
                        property.outline.wrap.classList.add("isHandling");
                    });

                    property.track.addEventListener("touchend", () => {
                        property.outline.wrap.classList.remove("isHandling");
                        val = 0;
                        property.outline.wrap.style.setProperty("--val", val.toString());

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

                    property.track.addEventListener("touchcancel", () => {
                        flag = false;
                    });

                    property.track.addEventListener("touchmove", (e) => {
                        flag = true;
                        endX = e.changedTouches[0].pageX;
                        endY = e.changedTouches[0].pageY;

                        if (Math.abs(endY - startY) < Math.abs(endX - startX)) {
                            e.preventDefault();

                            val = Math.max(-0.15, Math.min(0.15, (endX - startX) / 100)) * -1;

                            if ((id === 1 && endX > startX) || (id === 7 && endX < startX)) {
                                val = 0;
                            }

                            property.outline.wrap.style.setProperty("--val", val.toString());
                        }
                    });

                    // ボタンのクリックイベント
                    property.navigation.prev.addEventListener("click", () => {
                        moveSlide("right");
                    })
                    property.navigation.next.addEventListener("click", () => {
                        moveSlide("left");
                    })
                }

                handleEvent();

                return () => {
                    if (interval) clearInterval(interval);
                }
            }

            mm.add(pc, () => {
                return scrollAnimation();
            });

            mm.add(sp, () => {
                return slider();
            });

            return () => {
                mm.revert();
                gsap.killTweensOf(container);
            }

        }, [])

        return (
            <GSAPToggleContainer tag="div" className="areas" toggle={{ logo: false, color: "white" }}>
                <div className="space" ref={scaleTriggerRef}></div>
                {space}
                <div id="area8" className="space area-space"></div>
                <div className="areas-bg">
                    <div className="bg-list">
                        <div className="cover"></div>
                        {bg}
                    </div>
                </div>
                <div className="areas-outline" data-current="1">
                    <div className="current">
                        <span className="bar is-left"></span>
                        <svg className="onm is-left"><use href="#i-onm-02"></use></svg>
                        <div className="label">
                            <span className="ttl" lang="en">Area</span>
                            <span className="num" lang="en">
                                <span>0</span>
                                <span className="val isCurrent" data-num="1">1</span>
                                <span className="val" data-num="2">2</span>
                                <span className="val" data-num="3">3</span>
                                <span className="val" data-num="4">4</span>
                                <span className="val" data-num="5">5</span>
                                <span className="val" data-num="6">6</span>
                                <span className="val" data-num="7">7</span>
                            </span>
                        </div>
                        <svg className="onm is-right"><use href="#i-onm-02"></use></svg>
                        <span className="bar is-right"></span>
                    </div>
                    <div className="outline-list">
                        {outline}
                    </div>
                    <div className="navigation">
                        <button type="button" className="nav-el isPrev" disabled>
                            <svg className="i-arw-r">
                                <use href="#i-arw-r"></use>
                            </svg>
                        </button>
                        <button type="button" className="nav-el isNext">
                            <svg className="i-arw-r">
                                <use href="#i-arw-r"></use>
                            </svg>
                        </button>
                    </div>
                    <div className="pagination">
                        <div className="pagination-list">
                            <Scroll to="area1" smooth={true} duration={0} offset={0} lang="en" className="balet isCurrent" data-num="1">1</Scroll>
                            <Scroll to="area2" smooth={true} duration={0} offset={0} lang="en" className="balet" data-num="2">2</Scroll>
                            <Scroll to="area3" smooth={true} duration={0} offset={0} lang="en" className="balet" data-num="3">3</Scroll>
                            <Scroll to="area4" smooth={true} duration={0} offset={0} lang="en" className="balet" data-num="4">4</Scroll>
                            <Scroll to="area5" smooth={true} duration={0} offset={0} lang="en" className="balet" data-num="5">5</Scroll>
                            <Scroll to="area6" smooth={true} duration={0} offset={0} lang="en" className="balet" data-num="6">6</Scroll>
                            <Scroll to="area7" smooth={true} duration={0} offset={0} lang="en" className="balet" data-num="7">7</Scroll>
                        </div>
                    </div>
                    <div className="scroll-guide">
                        <p lang="en">Keep Scrolling</p>
                    </div>
                    <div className="slider-track"></div>
                </div>
                <div className="areas-cv">
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

    return (
        <GSAPToggleContainer tag="section" className="t-themed-areas" toggle={{ logo: false, color: "blue" }}>
            <div className="container" ref={containerRef}>
                <GSAPMaskContainer tag="div" className="t-themed-areas__head" mask={"colorWhite"}>
                    <svg className="onm is-left"><use href="#i-onm-01"></use></svg>
                    <span className="bar is-left"></span>
                    <hgroup className="headline">
                        <p lang="en"><span className="num">7</span>Themed Areas</p>
                        <h2>7つのテーマ別エリア</h2>
                    </hgroup>
                    <span className="bar is-right"></span>
                    <svg className="onm is-right"><use href="#i-onm-01"></use></svg>
                </GSAPMaskContainer>
                <div className="t-themed-areas__detail">
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
        </GSAPToggleContainer>
    )
}