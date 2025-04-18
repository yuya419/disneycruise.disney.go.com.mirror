import { useEffect, useRef } from 'react';

export const useScrollJudge = () => {
    const directionRef = useRef<'top' | 'bottom' | 'reset'>('reset');

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            const current = directionRef.current;
            const scrollY = window.scrollY;

            if (current === 'top' && e.deltaY < 0) {
                e.preventDefault();
                window.scrollTo({ top: scrollY });
            } else if (current === 'bottom' && e.deltaY > 0) {
                e.preventDefault();
                window.scrollTo({ top: scrollY });
            }

            if(document.body.classList.contains('isNotScroll')) {
                if (current === 'top' && e.deltaY > 0) {
                    document.body.classList.remove('isNotScroll');
                } else if (current === 'bottom' && e.deltaY < 0) {
                    document.body.classList.remove('isNotScroll');
                }
            }
        };

        const onTouchMove = (e: TouchEvent) => {
            const current = directionRef.current;
            if (current === 'top' || current === 'bottom') {
                e.preventDefault();
            }
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchmove', onTouchMove, { passive: false });

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchmove', onTouchMove);
        };
    }, []);

    const setScrollLock = (dir: 'top' | 'bottom' | 'reset') => {
        directionRef.current = dir;
    };

    return setScrollLock;
};