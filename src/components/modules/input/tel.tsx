/**
 * @name tel.tsx
 * @description inputタグのコンポーネント - 電話番号
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function Tel(props: {
    title: string,
    name: string,
    required?: boolean,
}) {
    const { title, name, required } = props;

    return (
        <dl className="form-input-box">
            <dt className="form-input-title">{title}<Required required={required} /></dt>
            <dd className="form-input-content">
                <label className="form-input-label">
                    <input type="tel" name={name} placeholder="電話番号を入力してください" required={required} />
                </label>
            </dd>
        </dl>
    );
}