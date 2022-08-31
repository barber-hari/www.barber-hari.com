import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import {
  getAllDetailIds,
  getDetailData,
} from '../../../repositories/detailRepository';

export interface DetailPageProps {
  title: string;
  body: string;
  image: string;
}

const DetailPage: FC<DetailPageProps> = props => {
  const { title, body, image } = props;
  const router = useRouter();
  const { id } = router.query;

  return <div></div>;
};

export default DetailPage;

export async function getStaticPaths() {
  const paths = getAllDetailIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const detailData = await getDetailData(params?.id);
  return {
    props: {
      detailData,
    },
  };
};
