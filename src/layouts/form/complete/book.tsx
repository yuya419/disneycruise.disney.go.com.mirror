/**
 * @name book.tsx
 * @description 予約申し込み完了ページ用レイアウト
 */
"use client";
import Block from "@/layouts/form/block";
import Button from "@/components/modules/buttons/button";

export function Book() {
  return (
    <form className="form">
      <Block>
        <div className="complete-text">
          <p>
            ご予約を受け付けました。
            <br />
            ご予約内容の確認メールをお送りしましたのでご確認ください。
          </p>
          <Button type="primary" label="TOPに戻る" link="/" align="center" />
        </div>
      </Block>
    </form>
  );
}
