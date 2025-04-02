/**
 * @file pickup.tsx
 * @description お知らせ - ピックアップ
 */
'use client';
import Link from "next/link";
import  "./styles/pickup.scss";

const Pickup = (props: {
    className?: string,
    hlLevel?: "h2" | "h3",
}) => {
    const { className } = props;
    const pickupClassName = className ? className + "__pickup" : "pickup";

    const Tag = props.hlLevel === "h2" ? "h2" : "h3";

    return (
        <div className={pickupClassName}>
            <article className={pickupClassName + "-item"}>
                <Link href="/news" className={pickupClassName + "-link"}>
                    <div className="meta">
                        <span className="cat" lang="en">News</span>
                        <Tag className="title">ダミーサイトをリニューアルしました。詳細はこちらからご覧ください。</Tag>
                    </div>
                    <div className="meta">
                        <span className="cat" lang="en">News</span>
                        <Tag className="title">ダミーサイトをリニューアルしました。詳細はこちらからご覧ください。</Tag>
                    </div>
                </Link>
            </article>
        </div>
    );
}

export default Pickup;