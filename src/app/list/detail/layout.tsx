/**
 * @name layout.tsx
 * @description コース詳細のレイアウト
 */
import type { Metadata } from "next";
import metaArray from "@/libs/meta";
import Page from "./page";

export const metadata: Metadata = metaArray["detail"];

export default function Layout() {
    return (
        <>
            <Page />
        </>
    )
}