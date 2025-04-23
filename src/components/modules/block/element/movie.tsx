/**
 * @name movie.tsx
 * @description 記事用 - 動画ブロック
 * @description 動画ブロックは、動画ファイル、もしくはYouTubeを埋め込むためのコンポーネントです。
 * @property type 動画の種類を指定します。videoの場合は動画ファイル、embedの場合は埋め込み動画を指定します。
 * @property src 動画のURLを指定します。動画ファイルの場合は動画のURL、埋め込み動画の場合はiframeのsrc属性を指定します。
 */
import { useRef } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

export function Movie(props: {
    type: "video" | "youtube";
    src: string;
}) {
    const { type, src } = props;
    const videoRef = useRef<HTMLVideoElement>(null);
    const playBtnRef = useRef<HTMLButtonElement>(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            videoRef.current.setAttribute("controls", "true");
            if (playBtnRef.current) {
                playBtnRef.current.classList.add("isHide");
            }
        }
    };

    if (videoRef.current) {
        videoRef.current.oncontextmenu = (e) => e.preventDefault();
    }

    const id = () => {
        if (type === "youtube") {
            // URLから、動画IDを取得する
            const url = new URL(src);
            const videoId = url.searchParams.get("v") || url.pathname.split("/").pop();
            return videoId
        }
    }

    return (
        <div className="m-b-movie">
            <div className="m-b-movie-el">
                {type === "video" ? (
                    <>
                        <video muted playsInline preload="metadata" ref={videoRef} controlsList="nodownload nofullscreen noplaybackrate">
                            <source src={src as string} type="video/mp4" />
                        </video>
                        <div className="movie-overlay">
                            <button type="button" className="icon" onClick={playVideo} ref={playBtnRef}>
                                <svg className="i-polygon">
                                    <use xlinkHref="#i-polygon"></use>
                                </svg>
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <YouTubeEmbed videoid={id() || ""} />
                    </>
                )}
            </div>
        </div>
    );
}