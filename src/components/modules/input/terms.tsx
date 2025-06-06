/**
 * @name terms.tsx
 * @description inputタグのコンポーネント - 利用規約
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function Terms(props: {
  title: string;
  name: string;
  required?: boolean;
}) {
  const { title, name, required } = props;

  return (
    <dl className="form-input-box">
      <dt className="form-input-title">
        {title}
        <Required required={required} />
      </dt>
      <dd className="form-input-content">
        <div className="text">
          <p>以下へ全て同意の上、お申込みください。</p>
          <p>
            ディズニークルーズライン　
            <br className="nopc" />
            旅行条件書：
            <br />
            <a
              href="https://mikicruise.com/assets/data/DCL_TravelTermsandConditions.pdf"
              target="_blank"
            >
              https://mikicruise.com/assets/data/DCL_TravelTermsandConditions.pdf
            </a>
          </p>
          <p>
            ディズニークルーズライン　
            <br className="nopc" />
            クルーズ約款：
            <br />
            <a
              href="https://mikicruise.com/assets/data/DCL_CruiseContract.pdf"
              target="_blank"
            >
              https://mikicruise.com/assets/data/DCL_CruiseContract.pdf
            </a>
          </p>
          <p>
            旅行業約款（手配旅行）：
            <br />
            <a
              href="https://mikicruise.com/assets/data/ArrangedTravelAgencyTermsandConditions.pdf"
              target="_blank"
            >
              https://mikicruise.com/assets/data/ArrangedTravelAgencyTermsandConditions.pdf
            </a>
          </p>
        </div>
        <div className="text">
          <label className="form-input-label">
            <input type="checkbox" name={name} required={required} />
            <span className="label">全てに同意する</span>
          </label>
        </div>
      </dd>
    </dl>
  );
}
