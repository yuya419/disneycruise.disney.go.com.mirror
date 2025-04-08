/**
 * @name drawerButton.tsx
 * @description ドロワーボタン
 */
"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import "./styles/drawerButton.scss";

interface DrawerNavProps {
    isOpenDefault?: boolean;
}

export default function DrawerButton({ isOpenDefault }: DrawerNavProps) {
    const [isOpen, setIsOpen] = useState(isOpenDefault);
    const pathName = usePathname();

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const html = document.documentElement;
        if (isOpen) {
            html.dataset.state = "navOpen";
        } else {
            html.dataset.state = "";
        }

        return () => {
            html.dataset.state = "";
        }
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathName]);

    return (
        <button type="button" className="drawerButton" onClick={toggleDrawer} data-open={isOpen}>
            <div className="drawerButton-inner">
                <span className="icon">
                    <svg className="i-menu"><use xlinkHref="#i-menu" /></svg>
                </span>
                <span className="text" lang="en">MENU</span>
                <span className="close"></span>
            </div>
        </button>
    )
}