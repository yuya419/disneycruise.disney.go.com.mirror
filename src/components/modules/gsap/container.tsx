/**
 * @name Container.tsx
 * @description GSAPのアニメーションを実行するためのコンテナコンポーネント
 */
'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

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
    }, [pathname]);

    return (
        <Tag id={id} className={`${className}`} ref={containerRef}>
            {children}
        </Tag>
    );
}