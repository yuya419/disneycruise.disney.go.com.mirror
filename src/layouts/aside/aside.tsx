/**
 * @name aside.tsx
 * @description サイドメニューを表示するページ
 */
"use client";
import { AccordionType02 as Accordion } from "@/components/modules/acdn/acdn";
import Filter from "@/components/modules/panel/filter";
import "./styles/aside.scss";

type AsideProps = {
    page: "course";
}

export default function Aside({ page }: AsideProps) {

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
                        content={
                            <Filter />
                        } />
                </div>
            )
        }
    }

    return (
        <aside className="l-aside">
            <AsideContent />
        </aside>
    );
}