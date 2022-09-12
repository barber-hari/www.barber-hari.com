import React, { FC } from 'react';
import Head from 'next/head';
import faviconSrc from '../../../public/favicon.ico';
import ogImageSrc from '../../../public/imgae-og.jpg';

interface MetaProps {
  ogTitle?: string;
  ogImage?: string;
  ogDescription?: string;
  pageTitle?: string;
}

const Meta: FC<MetaProps> = props => {
  const {
    ogTitle = '바버하리',
    ogImage = ogImageSrc.src,
    ogDescription = 'BARBER-HARI SHOP',
    pageTitle = 'BARBER-HARI 바버하리',
  } = props;
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, viewport-fit=contain" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content={ogTitle} />
      <meta property="og:locale" content="kr" />
      <meta property="og:url" content="www.barberhari.com" />
      <meta name="twitter:card" content="사진" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="description" content={ogDescription} />
      <title>{pageTitle}</title>
      <link rel="shortcut icon" href={faviconSrc.src} />
    </Head>
  );
};

export default Meta;
