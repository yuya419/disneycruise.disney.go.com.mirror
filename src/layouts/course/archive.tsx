/**
 * @name archive.tsx
 * @description コース一覧
 */
"use client";
import Image from "next/image";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import Title from "@/layouts/title/title";
import BookingCalendar from "@/components/modules/calendar/calendar";
import "./styles/archive.scss";

export default function Archive() {
  const breadcrumbItems = [{ label: "コース一覧", href: "/list/" }];

  const course = {
    title: "ディズニーアドベンチャー",
    eyecatch: "/ships/adventure/common/dummy/course-list-thumbnail.jpg",
  };

  return (
    <div className="arc-course">
      <Breadcrumb items={breadcrumbItems} />
      <Title type="onm" title="コース" en="Cource" />
      <section className="arc-course-post">
        <div className="container">
          <div className="arc-course-post__head">
            <div className="eyecatch">
              <Image
                src={course.eyecatch}
                alt={course.title + "のアイキャッチ"}
                width={1060}
                height={570}
                priority
              />
            </div>
            <div className="title">
              <h2>カレンダーから探す</h2>
            </div>
          </div>
          <div className="arc-course-post__content">
            <div className="course-calendar">
              <div className="calendar">
                <BookingCalendar onDateClick={() => { }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
