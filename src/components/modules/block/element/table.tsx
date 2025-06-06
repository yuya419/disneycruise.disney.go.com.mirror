/**
 * @name Table
 * @description 記事用 - テーブルブロック
 */
export function Table(props: {
  header?: {
    [key: string]: {
      text: React.ReactNode;
    };
  }[];
  body: {
    [key: string]: {
      text: React.ReactNode;
    };
  }[];
}) {
  const { header, body } = props;
  const headerKeys = Object.keys(header?.[0] || {});
  const bodyKeys = Object.keys(body[0] || {});
  const celLength = Math.max(headerKeys.length, bodyKeys.length);

  return (
    <div className="m-b-table">
      <table style={{ "--cel-len": celLength } as React.CSSProperties}>
        {headerKeys.length > 0 && (
          <thead>
            <tr>
              {headerKeys.map((key) => (
                <th key={key}>{header?.[0][key]?.text}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {body.map((row, index) => (
            <tr key={index}>
              {bodyKeys.map((key) => (
                <td key={key}>{row[key]?.text}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
