/**
 * @name breadcrumb.tsx
 * @description パンくずリスト
 */
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useHandleLinkClick } from "@/hooks/usePageTransition";
import "./styles/breadcrumb.scss";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname();

  const handleLinkClick = useHandleLinkClick();

  return (
    <nav className="m-breadcrumb">
      <ol>
        <li>
          <Link href="/" className="uline" onClick={(e) => handleLinkClick(e, "/")}>
            <span className="label line">TOP</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li key={index}>
              {isActive ? (
                <span className="label">{item.label}</span>
              ) : (
                <Link href={item.href} className="uline" onClick={(e) => handleLinkClick(e, item.href)}>
                  <span className="label line">{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
