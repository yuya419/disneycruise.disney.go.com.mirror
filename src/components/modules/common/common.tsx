/**
 * @flile common.tsx
 * @description 共通コンポーネント
 */
import "./styles/common.scss";

const Divider = (props: { dir: "vert" | "hrzn", w: string, h: string, color: "white" | "blue" }) => {

    let style = {
        width: props.w + "px",
        height: props.h + "px",
        "--divider-color": props.color === "white" ? "#fff" : "#002D74",
    }

    return (
        <span className={{ vert: "divider is-vert", hrzn: "divider is-hrzn" }[props.dir]} style={style}></span>
    )
}

export {
    Divider
}