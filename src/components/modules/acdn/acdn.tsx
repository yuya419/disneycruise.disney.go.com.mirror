/**
 * @name acdn.tsx
 * @description アコーディオンモジュール
 */
"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import "./styles/acdn.scss";

interface AccordionProps {
    label: React.ReactNode;
    content: React.ReactNode;
    isOpenDefault?: boolean;
}

/**
 * @name AccordionType01
 * @description アコーディオンコンポーネント01 - トグルエリアがアイコンのみ
 * @param {boolean} isOpenDefault - 初期状態で開いているかどうか
 */
function AccordionType01({ label, content, isOpenDefault }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(isOpenDefault);
    const pathName = usePathname();

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setIsOpen(false);
    }, [pathName]);

    return (
        <div className={`acdn ${isOpen ? "isOpen" : ""}`}>
            <div className="acdn-label">
                {label}
                <button type="button" className="acdn-icon" onClick={toggleAccordion} data-expanded={isOpen}><span className="icon"></span></button>
            </div>
            <div className="acdn-content" data-hidden={!isOpen}>
                <div className="acdn-inner">
                    {content}
                </div>
            </div>
        </div>
    )
}

/**
 * @name AccordionType02
 * @description アコーディオンコンポーネント02 - トグルエリアがラベル全体
 * @param {boolean} isOpenDefault - 初期状態で開いているかどうか
 */
function AccordionType02({ label, content, isOpenDefault }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(isOpenDefault);
    const pathName = usePathname();

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setIsOpen(false);
    }, [pathName]);

    return (
        <div className={`acdn ${isOpen ? "isOpen" : ""}`}>
            <button type="button" className="acdn-toggle" onClick={toggleAccordion} data-expanded={isOpen}>
                {label}
            </button>
            <div className="acdn-content" data-hidden={!isOpen}>
                <div className="acdn-inner">
                    {content}
                </div>
            </div>
        </div>
    )
}

/**
 * @name AccordionType03
 * @description アコーディオンコンポーネント03 - トグルボタン独立
 * @param {boolean} isOpenDefault - 初期状態で開いているかどうか
 */
function AccordionType03({ label, content, isOpenDefault }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(isOpenDefault);
    const pathName = usePathname();

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setIsOpen(false);
    }, [pathName]);

    return (
        <div className={`acdn ${isOpen ? "isOpen" : ""}`}>
            <div className="acdn-label">{label}</div>
            <div className="acdn-content" data-hidden={!isOpen}>
                <div className="acdn-inner">
                    {content}
                </div>
            </div>
            <button type="button" className="acdn-toggle" onClick={toggleAccordion} data-expanded={isOpen}>
                <span className="open">詳細</span>
                <span className="close">閉じる</span>
                <span className="icon">
                    <svg className="i-arw-t-tri">
                        <use href="#i-arw-t-tri"></use>
                    </svg>
                </span>
            </button>
        </div>
    )
}

export {
    AccordionType01,
    AccordionType02,
    AccordionType03,
}