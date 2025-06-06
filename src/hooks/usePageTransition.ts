/**
 * @name usePageTransition.ts
 * @description ページ遷移時のアニメーションを管理するカスタムフック
 */
"use client";

import { useRouter } from "next/navigation";
import { useRefContext } from "@/hooks/useRefContext";

export function usePageTransition() {
    const router = useRouter();

    const { loader } = useRefContext() as {
        loader: React.RefObject<HTMLDivElement>;
    };

    const startTransition = (to: string, callback?: () => void) => {
        loader.current?.classList.add("isIn");

        setTimeout(() => {
            if (callback) callback();
            router.push(to);
        }, 1000);
    };

    return { startTransition };
}

type LinkEvent = React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>;

export function useHandleLinkClick() {
    const { startTransition } = usePageTransition();

    return (e: LinkEvent, to: string) => {
        // TouchEventの場合はボタンや修飾キーは無視
        if ("button" in e && (
            e.ctrlKey ||
            e.shiftKey ||
            e.metaKey ||
            e.button === 1
        )) {
            return;
        }

        const target = (e.currentTarget as HTMLAnchorElement).target;
        const href = (e.currentTarget as HTMLAnchorElement).href;
        const url = new URL(href);
        const currentUrl = new URL(window.location.href);

        // target="_blank"は通常遷移
        if (target === "_blank") {
            return;
        }

        // プロトコル・ホスト・パスが同じなら（パラメータやハッシュが違っても）return
        if (
            url.protocol === currentUrl.protocol &&
            url.host === currentUrl.host &&
            url.pathname === currentUrl.pathname
        ) {
            return;
        }

        e.preventDefault();
        startTransition(to);
    };
}