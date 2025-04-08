/**
 * @name layout.tsx
 * @description コース一覧のレイアウト
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import Page from "./page";

export const metadata: Metadata = metaArray["list"];

export default function Layout() {
    return (
        <>
            <Page />
        </>
    )
}