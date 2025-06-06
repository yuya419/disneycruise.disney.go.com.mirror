/**
 * @name book.tsx
 * @description 予約申し込みページ用レイアウト
 */
"use client";
import { useState } from "react";
import Block from "@/layouts/form/block";
import Input from "@/components/modules/input/input";
import Submit from "@/components/modules/input/submit";

export function Book() {
  // 初期状態でゲスト1〜4を設定
  const [guests, setGuests] = useState([{ id: 1 }]);

  const addGuest = () => {
    setGuests((prevGuests) => [...prevGuests, { id: prevGuests.length + 1 }]);
  };

  // ゲスト削除（最低1人は残す）
  const removeGuest = () => {
    setGuests((prevGuests) =>
      prevGuests.length > 1 ? prevGuests.slice(0, -1) : prevGuests,
    );
  };

  const departureOptions = [
    "2025年12月18日出航　4泊クルーズ",
    "2025年12月22日出航　5泊クルーズ",
    "2025年12月27日出航　5泊クルーズ",
    "2026年1月1日出航　4泊クルーズ",
    "2026年1月5日出航　3泊クルーズ",
    "2026年1月8日出航　4泊クルーズ",
    "2026年1月12日出航　3泊クルーズ",
    "2026年1月15日出航　4泊クルーズ",
    "2026年1月19日出航　3泊クルーズ",
    "2026年1月22日出航　4泊クルーズ",
    "2026年1月26日出航　3泊クルーズ",
    "2026年1月29日出航　4泊クルーズ",
    "2026年2月2日出航　3泊クルーズ",
    "2026年2月5日出航　4泊クルーズ",
    "2026年2月12日出航　4泊クルーズ",
    "2026年2月16日出航　3泊クルーズ",
    "2026年2月19日出航　4泊クルーズ",
    "2026年2月23日出航　3泊クルーズ",
    "2026年2月26日出航　4泊クルーズ",
    "2026年3月2日出航　3泊クルーズ",
    "2026年3月5日出航　4泊クルーズ",
    "2026年3月9日出航　3泊クルーズ",
    "2026年3月12日出航　4泊クルーズ",
    "2026年3月16日出航　3泊クルーズ",
    "2026年3月19日出航　4泊クルーズ",
    "2026年3月23日出航　3泊クルーズ",
    "2026年3月26日出航　4泊クルーズ",
    "2026年3月30日出航　3泊クルーズ",
    "2026年4月2日出航　4泊クルーズ",
    "2026年4月6日出航　3泊クルーズ",
    "2026年4月9日出航　4泊クルーズ",
    "2026年4月13日出航　3泊クルーズ",
    "2026年4月16日出航　4泊クルーズ",
    "2026年4月20日出航　3泊クルーズ",
    "2026年4月23日出航　4泊クルーズ",
    "2026年4月27日出航　3泊クルーズ",
    "2026年4月30日出航　4泊クルーズ",
    "2026年5月4日出航　3泊クルーズ",
    "2026年5月7日出航　4泊クルーズ",
    "2026年5月11日出航　3泊クルーズ",
    "2026年5月14日出航　4泊クルーズ",
    "2026年5月18日出航　3泊クルーズ",
    "2026年5月21日出航　4泊クルーズ",
    "2026年5月25日出航　3泊クルーズ",
    "2026年5月28日出航　4泊クルーズ",
    "2026年6月1日出航　3泊クルーズ",
    "2026年6月4日出航　4泊クルーズ",
    "2026年6月8日出航　3泊クルーズ",
    "2026年6月11日出航　4泊クルーズ",
    "2026年6月15日出航　3泊クルーズ",
    "2026年6月18日出航　4泊クルーズ",
    "2026年6月22日出航　3泊クルーズ",
    "2026年6月25日出航　4泊クルーズ",
    "2026年6月29日出航　3泊クルーズ",
    "2026年7月2日出航　4泊クルーズ",
    "2026年7月6日出航　3泊クルーズ",
    "2026年7月9日出航　4泊クルーズ",
    "2026年7月13日出航　3泊クルーズ",
    "2026年7月16日出航　4泊クルーズ",
    "2026年7月20日出航　3泊クルーズ",
    "2026年7月23日出航　4泊クルーズ",
    "2026年7月27日出航　3泊クルーズ",
    "2026年7月30日出航　4泊クルーズ",
    "2026年8月3日出航　3泊クルーズ",
    "2026年8月6日出航　4泊クルーズ",
    "2026年8月10日出航　3泊クルーズ",
    "2026年8月13日出航　4泊クルーズ",
    "2026年8月17日出航　3泊クルーズ",
    "2026年8月20日出航　4泊クルーズ",
    "2026年8月24日出航　3泊クルーズ",
    "2026年8月27日出航　4泊クルーズ",
    "2026年8月31日出航　3泊クルーズ",
    "2026年9月3日出航　4泊クルーズ",
    "2026年9月7日出航　3泊クルーズ",
    "2026年9月10日出航　4泊クルーズ",
    "2026年9月14日出航　3泊クルーズ",
    "2026年9月17日出航　4泊クルーズ",
    "2026年9月21日出航　3泊クルーズ",
    "2026年9月24日出航　4泊クルーズ",
    "2026年9月28日出航　3泊クルーズ",
  ];
  const roomArray = [
    "内側客室",
    "デラックス内側客室",
    "デラックス内側客室リーフビュー",
    "オーシャンビュー客室<br />（窓付、ベランダ無し）",
    "ベランダ客室",
    "デラックスオーシャンビュー<br />ベランダ客室",
    "デラックスガーデンビュー<br />ベランダ客室",
    "デラックスリーフビューベランダ客室",
    "コンシェルジュファミリー内側客室",
    "デラックスオーシャンビュー客室<br />（窓付、ベランダ無し）",
    "コンシェルジュファミリー<br />ガーデンビューベランダ客室",
    "コンシェルジュファミリー<br />オーシャンビューベランダ客室",
    "コンシェルジュファミリー<br />オーシャンビュースイート",
    "コンシェルジュスイート<br />オーシャンビューベランダ客室",
    "コンシェルジュオーシャンビュー<br />スイート客室",
    "コンシェルジュ1ベッドルーム<br />オーシャンビュースイート客室",
    "コンシェルジュロイヤルスイート<br />オーシャンビューベランダ客室",
  ];
  return (
    <form action="/ships/adventure/book/confirm/" className="form">
      <Block id="input01" title="コース情報の入力">
        <Input
          type="departureDate"
          title="ご希望の出航日を選択"
          name="departureDate"
          array={departureOptions}
          required={true}
        />
        <Input
          type="roomType"
          title="ご希望の客室タイプ（第一希望）"
          name="roomType01"
          array={roomArray}
          required={true}
        />
        <Input
          type="roomType"
          title="ご希望の客室タイプ（第二希望）"
          name="roomType02"
          array={roomArray}
          required={true}
        />
      </Block>
      <Block id="input02" title="代表者様情報の入力">
        <Input type="name" title="お名前" name="name" required={true} />
        <Input type="ruby" title="フリガナ" name="ruby" required={true} />
        <Input
          type="email"
          title="メールアドレス"
          name="email"
          required={true}
        />
        <Input type="tel" title="電話番号" name="tel" required={true} />
        <Input
          type="address"
          title="代表者住所"
          name="address"
          required={true}
        />
      </Block>
      <Block id="input03" title="お客様情報の入力">
        <div className="form-block-guest">
          <div className="text">
            <p>
              参加する方全員、
              <br className="nopc" />
              下記項目を全てご記入ください。
              <br />
              4名以上の場合は追加ボタンを押して記入欄を追加してください。
            </p>
          </div>
          <div className="guest-block-wrap">
            {guests.map((guest, idx) => (
              <dl className="guest-block" key={guest.id}>
                <dt className="guest-block-title">
                  <span className="icon">
                    <svg className="i-human">
                      <use href="#i-human"></use>
                    </svg>
                  </span>
                  <span className="label">ゲスト{guest.id}</span>
                </dt>
                <dd className="guest-block-content">
                  <Input
                    type="nameEn"
                    title="お名前（姓・名）"
                    name={`nameEn${guest.id}`}
                    required={idx === 0}
                  />
                  <Input
                    type="birthDate"
                    title="生年月日"
                    name={`birthDate${guest.id}`}
                    required={idx === 0}
                  />
                  <Input
                    type="sex"
                    title="性別"
                    name={`sex${guest.id}`}
                    required={idx === 0}
                  />
                  <Input
                    type="nationality"
                    title="国籍"
                    name={`nationality${guest.id}`}
                    required={idx === 0}
                  />
                </dd>
              </dl>
            ))}
          </div>
          <div className="guest-buttons" data-guest-count={guests.length}>
            <div className="guest-button">
              <button
                type="button"
                className="guest-button-el"
                onClick={addGuest}
              >
                <span className="label">ゲストを追加</span>
                <span className="icon">
                  <svg className="i-plus">
                    <use href="#i-plus"></use>
                  </svg>
                </span>
              </button>
            </div>
            <div className="guest-button">
              <button
                type="button"
                className="guest-button-el is-outline"
                onClick={removeGuest}
                disabled={guests.length <= 1}
              >
                <span className="label">ゲストを削除</span>
                <span className="icon">
                  <svg className="i-minus">
                    <use href="#i-minus"></use>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Block>
      <Block id="input04" title="利用規約・プライバシーポリシー">
        <Input type="terms" title="利用規約" name="terms" required={true} />
        <Input
          type="privacy"
          title="プライバシーポリシーへの同意"
          name="privacy"
          required={true}
        />
        <Input type="others" title="その他ご注意事項" name="others" />
      </Block>
      <Block id="input05" title="備考">
        <Input
          type="remarks"
          title="ご質問、ご要望などあればご自由にご記入ください"
          name="remarks"
        />
      </Block>
      <Block>
        <Submit type="confirm" />
      </Block>
    </form>
  );
}
