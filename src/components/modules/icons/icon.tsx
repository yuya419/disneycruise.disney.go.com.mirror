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
  bg: "blue" | "white" | "gold" | "gray";
  color: "blue" | "white" | "gold" | "gray";
}) => {
  return (
    <span className="arrow" data-bg={props.bg} data-color={props.color}>
      <svg className="i-arw-r">
        <use xlinkHref="#i-arw-r" />
      </svg>
      <svg className="i-arw-r">
        <use xlinkHref="#i-arw-r" />
      </svg>
    </span>
  );
};

export { arrow };
