import styled, { css } from 'styled-components';

interface SlideButtonProps {
  direction: string;
}

export const SlideButton = styled.button<SlideButtonProps>`
  z-index: 10000;

  ${({ direction }) =>
    direction === 'direction-prev'
      ? css`
          position: absolute;
          left: 30%;
          top: 50%;
        `
      : css`
          position: absolute;
          right: 30%;
          top: 50%;
        `}
`;
