import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Path from 'models/Path';
import { useRecoilValue } from 'recoil';
import { UIState } from 'store/UIState';
import * as $ from './Layout.styled';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = props => {
  const { children } = props;
  const { pathname } = useRouter();
  const { isVisible } = useRecoilValue(UIState);

  return (
    <$.Container isIndex={pathname === Path.INDEX} aria-hidden={isVisible}>
      <$.Main>
        <Navigation />
        {children}
      </$.Main>
    </$.Container>
  );
};

export default Layout;
