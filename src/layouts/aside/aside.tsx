/**
 * @name aside.tsx
 * @description サイドメニューを表示するページ
 */
"use client";
import { useEffect, useRef, useState } from "react";
import { AccordionType02 as Accordion } from "@/components/modules/acdn/acdn";
import Filter from "@/components/modules/panel/filter";
import { Link as Scroll } from 'react-scroll'
import "./styles/aside.scss";

type AsideProps = {
    page: string
    step?: "input" | "confirm" | "complete";
};

export default function Aside({ page, step }: AsideProps) {
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
                <div className="l-aside-course">
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
        if (page === "inquiry" || page === "book" || page === "mailmagazine") {

            const contentMap = {
                input: {
                    ttl: "入力フォーム",
                    text: 'フォームの必要事項を記入の上、<br className="nopc"/>送信してください。',
                    asise: "入力項目"
                },
                confirm: {
                    ttl: "確認フォーム",
                    text: "入力内容を確認の上、送信してください。",
                    asise: "確認項目"
                },
                complete: {
                    ttl: "送信完了",
                    text: "送信が完了しました。",
                    asise: "完了項目"
                },
            };

            const ttl = () => contentMap[step || "input"].ttl;
            const text = () => contentMap[step || "input"].text;
            const asise = () => contentMap[step || "input"].asise;

            const Nav = () => {
                const [currentSection, setCurrentSection] = useState<string | null>(null);

                useEffect(() => {
                    const sections = document.querySelectorAll(".form-block");

                    const observer = new IntersectionObserver(
                        (entries) => {
                            entries.forEach((entry) => {
                                if (entry.isIntersecting) {
                                    const id = entry.target.getAttribute("id");
                                    if (id) {
                                        setCurrentSection(id);
                                    }
                                }
                            });
                        },
                        { root: null, threshold: 0.1 }
                    );

                    sections.forEach((section) => {
                        observer.observe(section);
                    });

                    return () => {
                        sections.forEach((section) => observer.unobserve(section));
                    };
                }, []);

                return (
                    <nav className="inputNav">
                        <p>{asise()}</p>
                        <ul className="nav-menu">
                            <li className="menu-item"><Scroll to="input01" smooth={true} duration={500} offset={0} className="menu-item-link" data-current={currentSection === "input01" ? "true" : "false"}>コース情報の入力</Scroll></li>
                            <li className="menu-item"><Scroll to="input02" smooth={true} duration={500} offset={0} className="menu-item-link" data-current={currentSection === "input02" ? "true" : "false"}>代表者様情報の入力</Scroll></li>
                            <li className="menu-item"><Scroll to="input03" smooth={true} duration={500} offset={0} className="menu-item-link" data-current={currentSection === "input03" ? "true" : "false"}>お客様情報の入力</Scroll></li>
                            <li className="menu-item"><Scroll to="input04" smooth={true} duration={500} offset={0} className="menu-item-link" data-current={currentSection === "input04" ? "true" : "false"}>利用規約・<br />プライバシーポリシー</Scroll></li>
                            <li className="menu-item"><Scroll to="input05" smooth={true} duration={500} offset={0} className="menu-item-link" data-current={currentSection === "input05" ? "true" : "false"}>備考</Scroll></li>
                        </ul>
                    </nav>
                )
            }

            return (
                <div className="l-aside-form">
                    <div className="ttl">
                        <p>{ttl()}</p>
                    </div>
                    <ol className="step-list">
                        <li className="step-item" data-current={step === "input" ? "true" : "false"}>
                            <span className="mark"></span>
                            <span className="label">情報入力</span>
                        </li>
                        <li className="step-item" data-current={step === "confirm" ? "true" : "false"}>
                            <span className="mark"></span>
                            <span className="label">内容確認</span>
                        </li>
                        <li className="step-item" data-current={step === "complete" ? "true" : "false"}>
                            <span className="mark"></span>
                            <span className="label">送信完了</span>
                        </li>
                    </ol>
                    <div className="text">
                        <p dangerouslySetInnerHTML={{ __html: text() as string }}></p>
                    </div>
                    {page === "book" && step !== "complete" && <Nav />}
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