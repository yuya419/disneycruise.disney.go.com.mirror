/**
 * @name content.tsx
 * @description 投稿詳細ページ
 */
"use client";
import Link from "next/link";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import { arrow } from "@/components/modules/icons/icon";
import {
    BlockImg,
    BlockHeadline,
    BlockButton,
    BlockTwoCol,
    BlockSlider,
    BlockMovie,
    BlockTable,
} from "@/components/modules/block/block";
import "./styles/content.scss";

interface post {
    link: string;
    title: string;
    date: string;
    cat: {
        [key: string]: {
            name: string;
        };
    };
}

interface prevnext {
    prev?: string;
    next?: string;
}

export default function Content(props: {
    type: "news" | "feature";
    post: post;
    prevnext: prevnext;
}) {
    const { type, post, prevnext } = props;
    const { link, title, date, cat } = post;

    const label = type === "news" ? "お知らせ" : "特集記事";
    const exTitle = title.length > 30 ? title.slice(0, 30) + "…" : title
    const breadcrumbItems = [
        { label: label, href: "/" + type + "/" },
        { label: exTitle, href: "/" + type + "/" + link + "/" },
    ]

    /**
     * @name EntryHeader
     * @description 記事のヘッダー部分
     */
    const EntryHeader = () => {
        return (
            <div className="entry-header">
                <h1>{title}</h1>
                <div className="meta">
                    <time dateTime={date} className="date" lang="en">{date}</time>
                    <div className="cats">
                        {Object.keys(cat).map((catKey) => <span className="cat" key={catKey}>{cat[catKey].name}</span>)}
                    </div>
                </div>
            </div>
        )
    }

    /**
     * @name EntryContent
     * @description 記事のコンテンツ部分
     */
    const EntryContent = () => {
        return (
            <div className="entry-body">
                <BlockImg src={"/ships/adventure/common/dummy/content/dummy01.jpg"} alt={"ダミー"} width={824} height={493} />
                <BlockHeadline hlLevel="h2">2025年、ディズニー・クルーズラインがシンガポールにやってきます(h2)</BlockHeadline>
                <BlockImg src={"/ships/adventure/common/dummy/content/dummy02.jpg"} alt={"ダミー"} width={824} height={443} />
                <p>壮大なスケールの魅惑的なクルージングバケーションを体験してみませんか。</p>
                <p>そこは、楽しさにあふれ、くつろぎの時間で満たされた空間。<br />
                    ワールドクラスのエンターテインメント、テーマ別のダイニング体験、<br />
                    卓越したゲストサービスを提供するディズニー・アドベンチャーは、旅の道のりでありながら目的地でもあります。</p>
                <p>シンガポールから出航するこの客船では、3泊〜5泊の航海をご用意しています。<br />
                    洋上で魔法のような日々をお過ごしください。</p>
                <BlockTwoCol
                    left={
                        <BlockImg src={"/ships/adventure/common/dummy/content/dummy03.jpg"} alt={"ダミー"} width={392} height={243} caption="キャプション" />
                    }
                    right={
                        <BlockImg src={"/ships/adventure/common/dummy/content/dummy04.jpg"} alt={"ダミー"} width={392} height={243} caption="トイストーリープレイス​" />
                    } />
                <BlockHeadline hlLevel="h3">最高の快適さと利便性を追求した客室で、旅を満喫。(h3)</BlockHeadline>
                <p>楽しい家族旅行、友人との小旅行、カップルでの小旅行など、ディズニーの客室とスイートなら、リラックスして快適にお過ごしいただけます。<br />
                    各客室とスイートには、<a href="#">ディズニー</a>、<a href="#">ピクサー</a>、<a href="#">マーベル</a>のストーリーにインスピレーションを得たアートワークなど、他では見られない魔法のような雰囲気が漂います。</p>
                <BlockHeadline hlLevel="h4">夢と魔法がいっぱいの冒険をはじめましょう。(h4)</BlockHeadline>
                <BlockSlider images={[
                    "/ships/adventure/common/dummy/content/dummy05.jpg",
                    "/ships/adventure/common/dummy/content/dummy01.jpg",
                    "/ships/adventure/common/dummy/content/dummy02.jpg",
                    "/ships/adventure/common/dummy/content/dummy03.jpg",
                    "/ships/adventure/common/dummy/content/dummy04.jpg",
                ]} />
                <BlockHeadline hlLevel="h2">船上で味わう、最高のエンターテイメント(h2)</BlockHeadline>
                <BlockMovie type="video" src="/ships/adventure/movie/dcl_da_pc.mp4" />
                <p>楽しい家族旅行、友人との小旅行、カップルでの小旅行など、ディズニーの客室とスイートなら、リラックスして快適にお過ごしいただけます。<br />
                    各客室とスイートには、テキストリンクのストーリーにインスピレーションを得たアートワークなど、他では見られない魔法のような雰囲気が漂います。</p>
                <BlockButton href="/">予約はこちら（ボタン要素）</BlockButton>
                <BlockImg src={"/ships/adventure/common/dummy/content/dummy06.jpg"} alt={"ダミー"} width={824} height={355} />
                <BlockTable
                    header={
                        [{ "1": { text: "表組1列" }, }]
                    }
                    body={
                        [
                            { "1": { text: "出発日の前日から起算して90日以上前" }, },
                            { "1": { text: "出発日の前日から起算して89日前～45日前迄" }, },
                            { "1": { text: "出発日の前日から起算して44日前～30日前迄" }, },
                            { "1": { text: "出発日の前日から起算して29日前～15日前迄" }, },
                            { "1": { text: "出発日の前日から起算して14日前以降" }, },
                        ]} />
                <BlockTable
                    header={
                        [{ "1": { text: "表組2列" }, "2": { text: "表組2列" }, }]
                    }
                    body={
                        [
                            { "1": { text: "出発日の前日から起算して90日以上前" }, "2": { text: "無料" }, },
                            { "1": { text: "出発日の前日から起算して89日前～45日前迄" }, "2": { text: "デポジット額" }, },
                            { "1": { text: "出発日の前日から起算して44日前～30日前迄" }, "2": { text: "クルーズ代金の50％" }, },
                            { "1": { text: "出発日の前日から起算して29日前～15日前迄" }, "2": { text: "クルーズ代金の75％" }, },
                            { "1": { text: "出発日の前日から起算して14日前以降" }, "2": { text: "クルーズ代金の100％" }, },
                        ]} />
            </div>
        )
    }

    /**
     * @name EntryFooter
     * @description 記事のフッター部分
     */
    const EntryFooter = () => {
        const prevLink = prevnext.prev ? "/" + type + "/" + prevnext.prev + "/" : "";
        const nextLink = prevnext.next ? "/" + type + "/" + prevnext.next + "/" : "";

        return (
            <div className="entry-footer">
                <div className="back-link">
                    <Link href={"/" + type + "/"} className="back-link-el uline">
                        <span className="icon">
                            <svg className="i-index-2">
                                <use href="#i-index-2"></use>
                            </svg>
                        </span>
                        <span className="label" lang="en"><span className="line">Index</span></span>
                    </Link>
                </div>
                <div className="pagination">
                    <div className="pager-link">
                        <Link href={prevLink} className="pager-link-el uline" data-type="prev" {...prevnext.prev ? {} : { "aria-disabled": "true" }}>
                            {arrow({ bg: "blue", color: "white" })}
                            <span className="label" lang="en"><span className="line">Prev</span></span>
                        </Link>
                    </div>
                    <div className="pager-link">
                        <Link href={nextLink} className="pager-link-el uline" data-type="next" {...prevnext.next ? {} : { "aria-disabled": "true" }}>
                            {arrow({ bg: "blue", color: "white" })}
                            <span className="label" lang="en"><span className="line">Next</span></span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <article className="s-post">
            <Breadcrumb items={breadcrumbItems} />
            <div className="s-post-content">
                <EntryHeader />
                <EntryContent />
                <EntryFooter />
            </div>
        </article>
    );
}