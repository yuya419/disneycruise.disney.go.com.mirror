/**
 * @name book.tsx
 * @description 予約申し込み確認ページ用レイアウト
 */
"use client";
import Block from "@/layouts/form/block";
import Submit from "@/components/modules/input/submit";

export function Book() {
  const inputArray = {
    input01: [
      {
        title: "ご希望の出航日",
        value: "2025年12月18日出航　4泊クルーズ",
      },
      {
        title: "ご希望の客室タイプ（第一希望）",
        value: "内側客室",
      },
      {
        title: "ご希望の客室タイプ（第二希望）",
        value: "デラックスリーフビューベランダ客室",
      },
    ],
    input02: [
      {
        title: "お名前",
        value: {
          fst: "山田",
          lst: "太郎",
        },
      },
      {
        title: "フリガナ",
        value: {
          fst: "ヤマダ",
          lst: "タロウ",
        },
      },
      {
        title: "メールアドレス",
        value: "dummy@examle.com",
      },
      {
        title: "電話番号",
        value: "000-0000-0000",
      },
      {
        title: "代表者住所",
        value: {
          code: "〒" + "000-0000",
          prefectures: "栃木県",
          city: "宇都宮市○○○○",
          street: "00-0",
          building: "○○ビル",
        },
      },
    ],
    input03: [
      {
        guest01: [
          {
            title: "お名前（姓・名）",
            value: {
              fst: "Yamada",
              lst: "Taro1",
            },
          },
          {
            title: "生年月日",
            value: "1990年1月1日",
          },
          {
            title: "性別",
            value: "男性",
          },
          {
            title: "国籍",
            value: "日本",
          },
        ],
        guest02: [
          {
            title: "お名前（姓・名）",
            value: {
              fst: "Yamada",
              lst: "Taro2",
            },
          },
          {
            title: "生年月日",
            value: "1990年2月2日",
          },
          {
            title: "性別",
            value: "男性",
          },
          {
            title: "国籍",
            value: "日本",
          },
        ],
        guest03: [
          {
            title: "お名前（姓・名）",
            value: {
              fst: "Yamada",
              lst: "Taro3",
            },
          },
          {
            title: "生年月日",
            value: "1990年3月3日",
          },
          {
            title: "性別",
            value: "男性",
          },
          {
            title: "国籍",
            value: "日本",
          },
        ],
        guest04: [
          {
            title: "お名前（姓・名）",
            value: {
              fst: "Yamada",
              lst: "Taro4",
            },
          },
          {
            title: "生年月日",
            value: "1990年4月4日",
          },
          {
            title: "性別",
            value: "男性",
          },
          {
            title: "国籍",
            value: "日本",
          },
        ],
      },
    ],
    input04: [
      {
        title: "利用規約",
        value: "同意する",
      },
      {
        title: "プライバシーポリシー",
        value: "同意する",
      },
      {
        title: "その他ご注意事項",
        value: "同意する",
      },
    ],
    input05: [
      {
        title: "備考",
        value:
          "ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。",
      },
    ],
  };

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
    <form action="/ships/adventure/book/complete/" className="form">
      <Block id="input01" title="コース情報の入力">
        {renderDl(inputArray.input01)}
      </Block>
      <Block id="input02" title="代表者様情報の入力">
        {renderDl(inputArray.input02)}
      </Block>
      <Block id="input03" title="お客様情報の入力">
        <div className="form-block-guest">
          <div className="guest-block-wrap">
            {Object.entries(inputArray.input03[0]).map(
              ([guestKey, guestData]: any, index: number) => (
                <dl className="guest-block" key={index}>
                  <dt className="guest-block-title">
                    <span className="icon">
                      <svg className="i-human">
                        <use href="#i-human"></use>
                      </svg>
                    </span>
                    <span className="label">ゲスト{index + 1}</span>
                  </dt>
                  <dd className="guest-block-content">{renderDl(guestData)}</dd>
                </dl>
              ),
            )}
          </div>
        </div>
      </Block>
      <Block id="input04" title="利用規約・プライバシーポリシー">
        {renderDl(inputArray.input04)}
      </Block>
      <Block id="input05" title="備考">
        {renderDl(inputArray.input05)}
      </Block>
      <Block>
        <div className="submit-buttons">
          <Submit type="back" />
          <Submit type="submit" />
        </div>
      </Block>
    </form>
  );
}
