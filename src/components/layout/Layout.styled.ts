import styled from 'styled-components';

interface ContainerProps {
  isIndex: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const Main = styled.main`
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;
