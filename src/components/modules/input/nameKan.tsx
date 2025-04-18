/**
 * @name name.tsx
 * @description inputタグのコンポーネント - お名前 - 漢字
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function NameKan(props: {
    title: string,
    name: string,
    required?: boolean,
}) {
    const { title, name, required } = props;

    return (
        <dl className="form-input-box">
            <dt className="form-input-title">{title}<Required required={required} /></dt>
            <dd className="form-input-content">
                <span className="attention">※漢字でご記入ください</span>
                <label className="form-input-label">
                    <input type="text" name={"fst-" + name} placeholder="山田" required={required} />
                </label>
                <label className="form-input-label">
                    <input type="text" name={"lst-" + name} placeholder="太郎" required={required} />
                </label>
            </dd>
        </dl>
    );
}