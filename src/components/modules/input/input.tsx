/**
 * @name input.tsx
 * @description inputタグのコンポーネント
 */
"use client";
import Name from "./name";
import Ruby from "./ruby";
import NameEn from "./nameEn";
import NameKan from "./nameKan";
import Email from "./email";
import EmailConfirm from "./emailConfirm";
import Tel from "./tel";
import Message from "./message";
import Remarks from "./remarks";
import Address from "./address";
import Prefectures from "./prefectures";
import BirthDate from "./birthDate";
import Sex from "./sex";
import Age from "./age";
import Nationality from "./nationality";
import Terms from "./terms";
import Privacy from "./privacy";
import Others from "./others";
import DepartureDate from "./departureDate";
import RoomType from "./roomType";
import "./styles/input.scss";

/**
 * 
 * @param props
 * @param props.type - お名前, フリガナ, お名前（ローマ字）,メールアドレス, メールアドレス確認, 電話番号, お問い合わせ内容, 備考, 住所, 都道府県, 生年月日, 性別, 年齢, 国籍, 利用規約, プラポリ, その他の同意, 出航日, 部屋タイプ
 * @returns 
 */
export default function Input(props: {
    type: "name" | "ruby" | "nameKan"| "nameEn" | "email" | "emailConfirm" | "tel" | "message" | "remarks" | "address" | "prefectures" | "birthDate" | "sex" | "age" | "nationality" | "terms" | "privacy" | "others" | "departureDate" | "roomType",
    title: string,
    name: string,
    required?: boolean,
    array?: string[],
}) {
    const { type, name } = props;

    return (
        <div className={`form-input form-input-${type}`}>
            {type === "name" && <Name {...props} />}
            {type === "ruby" && <Ruby {...props} />}
            {type === "nameEn" && <NameEn {...props} />}
            {type === "nameKan" && <NameKan {...props} />}
            {type === "email" && <Email {...props} />}
            {type === "emailConfirm" && <EmailConfirm {...props} />}
            {type === "tel" && <Tel {...props} />}
            {type === "message" && <Message {...props} />}
            {type === "remarks" && <Remarks {...props} />}
            {type === "address" && <Address {...props} />}
            {type === "prefectures" && <Prefectures {...props} />}
            {type === "birthDate" && <BirthDate {...props} />}
            {type === "sex" && <Sex {...props} />}
            {type === "age" && <Age {...props} />}
            {type === "nationality" && <Nationality {...props} />}
            {type === "terms" && <Terms {...props} />}
            {type === "privacy" && <Privacy {...props} />}
            {type === "others" && <Others {...props} />}
            {type === "departureDate" && <DepartureDate {...props} />}
            {type === "roomType" && <RoomType {...props} />}
        </div>
    );
}