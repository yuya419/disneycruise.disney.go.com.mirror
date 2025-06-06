/**
 * @name submit.tsx
 * @description inputタグのコンポーネント - 送信ボタン
 */
import "./styles/input.scss";

const Submit = (props: { type: "submit" | "confirm" | "back" }) => {
  const { type } = props;
  const label =
    type === "submit"
      ? "内容を送信"
      : type === "confirm"
        ? "内容を確認"
        : "内容を修正";
  const Tag = type === "back" ? "a" : "button";

  return (
    <div className="submit-button">
      <Tag
        type={type === "back" ? undefined : "submit"}
        className="submit-button-el"
        data-type={type}
        href={type === "back" ? "../" : undefined}
      >
        {label}
      </Tag>
    </div>
  );
};

export default Submit;
