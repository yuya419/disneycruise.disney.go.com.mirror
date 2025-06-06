/**
 * @name Container.tsx
 * @description GSAPのアニメーションを実行するためのコンテナコンポーネント
 */
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRefContext } from "@/hooks/useRefContext";
import "@/layouts/container/styles/container.scss";
import "./styles/container.scss";

interface ContainerProps {
  children: React.ReactNode;
  tag: "section" | "div";
  id?: string;
  className?: string;
  toggle: {
    logo: boolean;
    color: "white" | "blue" | null;
    movie?: {
      video: "hero" | "water" | null;
      state: boolean;
    };
  };
}

export function GSAPToggleContainer({
  children,
  tag,
  id,
  className,
  toggle,
}: ContainerProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const { hero, water } = useRefContext();

  const Tag = tag;

  const animation = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const body = document.body;
      const container = containerRef.current;
      if (!container) return;

      const movieState = (
        ref: React.RefObject<HTMLElement | null>,
        state: boolean,
      ) => {
        if (ref.current) {
          const video = ref.current?.querySelector("video");
          state ? video?.play() : video?.pause();
        }
      };

      const options = {
        logo: {
          enter: () => body.classList.add("logoShow"),
          leaveBack: () => body.classList.remove("logoShow"),
        },
        white: {
          enter: () => (body.dataset.headColor = "white"),
          leaveBack: () => (body.dataset.headColor = "blue"),
        },
        blue: {
          enter: () => (body.dataset.headColor = "blue"),
          leaveBack: () => (body.dataset.headColor = "white"),
        },
      };

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom top",
        onEnter: () => {
          if (toggle.logo) options.logo.enter();
          if (toggle.color === "white") options.white.enter();
          if (toggle.color === "blue") options.blue.enter();
          if (toggle.movie)
            movieState(
              toggle.movie.video === "hero" ? hero : water,
              toggle.movie?.state,
            );
        },
        onLeaveBack: () => {
          if (toggle.logo) options.logo.leaveBack();
          if (toggle.color === "white") options.white.leaveBack();
          if (toggle.color === "blue") options.blue.leaveBack();
          if (toggle.movie)
            movieState(
              toggle.movie.video === "hero" ? hero : water,
              !toggle.movie?.state,
            );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  };

  useEffect(() => {
    const ctx = animation();
    return () => ctx();
  }, []);

  return (
    <Tag id={id} className={`${className}`} ref={containerRef}>
      {children}
    </Tag>
  );
}

export function GSAPMaskToggle(props: { mask: "water" | "blue" | "white" }) {
  const troggerRef = useRef<HTMLDivElement>(null);
  const { mask } = props;
  const { hero, water, colorBlue, colorWhite } = useRefContext();

  const animation = () => {
    gsap.registerPlugin(ScrollTrigger);

    const maskEl =
      mask === "water"
        ? water.current
        : mask === "blue"
          ? colorBlue.current
          : colorWhite.current;

    // maskPosition
    const maskPosition = (el: HTMLDivElement, progress: number) => {
      let maskPosition = {
        start: { x: 30, y: -30 },
        end: { x: 60, y: 77 },
      };
      let maskX =
        maskPosition.start.x +
        (maskPosition.end.x - maskPosition.start.x) * progress;
      let maskY =
        maskPosition.start.y +
        (maskPosition.end.y - maskPosition.start.y) * progress;
      el.style.setProperty("--mask-position", `${maskX}% ${maskY}%`);
    };

    const ctx = gsap.context(() => {
      const trigger = troggerRef.current;
      if (!trigger) return;

      ScrollTrigger.create({
        trigger: trigger,
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
        invalidateOnRefresh: true,
        onEnter: () => maskEl?.classList.add("isHide"),
        onLeaveBack: () => maskEl?.classList.remove("isHide"),
        onUpdate: (self) => {
          let progress = self.progress;
          maskPosition(maskEl as HTMLDivElement, progress);
        },
      });
    }, troggerRef);

    return () => ctx.revert();
  };

  useEffect(() => {
    const ctx = animation();
    return () => ctx();
  }, []);

  return <div className="mask-scroll-area" ref={troggerRef}></div>;
}
