/**
 * @name required.tsx
 * @description inputタグのコンポーネント - 必須タグ
 */
"use client";
import "./styles/input.scss";

export default function Required(props: {
    required?: boolean,
}) {
    const { required } = props;
    return (
        required && <span className="form-input-required">必須</span>
    );
}