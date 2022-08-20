import Link from 'next/link';
import React, { FC } from 'react';
import * as $ from './Navigation.styled';
import Path from '../../models/Path';
import Icon from '../base/Icon';

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
        <$.Page>
          <Icon iconType={'NAVER'} width={'30px'} height={'30px'} />
        </$.Page>
      </$.Pages>
    </$.Navigation>
  );
};

export default Navigation;
