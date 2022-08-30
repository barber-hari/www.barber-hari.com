import React from 'react';
import Layout from '../../components/layout/Layout';
import Artwork from '../../components/styles/Artwork';
import { useRouter } from 'next/router';
import { STYLES_IMAGES } from '../../models/Image';

export interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const router = useRouter();
  const onClick = ({ id, src }) => {
    router.push(
      {
        pathname: `/styles/detail/${id}`,
        query: {
          id,
          src,
        },
      },
      `/styles/detail/${id}`
    );
  };
  return (
    <Layout>
      <Artwork />
    </Layout>
  );
};

export default Index;
