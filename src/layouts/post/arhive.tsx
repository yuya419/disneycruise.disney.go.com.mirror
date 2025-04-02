/**
 * @name Archive
 * @description 投稿一覧
 */
'use client';
import Link from "next/link";
import Image from "next/image";
import { arrow } from "@/components/modules/icons/icon";
import "./styles/archive.scss";

/**
 * @name Feature
 * @description 特集記事
 * @param props.posts 投稿データ
 * @param props.hlLevel タイトルの見出しレベル
 * @param props.arrow 矢印の表示
 * @returns 
 */
const Feature = (props: {
    posts: {
        [key: string]: {
            link: string,
            title: string,
            date: string,
            cat: {
                [key: string]: {
                    name: string,
                }
            },
            thumbnail: {
                src: string,
                alt: string,
                w: number,
                h: number,
            }
        }
    },
    hlLevel?: "h2" | "h3",
    arrow: boolean
},) => {
    const { posts } = props;
    const Tag = props.hlLevel === "h2" ? "h2" : "h3";

    const postItems = Object.keys(posts).map((key) => {
        return (
            <article className="post-item" key={key}>
                <Link href={'/feature/' + posts[key].link} className="post-link">
                    <div className="post-content">
                        {props.arrow && arrow({ size: "s", bg: "white", color: "blue" })}
                        <div className="thumbnail">
                            <Image
                                src={posts[key].thumbnail.src}
                                alt={posts[key].thumbnail.alt + "のサムネイル"}
                                width={posts[key].thumbnail.w}
                                height={posts[key].thumbnail.h}
                                priority
                            />
                        </div>
                        <div className="meta">
                            <Tag className="title">{posts[key].title}</Tag>
                            <time dateTime={posts[key].date} className="date" lang="en">{posts[key].date}</time>
                            <div className="cats">
                                {Object.keys(posts[key].cat).map((catKey) => {
                                    return (
                                        <span className="cat" key={catKey}>{posts[key].cat[catKey].name}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Link>
            </article>
        )
    });

    return (
        <div className="post-special-feature">
            <div className="post-list">
                {postItems}
            </div>
        </div>
    );
}

export {
    Feature
};