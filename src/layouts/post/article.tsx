/**
 * @name artcile.tsx
 * @description 投稿一覧
 */
"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/modules/buttons/button";
import { arrow } from "@/components/modules/icons/icon";
import "./styles/article.scss";

interface posts {
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
            thumbnail?: {
                src: string,
                alt: string,
                w: number,
                h: number,
            }
        }
    },
}

/**
 * @name Post
 * @description 投稿一覧
 * @param props.type 投稿の種類
 * @param props.posts 投稿データ
 * @param props.hlLevel タイトルの見出しレベル
 * @param props.arrow 矢印の表示
 * @param props.data data属性の有無
 * @returns 
 */
const Post = (props: {
    type: "feature" | "news",
    posts: posts["posts"],
    perPage?: number,
    hlLevel?: "h2" | "h3",
    arrow: boolean,
    data?: boolean,
},) => {
    const { posts, perPage = 5 } = props;

    // const searchParams = useSearchParams();
    // const pathname = usePathname();
    // const [currentPage, setCurrentPage] = useState<number>(1);
    // const [displayedPosts, setDisplayedPosts] = useState<string[]>([]);

    const postsRef = useRef<HTMLDivElement>(null);
    const moreBtnRef = useRef<HTMLButtonElement>(null);

    const Tag = props.hlLevel === "h2" ? "h2" : "h3";
    const postClass = props.type === "feature" ? "post-feature" : "post-news";
    const displayedPosts = Object.keys(posts).slice(0, perPage);

    // ページ数に応じて投稿を更新
    // useEffect(() => {
    //     const page = parseInt(searchParams.get("page") || "1", 10);
    //     setCurrentPage(page);

    //     const startIndex = (page - 1) * perPage;
    //     const endIndex = startIndex + perPage;
    //     setDisplayedPosts(Object.keys(posts).slice(0, endIndex));
    // }, [searchParams, posts, perPage]);

    // View Moreボタンを押したときの処理
    // const handleViewMore = () => {
    //     const nextPage = currentPage + 1;
    //     setCurrentPage(nextPage);

    //     const startIndex = displayedPosts.length;
    //     const endIndex = startIndex + perPage;
    //     setDisplayedPosts((prev) => [
    //         ...prev,
    //         ...Object.keys(posts).slice(startIndex, endIndex),
    //     ]);

    //     // URLを更新
    //     const newUrl = `/ships/adventure${pathname}?page=${nextPage}`;
    //     window.history.pushState(null, "", newUrl);
    // };

    const postItems = displayedPosts.map((key, index) => {
        return (
            <article className="post-item" key={key}>
                <Link
                    href={`/${props.type}/${posts[key].link}`}
                    className="post-link uline"
                    {...(props.data ? { "data-post": index + 1 } : {})}
                >
                    <div className="post-content">
                        {props.arrow && arrow({ bg: "white", color: "blue" })}
                        <div className="thumbnail">
                            {posts[key].thumbnail ? (
                                <Image
                                    src={posts[key].thumbnail.src}
                                    alt={`${posts[key].thumbnail.alt}のサムネイル`}
                                    width={posts[key].thumbnail.w}
                                    height={posts[key].thumbnail.h}
                                    priority
                                />
                            ) : (
                                <Image
                                    src="/ships/adventure/common/dummy/dummy.jpg"
                                    alt={`${posts[key].title}のサムネイル`}
                                    width={115}
                                    height={115}
                                    priority
                                />
                            )}
                        </div>
                        <div className="meta">
                            <Tag className="title">
                                <span className="clamp">
                                    <span className="line">{posts[key].title}</span>
                                </span>
                            </Tag>
                            <time
                                dateTime={posts[key].date}
                                className="date"
                                lang="en"
                            >
                                {posts[key].date}
                            </time>
                            <div className="cats">
                                {Object.keys(posts[key].cat).map((catKey) => (
                                    <span className="cat" key={catKey}>
                                        {posts[key].cat[catKey].name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            </article>
        );
    });

    return (
        <div className={postClass}>
            <div className="post-list" ref={postsRef}>
                {postItems}
            </div>
            {/* {displayedPosts.length < Object.keys(posts).length && (
                <div className="view-more">
                    <button
                        type="button"
                        className="view-more-el"
                        ref={moreBtnRef}
                        onClick={handleViewMore}
                    >
                        <span className="label" lang="en">
                            View More
                        </span>
                        <span className="icon">
                            <svg className="i-plus">
                                <use href="#i-plus"></use>
                            </svg>
                        </span>
                    </button>
                </div>
            )} */}
        </div>
    );
}

/**
 * @name Course
 * @description コース一覧
 * @returns 
 */
const Course = (props: {
    posts: {
        [key: string]: {
            link: string,
            title: string,
            thumbnail: {
                src: string,
                w: number,
                h: number,
            }
        }
    },
    hlLevel?: "h2" | "h3",
},) => {
    const { posts } = props;
    const Tag = props.hlLevel === "h2" ? "h2" : "h3";

    const postItems = Object.keys(posts).map((key) => {
        return (
            <article className="post-item" key={key}>
                <div className="thumbnail">
                    <Image
                        src={posts[key].thumbnail.src}
                        alt={posts[key].title + "のサムネイル"}
                        width={posts[key].thumbnail.w}
                        height={posts[key].thumbnail.h}
                    />
                </div>
                <Tag className="title">{posts[key].title}</Tag>
                <Button type="primary" label="View More" lang="en" link={posts[key].link} align="left" />
                {arrow({ bg: "blue", color: "white" })}
                <Link href={'/list/' + posts[key].link} className="post-link-area"></Link>
            </article>
        )
    });

    return (
        <div className="post-course">
            <div className="post-list">
                {postItems}
            </div>
        </div>
    );
}

export {
    Post,
    Course,
};