import React from 'react';
import type { NextPage } from 'next';
import Background from 'components/home/Background';
import Contents from 'components/home/Contents';
import * as $ from './index.styled';

const Home: NextPage = () => {
  return (
    <$.Container>
      <Background />
      <Contents />
    </$.Container>
  );
};

export default Home;
