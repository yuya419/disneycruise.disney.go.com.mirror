/**
 * @file drawerButton.tsx
 * @description ドロワーボタン
 */
"use client";
import "./styles/drawerButton.scss";

export default function DrawerButton() {
    return (
        <button type="button" className="drawerButton">
            <div className="drawerButton-inner">
                <span className="icon">
                    <svg className="i-menu"><use xlinkHref="#i-menu" /></svg>
                </span>
                <span className="text">
                    <span className="text-open" lang="en">MENU</span>
                    <span className="text-close" lang="en">CLOSE</span>
                </span>
            </div>
        </button>
    )
}