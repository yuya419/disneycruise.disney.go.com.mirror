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
import { useHandleLinkClick } from "@/hooks/usePageTransition";
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
  const exTitle = title.length > 30 ? title.slice(0, 30) + "…" : title;
  const breadcrumbItems = [
    { label: label, href: "/" + type + "/" },
    { label: exTitle, href: "/" + type + "/" + link + "/" },
  ];

  /**
   * @name EntryHeader
   * @description 記事のヘッダー部分
   */
  const EntryHeader = () => {
    return (
      <div className="entry-header">
        <h1>{title}</h1>
        <div className="meta">
          <time dateTime={date} className="date" lang="en">
            {date}
          </time>
          <div className="cats">
            {Object.keys(cat).map((catKey) => (
              <span className="cat" key={catKey}>
                {cat[catKey].name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  /**
   * @name EntryContent
   * @description 記事のコンテンツ部分
   */
  const EntryContent = () => {
    return (
      <div className="entry-body">
        <p>
          いつもご利用いただき、誠にありがとうございます。
          <br />
          <br />
          本日、ホームページをリニューアルしましたので、お知らせいたします。
          <br />
          <br />
          今回のリニューアルでは、【○○○○○】を変更し、より見やすいサイトの向上を図りました。
          <br />
          <br />
          引き続きサービス向上のため、コンテンツの充実を図り、皆様のお役に立てるホームページ運営を目指してまいりますので、今後とも何卒お願い申し上げます。
        </p>
      </div>
    );
  };

  /**
   * @name EntryFooter
   * @description 記事のフッター部分
   */
  const EntryFooter = () => {

    const handleLinkClick = useHandleLinkClick();

    const prevLink = prevnext.prev
      ? "/" + type + "/" + prevnext.prev + "/"
      : "";
    const nextLink = prevnext.next
      ? "/" + type + "/" + prevnext.next + "/"
      : "";

    return (
      <div className="entry-footer">
        <div className="back-link">
          <Link href={"/" + type + "/"} className="back-link-el uline" onClick={(e) => handleLinkClick(e, "/" + type + "/")}>
            <span className="icon">
              <svg className="i-index-2">
                <use href="#i-index-2"></use>
              </svg>
            </span>
            <span className="label" lang="en">
              <span className="line">Index</span>
            </span>
          </Link>
        </div>
        <div className="pagination">
          <div className="pager-link">
            <Link
              href={prevLink}
              className="pager-link-el uline"
              data-type="prev"
              {...(prevnext.prev ? {} : { "aria-disabled": "true" })}
              onClick={(e) => handleLinkClick(e, prevLink)}
            >
              {arrow({ bg: "blue", color: "white" })}
              <span className="label" lang="en">
                <span className="line">Prev</span>
              </span>
            </Link>
          </div>
          <div className="pager-link">
            <Link
              href={nextLink}
              className="pager-link-el uline"
              data-type="next"
              {...(prevnext.next ? {} : { "aria-disabled": "true" })}
              onClick={(e) => handleLinkClick(e, nextLink)}
            >
              {arrow({ bg: "blue", color: "white" })}
              <span className="label" lang="en">
                <span className="line">Next</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

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
