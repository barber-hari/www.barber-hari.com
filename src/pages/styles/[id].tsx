import React, { FC } from 'react';
import { Style } from 'models/Style';
import { GetStaticProps } from 'next';
import { findAllId, findAllStyles } from 'repositories/styleRepository';
import Layout from 'components/layout/Layout';
import Detail from '../../components/styles/Detail';

export interface DetailProps {
  styles: Style[];
  style: Style;
}

const DetailPage: FC<DetailProps> = props => {
  const { styles, style } = props;

  return (
    <Layout>
      <Detail styles={styles} style={style} />
    </Layout>
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
  let style: Style = {
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
