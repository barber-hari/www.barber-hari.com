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
  grid-column-gap: 40px;
  grid-row-gap: 50px;
  margin: 25px auto 150px;
`;

export const Images = styled.li`
  cursor: pointer;
`;

export const ImageAnchor = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

export const ImageStyled = styled.div`
  display: block;
  border-radius: 3px;
  width: 100%;
  height: calc(100% - 40px);
`;

export const ImageTitle = styled.h4`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding-top: 15px;
  text-align: center;
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bolder;
  text-shadow: -1px 0 #808080, 0 1px #808080, 1px 0 #808080, 0 -1px #808080,
    3px 3px 5px #000000;
`;
