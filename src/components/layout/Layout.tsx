import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Path from 'models/Path';
import * as $ from './Layout.styled';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = props => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <$.Container isIndex={pathname === Path.INDEX}>
      <$.Main>
        <Navigation />
        {children}
      </$.Main>
    </$.Container>
  );
};

export default Layout;
