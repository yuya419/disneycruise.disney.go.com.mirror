/**
 * @name archive.tsx
 * @description 記事一覧
 */
"use client";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import Title from "@/layouts/title/title";
import { Post } from "@/layouts/post/article";
import { Pickup } from "@/layouts/post/pickup";
import "./styles/archive.scss";
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

export default function Archive(props: {
  type: "feature" | "news";
  breadcrumb: [{ label: string; href: string }];
  title: string;
  en: string;
  posts: posts["posts"];
}) {
  const { type, breadcrumb, title, en, posts } = props;
  const breadcrumbItems = breadcrumb;

  return (
    <div className="arc-post">
      <Breadcrumb items={breadcrumbItems} />
      <Title type="onm" title={title} en={en} />
      <div className="l-post">
        <Pickup type={type} posts={posts} />
        <Post
          type={type}
          posts={posts}
          perPage={10}
          hlLevel="h2"
          arrow={false}
        />
      </div>
    </div>
  );
}
