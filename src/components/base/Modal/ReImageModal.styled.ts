import styled, { css, keyframes } from 'styled-components';

interface showProps {
  show?: boolean;
  src?: string;
}

const BackgroundFade = keyframes`

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Background = styled.div<showProps>`
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

interface ImageProps {
  index: number;
  curruntIndex: number;
}

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  z-index: 510;
  overflow: hidden;
  align-items: center;
`;


export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  float: none;
  object-fit: cover;
  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  transition: 1s;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;

  transform: translateX(${({ index, curruntIndex }) => (index - curruntIndex) * 100}%);

  ${({ index, curruntIndex }) => index === curruntIndex && css`
    opacity: 1;
  `}
`;


