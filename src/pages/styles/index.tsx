import React, { FC } from 'react';
import Layout from 'components/layout/Layout';
import Contents from 'components/styles/Contents';
import { GetStaticProps } from 'next';
import { findAllStyles } from 'repositories/styleRepository';
import { HairStyle } from 'models/HairStyle';
import Meta from 'components/layout/Meta';

export interface IndexProps {
  styles: HairStyle[];
}

const Index: FC<IndexProps> = props => {
  const { styles } = props;
  return (
    <>
      <Meta />
      <Layout>
        <Contents styles={styles} />
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<IndexProps> = () => {
  return {
    props: {
      styles: findAllStyles(),
    },
  };
};
