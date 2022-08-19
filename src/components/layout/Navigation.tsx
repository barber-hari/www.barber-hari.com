import Link from 'next/link';
import React, { FC } from 'react';
import * as $ from './Navigation.styled';
import Path from '../../models/Path';

const Navigation: FC = () => {
  return (
    <$.Navigation>
      <$.Pages>
        <$.Page>
          <Link href={Path.INDEX}>HOME</Link>
        </$.Page>
        <$.Page>
          <Link href={Path.INFO}>INFO</Link>
        </$.Page>
        <$.Page>
          <Link href={Path.STYLES}>STYLE</Link>
        </$.Page>
      </$.Pages>
    </$.Navigation>
  );
};

export default Navigation;
