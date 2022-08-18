import styled from 'styled-components';

export const Background = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
`;

export const BackgroundCover = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000;
`;

export const Video = styled.video``;

export const SideBarLeft = styled.img`
  height: 100vh;
  width: 5%;
  z-index: 1;
  float: left;
`;
export const SideBarRight = styled(SideBarLeft)`
  float: right;
`;
