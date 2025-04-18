/**
 * @name Button
 * @description ボタン
 */
import Link from "next/link";
import { arrow } from "@/components/modules/icons/icon";
import "./styles/button.scss";

const Button = (props: {
    type: "primary" | "secondary" | "tertiary" | "quaternary", // blue | white01 | gold | gray
    label?: "View More" | string,
    lang?: "en" | "ja",
    link: string,
    blank?: boolean,
    align?: "left" | "center" | "right",
    reverse?: boolean,
}) => {

    return (
        <div className="button" data-align={props.align} data-reverse={props.reverse}>
            <Link href={props.link} className="button-el" target={props.blank ? "_blank" : "_self"} data-type={props.type}>
                <span className="label" lang={props.lang}>{props.label}</span>
                {arrow({
                    bg: props.type === "primary" ? "white" : (props.type === "secondary" ? "blue" : (props.type === "tertiary" ? "gold" : "gray")),
                    color: props.type === "primary" ? "blue" : (props.type === "secondary" ? "white" : (props.type === "tertiary" ? "white" : "white")),
                })}
            </Link>
        </div>
    )
}

export default Button;