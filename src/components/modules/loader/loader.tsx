/**
 * @name loader.tsx
 * @description 画面遷移時のローディングアニメーション
 */
"use client";

import { useRefContext } from "@/hooks/useRefContext";
import "./styles/loader.scss";

export function Loader() {

    const { loader } = useRefContext() as {
        loader: React.RefObject<HTMLDivElement>;
    };

    return (
        <div className="loader" ref={loader}></div>
    )
}