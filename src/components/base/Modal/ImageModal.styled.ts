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

export const Container = styled.div`
  display: flex;
  position: fixed;
  left: 50%;
  top: 50%;
  max-width: 600px;
  max-height: 600px;
  transform: translate(-50%, -50%);
  z-index: 510;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  float: none;
  object-fit: cover;
`;
