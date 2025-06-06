import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRefContext } from "@/hooks/useRefContext";

type HeadColor = "white" | "blue";

export function useHeadColor(setIsColor: (color: HeadColor) => void) {
  const pathname = usePathname();

  useEffect(() => {
    const whitePaths = [
      "/",
      "/themed-areas/",
      "/entertainment/",
      "/dining/",
      "/accommodations/",
      "/kids-clubs/",
      "/spa-lounges-bar/",
      "/concierge/",
    ];
    setIsColor(whitePaths.includes(pathname) ? "white" : "blue");
  }, [pathname, setIsColor]);
}

export function useHeaderHeight() {
  const { drawerButton } = useRefContext();

  useEffect(() => {
    function updateDrawerButtonHeight() {
      const rect = drawerButton.current?.getBoundingClientRect();
      const height = rect ? rect.height : 0;

      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`,
      );
    }

    updateDrawerButtonHeight();
    window.addEventListener("resize", updateDrawerButtonHeight);

    return () => {
      window.removeEventListener("resize", updateDrawerButtonHeight);
      document.documentElement.style.setProperty("--header-height", "0px");
    };
  }, [drawerButton]);
}
