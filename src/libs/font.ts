/**
 * @name font.ts
 * @description google fontを読み込む
 */
import { Noto_Sans_JP, Philosopher } from "next/font/google";

const NotoSansJP = Noto_Sans_JP({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--noto-sans-jp",
});

const PhilosopherFont = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--philosopher",
});

export { NotoSansJP, PhilosopherFont };
