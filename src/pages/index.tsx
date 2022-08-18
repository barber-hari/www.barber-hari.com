import React from 'react';
import type { NextPage } from 'next';
import * as $ from './index.styled';
import Background from 'components/home/Background';
import Contents from 'components/home/Contents';

const Home: NextPage = () => {
  return (
    <$.Container>
      {/* <$.ImageContainer>
          <Image src={test1} width={100} height={100} objectFit={'none'} />
        </$.ImageContainer>
        <$.BoldTitle>BABER</$.BoldTitle> */}
      <Background />
      <Contents />
    </$.Container>
  );
};

export default Home;
