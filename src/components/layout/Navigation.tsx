import Link from 'next/link';
import React, { FC, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Path from 'models/Path';
import barberHariIcon from 'images/home/icon-barberhari.png';
import useScroll from 'hooks/useScroll';
import * as $ from './Navigation.styled';

const Navigation: FC = () => {
  const { pathname } = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const timer = useRef<ReturnType<typeof setTimeout>>();

  const { scrollHeight } = useScroll((height, direction) => {
    setIsVisible(!(height > 50 && direction === 1));
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setIsVisible(height < 50);
    }, 3000);
  });

  const handleMouseOver = () => {
    timer.current && clearTimeout(timer.current);
  };
  const handleMouseLeave = () => {
    timer.current = setTimeout(() => {
      setIsVisible(scrollHeight < 50);
    }, 3000);
  };

  return (
    <$.Navigation
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseOver}
    >
      <$.Pages isVisible={isVisible}>
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
