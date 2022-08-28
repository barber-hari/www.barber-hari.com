import Link from 'next/link';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import barberHariIcon from 'public/images/home/icon-barberhari.png';
import * as $ from './Navigation.styled';
import Path from '../../models/Path';

const Navigation: FC = () => {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <$.Navigation>
      <$.Pages>
        <$.Page pathname={pathname} id={'/info'}>
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

        <$.Page pathname={pathname} id={'/styles'}>
          <Link href={Path.STYLES}>STYLES</Link>
        </$.Page>
      </$.Pages>
    </$.Navigation>
  );
};

export default Navigation;
