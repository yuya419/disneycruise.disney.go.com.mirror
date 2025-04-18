/**
 * @name mailmagazine.tsx
 * @description メールマガジンページ用レイアウト
 */
"use client";
import Block from "@/layouts/form/block";
import Input from "@/components/modules/input/input";
import Submit from "@/components/modules/input/submit";

export function Mailmagazine() {

    return (
        <form className="form">
            <Block>
                <Input type="email" title="メールアドレス" name="email" required={true} />
                <Input type="emailConfirm" title="メールアドレス（確認用）" name="emailConfirm" required={true} />
                <Input type="sex" title="性別" name="sex" required={true} />
                <Input type="age" title="年齢" name="age" required={true} />
                <Input type="prefectures" title="都道府県" name="prefectures" required={true} />
                <Input type="privacy" title="プライバシーポリシーへの同意" name="privacy" required={true} />
                <Submit type="confirm" />
            </Block>
        </form>
    )
}