import styled, { keyframes, css } from 'styled-components';

interface IsLoadedProps {
  isLoaded: boolean;
}

export const Background = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

const boxFade = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: .5;
  }
`;

export const BackgroundCover = styled.div<IsLoadedProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  margin: 0 auto;
  opacity: 1;
  z-index: 3;

  ${({ isLoaded }) => isLoaded && css`  animation: ${boxFade} 4s linear forwards;`}


`;

export const Video = styled.video`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
`;

interface SideBarProps extends IsLoadedProps {
  position: 'left' | 'right';
}

export const SideBar = styled.img<SideBarProps>`
  position: fixed;
  height: 100%;
  width: 100px;
  z-index: 4;
  transition: 2s;
  transition-timing-function: ease;

  ${({ position }) => 
    position === 'left' ? css`
      left: 0;
    ` : css`
      right: 0;
    `
  }

  ${({ isLoaded }) => isLoaded && css` width: 20px;`}
`;
