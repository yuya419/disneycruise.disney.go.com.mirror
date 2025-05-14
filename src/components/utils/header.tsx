/**
 * @name header.tsx
 * @description 共通ヘッダー
 */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo_s } from "@/libs/symbol";
import { useRefContext } from "@/hooks/useRefContext";
import "./styles/header.scss";

export default function Header() {
    const { header } = useRefContext() as {
        header: React.RefObject<HTMLElement>;
    };

    // パス
    const path = usePathname();
    const Tag = path === "/" ? "h1" : "p";
    
    return (
        <header className="header" ref={header}>
            <Tag className="h-logo">
                <Link href="/">
                    <Logo_s />
                    <span className="screen-reader-text">サイトタイトル</span>
                </Link>
            </Tag>
        </header>
    )
}