/**
 * @name requestButton.tsx
 * @description 「ご予約はこちら」ボタン
 */
import Link from "next/link";
import "./styles/requestButton.scss";

export default function RequestButton() {
    return (
        <div className="requestButton">
            <Link href="/list/">
                <span className="label">ご予約<span>はこちら</span></span>
                <span className="divider"></span>
                <span className="icon">
                    <svg className="i-calendar">
                        <use xlinkHref="#i-calendar" />
                    </svg>
                </span>
            </Link>
        </div>
    )
}