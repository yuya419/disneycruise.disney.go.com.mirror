/**
 * @name slider.tsx
 * @description 記事用 - スライダーブロック
 */

export function Slider(props: {
    images: string[];
}) {
    const { images } = props;

    return (
        <div className="m-b-slider">
            <p>スライダーが入ります。</p>
        </div>
    );
}