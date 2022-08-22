import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 600px;
  height: 600px;
  background: rgb(255, 255, 255);
  transform: translate(-50%, -50%);
`;
