import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
import test1 from '../public/images/test1.png';
import * as $ from './index.styled';

const Home: NextPage = () => {
  return (
    <>
      <$.Container>
        <$.ImageContainer>
          <Image src={test1} width={100} height={100} objectFit={'none'} />
        </$.ImageContainer>
        <$.BoldTitle>BABER</$.BoldTitle>
      </$.Container>
    </>
  );
};

export default Home;
