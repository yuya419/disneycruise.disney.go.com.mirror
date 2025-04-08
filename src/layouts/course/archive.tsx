/**
 * @name archive.tsx
 * @description 客室案内
 */
"use client";
import Title from "@/layouts/common/title";
import "./styles/archive.scss";

export default function Archive() {
    return (
        <div className="arc-course">
            <Title title="コース" en="Cource" slider={false} />
        </div>
    )
}