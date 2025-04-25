/**
 * @name kidsClubs.tsx
 * @description キッズクラブ
 */
'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
                    onEnter: () => container.style.setProperty("--val", "1"),
                    onEnterBack: () => container.style.setProperty("--val", "0.2"),
                });
            }, containerRef);

            return () => ctx.revert();
        }

        // 回転スライダーの設定
        const rotateSlider = () => {
            let flag = false;
            let x = 0;

            let startX = 0;
            let endX = 0;
            let startY = 0;
            let endY = 0;

            let rotate = 5;
            let move = 0;

            let interval: ReturnType<typeof setInterval> | null = null;

            container.style.setProperty("--rotate", rotate.toString());

            const updateRotate = (state: "up" | "down") => {
                rotate += state === "up" ? 1 : -1;
                container.classList.add("isSliding");
                container.classList.remove("isReset");
                container.style.setProperty("--rotate", rotate.toString());
            }

            const resetRotate = () => {
                rotate = 5;
                container.style.setProperty("--rotate", rotate.toString());
            }

            const rotateSlide = (to: "left" | "right") => {
                if (interval) clearInterval(interval);
                to === "left" ? updateRotate("up") : updateRotate("down");
                interval = setInterval(() => {
                    container.classList.remove("isSliding");
                    if (interval) clearInterval(interval);
                    interval = null;
                    if (rotate === 2 || rotate === 8) {
                        container.classList.add("isReset");
                        resetRotate();
                    }
                }, 300);
            }

            const updateSlide = (delta: number, move: number) => {
                if (x >= move) {
                    x = move;
                    flag = false;
                    rotateSlide("right");
                }
                if (x <= -move) {
                    x = -move;
                    flag = false;
                    rotateSlide("left");
                }
            }

            const handleEvent = () => {

                // マウスの動きに合わせてスライドさせる
                container.addEventListener("mousedown", () => (flag = true));
                container.addEventListener("mouseup", () => (flag = false));
                container.addEventListener("mouseleave", () => (flag = false));
                container.addEventListener("mousemove", (e) => {
                    if (flag) {
                        x = e.movementX;
                        updateSlide(x, 30);
                    }
                });

                // タッチの動きに合わせてスライドさせる
                container.addEventListener("touchstart", (e) => {
                    flag = false;
                    startX = e.changedTouches[0].pageX;
                    startY = e.changedTouches[0].pageY;
                });
                container.addEventListener("touchend", () => {
                    if (flag) {
                        x = endX - startX;
                        updateSlide(x, 50);
                        move = 0;
                        container.style.setProperty("--move", move.toString());
                    }
                });
                container.addEventListener("touchcancel", () => (flag = false));
                container.addEventListener("touchmove", (e) => {
                    flag = true;
                    endX = e.changedTouches[0].pageX;
                    endY = e.changedTouches[0].pageY;

                    if (Math.abs(endY - startY) < Math.abs(endX - startX)) {
                        e.preventDefault();
                        move = Math.max(-8, Math.min(8, (endX - startX) / 100));
                        container.style.setProperty("--move", move.toString());
                    }
                });
            }

            handleEvent();

            return () => {
                if (interval) clearInterval(interval);
            }
        }

        // PC用のアニメーション設定
        mm.add(pc, () => scrollAnimation())
            .add(sp, () => rotateSlider());

        return () => {
            mm.revert();
            gsap.killTweensOf(container);
        }
    }, [pathname]);

    const CircleSlider = () => {

        const slideItems = () => {
            return Array.from({ length: 3 }, (_, i) => (
                <li className="circle-slide-item" key={i}>
                    <Image src={getImagePath(`top/kidsclubs/img0${i + 1}.jpg`)} alt="" width={540} height={347} />
                </li>
            ));
        }

        return (
            <div className="t-kids-clubs__circle-slider">
                <div className="circle-slider" ref={containerRef}>
                    <ul className="circle-slide-list">
                        {slideItems()}
                        {slideItems()}
                        {slideItems()}
                        {slideItems()}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <section className="t-kids-clubs">
            <div className="container">
                <CircleSlider />
                <hgroup className="t-kids-clubs__head">
                    <p lang="en">Kids Clubs</p>
                    <h2>キッズクラブ</h2>
                </hgroup>
                <div className="t-kids-clubs__text">
                    <h3>アクション満載の冒険のはじまり！</h3>
                    <p>お子様、10代前半、10代の若者は、<br className="nopc" />インタラクティブな楽しさがあふれる<br className="nopc" />ユニークな専用スペースで、<br className="nosp" />自分だけの<br className="nopc" />新しい冒険に乗り出すことができます。</p>
                    <Button type="primary" label="View More" lang="en" link="/kids-clubs/" align="center" />
                </div>
            </div>
        </section>
    )
}