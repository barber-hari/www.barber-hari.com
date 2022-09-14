import styled, { css, keyframes } from 'styled-components';
import swiperCss from 'swiper/swiper.min.css';

export const Wrapper = styled.div`
  z-index: 100000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${swiperCss}
`;

export const Container = styled.div`
  z-index: 2000;
  width: 500px;
  height: 500px;

  & .swiper-container {
    width: 100%;
    height: 100%;
  }
`;

interface BackgroundProps {
  isVisible: boolean;
}
const BackgroundFade = keyframes`

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
export const Background = styled.div<BackgroundProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 5s linear;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${BackgroundFade} 0.3s linear;
    `}
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

interface ButtonProps {
  direction: 'left' | 'right';
}

export const SwiperButton = styled.button<ButtonProps>`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 1000;
  border: 4px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 100%;

  ${({ direction }) =>
    direction === 'right'
      ? css`
          right: 10px;
        `
      : css`
          left: 10px;
        `},
  & > i {
    opacity: 0.7;
  }
`;
