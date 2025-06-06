/**
 * @name datepicker.tsx
 * @description 日付選択コンポーネント
 * @param selectedDate - 選択された日付と時刻
 * @param onChange - 日付と時刻が変更されたときのコールバック関数
 */
"use client";
import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { ja } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/datepicker.scss";

const ReadOnlyInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input type="text" {...props} ref={ref} readOnly className="input" />
));

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <DatePicker
      locale={ja}
      selected={selectedDate}
      onChange={(date: Date | null) => setSelectedDate(date)}
      dateFormat="yyyy/MM/dd"
      name={"date"}
      customInput={<ReadOnlyInput />}
    />
  );
};

export default Datepicker;
