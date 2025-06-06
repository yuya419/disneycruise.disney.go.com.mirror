/**
 * @name Button
 * @description ボタン
 */
"use client";
import Link from "next/link";
import { arrow } from "@/components/modules/icons/icon";
import { useHandleLinkClick } from "@/hooks/usePageTransition";
import "./styles/largeButton.scss";

const LargeButton = (props: {
  label: string;
  enLabel: string;
  link: string;
  blank?: boolean;
}) => {
  const handleLinkClick = useHandleLinkClick();
  return (
    <div className="large-button">
      <Link
        href={props.link}
        className="large-button-el"
        target={props.blank ? "_blank" : "_self"}
        rel={props.blank ? "noopener noreferrer" : undefined}
        onClick={(e) => handleLinkClick(e, props.link)}
      >
        <span className="en-label" lang="en">
          {props.enLabel}
        </span>
        <span className="ja-label">
          <span className="divider"></span>
          <span className="label">{props.label}</span>
          {arrow({ bg: "blue", color: "white" })}
        </span>
      </Link>
    </div>
  );
};

export default LargeButton;
