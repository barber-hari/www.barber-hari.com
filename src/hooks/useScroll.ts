import { useEffect, useState } from 'react';

interface UseScrollProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

export const useScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const target = document.querySelector('main');
  const option = { threshold: 0.2 };

  const scrollHandler = () => {
    setScrollHeight(target?.scrollTop as number);
  };

  useEffect(() => {
    console.log(scrollHeight);
  }, [scrollHeight]);

  useEffect(() => {
    const observer = new IntersectionObserver(scrollHandler, option);
    observer.observe(target as HTMLElement);

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
