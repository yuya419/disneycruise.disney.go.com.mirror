/**
 * @name Icon
 * @description アイコン
 */
import "./styles/icon.scss";

/**
 * @name Arrow
 * @description 矢印アイコン
 */
const arrow = (props: {
    size: "s" | "m",
    bg: "blue" | "white" | "gold",
    color: "blue" | "white" | "gold",
}) => {
    return (
        <span className="arrow" data-size={props.size} data-bg={props.bg} data-color={props.color}>    
            <svg className="i-arw-r">
                <use xlinkHref="#i-arw-r" />
            </svg>
        </span>
    )
}

export {
    arrow
}