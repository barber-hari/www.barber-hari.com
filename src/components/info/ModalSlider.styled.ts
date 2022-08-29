import styled, { css, keyframes } from 'styled-components';
import 'swiper/swiper-bundle.css';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  z-index: 1100;
  width: 500px;
  height: 500px;

  & .swiper-container {
  }

  & .swiper-slide {
  }
`;

interface BackgroundProps {
  show: boolean;
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
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 5s linear;
  ${({ show }) =>
    show &&
    css`
      animation: ${BackgroundFade} 0.3s linear;
    `}
`;

interface ButtonProps {
  direction: string;
}

export const Image = styled.img`
  /* border-radius: 10px; */
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.button<ButtonProps>`
  top: -25vh;
  z-index: 1000;
  ${({ direction }) =>
    direction == 'right' &&
    css`
      float: right;
    `}
  &:hover {
    color: red;
  }
`;

export const LeftButtonIcon = styled(AiFillCaretLeft)`
  width: 40px;
  height: 40px;
  color: #fff;
`;
export const RightButtonIcon = styled(AiFillCaretRight)`
  width: 40px;
  height: 40px;
  color: #fff;
`;
