/**
 * @name inquiry.tsx
 * @description お問い合わせ完了ページ用レイアウト
 */
"use client";
import Block from "@/layouts/form/block";
import Button from "@/components/modules/buttons/button";

export function Inquiry() {
  return (
    <form className="form">
      <Block>
        <div className="complete-text">
          <p>
            お問い合わせいただき、ありがとうございます。
            <br />
            ご連絡いただきました内容につきましては、5営業日以内に担当者よりご返信いたしますので、今しばらくお待ちください。
          </p>
          <Button type="primary" label="TOPに戻る" link="/" align="center" />
        </div>
      </Block>
    </form>
  );
}
