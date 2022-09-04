import styled from 'styled-components';

interface ContainerProps {
  isIndex: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

export const Main = styled.main`
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media all and (min-width: 768px) and (max-width: 1023px) {
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
  @media all and (min-width: 320px) and (max-width: 479px) {
  }
`;
