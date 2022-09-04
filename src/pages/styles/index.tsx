import React, { FC } from 'react';
import Layout from 'components/layout/Layout';
import Styles from 'components/styles/Styles';
import { GetStaticProps } from 'next';
import { findAllStyles } from 'repositories/styleRepository';
import { Style } from 'models/Style';

export interface IndexProps {
  styles: Style[];
}

const Index: FC<IndexProps> = props => {
  const { styles } = props;
  return (
    <Layout>
      <Styles styles={styles} />
    </Layout>
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
