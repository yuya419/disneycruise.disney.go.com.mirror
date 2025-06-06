/**
 * @name emailConfirm.tsx
 * @description inputタグのコンポーネント - メールアドレス確認
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function EmailConfirm(props: {
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
          <input
            type="email"
            name={name}
            placeholder="メールアドレスを入力してください"
            required={required}
          />
        </label>
      </dd>
    </dl>
  );
}
