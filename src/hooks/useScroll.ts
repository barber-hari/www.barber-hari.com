import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(-1);

  const scrollHandler = () => {
    const { scrollTop } = document.querySelector('main') as HTMLElement;
    setScrollHeight(scrollTop);

    if (scrollTop - scrollHeight >= 0 && scrollDirection !== 1) {
      setScrollDirection(1);
    } else if (scrollTop - scrollHeight < 0 && scrollDirection !== -1) {
      setScrollDirection(-1);
    }
    console.log(scrollDirection);
    console.log(scrollTop, scrollHeight);
  };

  useEffect(() => {
    const element = document.querySelector('main');

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
