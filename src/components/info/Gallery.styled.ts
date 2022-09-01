import styled from 'styled-components';

export const GalleryBox = styled.div`
  width: 800px;
  height: 900px;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, minmax(100px, 200px));
  grid-template-rows: repeat(4, minmax(100px, 200px));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  cursor: pointer;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 5s linear;
  filter: grayscale(0.7);

  &:hover {
    filter: grayscale(0.2);
  }

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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.4);
  }
`;
