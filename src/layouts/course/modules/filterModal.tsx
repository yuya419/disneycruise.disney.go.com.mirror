/**
 * @name filterModal.tsx
 * @description 「条件で絞り込む」ボタンのコンポーネント
 */
"use client";
import { useState, useEffect } from 'react';
import Filter from "@/components/modules/panel/filter";
import "./styles/filterModal.scss";

export default function FilterModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        const html = document.documentElement;
        if (isModalOpen) {
            html.dataset.state = "modalOpen";
        } else {
            html.dataset.state = "";
        }
    }, [isModalOpen]);

    return (
        <>
            <div className="filterButton">
                <button type="button" className="filterButton-el" onClick={toggleModal}>
                    <span className="icon">
                        <svg className="i-search">
                            <use xlinkHref="#i-search"></use>
                        </svg>
                    </span>
                    <span className="label">条件で絞り込む</span>
                </button>
            </div>
            <div className="filterModal" data-open={isModalOpen}>
                <div className="filterModal__head">
                    <span className="icon">
                        <svg className="i-search">
                            <use href="#i-search"></use>
                        </svg>
                    </span>
                    <span className="label">条件で絞り込む</span>
                </div>
                <div className="filterModal__detail">
                    <Filter />
                </div>
                <button type="button" className="close-button" onClick={toggleModal}></button>
            </div>
        </>
    )
}