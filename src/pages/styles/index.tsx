import React from 'react';
import Layout from '../../components/layout/Layout';
import Artwork from '../../components/styles/Artwork';

export interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  return (
    <Layout>
      <Artwork />
    </Layout>
  );
};

export default Index;
