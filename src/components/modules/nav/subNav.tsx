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
            <Link
              href="https://test.mikicruise.com/assets/data/DCL_CruiseContract.pdf"
              target="_blank"
              className="menu-item-link uline-r"
            >
              <span className="line">約款</span>
              <svg className="i-target">
                <use href="#i-target"></use>
              </svg>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              href="https://www.mikitourist.co.jp/m7tjp500000002ej.html"
              target="_blank"
              className="menu-item-link uline-r"
            >
              <span className="line">
                プライバシーポリシー（㈱ミキ・ツーリスト）
              </span>
              <svg className="i-target">
                <use href="#i-target"></use>
              </svg>
            </Link>
          </li>
          <li className="menu-item">
            <Link
              href="https://privacy.thewaltdisneycompany.com/ja/"
              target="_blank"
              className="menu-item-link uline-r"
            >
              <span className="line">
                プライバシーポリシー（ディズニークルーズライン）
              </span>
              <svg className="i-target">
                <use href="#i-target"></use>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
