/**
 * @name adults.tsx
 * @description 大人のための施設
 */
"use client";
import { useEffect, useState, useRef } from "react";
import { Link as Scroll } from 'react-scroll'
import Image from "next/image";
import helper from "@/libs/helper";
import Button from "@/components/modules/buttons/button";
import LargeButton from "@/components/modules/buttons/largeButton";
import { GSAPToggleContainer } from "@/components/modules/gsap/container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import "./styles/adults.scss";

export default function Adults() {
    const [isOffset, setIsOffset] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const { getImagePath } = helper();

    const relaxations: Record<string, { name: string, en: string, desp: string }> = {
        "01": {
            name: "スパ・サロン・フィットネス",
            en: "Spa, Salon & Fitness",
            desp: "自然と贅沢が融合したオアシスで、至高のリラクゼーションをご提供します。スパや美容トリートメントを堪能できるほか、フィットネス、サイクリングやヨガなどのアクティビティスペースもご利用いただけます。",
        },
        "02": {
            name: "ラウンジ",
            en: "Lounges",
            desp: "エレガントな空間からディズニーをテーマにした、活気あるラウンジがゲストをお待ちしています。各種取り揃えたスペシャルなドリンクを片手に、くつろぎのひとときをお楽しみください。",
        },
        "03": {
            name: "バッカニアバー",
            en: "Buccaneer Bar",
            desp: "海賊気分を味わいたいなら、ぜひバッカニアバーへ。さわやかなドリンクを堪能しながら、スポーツ観戦、広大な海の観賞など、気分はまるで船長に。思いのままにおくつろぎいただけます。",
        },
    }

    const Relaxation = () => {

        const outline = Object.keys(relaxations).map((key) => {
            return (
                <div key={key} className={`outline-item ${key == "01" ? "isActive" : "isNext"}`} data-num={key}>
                    <dl className="outline-box">
                        <dt className="outline-title">
                            <p className="ja">{relaxations[key].name}</p>
                            <p className="en" lang="en">{relaxations[key].en}</p>
                        </dt>
                        <dd className="outline-text">
                            <p>{relaxations[key].desp}</p>
                        </dd>
                    </dl>
                    <div className="outline-image">
                        <Image src={getImagePath(`top/adults/img${key}.jpg`)} alt={relaxations[key].name + 'のイメージ写真'} width={580} height={387} priority />
                    </div>
                </div>
            )
        })

        const bg = Object.keys(relaxations).map((key) => {
            return (
                <div key={key} id={"outline" + key} className={`${key == "01" ? "bg-item isActive" : "bg-item"}`} data-num={key}>
                    <Image src={getImagePath(`top/adults/bg${key}.jpg`)} alt="" width={1300} height={640} priority />
                </div>
            )
        })

        useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);
            const mm = gsap.matchMedia();
            const pc = "(min-width: 1025px)";
            const sp = "(max-width: 1024px)";

            const container = containerRef.current;
            if (!container) return;

            // スクロールアニメーションの設定
            const scrollAnimation = () => {
                const ctx = gsap.context(() => {

                    const propaty = {
                        current: container.querySelector(".relaxation-outline") as HTMLElement,
                        outlineItems: container.querySelectorAll(".outline-item"),
                        bgItems: container.querySelectorAll(".bg-item"),
                        paginationItems: container.querySelectorAll(".balet"),
                        currentNumber: container.querySelectorAll(".current .val"),
                    }

                    const setCurrent = (num: number) => {
                        if (!num) return;

                        // 1. current
                        propaty.current.setAttribute("data-current", num.toString());

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
                        propaty.currentNumber.forEach((item) => item.classList.remove("isCurrent"));
                        propaty.currentNumber[num - 1].classList.add("isCurrent");

                        // 4. pagination
                        propaty.paginationItems.forEach((item) => item.classList.remove("isCurrent"));
                        propaty.paginationItems[num - 1].classList.add("isCurrent");
                    }

                    propaty.bgItems.forEach((el) => {
                        gsap.to(el, {
                            scrollTrigger: {
                                trigger: el,
                                start: "top 50%",
                                end: "bottom 50%",
                                invalidateOnRefresh: true,
                                onEnter: () => setCurrent(parseInt(el.getAttribute("data-num") as string)),
                                onEnterBack: () => setCurrent(parseInt(el.getAttribute("data-num") as string)),
                            },
                        });
                    })

                }, containerRef);

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

                const area = container.querySelector(".relaxation-outline") as HTMLElement;
                const track = container.querySelector(".relaxation-outline .outline-list") as HTMLElement;
                const prevButton = container.querySelector("button.isPrev") as HTMLButtonElement;
                const nextButton = container.querySelector("button.isNext") as HTMLButtonElement;
                const balets = container.querySelectorAll(".balet");

                area.style.setProperty("--move", "0");

                const buttonToggle = (id: number) => {
                    if (id === 1) {
                        prevButton.disabled = true;
                        nextButton.disabled = false;
                    } else if (id === 3) {
                        prevButton.disabled = false;
                        nextButton.disabled = true;
                    } else {
                        prevButton.disabled = false;
                        nextButton.disabled = false;
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
                    id = parseInt(area.dataset.current as string);
                    const direction = to === "left" ? 1 : -1;
                    translate += direction;

                    area.classList.add("isSliding");
                    area.style.setProperty("--move", translate.toString());

                    buttonToggle(id + direction);
                    updateActiveState(id + direction, container.querySelectorAll(".bg-item"), "data-num", "isActive");
                    updateActiveState(id + direction, balets, "data-num", "isCurrent");

                    interval = setInterval(() => {
                        area.classList.remove("isSliding");
                        if (interval) clearInterval(interval);
                        interval = null;
                        area.setAttribute("data-current", (id + direction).toString());
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
                    track.addEventListener("mousedown", () => (flag = true));
                    track.addEventListener("mouseup", () => (flag = false));
                    track.addEventListener("mouseleave", () => (flag = false));
                    track.addEventListener("mousemove", (e) => {
                        if (flag) {
                            x = e.movementX;
                            updateSlide(30);
                        }
                    });

                    // タッチの動きに合わせてスライドさせる
                    track.addEventListener("touchstart", (e) => {
                        id = parseInt(area.dataset.current as string);
                        flag = false;
                        startX = e.changedTouches[0].pageX;
                        startY = e.changedTouches[0].pageY;
                        area.classList.add("isHandling");
                    });

                    track.addEventListener("touchend", () => {
                        area.classList.remove("isHandling");
                        val = 0;
                        area.style.setProperty("--val", val.toString());

                        if (flag) {
                            x = (endX - startX) / 10;

                            if ((id === 1 && x > 0) || (id === 3 && x < 0)) {
                                x = 0;
                                flag = false;
                            } else {
                                updateSlide(10);
                            }
                        }
                    });

                    track.addEventListener("touchcancel", () => {
                        flag = false;
                    });

                    track.addEventListener("touchmove", (e) => {
                        flag = true;
                        endX = e.changedTouches[0].pageX;
                        endY = e.changedTouches[0].pageY;

                        if (Math.abs(endY - startY) < Math.abs(endX - startX)) {
                            e.preventDefault();

                            val = Math.max(-15, Math.min(15, (endX - startX) / 10)) * -1;

                            if ((id === 1 && endX > startX) || (id === 3 && endX < startX)) {
                                val = 0;
                            }

                            area.style.setProperty("--val", val.toString());
                        }
                    });

                    // ボタンのクリックイベント
                    prevButton.addEventListener("click", () => {
                        moveSlide("right");
                    })
                    nextButton.addEventListener("click", () => {
                        moveSlide("left");
                    })
                }

                handleEvent();

                return () => {
                    if (interval) clearInterval(interval);
                }
            }

            // オフセットの更新
            const updateOffsets = () => {
                const bgItem = container.querySelector(".bg-item") as HTMLElement;
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
            mm.add(pc, () => {
                return scrollAnimation();
            });

            // SP用のアニメーション設定
            mm.add(sp, () => {
                return slider();
            });

            // クリーンアップ
            return () => {
                mm.revert();
                resizeObserver.disconnect();
                gsap.killTweensOf(container);
            }
        }, [pathname]);

        return (
            <GSAPToggleContainer tag="div" className="t-adults__relaxation" toggle={{ logo: false, color: "white" }}>
                <div className="relaxation" ref={containerRef}>
                    <div className="relaxation-outline" data-current="1">
                        <div className="outline">
                            <div className="current">
                                <span className="bar is-left"></span>
                                <svg className="onm is-left"><use href="#i-onm-02"></use></svg>
                                <div className="label">
                                    <span className="ttl" lang="en">Relaxation</span>
                                    <span className="num" lang="en">
                                        <span>0</span>
                                        <span className="val isCurrent" data-num="1">1</span>
                                        <span className="val" data-num="2">2</span>
                                        <span className="val" data-num="3">3</span>
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
                                    <Scroll to="outline01" smooth={true} duration={500} offset={isOffset} lang="en" className="balet isCurrent" data-num="1">1</Scroll>
                                    <Scroll to="outline02" smooth={true} duration={500} offset={isOffset} lang="en" className="balet" data-num="2">2</Scroll>
                                    <Scroll to="outline03" smooth={true} duration={500} offset={isOffset} lang="en" className="balet" data-num="3">3</Scroll>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relaxation-bg">
                        <div className="bg-list">
                            {bg}
                        </div>
                    </div>
                </div>
            </GSAPToggleContainer>
        )
    }

    return (
        <section className="t-adults">
            <div className="container">
                <div className="accent">
                    <span className="bar"></span>
                    <svg className="onm"><use href="#i-onm-03"></use></svg>
                    <span className="bar"></span>
                </div>
                <div className="t-adults__detail">
                    <hgroup className="t-adults__head">
                        <p lang="en">For Adults</p>
                        <h2>大人のための施設</h2>
                    </hgroup>
                    <hgroup className="t-adults__text">
                        <h3>ワンランク上の大人の時間を堪能する。</h3>
                        <p>お子様がお子様専用のクラブで<br className="nopc" />楽しい時間を過ごしている間、<br className="nopc" />ご自身にはワンランク上の大人の体験を。<br />
                            贅沢なスパトリートメント、<br className="nopc" />アットホームなダイニング、専門店のショッピング、<br className="nopc" />魅惑的なラウンジをお楽しみください。</p>
                    </hgroup>
                </div>
                <Relaxation />
                <GSAPToggleContainer tag="div" className="t-adults__button" toggle={{ logo: false, color: "blue" }}>
                    <LargeButton label="すべての客室案内はこちら" enLabel="Learn Accommodations More" link="/accommodations/" />
                    <Button type="primary" label="すべての客室案内はこちら" link="/accommodations/" align="center" />
                </GSAPToggleContainer>
            </div>
        </section>
    )
}