import React, { FC } from 'react';
import Layout from 'components/layout/Layout';
import Styles from 'components/styles/Styles';
import { GetStaticProps } from 'next';
import { findAllStyles } from 'repositories/styleRepository';
import { IStyle } from 'models/IStyle';
import Meta from 'components/layout/Meta';

export interface IndexProps {
  styles: IStyle[];
}

const Index: FC<IndexProps> = props => {
  const { styles } = props;
  return (
    <>
      <Meta />
      <Layout>
        <Styles styles={styles} />
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
