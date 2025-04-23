/**
 * @name title.tsx
 * @description タイトルコンポーネント
 */
import Image from "next/image";
import { Slider } from "@/components/modules/slider/slider";
import "./styles/title.scss";

type TitleProps = {
    type: "onm" | "slider" | "course";
    title: string;
    en?: string;
    slider?: {
        dom: React.ReactNode;
    }[];
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
                    <Slider
                        type="hero"
                        slides={(slider || [])}
                        options={{
                            loop: true,
                            watchDrag: false,
                            duration: 50,
                        }}
                        autoplay={true}
                        fade={true}
                    />
                </div>
                <hgroup className="l-title__group">
                    {en && <p lang="en" dangerouslySetInnerHTML={{ __html: en }}></p>}
                    <h1>{title}</h1>
                </hgroup>
                <div className="l-title__copy">
                    <p lang="en"> Website presented by <a href="#" target="_blank" className="uline-r"><span className="line">Miki Tourist</span></a></p>
                </div>
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