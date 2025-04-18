/**
 * @name inquiry.tsx
 * @description お問い合わせページ用レイアウト
 */
"use client";
import Block from "@/layouts/form/block";
import Input from "@/components/modules/input/input";
import Submit from "@/components/modules/input/submit";

export function Inquiry() {

    return (
        <form className="form">
            <Block>
                <Input type="nameKan" title="お名前" name="name" required={true} />
                <Input type="email" title="メールアドレス" name="email" required={true} />
                <Input type="message" title="お問い合わせ内容をご記入ください" name="message" />
                <Submit type="confirm" />
            </Block>
        </form>
    )
}