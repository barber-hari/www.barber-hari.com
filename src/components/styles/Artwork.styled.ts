import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: #000;
`;

export const Container = styled.section`
  position: relative;
  width: min(100%, 1700px);
  height: 95%;
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  margin-right: auto;
  margin-left: auto;
`;

interface ImageProps {
  height?: number;
}

export const Masonry = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: dense;
  grid-gap: 30px;
  background-color: #000;
  margin-left: auto;
  margin-right: auto;
`;

export const Images = styled.figure<ImageProps>``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1.5px solid #fff;
  opacity: 0.9;
  transition: all 3s linear;
  filter: grayscale(0.3);

  &:hover {
    filter: grayscale(0);
  }
`;

export const ImageTitle = styled.figcaption`
  z-index: 1000;
  top: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  text-shadow: -1px 0 #808080, 0 1px #808080, 1px 0 #808080, 0 -1px #808080,
    3px 3px 5px #000000;
`;
