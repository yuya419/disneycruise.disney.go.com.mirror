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

export function useHeaderHeight(): number {
    const { header } = useRefContext();
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        function updateHeaderHeight() {
            const rect = header.current?.getBoundingClientRect();
            const height = rect ? (rect.height + rect.top * 2) * -1 : 0;
            setHeaderHeight(height);
        }

        updateHeaderHeight();
        window.addEventListener("resize", updateHeaderHeight);

        return () => {
            window.removeEventListener("resize", updateHeaderHeight);
            setHeaderHeight(0);
        };
    }, [header]);

    return headerHeight;
}