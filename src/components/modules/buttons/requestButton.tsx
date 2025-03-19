/**
 * @file requestButton.tsx
 * @description 「ご予約はこちら」ボタン
 */
import Link from "next/link";
import { Divider } from "@/components/modules/common/common";
import "./styles/requestButton.scss";

export default function RequestButton() {
    return (
        <div className="requestButton">
            <Link href="/">
                <span className="label">ご予約<span>はこちら</span></span>
                <Divider dir="hrzn" w="18" h="2" color="blue"/>
                <span className="icon">
                    <svg className="i-calendar">
                        <use xlinkHref="#i-calendar" />
                    </svg>
                </span>
            </Link>
        </div>
    )
}