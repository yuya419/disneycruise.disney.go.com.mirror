/**
 * @name headline.tsx
 * @description 見出しコンポーネント
 */
"use client";
import "./styles/headline.scss";

const Headline = (props: {
    design: "01" | "02" | "03",
    hlLevel?: "h2" | "h3" | "h4" | "h5" | "h6" | "p",
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
export default Headline;