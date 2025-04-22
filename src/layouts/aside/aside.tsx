/**
 * @name aside.tsx
 * @description サイドメニューを表示するページ
 */
"use client";
import { useEffect, useRef, useState } from "react";
import { AccordionType01, AccordionType02 } from "@/components/modules/acdn/acdn";
import Filter from "@/components/modules/panel/filter";
import { Link as Scroll } from 'react-scroll'
import "./styles/aside.scss";

type AsideProps = {
    page: string
    step?: "input" | "confirm" | "complete";
    nav?: {
        [key: string]: {
            item: string[];
            child?: {
                item: string[];
            }[]
        }[]
    }
};

export default function Aside({ page, step, nav }: AsideProps) {

    const AsideContent = () => {

        if (page === "course") {
            const asideRef = useRef<HTMLDivElement | null>(null);

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

            return (
                <div className="l-aside-course" ref={asideRef}>
                    <AccordionType02
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

        if (page === "qa") {
            const uListRef = useRef<HTMLUListElement | null>(null);

            useEffect(() => {
                const toggleCurrent = (id: string) => {
                    const items = uListRef.current?.querySelectorAll(".menu-item");
                    items?.forEach((item) => {
                        const link = item.querySelector(".menu-item-link");
                        if (link && link.getAttribute("data-current") === "true") {
                            link.setAttribute("data-current", "false");
                        }
                    });

                    const currentItem = uListRef.current?.querySelector(`[data-anchor="${id}"]`);
                    if (currentItem) {
                        const link = currentItem.querySelector(".menu-item-link");
                        if (link) {
                            link.setAttribute("data-current", "true");
                        }
                    }
                }
                const handleScroll = () => {
                    const sections = document.querySelectorAll("section");
                    let currentId: string | null = null;

                    sections.forEach((section) => {
                        const rect = section.getBoundingClientRect();
                        if (rect.top <= 100 && rect.bottom >= 0) {
                            currentId = section.getAttribute("id");
                            toggleCurrent(currentId || "");
                        }
                    });
                };

                window.addEventListener("scroll", handleScroll);

                return () => {
                    window.removeEventListener("scroll", handleScroll);
                };
            }, []);

            return (
                <div className="l-aside-page">
                    <nav className="asideNav">
                        <AccordionType02
                            label={
                                <span className="ttl">
                                    <span className="icon">
                                        <svg className="i-index">
                                            <use href="#i-index"></use>
                                        </svg>
                                    </span>
                                    <span className="label" lang="en">Index</span>
                                    <span className="icon">
                                        <svg className="i-arw-t-tri">
                                            <use href="#i-arw-t-tri"></use>
                                        </svg>
                                    </span>
                                </span>
                            }
                            content={
                                <ul className="nav-menu" ref={uListRef}>
                                    {nav && Object.entries(nav).map(([key, value]) => (
                                        <li key={key} className="menu-item" data-anchor={value[0].item[1]}>
                                            {
                                                value[0].child && (
                                                    <AccordionType01
                                                        label={
                                                            <Scroll to={value[0].item[1]} smooth={true} duration={500} offset={0} className="menu-item-link" data-current="false">
                                                                <span className="label">{value[0].item[0]}</span>
                                                            </Scroll>
                                                        }
                                                        content={
                                                            <ul className="child-nav-menu">
                                                                {value[0].child.map((child, index) => (
                                                                    <li key={index} className="child-menu-item">
                                                                        <Scroll to={child.item[1]} smooth={true} duration={500} offset={-100} className="child-menu-item-link uline"><span className="line">{child.item[0]}</span></Scroll>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        }
                                                    />
                                                ) || (
                                                    <Scroll to={value[0].item[1]} smooth={true} duration={500} offset={-100} className="menu-item-link" data-current="false">
                                                        <span className="label">{value[0].item[0]}</span>
                                                    </Scroll>
                                                )
                                            }
                                        </li>
                                    ))}
                                </ul>
                            }
                        />
                    </nav>
                </div>
            )
        }
    };

    return (
        <aside className="l-aside">
            <AsideContent />
        </aside>
    );
}