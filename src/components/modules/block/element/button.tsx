/**
 * @name button.tsx
 * @description 記事用 - ボタンブロック
 */
"use client";
import Link from "next/link";
import { useHandleLinkClick } from "@/hooks/usePageTransition";

export function Button(props: {
  children: React.ReactNode;
  href: string;
  target?: boolean;
}) {
  const { children, href, target } = props;
  const blank = target ? "_blank" : undefined;
  const rel = target ? "noopener noreferrer" : undefined;

  const handleLinkClick = useHandleLinkClick();

  return (
    <div className="m-b-btn">
      <Link className="m-b-btn-el" href={href} target={blank} rel={rel} onClick={(e) => handleLinkClick(e, href)}>
        <span className="label">{children}</span>
      </Link>
    </div>
  );
}
