/**
 * @name dining.tsx
 * @description ダイニング
 */
import Button from "@/components/modules/buttons/button";
import { GallerySlider } from "@/components/modules/common/common";
import { GSAPToggleContainer } from "@/components/modules/gsap/container";
import "./styles/dining.scss";

export default function Dining() {

    const images = {
        "img01": {
            src: "top/dining/img01.jpg",
            alt: "",
            w: 380,
            h: 500,
        },
        "img02": {
            src: "top/dining/img02.jpg",
            alt: "",
            w: 380,
            h: 500,
        },
        "img03": {
            src: "top/dining/img03.jpg",
            alt: "",
            w: 380,
            h: 500,
        },
        "img04": {
            src: "top/dining/img04.jpg",
            alt: "",
            w: 380,
            h: 500,
        },
    }

    const images_sp = {
        "img01": {
            src: "top/dining/img01_sp.jpg",
            alt: "",
            w: 350,
            h: 233,
        },
        "img02": {
            src: "top/dining/img02_sp.jpg",
            alt: "",
            w: 350,
            h: 233,
        },
        "img03": {
            src: "top/dining/img03_sp.jpg",
            alt: "",
            w: 350,
            h: 233,
        },
    }

    return (
        <section className="t-dining">
            <GallerySlider to="left" images={images} />
            <div className="container">
                <hgroup className="t-dining__head">
                    <p lang="en">Dining</p>
                    <h2>ダイニング</h2>
                </hgroup>
                <div className="t-dining__body">
                    <GallerySlider to="left" images={images_sp} />
                    <h3>船上から、あらゆる料理の旅を巡る。</h3>
                    <p>船内の魔法をテーマにしたレストランでは、<br className="nopc" />エレガントな料理の旅から<br className="nopc" />オーダーメイドのカジュアルな料理まで、<br className="nopc" />あらゆるものをお楽しみいただけます。<br />
                        さらに、クルーズ中はディズニーならではの<br className="nopc" />3つのダイニング体験をお楽しみいただけます。<br className="nopc" />予約には事前に設定された<br className="nopc" />スケジュールが含まれています。</p>
                    <Button type="primary" label="View More" lang="en" link="/dining/" />
                </div>
            </div>
        </section>
    )
}