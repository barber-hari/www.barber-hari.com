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
    min-height: 130vw;
    overflow-y: auto;
    overflow-x: hidden;
  }

  @media (max-height: 600px) {
    min-height: 1200px;
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
    top: 10%;
  }
`;

export const TitleImage = styled.img`
  display: block;
  width: 30%;
  margin: 0 auto 1vh;
`;
export const Headline = styled.h1`
  font-size: 20vh;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: min(30vw, 170px);
  }
`;
export const Highlight = styled.strong`
  display: block;
  font-size: 8vh;

  @media (max-width: 1023px) {
    font-size: min(12vw, 70px);
  }
`;

export const ContentSection = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 1023px) {
    width: min(60%, 250px);
    bottom: 0;
    padding-bottom: calc(constant(safe-area-inset-bottom) + 10vh);
    padding-bottom: calc(env(safe-area-inset-bottom) + 10vh);
  }
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
    column-gap: 0;
    row-gap: min(7vw, 35px);
    min-width: 0;
  }
`;

export const Menu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15%;

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
    & i {
      width: min(10vw, 40px);
      height: min(10vw, 40px);
    }

    &.navi-mobile {
      display: flex;
    }

    &:first-child {
      font-size: 20px;
      font-weight: bolder;
      gap: 20px;
      margin-bottom: 10px;
    }

    &:nth-child(2) {
      width: 100%;
      justify-content: space-between;
    }

    &:nth-child(3) {
      font-size: min(7vw, 30px);
      margin-right: auto;
    }

    &:nth-child(4) {
      font-size: min(7vw, 30px);
      margin-left: auto;
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

/*
@media (orientation: portrait) {
    /!* 세로 모드 일 경우 *!/
}

@media (orientation: landscape) {
    /!* 가로 모드일 경우 *!/
}
*/
