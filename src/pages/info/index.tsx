import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/layout/Layout';
import Introduce from '../../components/info/Introduce';

const Index: NextPage = () => {
  return (
    <Layout>
      <Introduce />
    </Layout>
  );
};

export default Index;
