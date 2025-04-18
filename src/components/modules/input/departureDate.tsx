/**
 * @name departureDate.tsx
 * @description inputタグのコンポーネント - 出航日
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function DepartureDate(props: {
    title: string,
    name: string,
    required?: boolean,
    array?: string[],
}) {
    const { title, name, required, array } = props;

    return (
        <dl className="form-input-box">
            <dt className="form-input-title">{title}<Required required={required} /></dt>
            <dd className="form-input-content">
                <label className="form-input-label">
                    <select name={name} required={required}>
                        <option value="" hidden>出航日を選択してください</option>
                        {array?.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                    <span className="tri"></span>
                </label>
            </dd>
        </dl>
    );
}