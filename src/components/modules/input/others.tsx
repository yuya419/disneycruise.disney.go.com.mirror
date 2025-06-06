/**
 * @name others.tsx
 * @description inputタグのコンポーネント - その他の同意
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function Others(props: {
  title: string;
  name: string;
  required?: boolean;
}) {
  const { title, name, required } = props;

  return (
    <dl className="form-input-box">
      <dt className="form-input-title">
        {title}
        <Required required={required} />
      </dt>
      <dd className="form-input-content">
        <div className="text">
          <ul>
            <li>
              本フォームは予約リクエストフォームです。予約手配後、ご入金が確認できた時点で正式に予約成立となります。
            </li>
            <li>料金は変動制で手配中に料金が変動する場合があります。</li>
            <li>
              料金はUSD表示ですが、予約日のキャッシュセリングレートで日本円に換算しご請求いたします。なお1円単位以下は切り捨てとなります。
            </li>
            <li>
              別途、船上にてチップ（1人1泊あたり、内側～バルコニーはUS$16.00、コンシェルジュ以上はUS$27.25）をお支払い頂きます。
            </li>
            <li>
              お申し込み後、回答までに最大で5営業日程度お時間をいただく場合がございます。
            </li>
          </ul>
        </div>
        <div className="text">
          <label className="form-input-label">
            <input type="checkbox" name={name} required={required} />
            <span className="label">上記注意事項に同意します</span>
          </label>
        </div>
      </dd>
    </dl>
  );
}
