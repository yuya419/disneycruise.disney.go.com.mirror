/**
 * @name headline.tsx
 * @description 見出しコンポーネント
 */
"use client";
import "./styles/headline.scss";

const Headline = (props: {
    design: "01" | "02" | "03",
    hlLevel?: "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "dt",
    children: React.ReactNode,
}) => {
    const { design, hlLevel, ...rest } = props;
    const Tag = hlLevel || "h2";
    const headlineClassName = `m-headline is-design-${design}`;

    return (
        <Tag className={headlineClassName}>
            {props.children}
        </Tag>
    );
}

const OnmHeadline01 = (props: {
    hlLevel?: "h2" | "h3",
    jp: string,
    en: string,
}) => {
    const { hlLevel, jp, en } = props;
    const Tag = hlLevel || "h2";
    const headlineClassName = `m-headline is-onm-design-01`;

    return (
        <div className={headlineClassName}>
            <div className="m-headline-onm">
                <svg className="onm is-left"><use href="#i-onm-01"></use></svg>
                <span className="bar is-left"></span>
                <span className="label" lang="en" dangerouslySetInnerHTML={{ __html: en }}></span>
                <span className="bar is-right"></span>
                <svg className="onm is-right"><use href="#i-onm-01"></use></svg>
            </div>
            <hgroup className="m-headline-text">
                <Tag dangerouslySetInnerHTML={{ __html: jp }}></Tag>
            </hgroup>
        </div>
    );
}
const OnmHeadline02 = (props: {
    hlLevel?: "h2" | "h3",
    jp: string,
    en: string,
    label: string,
    num: number,
}) => {
    const { hlLevel, jp, en, label, num } = props;
    const Tag = hlLevel || "h2";
    const headlineClassName = `m-headline is-onm-design-02`;

    return (
        <div className={headlineClassName}>
            <div className="m-headline-onm">
                <span className="bar is-left"></span>
                <svg className="onm is-left"><use href="#i-onm-02"></use></svg>
                <div className="label">
                    <span className="ttl" lang="en">{label}</span>
                    <span className="num" lang="en">0{num}</span>
                </div>
                <svg className="onm is-right"><use href="#i-onm-02"></use></svg>
                <span className="bar is-right"></span>
            </div>
            <hgroup className="m-headline-text">
                <Tag>{jp}</Tag>
                <p lang="en">{en}</p>
            </hgroup>
        </div>
    );
}

export {
    Headline,
    OnmHeadline01,
    OnmHeadline02,
}