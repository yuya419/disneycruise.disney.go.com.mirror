/**
 * @name useRefContext.tsx
 * @description refを管理するためのコンテキスト
 */
"use client";
import { createContext, useContext, useRef } from "react";

type RefMap = {
    [key: string]: React.RefObject<HTMLElement | null>;
}

const RefContext = createContext<RefMap | null>(null);

export function RefProvider({ children }: { children: React.ReactNode }) {
    const refs: RefMap = {
        header: useRef<HTMLElement>(null),
        drawerButton: useRef<HTMLButtonElement>(null),
        hero: useRef<HTMLElement>(null),
        water: useRef<HTMLElement>(null),
        colorBlue: useRef<HTMLElement>(null),
        colorWhite: useRef<HTMLElement>(null),
        overlay: useRef<HTMLDivElement>(null),
    };

    return <RefContext.Provider value={refs}>{children}</RefContext.Provider>;
}

export function useRefContext() {
    const context = useContext(RefContext);
    if (!context) {
        throw new Error("useRefContext must be used within a RefProvider");
    }
    return context;
}