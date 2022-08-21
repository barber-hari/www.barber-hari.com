import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2b282b;
`;

export const Main = styled.main`
  width: 1024px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 900px;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
  @media all and (min-width: 320px) and (max-width: 479px) {
  }
`;
