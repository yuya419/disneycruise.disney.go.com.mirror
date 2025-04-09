/**
 * @name title.tsx
 * @description タイトルコンポーネント
 */
import Image from "next/image";
import helper from "@/libs/helper";
import "./styles/title.scss";

type TitleProps = {
    title: string;
    en?: string;
    slider?: string[];
}

export default function Title({ title, en, slider }: TitleProps) {
    const { getImagePath } = helper();

    // スライダーなし
    const Layout01 = () => {
        return (
            <>
                <div className="l-title__accent">
                    <span className="bar is-left"></span>
                    <svg className="onm"><use href="#i-onm-03"></use></svg>
                    <span className="bar is-right"></span>
                </div>
                <hgroup className="l-title__group">
                    <p lang="en">{en}</p>
                    <h1>{title}</h1>
                </hgroup>
            </>
        )
    }

    // スライダーあり
    const Layout02 = () => {
        return (
            <>
                <div className="l-title__slider">
                </div>
                <hgroup className="l-title__group">
                    <p lang="en">{en}</p>
                    <h1>{title}</h1>
                </hgroup>
            </>
        )
    }

    return (
        <div className="l-title">
            {
                !slider ? (
                    <Layout01 />
                ) : (
                    <Layout02 />
                )
            }
        </div>
    )
}