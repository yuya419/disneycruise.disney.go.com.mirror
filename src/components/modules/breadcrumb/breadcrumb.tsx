/**
 * @name breadcrumb.tsx
 * @description パンくずリスト
 */
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./styles/breadcrumb.scss";

type BreadcrumbItem = {
    label: string;
    href: string;
}

type BreadcrumbProps = {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    const pathname = usePathname();

    return (
        <nav className="m-breadcrumb">
            <ol>
                <li>
                    <Link href="/" className="uline"><span className="label line">TOP</span></Link>
                </li>
                {
                    items.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={index}>
                                {isActive ? (
                                    <span className="label">{item.label}</span>
                                ) : (
                                    <Link href={item.href} className="uline"><span className="label line">{item.label}</span></Link>
                                )}
                            </li>
                        );
                    })
                }
            </ol>
        </nav>
    );
}
