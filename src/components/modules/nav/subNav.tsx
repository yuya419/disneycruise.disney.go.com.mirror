/**
 * @name subNav.tsx
 * @description サブナビゲーション
 */
import Link from "next/link";
import "./styles/subNav.scss";

export default function SubNav() {
    return (
        <div className="subNav">
            <nav className="nav">
                <ul className="nav-menu">
                    <li className="menu-item">
                        <Link href="/" target="_blank" className="menu-item-link uline-r">
                            <span className="line">約款</span>
                            <svg className="i-target">
                                <use href="#i-target"></use>
                            </svg>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/" target="_blank" className="menu-item-link uline-r">
                            <span className="line">プライバシーポリシー</span>
                            <svg className="i-target">
                                <use href="#i-target"></use>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}