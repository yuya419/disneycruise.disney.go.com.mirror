/**
 * @name privacy.tsx
 * @description inputタグのコンポーネント - プライバシーポリシー
 */
"use client";
import Required from "./required";
import "./styles/input.scss";

export default function Privacy(props: {
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
          <p>
            ディズニークルーズラインの
            <br className="nopc" />
            プライバシーポリシー：
            <a
              href="https://privacy.thewaltdisneycompany.com/ja/"
              target="_blank"
            >
              https://privacy.thewaltdisneycompany.com/ja/
            </a>
          </p>
          <p>
            ㈱ミキ・ツーリストの
            <br className="nopc" />
            プライバシーポリシー：
            <a
              href="https://www.mikitourist.co.jp/m7tjp500000002ej.html"
              target="_blank"
            >
              https://www.mikitourist.co.jp/m7tjp500000002ej.html
            </a>
          </p>
        </div>
        <div className="text">
          <label className="form-input-label">
            <input type="checkbox" name={name} required={required} />
            <span className="label">
              ディズニークルーラインおよび㈱ミキ・ツーリストの
              <br className="nosp" />
              プライバシーポリシーに同意します
            </span>
          </label>
        </div>
      </dd>
    </dl>
  );
}
