/**
 * @name page.tsx
 * @description よくあるご質問ページ用レイアウト
 */
"use client";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import Title from "@/layouts/title/title";
import Aside from "../aside/aside";
import { HasAsideContainer } from "@/layouts/container/container";
import { Headline } from "@/components/modules/headline/headline";
import { AccordionType02 } from "@/components/modules/acdn/acdn";
import "./styles/qa.scss";

export function Page() {
    const breadcrumbItems = [
        { label: "よくあるご質問", href: "/qa/", },
    ];

    const navArray = {
        parent01: [
            {
                item: ["ご旅行の準備", "sec01"],
            }
        ],
        parent02: [
            {
                item: ["ディズニー・クルーズライン", "sec02"],
            }
        ],
        parent03: [
            {
                item: ["ディズニー・リゾート・ホテル", "sec03"],
            }
        ],
        parent04: [
            {
                item: ["ディズニー・パーク", "sec04"],
            }
        ],
        parent05: [
            {
                item: ["その他", "sec05"],
            }
        ],
    }

    const Qlabel = (text: string) => {
        return (
            <span className="qa-label">
                <span className="unit" lang="en">Q</span>
                <span className="text">{text}</span>
                <span className="icon"></span>
            </span>
        )
    }

    return (
        <div className="p-qa">
            <Breadcrumb items={breadcrumbItems} />
            <Title type="onm" title="よくあるご質問" en="Faq" />
            <HasAsideContainer>
                <main className="l-main">
                    <article className="l-article">
                        <section id="sec01" className="p-qa-section">
                            <Headline design="01" hlLevel="h2">ご旅行の準備</Headline>
                            <div className="qa-block">
                                <AccordionType02
                                    label={Qlabel("パスポートの有効期限はどのくらい必要ですか？")}
                                    content={
                                        <div className="qa-content">
                                            <p>クルーズにご参加の場合は、下船日から数えて6カ月以上有効期限が必要です。<br />
                                                パークのみご参加の場合はアメリカ入国時90日以上の有効期限が望ましいとされています。</p>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="qa-block">
                                <AccordionType02
                                    label={Qlabel("日本から持って行った方がよいものはありますか？")}
                                    content={
                                        <div className="qa-content">
                                            <p>回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。</p>
                                        </div>
                                    }
                                />
                            </div>
                        </section>
                        <section id="sec02" className="p-qa-section">
                            <Headline design="01" hlLevel="h2">ディズニー・クルーズライン</Headline>
                            <div className="qa-block">
                                <AccordionType02
                                    label={Qlabel("どの船・コースを選べば良いのでしょうか？")}
                                    content={
                                        <div className="qa-content">
                                            <p>回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。</p>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="qa-block">
                                <AccordionType02
                                    label={Qlabel("クルーズ料金には何が含まれていますか？")}
                                    content={
                                        <div className="qa-content">
                                            <p>回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。</p>
                                        </div>
                                    }
                                />
                            </div>
                        </section>
                        <section id="sec03" className="p-qa-section">
                            <Headline design="01" hlLevel="h2">ディズニー・リゾート・ホテル</Headline>
                            <div className="qa-block">
                                <AccordionType02
                                    label={Qlabel("直営ホテルに泊まるメリットを教えてください。")}
                                    content={
                                        <div className="qa-content">
                                            <p>回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。</p>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="qa-block">
                                <AccordionType02
                                    label={Qlabel("キャラクターグリーティングを行っているレストランはありますか？")}
                                    content={
                                        <div className="qa-content">
                                            <p>回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。</p>
                                        </div>
                                    }
                                />
                            </div>
                        </section>
                        <section id="sec04" className="p-qa-section">
                            <Headline design="01" hlLevel="h2">ディズニー・パーク</Headline>
                            <div className="qa-block">
                                <AccordionType02
                                    label={Qlabel("何日間の滞在が必要でしょうか？")}
                                    content={
                                        <div className="qa-content">
                                            <p>回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。</p>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="qa-block">
                                <AccordionType02
                                    label={Qlabel("マジックバンドとはなんですか？")}
                                    content={
                                        <div className="qa-content">
                                            <p>回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。</p>
                                        </div>
                                    }
                                />
                            </div>
                        </section>
                        <section id="sec05" className="p-qa-section">
                            <Headline design="01" hlLevel="h2">その他</Headline>
                            <div className="qa-block">
                                <AccordionType02
                                    label={Qlabel("お薦めのシーズンはいつですか？")}
                                    content={
                                        <div className="qa-content">
                                            <p>回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。</p>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="qa-block">
                                <AccordionType02
                                    label={Qlabel("海外旅行傷害保険への加入は必要ですか？")}
                                    content={
                                        <div className="qa-content">
                                            <p>回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。回答が入ります。</p>
                                        </div>
                                    }
                                />
                            </div>
                        </section>
                    </article>
                </main>
                <Aside page="page" nav={navArray} />
            </HasAsideContainer>
        </div>
    );
}