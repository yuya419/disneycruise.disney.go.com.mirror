/**
 * @name sex.tsx
 * @description inputタグのコンポーネント - 性別
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function Sex(props: {
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
          <input type="radio" name={name} value="男性" required={required} />
          <span className="label">男性</span>
        </label>
        <label className="form-input-label">
          <input type="radio" name={name} value="女性" required={required} />
          <span className="label">女性</span>
        </label>
      </dd>
    </dl>
  );
}
