/**
 * @name name.tsx
 * @description inputタグのコンポーネント - お名前（ローマ字）
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function NameEn(props: {
    title: string,
    name: string,
    required?: boolean,
}) {
    const { title, name, required } = props;

    return (
        <dl className="form-input-box">
            <dt className="form-input-title">{title}<Required required={required} /></dt>
            <dd className="form-input-content">
                <span className="attention">※パスポートと同じ表記で記入ください</span>
                <label className="form-input-label">
                    <input type="text" name={"fst-" + name} placeholder="姓（ローマ字）" required={required} />
                </label>
                <label className="form-input-label">
                    <input type="text" name={"lst-" + name} placeholder="名（ローマ字）" required={required} />
                </label>
            </dd>
        </dl>
    );
}