/**
 * @name page.tsx
 * @description よくあるご質問ページ用レイアウト
 */
"use client";
import Title from "@/layouts/title/title";
import Button from "@/components/modules/buttons/button";
import "./styles/404.scss";

export function Page() {
  return (
    <div className="p-404">
      <Title type="onm" title="ページが見つかりません" en="404 Not Found" />
      <main className="l-main">
        <article className="l-article">
          <p>
            お探しのページは見つかりませんでした。
            <br />
            URLが正しいか、もう一度ご確認ください。
          </p>
          <Button type="primary" label="TOPに戻る" link="/" align="center" />
        </article>
      </main>
    </div>
  );
}
