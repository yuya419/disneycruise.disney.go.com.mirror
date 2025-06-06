/**
 * @name age.tsx
 * @description inputタグのコンポーネント - 年齢
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function Age(props: {
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
        <label className="form-input-label">
          <select name={name} required={required}>
            <option value="" hidden>
              年齢を選択してください
            </option>
            <option value="10代以下">10代以下</option>
            <option value="20代">20代</option>
            <option value="30代">30代</option>
            <option value="40代">40代</option>
            <option value="50代">50代</option>
            <option value="60代">60代</option>
            <option value="70代">70代</option>
            <option value="80代以上">80代以上</option>
          </select>
          <span className="tri"></span>
        </label>
      </dd>
    </dl>
  );
}
