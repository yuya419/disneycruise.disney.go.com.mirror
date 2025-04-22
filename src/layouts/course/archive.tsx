/**
 * @name archive.tsx
 * @description コース一覧
 */
"use client";
import Image from "next/image";
import Breadcrumb from "@/components/modules/breadcrumb/breadcrumb";
import Title from "@/layouts/common/title";
import { Course as Post } from "@/layouts/post/article";
import "./styles/archive.scss";

export default function Archive() {
    const breadcrumbItems = [
        { label: "コース一覧", href: "/list/" },
    ];

    const course = {
        title: "ディズニーアドベンチャー",
        eyecatch: "/ships/adventure/common/dummy/course-list-thumbnail.jpg",
        posts: {
            "post01": {
                link: "detail",
                title: "シンガポール発着　3泊クルーズ",
                thumbnail: {
                    src: "/ships/adventure/common/dummy/course-list-post-eyecatch.jpg",
                    w: 240,
                    h: 160,
                }
            },
            "post02": {
                link: "detail",
                title: "シンガポール発着　3泊クルーズ",
                thumbnail: {
                    src: "/ships/adventure/common/dummy/course-list-post-eyecatch.jpg",
                    w: 240,
                    h: 160,
                }
            },
            "post03": {
                link: "detail",
                title: "シンガポール発着　3泊クルーズ",
                thumbnail: {
                    src: "/ships/adventure/common/dummy/course-list-post-eyecatch.jpg",
                    w: 240,
                    h: 160,
                }
            },
        }
    }

    return (
        <div className="arc-course">
            <Breadcrumb items={breadcrumbItems} />
            <Title type="onm" title="コース" en="Cource" />
            <section className="arc-course-post">
                <div className="container">
                    <div className="arc-course-post__head">
                        <div className="eyecatch">
                            <Image
                                src={course.eyecatch}
                                alt={course.title + "のアイキャッチ"}
                                width={1060}
                                height={570}
                                priority
                            />
                        </div>
                        <div className="title">
                            <h2>{course.title}　コース一覧</h2>
                            <div className="length">{Object.keys(course.posts).length}件</div>
                        </div>
                    </div>
                    <div className="arc-course-post__content">
                        <Post posts={course.posts} hlLevel="h3" />
                    </div>
                </div>
            </section>
        </div>
    )
}