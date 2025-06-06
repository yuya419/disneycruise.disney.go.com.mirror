/**
 * @name remarks.tsx
 * @description inputタグのコンポーネント - 備考
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function Remarks(props: {
  title: string;
  name: string;
  required?: boolean;
}) {
  const { title, name, required } = props;

  return (
    <div className="form-input-box">
      <p className="form-input-title">
        {title}
        <Required required={required} />
      </p>
      <div className="form-input-content">
        <textarea
          name={name}
          placeholder="その他ご質問、ご要望などあればご記入ください"
          required={required}
        />
      </div>
    </div>
  );
}
