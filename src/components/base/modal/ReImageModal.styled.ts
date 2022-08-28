import styled, { css, keyframes } from 'styled-components';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface ModalContainerProps {
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

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 500;

  ${({ show }) =>
    show &&
    css`
      animation: ${BackgroundFade} 0.3s linear forwards;
    `}
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 510;
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  z-index: 520;
  overflow: hidden;
  align-items: center;
`;

interface ImageProps {
  currentIndex: number;
  index: number;
}

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  transition: 1s;
  position: absolute;
  opacity: 0;
  transform: translateX(
    ${({ index, currentIndex }) => (index - currentIndex) * 100}%
  );

  ${({ index, currentIndex }) =>
    index === currentIndex &&
    css`
      opacity: 1;
    `};
`;

export const LeftButtonIcon = styled(AiFillCaretLeft)`
  width: 50px;
  height: 50px;
  color: #fff;
`;
export const RightButtonIcon = styled(AiFillCaretRight)`
  width: 50px;
  height: 50px;
  color: #fff;
`;
