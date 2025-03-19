/**
 * @name Hero.tsx
 * @description ヒーローセクション
 */
import Image from "next/image";
import helper from "@/libs/helper";
import "./styles/hero.scss";

export default function Hero() {
    const { getImagePath } = helper();

    return (
        <div className="t-hero">
            <div className="t-hero__logo">
                <Image
                    src={getImagePath("/common/logo.svg")}
                    alt="サイト名"
                    width={290}
                    height={158}
                    layout={"responsive"}
                    priority
                />
            </div>
            <div className="t-hero__copy">
                <p lang="en"> Website presented by <a href="#" target="_blank" className="uline-r"><span className="line">Miki Tourist</span></a></p>
            </div>
            <div className="t-hero__scroll">
                <p>
                    <span className="label" lang="en">Scroll Down</span>
                    <span className="circle"></span>
                </p>
            </div>
        </div>
    )
}