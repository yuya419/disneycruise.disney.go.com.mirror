/**
 * @name mailmagazine.tsx
 * @description メールマガジン登録確認ページ用レイアウト
 */
"use client";
import Block from "@/layouts/form/block";
import Submit from "@/components/modules/input/submit";

export function Mailmagazine() {

    const inputArray = {
        input01: [
            {
                title: "メールアドレス",
                value: "dummy@examle.com",
            },
            {
                title: "性別",
                value: "男性",
            },
            {
                title: "年齢",
                value: "20代",
            },
            {
                title: "都道府県",
                value: "栃木県",
            },
            {
                title: "プライバシーポリシー",
                value: "同意する",
            },
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