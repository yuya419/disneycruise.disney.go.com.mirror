/**
 * @name roomType.tsx
 * @description inputタグのコンポーネント - 部屋タイプ
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function RoomType(props: {
  title: string;
  name: string;
  required?: boolean;
  array?: string[];
}) {
  const { title, name, required, array } = props;

  return (
    <dl className="form-input-box">
      <dt className="form-input-title">
        {title}
        <Required required={required} />
      </dt>
      <dd className="form-input-content">
        {array?.map((value, index) => (
          <label key={index} className="form-input-label">
            <input
              type="radio"
              name={name}
              value={value.replace(/<br\s*\/?>/g, "")}
              required={required}
            />
            <span
              className="label"
              dangerouslySetInnerHTML={{ __html: value }}
            ></span>
          </label>
        ))}
      </dd>
    </dl>
  );
}
