/**
 * @name birthDate.tsx
 * @description inputタグのコンポーネント - 生年月日
 */
"use client";
import { useState, forwardRef } from "react";
import Required from "./required";
import DatePicker from 'react-datepicker';
import { ja } from "date-fns/locale";
import 'react-datepicker/dist/react-datepicker.css';
import "./styles/input.scss";
import "@/components/modules/panel/styles/datepicker.scss";

// 🔽 カスタムinput（readOnlyにする）
const ReadOnlyInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    (props, ref) => (
        <input
            type="text"
            {...props}
            ref={ref}
            readOnly
            className="form-input-input" // ← inputの見た目は既存のクラスで統一
            style={{ cursor: "pointer" }}
        />
    )
);

ReadOnlyInput.displayName = "ReadOnlyInput";

export default function BirthDate(props: {
    title: string,
    name: string,
    required?: boolean,
}) {
    const { title, name, required } = props;
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // 選択した日付を管理

    return (
        <dl className="form-input-box">
            <dt className="form-input-title">
                {title}
                <Required required={required} />
            </dt>
            <dd className="form-input-content">
                <label className="form-input-label">
                    <DatePicker
                        locale={ja}
                        selected={selectedDate}
                        onChange={(date: Date | null) => setSelectedDate(date)}
                        dateFormat="yyyy/MM/dd"
                        name={name}
                        customInput={<ReadOnlyInput />} // ← ここで差し替え！
                    />
                    <span className="calendar">
                        <svg className="i-calendar">
                            <use href="#i-calendar"></use>
                        </svg>
                    </span>
                </label>
            </dd>
        </dl>
    );
}