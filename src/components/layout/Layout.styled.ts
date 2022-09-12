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

  @media (max-width: 1023px) {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
`;
