import Link from 'next/link';
import React, { FC } from 'react';
import * as $ from './Navigation.styled';
import Path from '../../models/Path';
import Icon from '../base/Icon';
import { useRouter } from 'next/router';
import barberHariIcon from 'public/images/home/icon-barberhari.png';

const Navigation: FC = () => {
  const { pathname } = useRouter();
  pathname === Path.INDEX;
  return (
    <$.Navigation>
      <$.Pages>
        <$.Page>
          <Link href={Path.INDEX}>
            <$.Logo
              src={barberHariIcon.src}
              alt="chill with homies cut and whaves"
            />
          </Link>
        </$.Page>
        <$.Page>
          <Link href={Path.INFO}>INFO</Link>
        </$.Page>
        <$.Page>
          <Link href={Path.STYLES}>STYLES</Link>
        </$.Page>

        {/*    <$.Page>
          <Icon iconType={'NAVER'} width={'30px'} height={'30px'} />
        </$.Page>*/}
      </$.Pages>
    </$.Navigation>
  );
};

export default Navigation;
