/**
 * @name header.tsx
 * @description 共通ヘッダー
 */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo_s } from "@/libs/symbol";
import "./styles/header.scss";

export default function Header() {
    // パス
    const path = usePathname();
    const Tag = path === "/" ? "h1" : "p";

    return (
        <header className="header">
            <Tag className="h-logo">
                <Link href="/">
                    <Logo_s />
                    <span className="screen-reader-text">サイトタイトル</span>
                </Link>
            </Tag>
        </header>
    )
}