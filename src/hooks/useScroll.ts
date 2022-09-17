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

  const handleScroll = () => {
    const { scrollY } = window;
    setScrollHeight(scrollY);
    setScrollDirection(scrollY - scrollHeight < 0 ? -1 : 1);
    onScroll && onScroll(scrollHeight, scrollDirection);
  };

  useEffect(() => {
    const catchScroll = () => {
      window.addEventListener('scroll', handleScroll);
    };
    catchScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return {
    scrollHeight,
    scrollDirection,
  };
};

export default useScroll;
