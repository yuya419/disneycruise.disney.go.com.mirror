/**
 * @name slider.tsx
 * @description スライダーコンポーネント
 */
import { useRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './sliderDotButton'
import { PrevButton, NextButton, usePrevNextButtons } from './sliserArrowButton'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from "embla-carousel-class-names";
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade';
import "./styles/slider.scss";

interface SliderProps {
    type: "default" | "hero" | "small" | "carousel"
    slides: {
        dom: React.ReactNode
    }[]
    options?: EmblaOptionsType,
    autoplay?: boolean
    fade?: boolean
}

export const Slider = (props: SliderProps) => {
    const { type, slides, options, autoplay, fade } = props;

    // autoplayオプションを設定
    const autoPlay = autoplay ? useRef(Autoplay({ delay: 4000, stopOnInteraction: false })) : undefined;

    // fadeオプションを設定
    const fadePlugin = fade ? [Fade()] : [];

    // EmblaCarouselの初期化
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames(), ...(autoPlay?.current ? [autoPlay.current] : []), ...fadePlugin]);

    // dotButtonとprevNextButtonsのカスタムフックを使用
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, autoPlay)
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi, autoPlay)

    // sliderを生成
    const SliderItems = slides.map((slide, index) => (
        <div className="m-slider-item" key={index} role="listitem">{slide.dom}</div>
    ))

    return (
        <div className="m-slider" data-type={type}>
            <div className="m-slider-box" ref={emblaRef}>
                <div className="m-slider-list" role="list">
                    {SliderItems}
                </div>
            </div>

            <div className="m-slider-tool-box">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                <div className="dotButtons">
                    {scrollSnaps.map((_, index) => (
                        <DotButton key={index} onClick={() => onDotButtonClick(index)} className={'dotButton'.concat(index === selectedIndex ? ' isActive' : '')} />
                    ))}
                </div>
            </div>
        </div>
    )
}
