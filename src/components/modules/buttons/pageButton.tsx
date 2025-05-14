/**
 * @name pageButton.tsx
 * @description ページ内ボタン
 */
import { Link as Scroll } from 'react-scroll'
import { useHeaderHeight } from "@/hooks/useHead";
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
    let offset = useHeaderHeight();
    return (
        <div className="m-page-button" style={{ "--length": `${pageButton.column}` } as React.CSSProperties}>
            {
                Object.keys(pageButton.buttons).map((key) => {
                    const button = pageButton.buttons[key];
                    if (!button) return null; // 安全にスキップ
                    return (
                        <div className="page-button" key={key}>
                            <Scroll to={`${button.to}`} smooth={true} duration={500} offset={offset} className="page-button-el">
                                <span className="label">{button.label}</span>
                                <span className="icon">
                                    <svg className="i-arw-r">
                                        <use xlinkHref="#i-arw-r" />
                                    </svg>
                                </span>
                            </Scroll>
                        </div>
                    )
                })
            }
        </div>
    )
}