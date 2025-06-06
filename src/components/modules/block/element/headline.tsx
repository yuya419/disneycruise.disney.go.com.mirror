/**
 * @name headline.tsx
 * @description 記事用 - 見出しブロック
 */
export function Headline(props: {
  hlLevel?: "h2" | "h3" | "h4";
  children: React.ReactNode;
}) {
  const { hlLevel, children } = props;
  const Tag = hlLevel || "h2";

  return (
    <Tag className="m-b-headline" data-tag={hlLevel}>
      <span className="label">{children}</span>
    </Tag>
  );
}
