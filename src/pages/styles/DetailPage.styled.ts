import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: min(95%, 1700px);
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  margin-right: auto;
  margin-left: auto;
  overflow: scroll;
  justify-content: center;
`;

export const SideBar = styled.aside`
  min-width: 270px;
  margin-right: 25px;
  margin-top: 20px;
  border-right: 2px solid #ffffff;
  overflow: scroll;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const StyledInfo = styled.article`
  position: fixed;
  width: 240px;
`;

export const HairInfo = styled.dl`
  display: flex;
  flex-flow: column;
  align-items: end;
  text-align: right;
  width: 100%;
  color: #fff;
  font-weight: bold;
  text-shadow: 1px 1px 1px #fff;
`;

export const HairTitle = styled.dt`
  margin-bottom: 25px;
  font-size: 2rem;
`;

export const HairDescription = styled.dd`
  line-height: 20px;
  width: 200px;
  font-weight: bolder;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
`;

export const Contents = styled.section`
  width: min(90%, 1400px);
  margin-top: 20px;
`;

export const Images = styled.article`
  width: 100%;
  border-bottom: 2px solid #ffffff;
`;

export const Image = styled.figure`
  width: 100%;
  height: 90vh;
  margin-bottom: 25px;

  & > span {
    border-radius: 5px;
  }

  & img {
    object-fit: cover;
  }
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

export const LinkImages = styled.figure`
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
