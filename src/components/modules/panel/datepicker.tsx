
/**
 * @name datepicker.tsx
 * @description 日付選択コンポーネント
 * @param selectedDate - 選択された日付と時刻
 * @param onChange - 日付と時刻が変更されたときのコールバック関数
 */
"use client";
import DatePicker from 'react-datepicker';
import { ja } from "date-fns/locale";
import 'react-datepicker/dist/react-datepicker.css';
import "./styles/datepicker.scss";

type DatePickerProps = {
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
}

const Datepicker = ({ selectedDate, onChange }: DatePickerProps) => {
    return (
        <DatePicker
            locale={ja}
            selected={selectedDate}
            onChange={(date) => onChange(date)}
            dateFormat="yyyy/MM/dd"
            name='date'
            className='input'
        />
    );
};

export default Datepicker;