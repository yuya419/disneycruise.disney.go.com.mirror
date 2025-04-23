/**
 * @name slider.tsx
 * @description 記事用 - スライダーブロック
 */
import Image from 'next/image';
import { Slider as MSlider } from '@/components/modules/slider/slider';

export function Slider(props: {
    images: string[];
}) {
    const { images } = props;

    return (
        <div className="m-b-slider">
            <MSlider
                type="default"
                slides={images.map((src, index) => ({ dom: <Image src={src} alt={`スライド${index + 1}`} width={824} height={463} priority/> }))}
                options={{ loop: true }}
                autoplay={true}
            />
        </div>
    );
}