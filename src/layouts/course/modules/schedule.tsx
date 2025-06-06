/**
 * @name Schedule.tsx
 * @description スケジュールの表示コンポーネント
 */
"use client";
import Image from "next/image";
import "./styles/schedule.scss";

export default function Schedule({ scheduleArray }: { scheduleArray: any[] }) {
  return (
    <ol className="m-schedule">
      {scheduleArray.map((location, index) => (
        <li key={index} className="m-schedule-item">
          <div className="location-title">
            <span className="step">{index + 1}</span>
            <span className="title">{location.title}</span>
          </div>
          <div className="location-content">
            <div className="image">
              <Image
                src={location.image.src}
                width={location.image.w}
                height={location.image.h}
                alt={location.title}
              />
            </div>
            <div className="point">
              <div className="point-title">
                <span className="icon">
                  <svg className="i-check">
                    <use href="#i-check"></use>
                  </svg>
                </span>
                <span className="title">見どころとアクティビティ</span>
              </div>
              <ul className="point-list">
                {location.point?.map((point: string, index: number) => (
                  <li key={index} className="point-item">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
