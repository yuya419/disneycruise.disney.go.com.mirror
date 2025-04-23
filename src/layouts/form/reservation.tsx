/**
 * @name reservation.tsx
 * @description 予約内容
 */
"use client";
import Image from "next/image";
import Button from "@/components/modules/buttons/button";
import { Headline } from "@/components/modules/headline/headline";
import "./styles/reservation.scss";

export default function Reservation(props: {
    step?: "input" | "confirm" | "complete";
}) {
    const { step } = props;

    if (step === "complete") {
        return null;
    }

    return (
        <div className="l-reservation">
            <div className="l-reservation-detail">
                <div className="l-reservation-detail__head">
                    <span className="bar is-left"></span>
                    <svg className="onm is-left"><use href="#i-onm-02"></use></svg>
                    <h2 className="label">予約内容</h2>
                    <svg className="onm is-right"><use href="#i-onm-02"></use></svg>
                    <span className="bar is-right"></span>
                </div>
                <div className="l-reservation-detail__content">
                    <div className="image">
                        <Image
                            src="/ships/adventure/common/dummy/course-list-room-thumbnail.jpg"
                            alt="部屋の画像"
                            width={400}
                            height={266}
                        />
                    </div>
                    <div className="overview">
                        <dl className="overview-item is-item-course">
                            <dt>ディズニーアドベンチャー　コース</dt>
                            <dd>シンガポール発着　3泊クルーズ</dd>
                        </dl>
                        <dl className="overview-item is-item-room">
                            <Headline design="01" hlLevel="dt">客室タイプ</Headline>
                            <dd><span>コンシェルジュロイヤルスイートオーシャンビューベランダ客室​</span></dd>
                        </dl>
                        <dl className="overview-item is-item-people">
                            <Headline design="01" hlLevel="dt">日程・人数</Headline>
                            <dd>
                                <span>出発日：2025/02/10<br className="nopc" />（取消料発生日：2025/00/00）</span>
                                <span>大人2名,子供1名</span>
                            </dd>
                        </dl>
                        <dl className="overview-item is-item-price">
                            <Headline design="01" hlLevel="dt">クルーズ料金</Headline>
                            <dd>
                                <span className="total">合計<span className="val">$ 1,054</span></span>
                                <span className="price">大人<span className="val">$400<span className="cross"></span>2名,</span> 子供<span className="val">$254<span className="cross"></span>1名</span></span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            {
                step === "input" && <Button type="primary" label="選択し直す" link={"../"} reverse={true} />
            }
        </div>
    );
}