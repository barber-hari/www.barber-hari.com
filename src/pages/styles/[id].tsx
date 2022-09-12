import React, { FC } from 'react';
import { IStyle } from 'models/IStyle';
import { GetStaticProps } from 'next';
import { findAllId, findAllStyles } from 'repositories/styleRepository';
import Layout from 'components/layout/Layout';
import Detail from 'components/styles/Detail';
import Meta from 'components/layout/Meta';

export interface DetailProps {
  styles: IStyle[];
  style: IStyle;
  pageId: string;
}

export interface Style {
  id: string;
  title: string;
  description: string;
  images: string[];
  thumb: string;
}

const DetailPage: FC<DetailProps> = props => {
  const { styles, style, pageId } = props;
  const { thumb, title } = style;

  return (
    <>
      <Meta
        pageTitle="BARBER-HARI 바버하리"
        ogDescription={`BARBER-HARI SHOP ${title}`}
        ogTitle="BARBER-HARI 바버하리"
        ogImage={`www.barberhari.com/styles/${pageId}/${thumb}`}
      />
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
      pageId: params?.id?.toString() || '',
      style,
      styles,
    },
  };
};
