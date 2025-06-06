/**
 * @name pickup.tsx
 * @description お知らせ - ピックアップ
 */
"use client";
import { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import { arrow } from "@/components/modules/icons/icon";
import { useHandleLinkClick } from "@/hooks/usePageTransition";
import "./styles/pickup.scss";
interface posts {
  posts: {
    [key: string]: {
      link: string;
      title: string;
      date: string;
      cat: {
        [key: string]: {
          name: string;
        };
      };
      thumbnail?: {
        src: string;
        alt: string;
        w: number;
        h: number;
      };
    };
  };
}

/**
 * @name HeroNews
 * @description hero - お知らせピックアップ
 * @param {Object} props - プロパティ
 * @param {Object} props.posts - 投稿データ
 * @param {string} props.posts.link - 投稿のリンク
 * @param {string} props.posts.title - 投稿のタイトル
 * @param {Object} props.posts.cat - 投稿のカテゴリ
 * @param {string} props.posts.cat.name - カテゴリの名前
 * @returns
 */
export function HeroNews(props: posts) {
  const { posts } = props;
  const firstPostKey = Object.keys(posts)[0];
  const firstPost = posts[firstPostKey];

  const handleLinkClick = useHandleLinkClick();

  const Meta = () => {
    return (
      <div className="meta">
        {Object.keys(firstPost.cat).map((key) => {
          return (
            <span key={key} className="cat" lang="ja">
              {firstPost.cat[key].name}
            </span>
          );
        })}
        <h2 className="title">{firstPost.title}</h2>
      </div>
    );
  };

  return (
    <div className="t-hero__pickup">
      <article className={"t-hero__pickup-item"}>
        <Link href={firstPost.link} className={"t-hero__pickup-link"} onClick={(e) => handleLinkClick(e, firstPost.link)}>
          <div className="link-inline">
            <Meta />
            <Meta />
          </div>
          <div className="link-inline">
            <Meta />
            <Meta />
          </div>
        </Link>
      </article>
    </div>
  );
}

/**
 * @name Pickup
 * @description 新着記事・特集 - ピックアップ
 * @param {Object} props - プロパティ
 * @param {Object} props.type - タイプ
 * @param {Object} props.posts - 投稿データ
 */
export function Pickup(props: {
  type: "news" | "feature";
  posts: posts["posts"];
}) {
  const { type, posts } = props;

  const handleLinkClick = useHandleLinkClick();

  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false })); // Autoplayプラグインを設定
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [ClassNames(), autoplay.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect); // スライドが切り替わったときに現在位置を更新
    onSelect(); // 初期位置を設定

    return () => {
      emblaApi.off("select", onSelect); // クリーンアップ
    };
  }, [emblaApi]);

  const resetAutoplay = useCallback(() => {
    if (emblaApi && autoplay.current) {
      autoplay.current.stop(); // 一度停止
      autoplay.current.play(); // 再開
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index); // 指定したスライドに移動
        resetAutoplay(); // 自動再生をリセット
      }
    },
    [emblaApi, resetAutoplay],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev(); // 前のスライドに移動
      resetAutoplay(); // 自動再生をリセット
    }
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext(); // 次のスライドに移動
      resetAutoplay(); // 自動再生をリセット
    }
  }, [emblaApi, resetAutoplay]);

  const postItems = Object.keys(posts).map((key) => {
    return (
      <article className="post-item" key={key}>
        <Link
          href={"/" + props.type + "/" + posts[key].link}
          className="post-link uline"
          onClick={(e) => handleLinkClick(e, "/" + props.type + "/" + posts[key].link)}
        >
          <div className="post-content">
            <div className="thumbnail">
              {posts[key].thumbnail ? (
                <Image
                  src={posts[key].thumbnail.src}
                  alt={posts[key].thumbnail.alt + "のサムネイル"}
                  width={posts[key].thumbnail.w}
                  height={posts[key].thumbnail.h}
                  priority
                />
              ) : (
                <Image
                  src="/ships/adventure/common/dummy/dummy.jpg"
                  alt={posts[key].title + "のサムネイル"}
                  width={115}
                  height={115}
                  priority
                />
              )}
            </div>
            <div className="meta">
              <h2 className="title">
                <span className="clamp">
                  <span className="line">{posts[key].title}</span>
                </span>
              </h2>
              <time dateTime={posts[key].date} className="date" lang="en">
                {posts[key].date}
              </time>
              <div className="cats">
                {Object.keys(posts[key].cat).map((catKey) => {
                  return (
                    <span className="cat" key={catKey}>
                      {posts[key].cat[catKey].name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  });

  return (
    <div className="post-pickup" data-type={type}>
      <div className="post-pickup__head">
        <span className="bar is-left"></span>
        <svg className="onm is-left">
          <use href="#i-onm-02"></use>
        </svg>
        <h2 className="label" lang="en">
          PICK UP
        </h2>
        <svg className="onm is-right">
          <use href="#i-onm-02"></use>
        </svg>
        <span className="bar is-right"></span>
      </div>
      <div className="post-pickup__detail">
        <div className="post-slider" ref={emblaRef}>
          <div className="post-list">{postItems}</div>
        </div>
        <div className="post-tool-box">
          <button className="arrowButton isPrev" onClick={scrollPrev}>
            {arrow({ bg: "blue", color: "white" })}
          </button>
          <div className="dotButtons">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`dotButton ${index === selectedIndex ? "isActive" : ""}`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button className="arrowButton isNext" onClick={scrollNext}>
            {arrow({ bg: "blue", color: "white" })}
          </button>
        </div>
      </div>
    </div>
  );
}
