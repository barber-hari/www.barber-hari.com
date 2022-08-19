import styled from 'styled-components';

export const Contents = styled.section`
  display: block;
  position: relative;
  min-width: 1024px;
  height: 100%;
  margin: 0 auto;
  z-index: 10;
`;

export const TitleSection = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
`;

export const TitleImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 30%;
  margin-bottom: 1vh;
`;
export const Headline = styled.h1`
  font-size: 20vh;
  line-height: 13vh;
  height: 350px;
  font-weight: 500;
`;
export const Highlight = styled.strong`
  display: block;
  font-size: 8vh;
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
  min-width: 1024px;
`;

export const Menu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    width: 100%;
    font-size: 1.5vh;
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
    & i {
      width: 7vw;
      height: 7vw;
    }
    &.navi-mobile {
      display: flex;
    }
    &:nth-child(2) {
      width: 100%;
      gap: 3%;
    }
    &.navi-mobile-none {
      display: none;
    }
    &.navi-string {
      font-size: 30px;
      font-weight: bold;
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
