import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const scrollHandler = () => {
    setScrollHeight(document.querySelector('main')?.scrollTop as number);
  };

  useEffect(() => {
    console.log(scrollHeight);
  }, [scrollHeight]);

  useEffect(() => {
    const target = document.querySelector('main');

    const catchScroll = () => {
      target?.addEventListener('scroll', scrollHandler);
    };
    catchScroll();
    return () => {
      target?.removeEventListener('scroll', scrollHandler);
    };
  });
  return {
    scrollHeight,
  };
};
