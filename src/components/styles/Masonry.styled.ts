import styled from 'styled-components';

interface MasonryProps {
  width: string;
  height: string;
}

export const Masonry = styled.ul<MasonryProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ width }) => width}, 1fr)
  );
  grid-auto-rows: ${({ height }) => height};
  grid-column-gap: 25px;
  grid-row-gap: 50px;
  margin: 25px auto 150px;
`;

interface ImagesProps {
  height: string;
}

export const Images = styled.li<ImagesProps>`
  display: block;
  position: relative;
  width: 100%;
  cursor: pointer;

  & > span {
    border-radius: 3px;
  }

  & > a {
    top: calc(${({ height }) => height} + 15px);
    z-index: 1000;
    border-radius: 10px;
    width: max-content;
    display: flex;
    justify-content: center;
    margin: auto;
    color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    text-shadow: -1px 0 #808080, 0 1px #808080, 1px 0 #808080, 0 -1px #808080,
      3px 3px 5px #000000;
  }

  & img {
    object-fit: cover;
  }
`;
