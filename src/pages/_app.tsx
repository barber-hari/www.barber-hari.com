import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from 'components/layout/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
