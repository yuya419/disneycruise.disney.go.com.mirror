/**
 * @name mailmagazine.tsx
 * @description メールマガジン登録完了ページ用レイアウト
 */
"use client";
import Block from "@/layouts/form/block";
import Button from "@/components/modules/buttons/button";

export function Mailmagazine() {
    return (
        <form className="form">
            <Block>
                <div className="complete-text">
                    <p>メールマガジンの登録が完了いたしました。</p>
                    <Button type="primary" label="TOPに戻る" link="/" align="center" />
                </div>
            </Block>
        </form>
    )
}