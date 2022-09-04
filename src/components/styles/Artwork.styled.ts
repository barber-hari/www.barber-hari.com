import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  overflow-y: scroll;
  background-color: #000;
`;

export const Container = styled.section`
  position: relative;
  width: min(95%, 1700px);
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  margin-right: auto;
  margin-left: auto;
`;

export const Masonry = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: 400px;
  grid-gap: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const Images = styled.figure`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;

  & > span {
    border-radius: 3px;
  }

  & > a {
    top: 415px;
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
