import styled, { css, keyframes } from 'styled-components';

interface showProps {
  show?: boolean;
  src?: string;
}

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
      animation: ${BackgroundFade} .3s linear forwards;
    `}
`;

const BackgroundFade = keyframes`

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  min-width: 600px;
  max-width: 800px;
  transform: translate(-50%, -50%);
  z-index: 510;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
