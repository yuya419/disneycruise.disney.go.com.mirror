/**
 * @name calendar.tsx
 * @description カレンダーコンポーネント
 */
"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { isHoliday } from "@holiday-jp/holiday_jp";
import "react-day-picker/dist/style.css";
import "./styles/calendar.scss";

export default function BookingCalendar({
  onDateClick,
}: {
  onDateClick: () => void;
}) {
  const now = new Date();

  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(
    new Date(now.getFullYear(), now.getMonth(), 1),
  );

  // ダミーデータ
  const dummyData: Record<
    number,
    Record<number, { date: string; avail: boolean; price: string }[]>
  > = {
    [2025 as number]: {
      4: [
        { date: "2025-04-01", avail: true, price: "109,800" },
        { date: "2025-04-02", avail: false, price: "109,800" },
        { date: "2025-04-03", avail: true, price: "109,800" },
        { date: "2025-04-04", avail: true, price: "109,800" },
        { date: "2025-04-05", avail: false, price: "109,800" },
        { date: "2025-04-06", avail: true, price: "109,800" },
        { date: "2025-04-07", avail: false, price: "109,800" },
        { date: "2025-04-08", avail: true, price: "109,800" },
        { date: "2025-04-09", avail: true, price: "109,800" },
        { date: "2025-04-10", avail: true, price: "109,800" },
        { date: "2025-04-11", avail: true, price: "109,800" },
        { date: "2025-04-12", avail: true, price: "109,800" },
        { date: "2025-04-13", avail: true, price: "109,800" },
        { date: "2025-04-14", avail: true, price: "109,800" },
        { date: "2025-04-15", avail: true, price: "109,800" },
        { date: "2025-04-16", avail: true, price: "109,800" },
        { date: "2025-04-17", avail: true, price: "109,800" },
        { date: "2025-04-18", avail: true, price: "109,800" },
        { date: "2025-04-19", avail: true, price: "109,800" },
        { date: "2025-04-20", avail: true, price: "109,800" },
        { date: "2025-04-21", avail: false, price: "109,800" },
        { date: "2025-04-22", avail: true, price: "109,800" },
        { date: "2025-04-23", avail: true, price: "109,800" },
        { date: "2025-04-24", avail: true, price: "109,800" },
        { date: "2025-04-25", avail: true, price: "109,800" },
        { date: "2025-04-26", avail: true, price: "109,800" },
        { date: "2025-04-27", avail: true, price: "109,800" },
        { date: "2025-04-28", avail: true, price: "109,800" },
        { date: "2025-04-29", avail: true, price: "109,800" },
        { date: "2025-04-30", avail: false, price: "109,800" },
      ],
      5: [
        { date: "2025-05-01", avail: true, price: "109,800" },
        { date: "2025-05-02", avail: false, price: "109,800" },
        { date: "2025-05-03", avail: true, price: "109,800" },
        { date: "2025-05-04", avail: true, price: "109,800" },
        { date: "2025-05-05", avail: false, price: "109,800" },
        { date: "2025-05-06", avail: true, price: "109,800" },
        { date: "2025-05-07", avail: false, price: "109,800" },
        { date: "2025-05-08", avail: true, price: "109,800" },
        { date: "2025-05-09", avail: true, price: "109,800" },
        { date: "2025-05-10", avail: true, price: "109,800" },
        { date: "2025-05-11", avail: true, price: "109,800" },
        { date: "2025-05-12", avail: true, price: "109,800" },
        { date: "2025-05-13", avail: true, price: "109,800" },
        { date: "2025-05-14", avail: true, price: "109,800" },
        { date: "2025-05-15", avail: true, price: "109,800" },
        { date: "2025-05-16", avail: true, price: "109,800" },
        { date: "2025-05-17", avail: true, price: "109,800" },
        { date: "2025-05-18", avail: true, price: "109,800" },
        { date: "2025-05-19", avail: true, price: "109,800" },
        { date: "2025-05-20", avail: true, price: "109,800" },
        { date: "2025-05-21", avail: false, price: "109,800" },
        { date: "2025-05-22", avail: true, price: "109,800" },
        { date: "2025-05-23", avail: true, price: "109,800" },
        { date: "2025-05-24", avail: true, price: "109,800" },
        { date: "2025-05-25", avail: true, price: "109,800" },
        { date: "2025-05-26", avail: true, price: "109,800" },
        { date: "2025-05-27", avail: true, price: "109,800" },
        { date: "2025-05-28", avail: true, price: "109,800" },
        { date: "2025-05-29", avail: true, price: "109,800" },
        { date: "2025-05-30", avail: true, price: "109,800" },
      ],
      6: [
        { date: "2025-06-10", avail: true, price: "109,800" },
        { date: "2025-06-11", avail: false, price: "109,800" },
        { date: "2025-06-12", avail: true, price: "109,800" },
      ],
    },
  };

  // 取得する月の範囲を決定
  const futureMonths = Object.keys(dummyData[year] || {})
    .map((monthKey) => new Date(year, parseInt(monthKey) - 1, 1))
    .filter((date) => date >= now);

  // 年のセレクトボックス
  const YearSelcter = () => {
    return (
      <div className="parts__year-selector">
        <div className="year-select">
          <select
            value={year}
            onChange={(e) => {
              const newYear = parseInt(e.target.value);
              setYear(newYear);
              setMonth(new Date(newYear, month.getMonth(), 1));
            }}
            className="year-select"
          >
            {Object.keys(dummyData).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <span className="icon">
            <svg className="i-arw-t-tri">
              <use xlinkHref="#i-arw-t-tri" />
            </svg>
          </span>
        </div>
      </div>
    );
  };

  // 月のタブセレクトボックス
  const MonthSelector = () => {
    return (
      <div className="parts__month-selector">
        {Object.keys(dummyData[year] || {}).map((monthKey) => {
          const m = new Date(year, parseInt(monthKey) - 1, 1);
          return (
            <button
              key={m.toISOString()}
              onClick={() => setMonth(m)}
              className={`month-button ${m.getMonth() === month.getMonth() ? "isActive" : ""}`}
            >
              {m.getMonth() + 1}月
            </button>
          );
        })}
      </div>
    );
  };

  // 前後の月を移動するボタン
  const CustomNavigation = ({
    month,
    setMonth,
  }: {
    month: Date;
    setMonth: (date: Date) => void;
  }) => {
    const previousMonth = new Date(
      month.getFullYear(),
      month.getMonth() - 1,
      1,
    );
    const nextMonth = new Date(month.getFullYear(), month.getMonth() + 1, 1);
    const now = new Date();

    return (
      <div className="parts__navigation">
        <button
          type="button"
          onClick={() => setMonth(previousMonth)}
          className="nav-button prev"
          aria-label="前の月"
          disabled={
            previousMonth < new Date(now.getFullYear(), now.getMonth(), 1)
          }
        >
          <svg className="i-arw-r" style={{ transform: "rotate(180deg)" }}>
            <use xlinkHref="#i-arw-r" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setMonth(nextMonth)}
          className="nav-button next"
          aria-label="次の月"
          disabled={nextMonth > futureMonths[futureMonths.length - 1]}
        >
          <svg className="i-arw-r">
            <use xlinkHref="#i-arw-r" />
          </svg>
        </button>
      </div>
    );
  };

  // カレンダー本体
  const Calendar = () => {
    // 日付のフォーマット
    const DayFormatter = (day: any) => {
      const dateString = format(day, "yyyy-MM-dd");
      const yearData = dummyData[year] || {};
      const monthData = yearData[month.getMonth() + 1] || [];
      const dayData = monthData.find((item) => item.date === dateString);
      const avail = dayData?.avail;
      const price = dayData?.price;
      const today = format(day, "yyyy-MM-dd") === format(now, "yyyy-MM-dd");
      const nowMonth = day.getMonth() !== month.getMonth();
      const pastDate = day < new Date(now.setHours(0, 0, 0, 0));

      // 土曜日、日曜日、日本の祝日を判定
      const isSaturday = day.getDay() === 6;
      const isSunday = day.getDay() === 0;
      const isHoliday = isJapaneseHoliday(day); // 日本の祝日判定関数を使用

      if (nowMonth) {
        return <td className="rdp-day hidden"></td>;
      }

      return (
        <td
          className={`rdp-day${today ? " today" : ""}${!avail ? " avail" : ""}${pastDate ? " past" : ""}${isSaturday ? " isBlue" : ""}${isSunday || isHoliday ? " isRed" : ""}`}
        >
          <button
            type="button"
            className={`day-button`}
            onClick={() => {
              if (dayData?.avail) {
                onDateClick();
              }
            }}
          >
            <span className="day">{format(day, "d")}</span>
            <span
              className="avail"
              aria-label={avail ? "空きあり" : "空きなし"}
            >
              <svg className="i-avail">
                <use xlinkHref={avail ? "#i-circle" : "#i-cross"} />
              </svg>
            </span>
            {price && <span className="price">{price}</span>}
          </button>
        </td>
      );
    };

    // 日本の祝日判定関数
    const isJapaneseHoliday = (date: Date): boolean => {
      return isHoliday(date);
    };

    return (
      <div className="parts__calendar">
        <DayPicker
          locale={ja}
          month={month}
          onMonthChange={setMonth}
          selected={month}
          startMonth={now}
          endMonth={futureMonths[futureMonths.length - 1]}
          components={{
            Day: ({ day }) => DayFormatter(day.date),
          }}
        />
      </div>
    );
  };

  return (
    <div className="m-calendar">
      <div className="m-calendar__parts">
        <YearSelcter />
        <MonthSelector />
        <CustomNavigation month={month} setMonth={setMonth} />
        <Calendar />
      </div>
    </div>
  );
}
