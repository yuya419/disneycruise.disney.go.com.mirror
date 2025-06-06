/**
 * @name delivery.tsx
 * @description メールマガジンの配信内容
 */
"use client";
import "./styles/delivery.scss";

export default function Delivery(props: {
  step?: "input" | "confirm" | "complete";
}) {
  const { step } = props;

  if (step != "input") {
    return null;
  }

  return (
    <div className="l-delivery">
      <div className="l-delivery-detail">
        <div className="text">
          <p>
            ミキ・ツーリストが取り扱うクルーズブランド
            <br className="nosp" />
            （ディズニークルーズライン、ロイヤル・カリビアン・インターナショナル、セレブリティクルーズ）に関する
            <br className="nosp" />
            最新情報やお得なキャンペーン情報をメールマガジンにて配信しています。
          </p>
        </div>
        <div className="delivery">
          <div className="ttl">
            <p>過去の配信例</p>
          </div>
          <ul className="delivery-list">
            <li className="list-item">
              クルーズ料金ディスカウント等の期間限定
              <br className="nopc" />
              キャンペーン情報
            </li>
            <li className="list-item">新造船や新商品に関する最新情報</li>
            <li className="list-item">モニター乗船等のメルマガ限定募集告知</li>
            <li className="list-item">その他お得な情報を配信中！</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
