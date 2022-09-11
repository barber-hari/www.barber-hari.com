import React from 'react';
import { NextPage } from 'next';
import Layout from 'components/layout/Layout';
import Introduce from 'components/info/Introduce';
import ImageModal from 'components/base/modal/ImageModal';

const Index: NextPage = () => {
  return (
    <>
      <Layout>
        <Introduce />
      </Layout>
      <ImageModal />
    </>
  );
};

export default Index;
