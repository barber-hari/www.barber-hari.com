import Link from 'next/link';
import React, { FC, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Path from 'models/Path';
import barberHariIcon from 'images/home/icon-barberhari.png';
import useScroll, { HandleScroll } from 'hooks/useScroll';
import useHover from 'hooks/useHover';
import * as $ from './Navigation.styled';

const Navigation: FC = () => {
  const { pathname } = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const timer = useRef<ReturnType<typeof setTimeout>>();
  const { ref, isHover } = useHover();

  const handleScroll: HandleScroll = (scrollHeight, scrollDirection) => {
    setIsVisible(!(scrollHeight > 150 && scrollDirection === 1));
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setIsVisible(scrollHeight < 150);
    }, 3000);
  };

  useScroll(handleScroll);

  return (
    <$.Navigation>
      <$.Pages isVisible={isVisible} ref={ref}>
        <$.Page isCurrentPage={pathname === Path.INFO}>
          <Link href={Path.INFO}>INFO</Link>
        </$.Page>
        <$.Page>
          <Link href={Path.INDEX}>
            <$.Logo
              src={barberHariIcon.src}
              alt="chill with homies cut and whaves"
            />
          </Link>
        </$.Page>
        <$.Page isCurrentPage={pathname === Path.STYLES}>
          <Link href={Path.STYLES}>STYLES</Link>
        </$.Page>
      </$.Pages>
    </$.Navigation>
  );
};

export default Navigation;
