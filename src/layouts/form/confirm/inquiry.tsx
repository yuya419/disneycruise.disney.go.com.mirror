/**
 * @name inquiry.tsx
 * @description お問い合わせ確認ページ用レイアウト
 */
"use client";
import Block from "@/layouts/form/block";
import Submit from "@/components/modules/input/submit";

export function Inquiry() {

    const inputArray = {
        input01: [
            {
                title: "お名前",
                value: {
                    fst: "山田",
                    lst: "太郎",
                }
            },
            {
                title: "メールアドレス",
                value: "dummy@examle.com",
            },
            {
                title: "備考",
                value: "ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。",
            }
        ],
    }

    const renderDl = (data: any) => {
        return data.map((item: any, index: number) => {
            if (typeof item.value === "object" && !Array.isArray(item.value)) {
                // オブジェクトの場合、値を結合
                const combinedValue = Object.values(item.value).join(" ");
                return (
                    <dl className="input-content" key={index}>
                        <dt>{item.title}</dt>
                        <dd>{combinedValue}</dd>
                    </dl>
                );
            } else if (Array.isArray(item.value)) {
                // 配列の場合、再帰的に処理
                return (
                    <dl className="input-content" key={index}>
                        <dt>{item.title}</dt>
                        <dd>{renderDl(item.value)}</dd>
                    </dl>
                );
            } else {
                // それ以外の場合はそのまま表示
                return (
                    <dl className="input-content" key={index}>
                        <dt>{item.title}</dt>
                        <dd>{item.value}</dd>
                    </dl>
                );
            }
        });
    };

    return (
        <form className="form">
            <Block>
                {renderDl(inputArray.input01)}
            </Block>
            <Block>
                <div className="submit-buttons">
                    <Submit type="back" />
                    <Submit type="submit" />
                </div>
            </Block>
        </form>
    )
}