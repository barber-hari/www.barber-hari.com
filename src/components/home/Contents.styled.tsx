import styled from 'styled-components';

export const Contents = styled.section`
  display: block;
  position: relative;
  min-width: 1024px;
  height: 100%;
  margin: 0 auto;
  z-index: 10;
  @media (max-width: 1023px) {
    min-width: 0;
    overflow-y: auto;
  }
`;

export const TitleSection = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 1023px) {
    top: 12%;
  }
`;

export const TitleImage = styled.img`
  display: block;
  width: 30%;
  margin: 0 auto 1vh;
`;
export const Headline = styled.h1`
  font-size: 20vh;
  line-height: inherit;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: min(30vw, 200px);
  }
`;
export const Highlight = styled.strong`
  display: block;
  font-size: 8vh;

  @media (max-width: 1023px) {
    font-size: min(12vw, 80px);
  }
`;

export const ContentSection = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Navigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5vh 140px;
  font-size: 3.5vh;
  font-weight: bolder;
  min-width: 1024px;

  @media (max-width: 1023px) {
    top: 850px;
  }
`;

export const Menu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    width: 100%;
    font-size: 1.8vh;
    gap: 15px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  &:last-child {
    gap: 25px;
  }

  &.navi-mobile {
    display: none;
  }

  @media (max-width: 1023px) {
    margin-bottom: 50px;
    & i {
      width: 30vw;
      height: 30vw;
    }

    &.navi-mobile {
      display: flex;
    }

    &:first-child {
      font-size: 50px;
      font-weight: bolder;
      top: 200px;
      gap: 30px;
    }

    &:nth-child(2) {
      width: 100%;
      gap: 3%;
      top: 200px;
    }

    &:nth-child(3) {
      font-size: 100px;
      top: 300px;
    }

    &:nth-child(4) {
      font-size: 100px;
      top: 300px;
    }

    &.navi-mobile-none {
      display: none;
    }
  }
`;

export const Address = styled.address`
  display: block;
  margin-top: 65px;
  font-style: normal;
  text-align: center;
  font-size: 1.2vh;
  font-family: 'Noto Sans KR', sans-serif;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Tell = styled.span`
  margin-left: 10px;

  &::before {
    content: 'tell. ';
  }
`;
