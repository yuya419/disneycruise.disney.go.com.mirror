/**
 * @name Button
 * @description ボタン
 */
"use client";
import Link from "next/link";
import { arrow } from "@/components/modules/icons/icon";
import { useHandleLinkClick } from "@/hooks/usePageTransition";
import "./styles/button.scss";

const Button = (props: {
  type: "primary" | "secondary" | "tertiary" | "quaternary"; // blue | white01 | gold | gray
  label?: "View More" | string;
  lang?: "en" | "ja";
  link: string;
  blank?: boolean;
  align?: "left" | "center" | "right";
  reverse?: boolean;
}) => {
  const handleLinkClick = useHandleLinkClick();
  return (
    <div
      className="button"
      data-align={props.align}
      data-reverse={props.reverse}
    >
      <Link
        href={props.link}
        className="button-el"
        target={props.blank ? "_blank" : "_self"}
        data-type={props.type}
        rel={props.blank ? "noopener noreferrer" : undefined}
        onClick={(e) => handleLinkClick(e, props.link)}
      >
        <span className="label" lang={props.lang}>
          {props.label}
        </span>
        {arrow({
          bg:
            props.type === "primary"
              ? "white"
              : props.type === "secondary"
                ? "blue"
                : props.type === "tertiary"
                  ? "gold"
                  : "gray",
          color:
            props.type === "primary"
              ? "blue"
              : props.type === "secondary"
                ? "white"
                : props.type === "tertiary"
                  ? "white"
                  : "white",
        })}
      </Link>
    </div>
  );
};

export default Button;
