/**
 * @name Container.tsx
 * @description GSAPのアニメーションを実行するためのコンテナコンポーネント
 */
'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRefContext } from "@/hooks/useRefContext";
import "@/layouts/container/styles/container.scss";

interface ContainerProps {
    children: React.ReactNode;
    tag: "section" | "div";
    id?: string;
    className?: string;
    toggle: {
        logo: boolean,
        color: "white" | "blue" | null;
    }
}

export function GSAPToggleContainer({ children, tag, id, className, toggle }: ContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const Tag = tag;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const body = document.body;
            const container = containerRef.current;
            if (!container) return;

            const options = {
                logo: {
                    enter: () => body.classList.add("logoShow"),
                    leaveBack: () => body.classList.remove("logoShow")
                },
                white: {
                    enter: () => body.dataset.headColor = "white",
                    leaveBack: () => body.dataset.headColor = "blue"
                },
                blue: {
                    enter: () => body.dataset.headColor = "blue",
                    leaveBack: () => body.dataset.headColor = "white"
                }
            }

            ScrollTrigger.create({
                trigger: container,
                start: "top top",
                end: "bottom top",
                onEnter: () => {
                    if (toggle.logo) options.logo.enter();
                    if (toggle.color === "white") options.white.enter();
                    if (toggle.color === "blue") options.blue.enter();
                },
                onLeaveBack: () => {
                    if (toggle.logo) options.logo.leaveBack();
                    if (toggle.color === "white") options.white.leaveBack();
                    if (toggle.color === "blue") options.blue.leaveBack();
                },
            });


        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <Tag id={id} className={`${className}`} ref={containerRef}>
            {children}
        </Tag>
    );
}

interface MaskContainerProps {
    children: React.ReactNode;
    tag: "section" | "div";
    id?: string;
    className?: string;
    mask: "water" | "colorBlue" | "colorWhite";
}

export function GSAPMaskContainer({ children, tag, id, className, mask }: MaskContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const Tag = tag;
    const { hero, water, colorBlue, colorWhite } = useRefContext();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const container = containerRef.current;
            if (!container) return;

            const maskEl = mask === "water" ? water.current : mask === "colorBlue" ? colorBlue.current : colorWhite.current;
            console.log(maskEl);

            gsap.to(maskEl, {
                scrollTrigger: {
                    trigger: container,
                    start: "top 75%",
                    end: "center 75%",
                    invalidateOnRefresh: true,
                    onEnter: () => maskEl?.classList.add("isHide"),
                    onLeaveBack: () => maskEl?.classList.remove("isHide"),
                }
            })
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <Tag id={id} className={`${className}`} ref={containerRef}>
            {children}
        </Tag>
    );
}