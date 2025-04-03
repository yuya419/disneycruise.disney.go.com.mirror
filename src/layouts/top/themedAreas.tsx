/**
 * @name themedAreas
 * @description 7つのテーマ別エリア
 */
'use client';
import Image from "next/image";
import helper from "@/libs/helper";
import "./styles/themedAreas.scss";

export default function ThemedAreas() {

    // const OneScrollArea = (Array: []) => { }

    return (
        <section className="t-themed-areas">
            <div className="container">
                <div className="t-themed-areas__head">
                    <svg className="onm is-left"><use href="#i-onm-01"></use></svg>
                    <span className="bar is-left"></span>
                    <hgroup className="headline">
                        <p lang="en"><span className="num">7</span>Themed Areas</p>
                        <h2>7つのテーマ別エリア</h2>
                    </hgroup>
                    <span className="bar is-right"></span>
                    <svg className="onm is-right"><use href="#i-onm-01"></use></svg>
                </div>
                <div className="t-themed-areas__detail">
                    <h3>7つのテーマエリアで、<br className="nopc" />あなたの楽しみを最大限に。</h3>
                    <p>船内の想像力豊かなテーマの7つのエリアを<br className="nopc" />探索しながら、<br className="nosp" />魔法のような冒険に出発します。<br />
                        各エリアには、ディズニー、マーベル、<br className="nopc" />ピクサーの物語を壮大なスケールで再現した<br />没入感あふれる体験が満載です。</p>
                </div>
            </div>
        </section>
    )
}