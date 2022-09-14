import styled from 'styled-components';

export interface ImageStyledProps {
  width: string;
  height: string;
  src: string;
}

export const ImageBox = styled.figure`
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: grayscale(0.7);

  &:nth-child(1) {
    grid-column: 1/3;
  }
  &:nth-child(2) {
    grid-column: 3/5;
    grid-row: 1/3;
  }
  &:nth-child(3) {
    grid-column: 1/4;
    grid-row: 4/5;
  }
  &:nth-child(4) {
    grid-column: 3/4;
    grid-row: 3/4;
  }
  &:nth-child(5) {
    grid-column: 1/3;
    grid-row: 2/4;
  }
  &:nth-child(6) {
    grid-column: 4/5;
    grid-row: 3/5;
  }
`;
