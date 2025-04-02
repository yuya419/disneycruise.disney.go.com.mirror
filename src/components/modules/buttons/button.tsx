/**
 * @name Button
 * @description ボタン
 */
import Link from "next/link";
import { arrow } from "@/components/modules/icons/icon";
import "./styles/button.scss";

const Button = (props: {
    type: "primary" | "secondary" | "tertiary", // blue | white | gold
    label?: "View More" | string,
    lang?: "en" | "ja",
    link: string,
    blank?: boolean,
    align?: "left" | "center" | "right",
}) => {

    return (
        <div className="button" data-align={props.align}>
            <Link href={props.link} className="button-el" target={props.blank ? "_blank" : "_self"} data-type={props.type}>
                <span className="label" lang={props.lang}>{props.label}</span>
                {arrow({
                    size: "s",
                    bg: props.type === "primary" ? "white" : (props.type === "secondary" ? "blue" : "gold"),
                    color: props.type === "primary" ? "blue" : (props.type === "secondary" ? "white" : "white"),
                })}
            </Link>
        </div>
    )
}

export default Button;