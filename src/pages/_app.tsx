import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from 'components/layout/GlobalStyle';
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
