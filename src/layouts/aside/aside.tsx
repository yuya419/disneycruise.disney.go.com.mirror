/**
 * @name aside.tsx
 * @description サイドメニューを表示するページ
 */
"use client";
import { useEffect, useRef } from "react";
import { AccordionType02 as Accordion } from "@/components/modules/acdn/acdn";
import Filter from "@/components/modules/panel/filter";
import "./styles/aside.scss";

type AsideProps = {
    page: "course";
};

export default function Aside({ page }: AsideProps) {
    const asideRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const html = document.documentElement;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    html.classList.remove("is-filter-button-show");
                } else {
                    html.classList.add("is-filter-button-show");
                }
            },
            { root: null, threshold: 0 } // 画面内に 1px でも見えていれば true
        );

        if (asideRef.current) {
            observer.observe(asideRef.current);
        }

        return () => {
            if (asideRef.current) {
                observer.unobserve(asideRef.current);
            }
        };
    }, []);

    const AsideContent = () => {
        if (page === "course") {
            return (
                <div className="s-course-aside">
                    <Accordion
                        label={
                            <>
                                <span className="icon">
                                    <svg className="i-search">
                                        <use href="#i-search"></use>
                                    </svg>
                                </span>
                                <span className="label">条件で絞り込む</span>
                                <span className="icon">
                                    <svg className="i-arw-t-tri">
                                        <use href="#i-arw-t-tri"></use>
                                    </svg>
                                </span>
                            </>
                        }
                        content={<Filter />}
                    />
                </div>
            );
        }
    };

    return (
        <aside className="l-aside" ref={asideRef}>
            <AsideContent />
        </aside>
    );
}