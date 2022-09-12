import { useEffect, useState } from 'react';

export type ScrollDirection = -1 | 1;
export type HandleScroll = (
  scrollHeight: number,
  scrollDirection: ScrollDirection
) => void;

interface UseScroll {
  (onScroll?: HandleScroll): {
    scrollHeight: number;
    scrollDirection: ScrollDirection;
  };
}

const useScroll: UseScroll = onScroll => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(-1);

  const scrollHandler = () => {
    const scrollTop = window.scrollY;
    setScrollHeight(scrollTop);
    scrollTop - scrollHeight < 0
      ? setScrollDirection(-1)
      : setScrollDirection(1);
    onScroll && onScroll(scrollHeight, scrollDirection);
  };

  useEffect(() => {
    const element = window;

    const catchScroll = () => {
      element?.addEventListener('scroll', scrollHandler);
    };
    catchScroll();
    return () => {
      element?.removeEventListener('scroll', scrollHandler);
    };
  });

  return {
    scrollHeight,
    scrollDirection,
  };
};

export default useScroll;
