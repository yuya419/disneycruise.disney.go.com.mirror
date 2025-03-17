/**
 * @file layout.tsx
 * @description 7つのテーマエリアを表示するページのレイアウト
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import Page from "./page";

export const metadata: Metadata = metaArray["themed-areas"];

export default function Layout() {
    return (
        <>
            <Page />
        </>
    )
}