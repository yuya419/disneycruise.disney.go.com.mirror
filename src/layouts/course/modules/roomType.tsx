/**
 * @name roomType.tsx
 * @description 客室タイプを表示するコンポーネント
 */
"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { AccordionType02, AccordionType03 } from "@/components/modules/acdn/acdn";
import { Headline } from "@/components/modules/headline/headline";
import BookingCalendar from "@/components/modules/calendar/calendar";
import "./styles/roomType.scss";

export default function RoomType({ typesArray }: { typesArray: any[] }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");

        // 初期値を設定
        setIsMobile(mediaQuery.matches);

        // リスナーを追加して画面幅の変更を監視
        const handleResize = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };
        mediaQuery.addEventListener("change", handleResize);

        // クリーンアップ
        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        return () => {
            html.dataset.state = "";
        };
    }, []);

    return (
        <div className="m-room-type">
            {typesArray.map((type, index) => (
                <div key={index} className="m-room-type-item">
                    <AccordionType02
                        label={
                            <>
                                <div className="type-eyecatch">
                                    <Image
                                        src={type.image.src}
                                        width={type.image.w}
                                        height={type.image.h}
                                        alt={type.name} />
                                </div>
                                <div className="type-name">
                                    <span className="name">{type.name}
                                        <span className="length">{Object.keys(type.room).length}件</span>
                                    </span>
                                    <span className="text">各客室の料金カレンダーはこちら</span>
                                </div>
                                <span className="toggle-icon"></span>
                            </>
                        }
                        content={
                            <div className="room-list">
                                {Object.keys(type.room).map((roomKey, roomIndex) => {
                                    const room = type.room[roomKey];
                                    const [isModalOpen, setIsModalOpen] = useState(false);

                                    const toggleModal = () => {
                                        setIsModalOpen(!isModalOpen);
                                    };

                                    useEffect(() => {
                                        if (!isMobile) return; // モバイル時のみ実行

                                        const html = document.documentElement;
                                        if (isModalOpen) {
                                            html.dataset.state = "modalOpen";
                                        } else {
                                            html.dataset.state = "";
                                        }
                                    }, [isModalOpen]);

                                    return (
                                        <div key={roomIndex} className="room-item">
                                            <AccordionType03
                                                label={
                                                    <>
                                                        <div className="room-eyecatch">
                                                            <Image
                                                                src={room.image.src}
                                                                width={room.image.w}
                                                                height={room.image.h}
                                                                alt={room.name} />
                                                        </div>
                                                        <div className="room-name">
                                                            <span className="name">{room.name}</span>
                                                        </div>
                                                    </>
                                                }
                                                content={
                                                    <div className="room-content">
                                                        <div className="calendar">
                                                            <BookingCalendar
                                                                onDateClick={() => setIsModalOpen(!isModalOpen)}
                                                            />
                                                        </div>
                                                        <form className="booking-form" method="get" data-open={isModalOpen}>
                                                            <div className="booking-form__inner">
                                                                <div className="info">
                                                                    <dl className="info-item is-info-price">
                                                                        <dt>
                                                                            <Headline design="01" hlLevel="p">クルーズ料金</Headline>
                                                                        </dt>
                                                                        <dd>
                                                                            <dl className="total">
                                                                                <dt>合計</dt>
                                                                                <dd>$ 1,054</dd>
                                                                            </dl>
                                                                            <dl className="people">
                                                                                <dt>大人</dt>
                                                                                <dd>$400<span className="num"><span></span>2名</span></dd>
                                                                            </dl>
                                                                            <dl className="people">
                                                                                <dt>子供</dt>
                                                                                <dd>$254<span className="num"><span></span>1名</span></dd>
                                                                            </dl>
                                                                        </dd>
                                                                    </dl>
                                                                    <dl className="info-item is-info-date">
                                                                        <dt>
                                                                            <Headline design="01" hlLevel="p">出発日</Headline>
                                                                        </dt>
                                                                        <dd>2025/02/10</dd>
                                                                    </dl>
                                                                    <dl className="info-item is-info-cancel">
                                                                        <dt>
                                                                            <Headline design="01" hlLevel="p">取消料発生日</Headline>
                                                                        </dt>
                                                                        <dd>2025/00/00</dd>
                                                                    </dl>
                                                                </div>
                                                                <button type="submit" className="booking-button">
                                                                    <span className="icon">
                                                                        <svg className="i-check">
                                                                            <use href="#i-check"></use>
                                                                        </svg>
                                                                    </span>
                                                                    <span className="label">予約する</span>
                                                                </button>
                                                                <p className='attention'>
                                                                    <a href="" className='uline-r'>
                                                                        <span className="icon">
                                                                            <svg className="i-question">
                                                                                <use href="#i-question"></use>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="label line">金額・空室表記について</span>
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <button type="button" className="close-button" onClick={toggleModal}></button>
                                                        </form>
                                                    </div>
                                                } />
                                        </div>
                                    );
                                })}
                            </div>
                        } />
                </div>
            ))
            }
        </div >
    );
}