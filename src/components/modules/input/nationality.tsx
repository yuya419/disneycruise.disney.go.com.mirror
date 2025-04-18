/**
 * @name nationality.tsx
 * @description inputタグのコンポーネント - 国籍
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function Nationality(props: {
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
                    <input type="text" name={name} placeholder="例：日本" required={required} />
                </label>
            </dd>
        </dl>
    );
}