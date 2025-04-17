/**
 * @name momentumScroll.tsx
 * @description lenisを採用した慣性スクロール
 */
'use client'
import { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

const MomentumScrollContext = createContext<Lenis | null>(null)

export const MomentumScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.15,
            duration: 0.01,
        })

        lenisRef.current = lenis

        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <MomentumScrollContext.Provider value={lenisRef.current}>
            {children}
        </MomentumScrollContext.Provider>
    )
}

export const useLenis = () => useContext(MomentumScrollContext)