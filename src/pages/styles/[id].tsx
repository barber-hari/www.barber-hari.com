import React, { FC } from 'react';
import { IStyle } from 'models/IStyle';
import { GetStaticProps } from 'next';
import { findAllId, findAllStyles } from 'repositories/styleRepository';
import Layout from 'components/layout/Layout';
import Head from 'next/head';
import Detail from 'components/styles/Detail';

export interface DetailProps {
  styles: IStyle[];
  style: IStyle;
}

export interface Style {
  id: string;
  title: string;
  description: string;
  images: string[];
  thumb: string;
}

const DetailPage: FC<DetailProps> = props => {
  const { styles, style } = props;
  const { thumb, title } = style;

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="바버하리" />
        <meta property="og:image" content={thumb} />
        <meta property="og:description" content={`BARBER-HARI SHOP ${title}`} />
        <meta property="og:site_name" content="바버하리" />
        <meta property="og:locale" content="kr" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="사진" />
        <meta name="twitter:title" content="바버하리" />
        <meta
          name="twitter:description"
          content={`BARBER-HARI SHOP ${title}`}
        />
        <meta name="twitter:image" content={thumb} />
        <meta name="description" content={`BARBER-HARI SHOP ${title}`} />
        <title>BARBER-HARI 바버하리 {title}</title>
      </Head>
      <Layout>
        <Detail styles={styles} style={style} />
      </Layout>
    </>
  );
};

export default DetailPage;

export async function getStaticPaths() {
  return {
    paths: findAllId().map(id => ({ params: { id } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<DetailProps> = ({ params }) => {
  let style: IStyle = {
    id: '',
    title: '',
    thumb: '',
    description: '',
    images: [],
  };
  const styles = findAllStyles().filter(targetStyle => {
    if (targetStyle.id === params?.id) {
      style = targetStyle;
      return false;
    }
    return true;
  });
  return {
    props: {
      style,
      styles,
    },
  };
};
