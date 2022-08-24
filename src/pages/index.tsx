import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Background from 'components/home/Background';
import Contents from 'components/home/Contents';
import styled from 'styled-components';

 const Container = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  color: #fff;
  overflow-y: auto;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BARBER-HARI 바버하리</title>
        <meta name="description" content="바버하리" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container>
        <Background />
        <Contents />
      </Container>
    </>
  );
};

export default Home;
