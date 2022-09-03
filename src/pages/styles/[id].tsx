import React, { FC } from 'react';
import { Style } from 'models/style';
import { GetStaticProps } from 'next';
import { findAllId, findAllStyles } from 'repositories/detailRepository';

export interface DetailProps {
  styles: Style[];
}

const DetailPage: FC<DetailProps> = props => {
  const { styles } = props;
  return <div>{styles[0].id}</div>;
};

export default DetailPage;

export async function getStaticPaths() {
  const paths = findAllId().map(id => ({
    params: { id },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<DetailProps> = () => {
  const allStyles = findAllStyles();

  return {
    props: {
      styles: allStyles,
    },
  };
};
