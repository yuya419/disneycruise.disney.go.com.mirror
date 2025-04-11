/**
 * @name title.tsx
 * @description タイトルコンポーネント
 */
import Image from "next/image";
import "./styles/title.scss";

type TitleProps = {
    type: "onm" | "slider" | "course";
    title: string;
    en?: string;
    slider?: string[];
    image?: string
}

export default function Title({ type, title, en, slider, image }: TitleProps) {

    // オーナメント付きタイトル
    const Layout01 = () => {
        return (
            <div className="l-title is-l-onm">
                <div className="l-title__accent">
                    <span className="bar is-left"></span>
                    <svg className="onm"><use href="#i-onm-03"></use></svg>
                    <span className="bar is-right"></span>
                </div>
                <hgroup className="l-title__group">
                    <p lang="en">{en}</p>
                    <h1>{title}</h1>
                </hgroup>
            </div>
        )
    }

    // スライダー付きタイトル
    const Layout02 = () => {
        return (
            <div className="l-title is-l-slider">
                <div className="l-title__slider">
                </div>
                <hgroup className="l-title__group">
                    <p lang="en">{en}</p>
                    <h1>{title}</h1>
                </hgroup>
            </div>
        )
    }

    // コース詳細タイトル
    const Layout03 = () => {
        return (
            <div className="l-title is-l-course">
                <h1>{title}</h1>
                {
                    image &&
                    <div className="l-title__image">
                        <Image
                            src={image}
                            alt={title}
                            width={180}
                            height={120}
                            priority
                        />
                    </div>
                }
            </div>
        )
    }

    return (
        <>
            {type === "onm" && <Layout01 />}
            {type === "slider" && <Layout02 />}
            {type === "course" && <Layout03 />}
        </>
    )
}