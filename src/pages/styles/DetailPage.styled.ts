import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: min(95%, 1700px);
  padding: 20px 25px 0;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 1023px) {
    display: block;
  }
`;

export const SideBar = styled.aside`
  min-width: 270px;
  margin-right: 25px;
  margin-top: 20px;
  border-right: 1px solid #808080;

  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #808080;
    border-right: 0;
    width: 100%;
  }
`;

export const StyledInfo = styled.article`
  position: fixed;
  width: 240px;

  @media (max-width: 1023px) {
    position: relative;
    width: 90%;
  }
`;

export const HairInfo = styled.dl`
  display: flex;
  flex-flow: column;
  align-items: end;
  text-align: right;
  color: #fff;
  font-weight: bold;

  @media (max-width: 1023px) {
    align-items: start;
    text-align: start;
    padding-bottom: 25px;
  }
`;

export const HairTitle = styled.dt`
  margin-bottom: 25px;
  font-size: 2rem;
`;

export const HairDescription = styled.dd`
  line-height: 20px;
  width: min(22vw, 300px);
  font-weight: bolder;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;

  @media (max-width: 1023px) {
    width: 70%;
  }
`;

export const Contents = styled.section`
  width: min(90%, 1400px);
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Images = styled.article`
  width: 100%;
  border-bottom: 1px solid #808080;
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  grid-column-gap: 25px;
  grid-row-gap: 50px;
  margin: 25px auto 150px;
`;

export const LinkImages = styled.figure`
  display: block;
  position: relative;
  width: 100%;
  cursor: pointer;

  & > span {
    border-radius: 3px;
  }

  & > a {
    top: 315px;
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
