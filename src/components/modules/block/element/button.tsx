/**
 * @name button.tsx
 * @description 記事用 - ボタンブロック
 */
import Link from "next/link";

export function Button(props: {
    children: React.ReactNode;
    href: string;
    target?: boolean;
}) {
    const { children, href, target } = props;
    const blank = target ? "_blank" : undefined;
    const rel = target ? "noopener noreferrer" : undefined;

    return (
        <div className="m-b-btn">
            <Link className="m-b-btn-el" href={href} target={blank} rel={rel}>
                <span className="label">{children}</span>
            </Link>
        </div>
    );
}