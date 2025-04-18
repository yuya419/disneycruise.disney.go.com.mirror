/**
 * @name template.tsx
 * @description テンプレートページ用レイアウト
 */
"use client";
import Block from "@/layouts/form/block";
import Input from "@/components/modules/input/input";
import Submit from "@/components/modules/input/submit";

export default function Template() {
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
    ]
    return (
        <form className="form">
            <Block title="インプット入れ込み">
                <Input type="name" title="お名前" name="name" required={true} />
                <Input type="ruby" title="フリガナ" name="ruby" required={true} />
                <Input type="nameKan" title="お名前" name="name" required={true} />
                <Input type="nameEn" title="お名前（姓・名）" name="nameEn" required={true} />
                <Input type="email" title="メールアドレス" name="email" required={true} />
                <Input type="emailConfirm" title="メールアドレス（確認用）" name="emailConfirm" required={true} />
                <Input type="tel" title="電話番号" name="tel" />
                <Input type="message" title="お問い合わせ内容をご記入ください" name="message" />
                <Input type="remarks" title="ご質問、ご要望などあればご自由にご記入ください" name="remarks" />
                <Input type="address" title="代表者住所" name="address" />
                <Input type="prefectures" title="都道府県" name="prefectures" />
            </Block>
            <Block title="インプット入れ込み">
                <Input type="birthDate" title="生年月日" name="birthDate" />
                <Input type="sex" title="性別" name="sex" />
                <Input type="age" title="年齢" name="age" />
                <Input type="nationality" title="国籍" name="nationality" />
            </Block>
            <Block title="インプット入れ込み">
                <Input type="terms" title="利用規約" name="terms" />
                <Input type="privacy" title="プライバシーポリシーへの同意" name="privacy" />
                <Input type="others" title="その他ご注意事項" name="others" />
            </Block>
            <Block title="インプット入れ込み">
                <Input type="departureDate" title="ご希望の出航日を選択" name="departureDate" array={departureOptions} required={true} />
                <Input type="roomType" title="ご希望の客室タイプ（第一希望）" name="roomType01" array={roomArray} required={true} />
                <Input type="roomType" title="ご希望の客室タイプ（第二希望）" name="roomType02" array={roomArray} required={true} />
            </Block>
            <Block>
                <Submit type="confirm" />
                <div className="submit-buttons">
                    <Submit type="back" />
                    <Submit type="submit" />
                </div>
            </Block>
        </form>
    )
}