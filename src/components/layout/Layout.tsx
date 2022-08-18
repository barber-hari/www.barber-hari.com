import React, { FC, ReactNode } from 'react';
import * as $ from './Layout.styled';
import GlobalStyle from './GlobalStyle';
import { Navigation } from './Navigation.styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = props => {
  const { children } = props;
  return (
    <>
      <GlobalStyle />
      <$.Wrapper>
        <$.Main>{children}</$.Main>
      </$.Wrapper>
    </>
  );
};

export default Layout;
