import styled, { keyframes } from 'styled-components';

export const Background = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
`;

const boxFade = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

export const BackgroundCover = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  margin: 0 auto;
  opacity: 1;
  animation: ${boxFade} 5s linear forwards;
`;

export const Video = styled.video`
  width: 90%;
`;

export const SideBarLeft = styled.img`
  height: 100vh;
  width: 5%;
  z-index: 1;
  float: left;
`;
export const SideBarRight = styled(SideBarLeft)`
  float: right;
`;
