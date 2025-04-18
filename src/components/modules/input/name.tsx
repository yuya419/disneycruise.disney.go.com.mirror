/**
 * @name name.tsx
 * @description inputタグのコンポーネント - お名前
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function Name(props: {
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
                    <input type="text" name={"fst-" + name} placeholder="姓" required={required} />
                </label>
                <label className="form-input-label">
                    <input type="text" name={"lst-" + name} placeholder="名" required={required} />
                </label>
            </dd>
        </dl>
    );
}