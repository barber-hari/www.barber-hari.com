import Link from 'next/link';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Path from 'models/Path';
import barberHariIcon from 'images/home/icon-barberhari.png';
import { useScroll } from 'hooks/useScroll';
import * as $ from './Navigation.styled';

const Navigation: FC = () => {
  const { pathname } = useRouter();
  const { scrollHeight } = useScroll();
  12;

  return (
    <$.Navigation>
      <$.Pages scroll={scrollHeight}>
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
