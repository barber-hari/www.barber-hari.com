import Link from 'next/link';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Path from 'models/Path';
import barberHariIcon from '../../../public/images/home/icon-barberhari.png';
import * as $ from './Navigation.styled';

const Navigation: FC = () => {
  const { pathname } = useRouter();

  return (
    <$.Navigation>
      <$.Pages>
        <$.Page isCurruntPage={pathname === Path.INFO}>
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

        <$.Page isCurruntPage={pathname === Path.STYLES}>
          <Link href={Path.STYLES}>STYLES</Link>
        </$.Page>
      </$.Pages>
    </$.Navigation>
  );
};

export default Navigation;
