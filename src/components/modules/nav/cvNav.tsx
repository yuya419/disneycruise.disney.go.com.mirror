/**
 * @name cvNav.tsx
 * @description コンバージョンナビゲーション
 */
"use client";
import Link from "next/link";
import { arrow } from "@/components/modules/icons/icon";
import "./styles/cvNav.scss";

export default function CvNav() {
  return (
    <div className="cvNav">
      <nav className="nav">
        <ul className="nav-menu">
          <li className="menu-item is-reservation">
            <Link href="/list/" className="menu-item-link">
              <span className="label">
                <span className="en" lang="en">
                  Reservation
                </span>
                <span className="jp">ご予約はこちら</span>
              </span>
              <span className="icon">
                <div className="divider"></div>
                <svg className="i-calendar">
                  <use xlinkHref="#i-calendar" />
                </svg>
              </span>
            </Link>
          </li>
          <li className="menu-item is-mail-magazine">
            <Link href="/mailmagazine/" className="menu-item-link">
              <span className="label">
                <span className="en" lang="en">
                  Mail Magazine
                </span>
                <span className="jp">メールマガジン登録</span>
              </span>
              {arrow({ bg: "white", color: "blue" })}
            </Link>
          </li>
          <li className="menu-item is-contact">
            <Link href="/inquiry/" className="menu-item-link">
              <span className="label">
                <span className="en" lang="en">
                  Contact
                </span>
                <span className="jp">お問い合わせ</span>
              </span>
              {arrow({ bg: "white", color: "blue" })}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
