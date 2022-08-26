import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1700px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #000;
`;

export const Container = styled.div`
  position: relative;
  width: 95%;
  height: 95%;
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  margin-right: auto;
  margin-left: auto;
`;

export const Masonry = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 30px;
  grid-auto-flow: dense;
  background-color: #000;
  margin-left: auto;
  margin-right: auto;
`;

interface ItemProps {
  tall?: number;
}

export const Item = styled.img<ItemProps>`
  border-radius: 10px;
  width: 100%;
  /*${({ tall }) =>
    tall === 2
      ? css`
          grid-column-end: span 1;
          grid-row-end: span 1;
        `
      : css`
          grid-column-end: span 2;
          grid-row-end: span 1;
        `}*/

  &.is-double {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }

  &.is-triple {
    grid-column-end: span 3;
    grid-row-end: span 3;
  }
  &.is-tall {
    grid-row-end: span 2;
  }
  &:nth-child(odd) {
    border: 1px solid #fff;
    opacity: 0.7;
  }
  &:nth-child(even) {
    border: 1px solid #fff;
    opacity: 0.7;
  }
`;
