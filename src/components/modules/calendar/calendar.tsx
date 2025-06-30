/**
 * @name calendar.tsx
 * @description カレンダーコンポーネント
 */
"use client";
import { useState, useRef, useEffect } from "react";
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

  // ダミーデータ
  const dummyData: Record<
    number,
    Record<number, { date: string; avail: boolean; stay: "" | 3 | 4 | 5; price: string }[]>
  > = {
    [2025 as number]: {
      6: [
        { date: "2025-06-01", avail: true, stay: 3, price: "$1,900〜" },
        { date: "2025-06-02", avail: false, stay: "", price: "" },
        { date: "2025-06-03", avail: true, stay: 5, price: "$1,900〜" },
        { date: "2025-06-04", avail: true, stay: 3, price: "$1,900〜" },
        { date: "2025-06-05", avail: false, stay: "", price: "" },
        { date: "2025-06-06", avail: true, stay: 5, price: "$1,900〜" },
        { date: "2025-06-07", avail: false, stay: "", price: "" },
        { date: "2025-06-08", avail: true, stay: 4, price: "$1,900〜" },
        { date: "2025-06-09", avail: true, stay: 5, price: "$1,900〜" },
        { date: "2025-06-10", avail: true, stay: 3, price: "$1,900〜" },
        { date: "2025-06-11", avail: false, stay: "", price: "" },
        { date: "2025-06-12", avail: true, stay: 5, price: "$1,900〜" },
        { date: "2025-06-13", avail: true, stay: 3, price: "$1,900〜" },
        { date: "2025-06-14", avail: true, stay: 4, price: "$1,900〜" },
        { date: "2025-06-15", avail: true, stay: 5, price: "$1,900〜" },
        { date: "2025-06-16", avail: true, stay: 3, price: "$1,900〜" },
        { date: "2025-06-17", avail: true, stay: 4, price: "$1,900〜" },
        { date: "2025-06-18", avail: true, stay: 5, price: "$1,900〜" },
        { date: "2025-06-19", avail: true, stay: 3, price: "$1,900〜" },
        { date: "2025-06-20", avail: true, stay: 4, price: "$1,900〜" },
        { date: "2025-06-21", avail: false, stay: "", price: "" },
        { date: "2025-06-22", avail: true, stay: 3, price: "$1,900〜" },
        { date: "2025-06-23", avail: true, stay: 4, price: "$1,900〜" },
        { date: "2025-06-24", avail: true, stay: 5, price: "$1,900〜" },
        { date: "2025-06-25", avail: true, stay: 3, price: "$1,900〜" },
        { date: "2025-06-26", avail: true, stay: 4, price: "$1,900〜" },
        { date: "2025-06-27", avail: true, stay: 5, price: "$1,900〜" },
        { date: "2025-06-28", avail: true, stay: 3, price: "$1,900〜" },
        { date: "2025-06-29", avail: true, stay: 4, price: "$1,900〜" },
        { date: "2025-06-30", avail: true, stay: 5, price: "$1,900〜" },
      ],
      7: [
        { date: "2025-07-01", avail: true, stay: 4, price: "$2,100〜" },
        { date: "2025-07-02", avail: true, stay: 5, price: "$2,200〜" },
        { date: "2025-07-03", avail: false, stay: "", price: "" },
        { date: "2025-07-04", avail: true, stay: 3, price: "$2,000〜" },
        { date: "2025-07-05", avail: true, stay: 4, price: "$2,100〜" },
        { date: "2025-07-06", avail: false, stay: "", price: "" },
        { date: "2025-07-07", avail: true, stay: 5, price: "$2,200〜" },
        { date: "2025-07-08", avail: true, stay: 3, price: "$2,000〜" },
        { date: "2025-07-09", avail: true, stay: 4, price: "$2,100〜" },
        { date: "2025-07-10", avail: true, stay: 5, price: "$2,200〜" },
        { date: "2025-07-11", avail: false, stay: "", price: "" },
        { date: "2025-07-12", avail: true, stay: 3, price: "$2,000〜" },
        { date: "2025-07-13", avail: true, stay: 4, price: "$2,100〜" },
        { date: "2025-07-14", avail: true, stay: 5, price: "$2,200〜" },
        { date: "2025-07-15", avail: true, stay: 3, price: "$2,000〜" },
        { date: "2025-07-16", avail: true, stay: 4, price: "$2,100〜" },
        { date: "2025-07-17", avail: false, stay: "", price: "" },
        { date: "2025-07-18", avail: true, stay: 5, price: "$2,200〜" },
        { date: "2025-07-19", avail: true, stay: 3, price: "$2,000〜" },
        { date: "2025-07-20", avail: true, stay: 4, price: "$2,100〜" },
        { date: "2025-07-21", avail: true, stay: 5, price: "$2,200〜" },
        { date: "2025-07-22", avail: false, stay: "", price: "" },
        { date: "2025-07-23", avail: true, stay: 3, price: "$2,000〜" },
        { date: "2025-07-24", avail: true, stay: 4, price: "$2,100〜" },
        { date: "2025-07-25", avail: true, stay: 5, price: "$2,200〜" },
        { date: "2025-07-26", avail: true, stay: 3, price: "$2,000〜" },
        { date: "2025-07-27", avail: true, stay: 4, price: "$2,100〜" },
        { date: "2025-07-28", avail: false, stay: "", price: "" },
        { date: "2025-07-29", avail: true, stay: 5, price: "$2,200〜" },
        { date: "2025-07-30", avail: true, stay: 3, price: "$2,000〜" },
        { date: "2025-07-31", avail: true, stay: 4, price: "$2,100〜" },
      ],
      8: [
        { date: "2025-08-01", avail: true, stay: 5, price: "$2,300〜" },
        { date: "2025-08-02", avail: true, stay: 3, price: "$2,100〜" },
        { date: "2025-08-03", avail: true, stay: 4, price: "$2,200〜" },
        { date: "2025-08-04", avail: false, stay: "", price: "" },
        { date: "2025-08-05", avail: true, stay: 5, price: "$2,300〜" },
        { date: "2025-08-06", avail: true, stay: 3, price: "$2,100〜" },
        { date: "2025-08-07", avail: true, stay: 4, price: "$2,200〜" },
        { date: "2025-08-08", avail: true, stay: 5, price: "$2,300〜" },
        { date: "2025-08-09", avail: false, stay: "", price: "" },
        { date: "2025-08-10", avail: true, stay: 3, price: "$2,100〜" },
        { date: "2025-08-11", avail: true, stay: 4, price: "$2,200〜" },
        { date: "2025-08-12", avail: true, stay: 5, price: "$2,300〜" },
        { date: "2025-08-13", avail: true, stay: 3, price: "$2,100〜" },
        { date: "2025-08-14", avail: false, stay: "", price: "" },
        { date: "2025-08-15", avail: true, stay: 4, price: "$2,200〜" },
        { date: "2025-08-16", avail: true, stay: 5, price: "$2,300〜" },
        { date: "2025-08-17", avail: true, stay: 3, price: "$2,100〜" },
        { date: "2025-08-18", avail: true, stay: 4, price: "$2,200〜" },
        { date: "2025-08-19", avail: true, stay: 5, price: "$2,300〜" },
        { date: "2025-08-20", avail: false, stay: "", price: "" },
        { date: "2025-08-21", avail: true, stay: 3, price: "$2,100〜" },
        { date: "2025-08-22", avail: true, stay: 4, price: "$2,200〜" },
        { date: "2025-08-23", avail: true, stay: 5, price: "$2,300〜" },
        { date: "2025-08-24", avail: true, stay: 3, price: "$2,100〜" },
        { date: "2025-08-25", avail: false, stay: "", price: "" },
        { date: "2025-08-26", avail: true, stay: 4, price: "$2,200〜" },
        { date: "2025-08-27", avail: true, stay: 5, price: "$2,300〜" },
        { date: "2025-08-28", avail: true, stay: 3, price: "$2,100〜" },
        { date: "2025-08-29", avail: true, stay: 4, price: "$2,200〜" },
        { date: "2025-08-30", avail: true, stay: 5, price: "$2,300〜" },
        { date: "2025-08-31", avail: true, stay: 3, price: "$2,100〜" },
      ],
      9: [
        { date: "2025-09-01", avail: true, stay: 4, price: "$2,400〜" },
      ]
    },
  };

  const [year, setYear] = useState(now.getFullYear());

  // 初期月をdummyDataに基づいて設定
  const getInitialMonth = () => {
    const availableMonths = Object.keys(dummyData[now.getFullYear()] || {})
      .map((monthKey) => new Date(now.getFullYear(), parseInt(monthKey) - 1, 1))
      .sort((a, b) => a.getTime() - b.getTime());

    // 現在月がdummyDataに存在する場合は現在月、そうでなければ最初の利用可能月
    const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const hasCurrentMonth = availableMonths.some(month =>
      month.getFullYear() === currentMonth.getFullYear() &&
      month.getMonth() === currentMonth.getMonth()
    );

    return hasCurrentMonth ? currentMonth : (availableMonths[0] || currentMonth);
  };

  const [month, setMonth] = useState(getInitialMonth());

  // 取得する月の範囲を決定（dummyDataに登録されている月のみ）
  const availableMonths = Object.keys(dummyData[year] || {})
    .map((monthKey) => new Date(year, parseInt(monthKey) - 1, 1))
    .sort((a, b) => a.getTime() - b.getTime());

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
              // 新しい年の最初の利用可能月を設定
              const newYearAvailableMonths = Object.keys(dummyData[newYear] || {})
                .map((monthKey) => new Date(newYear, parseInt(monthKey) - 1, 1))
                .sort((a, b) => a.getTime() - b.getTime());
              if (newYearAvailableMonths.length > 0) {
                setMonth(newYearAvailableMonths[0]);
              }
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
    const trackRef = useRef<HTMLDivElement>(null);

    // 初期表示時のみ isActive を中央に
    useEffect(() => {
      const activeBtn = trackRef.current?.querySelector('.isActive');
      if (activeBtn && activeBtn instanceof HTMLElement) {
        activeBtn.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // 初回のみ

    const handleMonthClick = (m: Date) => {
      setMonth(m);
      // 選択時はスムーズに中央へ
      setTimeout(() => {
        const activeBtn = trackRef.current?.querySelector('.isActive');
        if (activeBtn && activeBtn instanceof HTMLElement) {
          activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }, 0);
    };

    return (
      <div className="parts__month-selector" ref={trackRef}>
        {Object.keys(dummyData[year] || {}).map((monthKey) => {
          const m = new Date(year, parseInt(monthKey) - 1, 1);
          return (
            <button
              key={m.toISOString()}
              onClick={() => handleMonthClick(m)}
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
          disabled={previousMonth < availableMonths[0]}
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
          disabled={nextMonth > availableMonths[availableMonths.length - 1]}
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
      const stay = dayData?.stay;
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
          className={[
            "rdp-day",
            today && "today",
            !avail && "avail",
            pastDate && "past",
            isSaturday && "isBlue",
            (isSunday || isHoliday) && "isRed",
            stay && `is-stay-${stay}`,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <button
            type="button"
            className="day-button"
            onClick={() => dayData?.avail && onDateClick()}
            disabled={!dayData?.avail}
          >
            <span className="day">{format(day, "d")}</span>
            <span className="avail" aria-label={avail ? "空きあり" : "空きなし"}>
              <svg className="i-avail">
                <use xlinkHref={avail ? "#i-circle" : "#i-cross"} />
              </svg>
            </span>
            <span className="meta">
              {stay && <span className="stay">{stay}泊</span>}
              {price && <span className="price">{price}</span>}
            </span>
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
          startMonth={availableMonths[0]}
          endMonth={availableMonths[availableMonths.length - 1]}
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
