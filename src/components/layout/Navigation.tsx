import Link from 'next/link';
import React, { FC } from 'react';
import * as $ from './Navigation.styled';
import Home from '../../pages/index';

const Navigation: FC = () => {
  return (
    <$.Navigation>
      <$.Pages>
        <$.Page>
          <Link href={'/'}>Home</Link>
        </$.Page>
      </$.Pages>
    </$.Navigation>
  );
};

export default Navigation;
