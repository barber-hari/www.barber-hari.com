import React from 'react';
import type { NextPage } from 'next';
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
    <Container>
      <Background />
      <Contents />
    </Container>
  );
};
export default Home;
