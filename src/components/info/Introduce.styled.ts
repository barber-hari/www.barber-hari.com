import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
`;

export const BoxWrapper = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  margin: auto;
  width: 100%;
  height: 800px;
  max-width: 1700px;

  @media (max-width: 1439px) {
    height: 900px;
  }

  @media (max-width: 540px) {
    height: auto;
  }
`;

export const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 25px;
  display: flex;
  flex-flow: column;

  @media (max-width: 1439px) {
    width: 100%;
    padding: 0 30px;
  }

  @media (max-width: 540px) {
    display: block;
    padding: 0 10px;
    padding-bottom: 30px;
    padding-bottom: calc(constant(safe-area-inset-bottom) + 30px);
    padding-bottom: calc(env(safe-area-inset-bottom) + 30px);
  }
`;

export const RightBox = styled.div`
  display: flex;
  justify-content: right;
  width: 50%;
  height: 100%;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const PictureBox = styled.div`
  margin-right: auto;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1439px) {
    width: 100%;
    padding-top: 0;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 440px) {
  }
`;

export const Picture = styled.img`
  display: inline-block;
  margin-right: 20px;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  &.mobile {
    display: none;
  }

  @media (max-width: 903px) {
    &.pc {
      width: min(250px, 35vw);
    }
    &.mobile {
      display: none;
      float: left;
      width: 175px;
      height: 125px;
    }
  }

  @media (max-width: 540px) {
    &.pc {
      display: none;
    }
    &.mobile {
      display: none;
    }
  }
`;

export const Info = styled.article`
  padding-left: 30px;
  @media (max-width: 540px) {
    padding-left: 0;
    margin-top: 0;
    font-size: 30px;
  }
`;
export const Careers = styled.dl`
  color: #fff;
  font-size: 16px;
  @media (max-width: 540px) {
    font-size: 6vw;
  }
`;
export const CareerTitle = styled.dt`
  display: block;
  margin: 20px 0;
`;
export const Career = styled.dd`
  display: block;
  color: #fff;
  margin-bottom: 4px;
  font-size: min(16px, 4vw);
`;

export const Name = styled.h2`
  font-size: 50px;
  margin-top: 10px;
  display: inline-block;
  vertical-align: top;
  font-weight: bold;
  color: #ffffff;
  line-height: normal;

  @media (max-width: 1024px) {
    font-size: min(50px, 5vw);
  }
  @media (max-width: 903px) {
  }

  @media (max-width: 540px) {
    display: none;
  }
`;

export const History = styled.p`
  color: white;
  font-size: 17px;
  padding-top: 30px;
  @media (max-width: 1439px) {
    padding-top: 25px;
    font-size: 19px;
  }
  @media (max-width: 903px) {
    display: none;
  }
`;

export const MapBox = styled.div`
  width: 100%;
  height: 400px;

  border-radius: 10px;
  margin-top: auto;

  @media (max-width: 1439px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 100%;
  }

  @media (max-width: 540px) {
    height: min(300px, 60vw);
  }
`;

export const NaverMapFooter = styled.a`
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
  z-index: 1000;
  bottom: 99px;
  display: block;
`;

export const IconBox = styled.span`
  float: right;
  top: 20px;
  right: 5px;

  & p {
    right: 13px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    color: #008000;
  }
`;

export const Tell = styled.address`
  float: left;
  max-width: 45vw;
  color: #1d2a2b;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  top: 40px;
  left: 20px;

  @media (max-width: 450px) {
    top: 20px;
  }
`;
export const Address = styled.address`
  width: 100%;
  & > a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    margin-top: 20px;
    width: 160px;
    font-size: 20px;
  }

  & i {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 540px) {
    display: none;
  }
`;
export const GalleryBox = styled.div`
  z-index: 10;
  width: 800px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 200px));
  grid-template-rows: repeat(4, minmax(100px, 200px));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  cursor: pointer;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const MobilePicture = styled.div`
  display: none;
  @media (max-width: 540px) {
    display: block;
    width: 100%;
    height: 53vw;
    position: relative;
    & > ${Picture} {
      position: absolute;
      margin-top: 10px;
      left: 0;
      top: 15vw;
      width: 60%;
      height: auto;
    }

    & > ${Name} {
      display: block;
      position: absolute;
      right: 0;
      text-align: right;
      font-size: 10vw;
    }
  }
`;
