import styled from 'styled-components';
import exp from 'constants';

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
`;

export const LeftBox = styled.div`
  width: 50%;
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
  padding-top: 20px;
  height: 40%;
`;

export const Picture = styled.img`
  display: inline-block;
  margin-right: 20px;
  width: 250px;

  @media (max-width: 425px) {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Name = styled.h1`
  margin-top: 10px;
  display: inline-block;
  vertical-align: top;
  font-weight: bold;
  color: #ffffff;
  line-height: normal;
  @media (max-width: 1023px) {
    font-size: min(5vw, 50px);
  }
`;

export const History = styled.p`
  color: white;
  font-size: 17px;
  @media (max-width: 1023px) {
    font-size: min(2vw, 20px);
  }

  @media (max-width: 424px) {
  }
`;
export const MapBox = styled.div`
  width: 100%;
  height: 480px;

  @media (max-width: 1439px) {
    margin-top: 8vh;
  }

  @media (max-width: 425px) {
    margin-top: 30vh;
    height: 200px;
  }
`;

export const Address = styled.address`
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  width: 538px;
  justify-content: right;
  margin-top: 30px;
  & i {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 1439px) {
    margin-top: 15px;
  }
  @media (max-width: 426px) {
    justify-content: start;
    width: 100%;
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
