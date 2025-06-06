/**
 * @name twocol.tsx
 * @description 記事用 - 2カラムブロック
 */

export function TwoCol(props: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  const { left, right } = props;

  return (
    <div className="m-b-twocol">
      <div className="m-b-twocol-left">{left}</div>
      <div className="m-b-twocol-right">{right}</div>
    </div>
  );
}
