/**
 * @name address.tsx
 * @description inputタグのコンポーネント - 住所
 * @description 住所は、都道府県と市区町村、番地、建物名、部屋番号などを含む
 */
"use client";
import { useRef } from "react";
import Required from "./required";
import "./styles/input.scss";

export default function Address(props: {
  title: string;
  name: string;
  required?: boolean;
}) {
  const { title, name, required } = props;

  // 住所入力用のref
  const prefectureRef = useRef<HTMLSelectElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);

  // 郵便番号から住所自動入力
  const handlePostalCodeBlur = async (
    e: React.FocusEvent<HTMLInputElement>,
  ) => {
    const code = e.target.value.replace(/[^0-9]/g, "");
    if (code.length !== 7) return;
    try {
      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${code}`,
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        if (prefectureRef.current) {
          prefectureRef.current.value = result.address1;
        }
        if (cityRef.current) {
          cityRef.current.value = result.address2 + result.address3;
        }
        // streetは自動入力しない（番地はAPIに含まれないため）
      }
    } catch (err) {
      // エラー時は何もしない
    }
  };

  return (
    <dl className="form-input-box">
      <dt className="form-input-title">
        {title}
        <Required required={required} />
      </dt>
      <dd className="form-input-content">
        <div className="input">
          <label className="form-input-label is-label-code">
            〒
            <input
              type="text"
              name={"code-" + name}
              placeholder="郵便番号"
              required={required}
              maxLength={7}
              onBlur={handlePostalCodeBlur}
            />
          </label>
          <label className="form-input-label is-label-prefectures">
            <select
              name={"prefectures-" + name}
              required={required}
              ref={prefectureRef}
            >
              <option value="" hidden>
                都道府県を選択してください
              </option>
              <option value="北海道">北海道</option>
              <option value="青森県">青森県</option>
              <option value="岩手県">岩手県</option>
              <option value="宮城県">宮城県</option>
              <option value="秋田県">秋田県</option>
              <option value="山形県">山形県</option>
              <option value="福島県">福島県</option>
              <option value="茨城県">茨城県</option>
              <option value="栃木県">栃木県</option>
              <option value="群馬県">群馬県</option>
              <option value="埼玉県">埼玉県</option>
              <option value="千葉県">千葉県</option>
              <option value="東京都">東京都</option>
              <option value="神奈川県">神奈川県</option>
              <option value="新潟県">新潟県</option>
              <option value="富山県">富山県</option>
              <option value="石川県">石川県</option>
              <option value="福井県">福井県</option>
              <option value="山梨県">山梨県</option>
              <option value="長野県">長野県</option>
              <option value="岐阜県">岐阜県</option>
              <option value="静岡県">静岡県</option>
              <option value="愛知県">愛知県</option>
              <option value="三重県">三重県</option>
              <option value="滋賀県">滋賀県</option>
              <option value="京都府">京都府</option>
              <option value="大阪府">大阪府</option>
              <option value="兵庫県">兵庫県</option>
              <option value="奈良県">奈良県</option>
              <option value="和歌山県">和歌山県</option>
              <option value="鳥取県">鳥取県</option>
              <option value="島根県">島根県</option>
              <option value="岡山県">岡山県</option>
              <option value="広島県">広島県</option>
              <option value="山口県">山口県</option>
              <option value="徳島県">徳島県</option>
              <option value="香川県">香川県</option>
              <option value="愛媛県">愛媛県</option>
              <option value="高知県">高知県</option>
              <option value="福岡県">福岡県</option>
              <option value="佐賀県">佐賀県</option>
              <option value="長崎県">長崎県</option>
              <option value="熊本県">熊本県</option>
              <option value="大分県">大分県</option>
              <option value="宮崎県">宮崎県</option>
              <option value="鹿児島県">鹿児島県</option>
              <option value="沖縄県">沖縄県</option>
            </select>
            <span className="tri"></span>
          </label>
        </div>
        <div className="input">
          <label className="form-input-label is-label-city">
            <span className="ttl">市区町村</span>
            <input
              type="text"
              name={"city-" + name}
              placeholder="市区町村を入力してください"
              required={required}
              ref={cityRef}
            />
          </label>
        </div>
        <div className="input">
          <label className="form-input-label is-label-street">
            <span className="ttl">番地</span>
            <input
              type="text"
              name={"street-" + name}
              placeholder="番地を入力してください"
              required={required}
              ref={streetRef}
            />
          </label>
        </div>
        <div className="input">
          <label className="form-input-label is-label-building">
            <span className="ttl">建物名・部屋番号</span>
            <input
              type="text"
              name={"building-" + name}
              placeholder="建物名・部屋番号を入力してください"
            />
          </label>
        </div>
      </dd>
    </dl>
  );
}
