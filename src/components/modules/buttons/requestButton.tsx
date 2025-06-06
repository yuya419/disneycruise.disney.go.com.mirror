/**
 * @name requestButton.tsx
 * @description 「ご予約はこちら」ボタン
 */
"use client";
import Link from "next/link";
import { useHandleLinkClick } from "@/hooks/usePageTransition";
import "./styles/requestButton.scss";

export default function RequestButton() {
  const handleLinkClick = useHandleLinkClick();
  return (
    <div className="requestButton">
      <Link href="/list/" onClick={(e) => handleLinkClick(e, "/list/")}>
        <span className="label">
          ご予約<span>はこちら</span>
        </span>
        <span className="divider"></span>
        <span className="icon">
          <svg className="i-calendar">
            <use xlinkHref="#i-calendar" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
