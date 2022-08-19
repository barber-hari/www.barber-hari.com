import React, { FC, ReactNode } from 'react';
import * as $ from './Layout.styled';
import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = props => {
  const { children } = props;
  return (
    <$.Container>
      <Navigation />
      <main>{children}</main>
    </$.Container>
  );
};

export default Layout;
