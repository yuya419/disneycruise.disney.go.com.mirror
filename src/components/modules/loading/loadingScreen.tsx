/**
 * @name LoadingScreen
 * @description ローディング画面
 */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./styles/loadingScreen.scss";

const preloadMedia = async (): Promise<void> => {
  const videos = Array.from(document.querySelectorAll("video"));
  if (videos.length === 0) return; // 動画がなければ即resolve
  const videoPromises = videos.map(
    (video) =>
      new Promise<void>((resolve) => {
        let resolved = false;
        const playAndResolve = () => {
          video.play().catch(() => {});
          resolve();
        };
        const onReady = () => {
          if (resolved) return;
          resolved = true;
          video.removeEventListener("canplaythrough", onReady);
          video.removeEventListener("error", onError);
          playAndResolve();
        };
        const onError = () => {
          if (resolved) return;
          resolved = true;
          video.removeEventListener("canplaythrough", onReady);
          video.removeEventListener("error", onError);
          playAndResolve();
        };
        // タイムアウト（5秒）
        const timeout = setTimeout(() => {
          if (resolved) return;
          resolved = true;
          video.removeEventListener("canplaythrough", onReady);
          video.removeEventListener("error", onError);
          playAndResolve();
        }, 5000);

        if (video.readyState === 4) {
          clearTimeout(timeout);
          onReady();
        } else {
          video.addEventListener("canplaythrough", onReady);
          video.addEventListener("error", onError);
        }
      }),
  );
  await Promise.all(videoPromises);
};

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.cursor = "wait";
    setLoading(true);

    preloadMedia().then(() => {
      // フェードアウトを少し余裕を持って表示
      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = "default";
      }, 400);
    });

    return () => {
      document.body.style.cursor = "default";
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key={`loader-${pathname}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="loading"
        />
      )}
    </AnimatePresence>
  );
}
