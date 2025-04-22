/**
 * @name feature.tsx
 * @description 特集記事
 */
'use client';
import { useEffect, useState, useMemo, useRef } from "react";
import Image from "next/image";
import { Feature as Archive } from "@/layouts/post/arhive";
import Button from "@/components/modules/buttons/button";
import { GSAPMaskContainer } from "@/components/modules/gsap/container";
import "./styles/feature.scss";

export default function Feature() {
    const [isDivider, setIsDivider] = useState<React.JSX.Element[]>([]);
    const wrapRef = useRef<HTMLDivElement>(null);
    const hoverGroupRef = useRef<HTMLDivElement>(null);

    const posts = useMemo(() => ({
        "post01": {
            link: "post01",
            title: "演目が毎晩変わる！オリジナルシアター・ステージ・ショー",
            date: "2025.00.00",
            cat: {
                "cat01": { name: "カテゴリー1", },
                "cat02": { name: "カテゴリー2", }
            },
            thumbnail: {
                src: "/ships/adventure/common/dummy/feature.jpg",
                alt: "演目が毎晩変わる！オリジナルシアター・ステージ・ショー",
                w: 400,
                h: 560,
            }
        },
        "post02": {
            link: "post02",
            title: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
            date: "2025.00.00",
            cat: {
                "cat01": { name: "カテゴリー1", },
            },
            thumbnail: {
                src: "/ships/adventure/top/dining/img01.jpg",
                alt: "ピクサー映画『ウォーリー』の愛らしいロボットたちが贈る、愛と切なさが詰まった感動の物語",
                w: 400,
                h: 560,
            }
        },
        "post03": {
            link: "post03",
            title: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
            date: "2025.00.00",
            cat: {
                "cat01": { name: "カテゴリー1", },
            },
            thumbnail: {
                src: "/ships/adventure/top/dining/img02.jpg",
                alt: "『ベイマックス』のヒロとベイマックスと一緒に、エネルギッシュなミュージカルエクササイズに参加しましょう！",
                w: 400,
                h: 560,
            }
        },
        "post04": {
            link: "post04",
            title: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
            date: "2025.00.00",
            cat: {
                "cat01": { name: "カテゴリー1", },
            },
            thumbnail: {
                src: "/ships/adventure/top/dining/img03.jpg",
                alt: "夢と魔法がいっぱいの冒険航海、ディズニー・クルーズライン",
                w: 400,
                h: 560,
            }
        },
    }), []);

    // サムネイルリスト
    const PostThumbnailList = (props: {
        posts: {
            [key: string]: {
                thumbnail: {
                    src: string,
                    alt: string,
                    w: number,
                    h: number,
                }
            }
        },
    }) => {
        const thumbnailItems = Object.keys(props.posts).map((key, index) => {
            return (
                <div className="post-thumbnail-item" key={key}>
                    <Image
                        src={props.posts[key].thumbnail.src}
                        alt={props.posts[key].thumbnail.alt + "のサムネイル"}
                        width={props.posts[key].thumbnail.w}
                        height={props.posts[key].thumbnail.h}
                        priority
                    />
                </div>
            )
        });

        return (
            <div className="post-thumbnail-list">
                {thumbnailItems}
            </div>
        )
    }

    useEffect(() => {

        // 区切り線の高さを設定
        const updateDividerHeights = () => {
            const postItems = wrapRef.current?.querySelectorAll('.post-item');
            if (postItems) {
                const heights = Array.from(postItems).map((item) => item.getBoundingClientRect().height);
                setIsDivider(
                    heights.map((height, index) => (
                        <div className="divider" key={index} style={{ height: `${height}px` }}/>
                    ))
                );
            }
        }

        const resizeObserver = new ResizeObserver(updateDividerHeights);
        const wrapElement = wrapRef.current;
        if (wrapElement) {
            Array.from(wrapElement.querySelectorAll('.post-item')).forEach((item) => resizeObserver.observe(item));
        }

        return () => {
            resizeObserver.disconnect();
        }
    }, [posts]);

    useEffect(() => {
        const group = hoverGroupRef.current;
        if (!group) return;

        const links = group.querySelectorAll('.post-link');

        const handleMouseEvent = (e: Event) => {
            const target = e.target as HTMLElement;
            const data = target.dataset.post;
            group.dataset.post = data;
        }
        
        links.forEach((link) => link.addEventListener('mouseenter', (e) => handleMouseEvent(e as Event)));
    }, [posts]);

    return (
        <section className="t-feature" ref={wrapRef}>
            <GSAPMaskContainer tag="div" className="container" mask={"colorBlue"}>
                <hgroup className="t-feature__head">
                    <p lang="en">Special Feature</p>
                    <h2>特集記事</h2>
                </hgroup>
                <div className="t-feature__body">
                    <div className="feature" data-post="1" ref={hoverGroupRef}>
                        <PostThumbnailList posts={posts} />
                        <Archive posts={posts} hlLevel="h3" arrow={true} data={true} />
                        <div className="divider-list">
                            {isDivider}
                        </div>
                    </div>
                    {
                        posts && <Button type="secondary" label="View More" lang="en" link="/feature/" align="center" />
                    }
                </div>
            </GSAPMaskContainer>
        </section>
    )
}