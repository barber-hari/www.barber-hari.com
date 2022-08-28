import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1700px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #000;
`;

export const BoxWrapper = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  display: flex;

  @media (max-width: 1024px) {
    padding-top: 50px;
  }
`;

export const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 25px;

  @media (max-width: 1439px) {
    width: 100%;
    padding-right: 0;
  }

  @media (max-width: 426px) {
    height: 90vh;
  }
`;

export const RightBox = styled.div`
  display: flex;
  justify-content: right;
  width: 50%;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const PictureBox = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-top: 20px;
  padding-left: 100px;
  @media (max-width: 1439px) {
    padding-top: 0;
    padding-left: 6vw;
    width: 70vw;
  }
  @media (max-width: 1024px) {
    width: 90vw;
    padding-left: 0;
  }
  @media (max-width: 903px) {
    padding-left: 5vw;
  }
`;

export const Picture = styled.img`
  display: inline-block;
  margin-right: 20px;
  width: 250px;
  height: 250px;
  margin-left: 10px;
  border-radius: 10px;
  &.mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    margin-left: 50px;
  }
  @media (max-width: 903px) {
    margin-right: 0;
    &.pc {
      display: none;
    }
    &.mobile {
      margin-left: 0px;
      display: block;
      float: left;
      width: 175px;
      height: 125px;
    }
  }
`;

export const Name = styled.h1`
  font-size: 50px;
  padding-left: 30px;
  margin-top: 10px;
  display: inline-block;
  vertical-align: top;
  font-weight: bold;
  color: #ffffff;
  line-height: normal;
  @media (max-width: 1439px) {
  }
  @media (max-width: 1024px) {
    margin-top: 5px;
    font-size: 110px;
  }
  @media (max-width: 903px) {
    margin-top: 0;
    padding-left: 10px;
    font-size: 30px;
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
  @media (max-width: 1024px) {
    position: absolute;
    top: 127px;
    right: -80px;
    font-size: 19px;
  }

  @media (max-width: 903px) {
    display: none;
  }
`;

export const MapBox = styled.div`
  width: 100%;
  height: 500px;
  background-color: grey;
  border-radius: 10px;
  margin-top: 45px;

  @media (max-width: 1439px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    width: 80vw;
  }
  @media (max-width: 1024px) {
    bottom: 30px;
    height: 40vh;
  }
`;

export const Address = styled.address`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  margin-top: 20px;
  & i {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 1439px) {
    display: none;
  }
`;
export const GalleryBox = styled.div`
  z-index: 10;
  width: 800px;
  height: 900px;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, minmax(100px, 200px));
  grid-template-rows: repeat(4, minmax(100px, 200px));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  cursor: pointer;
  @media (max-width: 1439px) {
    display: none;
  }
`;
