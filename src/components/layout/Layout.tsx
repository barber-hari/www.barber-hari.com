import React, { FC, ReactNode } from 'react';
import * as $ from './Layout.styled';
import Navigation from './Navigation';
import { useRouter } from 'next/router';
import Path from 'models/Path'

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = props => {
  const { children } = props;
  const { pathname } = useRouter();


  return (
    <$.Container isIndex={pathname === Path.INDEX}>
      <Navigation />
      <$.Main >{children}</$.Main>
    </$.Container>
  );
};

export default Layout;
