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

  ${({ show }) =>
    show &&
    css`
      animation: ${BackgroundFade} 1s linear forwards;
    `}
`;

const BackgroundFade = keyframes`

  0% {
    opacity: 0.7;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 600px;
  height: 600px;
  background: rgb(255, 255, 255);
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const Image = styled.i<showProps>`
  display: block;
  width: 100%;
  height: 100%;
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  object-fit: cover;
`;
