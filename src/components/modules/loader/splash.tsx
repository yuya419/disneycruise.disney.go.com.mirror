/**
 * @name splash.tsx
 * @description 初回ロード画面
 */
"use client";

import { useEffect, useRef, useState } from "react";
import { Logo_s } from "@/libs/symbol";
import "./styles/loader.scss";
import { set } from "date-fns";

export function Splash() {
  const [isLoaded, setIsLoaded] = useState(false);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: MutationObserver | null = null;
    let timeoutId: NodeJS.Timeout;

    const checkAndPlayVideo = () => {
      const videos = Array.from(document.querySelectorAll("video.video")) as HTMLVideoElement[];
      if (videos.length > 0) {
        // 1000ms待機してから再生・スプラッシュ非表示
        setTimeout(() => {
          videos.forEach((video, i) => {
            video.play().catch(() => { });
          });
          setIsLoaded(true);
        }, 1000);
        return true;
      }
      return false;
    };

    // すでにvideoがある場合
    if (checkAndPlayVideo()) return;

    // 動画がまだなければMutationObserverで監視
    observer = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (checkAndPlayVideo()) {
          observer?.disconnect();
        }
      }, 50);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // 3秒経ってもvideoが現れなければ諦めて消す
    const failSafe = setTimeout(() => {
      setIsLoaded(true);
      observer?.disconnect();
    }, 3000);

    return () => {
      observer?.disconnect();
      clearTimeout(timeoutId);
      clearTimeout(failSafe);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && splashRef.current) {
      splashRef.current.classList.add("isHidden");
      setTimeout(() => {
        splashRef.current?.remove();
      }, 1000);
    }
  }, [isLoaded]);

  return (
    <div className="splash" ref={splashRef}>
      <Logo_s />
    </div>
  );
}
