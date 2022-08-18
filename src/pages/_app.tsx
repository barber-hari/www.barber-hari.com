import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import GlobalStyle from 'components/layout/GlobalStyle';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
