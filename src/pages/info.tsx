import React from 'react';
import { NextPage } from 'next';
import Layout from 'components/layout/Layout';
import Contents from 'components/info/Contents';
import ImageModal from 'components/base/modal/ImageModal';
import Meta from 'components/layout/Meta';

const Index: NextPage = () => {
  return (
    <>
      <Meta />
      <Layout>
        <Contents />
      </Layout>
      <ImageModal />
    </>
  );
};

export default Index;
