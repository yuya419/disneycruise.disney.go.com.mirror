/**
 * @name img.tsx
 * @description 記事用 - 画像ブロック
 */
import Image from "next/image";
import "../styles/block.scss";

export function Img(props: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}) {
  const { src, alt, width, height, caption } = props;
  return (
    <figure className="m-b-img">
      <Image src={src} alt={alt} width={width} height={height} priority />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
