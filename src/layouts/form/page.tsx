/**
 * @name page.tsx
 * @description フォームページ用レイアウト
 */
"use client";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import Title from "@/layouts/title/title";
import Reservation from "@/layouts/form/reservation";
import Delivery from "./delivery";
import { HasAsideContainer } from "@/layouts/container/container";
import {
  Book as BookInput,
  Inquiry as InquiryInput,
  Mailmagazine as MailMagazineInput,
} from "@/layouts/form/input/input";
import {
  Book as BookConfirm,
  Inquiry as InquiryConfirm,
  Mailmagazine as MailMagazineConfirm,
} from "@/layouts/form/confirm/confirm";
import {
  Book as BookComplete,
  Inquiry as InquiryComplete,
  Mailmagazine as MailMagazineComplete,
} from "@/layouts/form/complete/complete";
import Aside from "../aside/aside";
import "./styles/page.scss";

export function Page(props: {
  slug: string;
  title: {
    ja: string;
    en: string;
  };
  step?: "input" | "confirm" | "complete";
}) {
  const { slug, title, step } = props;
  const breadcrumbItems = [{ label: `${title.ja}`, href: `/${slug}/` }];

  return (
    <article className={`p-form p-${slug}`}>
      <Breadcrumb items={breadcrumbItems} />
      <Title type="onm" title={title.ja} en={title.en} />
      {slug === "book" && <Reservation step={step} />}
      {slug === "mailmagazine" && <Delivery step={step} />}
      <HasAsideContainer>
        <div className="l-main">
          {slug === "book" &&
            {
              input: <BookInput />,
              confirm: <BookConfirm />,
              complete: <BookComplete />,
            }[step || "input"]}
          {slug === "inquiry" &&
            {
              input: <InquiryInput />,
              confirm: <InquiryConfirm />,
              complete: <InquiryComplete />,
            }[step || "input"]}
          {slug === "mailmagazine" &&
            {
              input: <MailMagazineInput />,
              confirm: <MailMagazineConfirm />,
              complete: <MailMagazineComplete />,
            }[step || "input"]}
        </div>
        <Aside page={slug} step={step} />
      </HasAsideContainer>
    </article>
  );
}
