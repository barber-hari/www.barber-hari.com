import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from 'components/layout/GlobalStyle';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import faviconSrc from 'public/favicon.ico';
import ogImageSrc from 'public/imgae-og.jpg';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="바버하리" />
        <meta property="og:image" content={ogImageSrc.src} />
        <meta property="og:description" content="BARBER-HARI SHOP" />
        <meta property="og:site_name" content="바버하리" />
        <meta property="og:locale" content="kr" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="사진" />
        <meta name="twitter:title" content="바버하리" />
        <meta name="twitter:description" content="BARBER-HARI SHOP" />
        <meta name="twitter:image" content={ogImageSrc.src} />
        <meta name="description" content="BARBER-HARI SHOP" />
        <title>BARBER-HARI 바버하리</title>
        <link rel="shortcut icon" href={faviconSrc.src} />
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
