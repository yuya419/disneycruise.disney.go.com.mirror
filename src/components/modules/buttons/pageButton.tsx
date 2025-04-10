/**
 * @name pageButton.tsx
 * @description ページ内ボタン
 */
import Link from "next/link";
import "./styles/pageButton.scss";

type PageButtonProps = {
    column: number,
    buttons: {
        [key: string]: {
            label: string;
            to: string;
        },
    }
}

export default function PageButton({ pageButton }: { pageButton: PageButtonProps }) {
    return (
        <div className="m-page-button" style={{ "--length": `${pageButton.column}` } as React.CSSProperties}>
            {
                Object.keys(pageButton.buttons).map((key) => {
                    const button = pageButton.buttons[key];
                    if (!button) return null; // 安全にスキップ
                    return (
                        <div className="page-button" key={key}>
                            <Link href={`#${button.to}`} className="page-button-el">
                                <span className="label">{button.label}</span>
                                <span className="icon">
                                    <svg className="i-arw-r">
                                        <use xlinkHref="#i-arw-r" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}