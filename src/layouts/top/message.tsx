/**
 * @name Hero.tsx
 * @description ヒーローセクション
 */
import Image from "next/image";
import helper from "@/libs/helper";
import "./styles/message.scss";

export default function Hero() {
    const { getImagePath } = helper();

    return (
        <section className="t-message">
            <div className="container">
                <hgroup className="t-message__head">
                    <p className="logo">
                        <Image
                            src={getImagePath("common/logo.svg")}
                            alt="サイト名"
                            width={470}
                            height={256}
                            layout={"responsive"}
                            priority
                        />
                    </p>
                    <h2>2025年、ディズニー・クルーズラインが<br />シンガポールにやってきます。</h2>
                </hgroup>
                <div className="t-message__body">
                    <p>壮大なスケールの<br className="nopc" />魅惑的なクルージングバケーションを<br />体験してみませんか。<br />
                        <br />
                        そこは、楽しさにあふれ、<br className="nopc" />くつろぎの時間で満たされた空間。<br />
                        ワールドクラスのエンターテインメント、<br />テーマ別のダイニング体験、<br />
                        卓越したゲストサービスを提供する<br className="nopc" />ディズニー・アドベンチャーは、<br />旅の道のりでありながら目的地でもあります。<br />
                        <br />
                        シンガポールから出航するこの客船では、<br />3泊〜5泊の航海をご用意しています。<br />
                        洋上で魔法のような日々をお過ごしください。</p>
                </div>
            </div>
        </section>
    )
}