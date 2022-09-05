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
  cursor: pointer;

  & a {
    height: 100%;
    display: flex;
  }
  & span {
    border-radius: 3px;
  }

  & img {
    z-index: 1500;
    object-fit: cover;
  }

  & h4 {
    top: calc(${({ height }) => height} + 15px);
    z-index: 2000;
    display: flex;
    width: max-content;
    height: max-content;
    justify-content: center;
    margin: 0 auto;
    color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bolder;
    text-shadow: -1px 0 #808080, 0 1px #808080, 1px 0 #808080, 0 -1px #808080,
      3px 3px 5px #000000;
  }
`;
