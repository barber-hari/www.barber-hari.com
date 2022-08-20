import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  background-color: #000;
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

export const PictureBox = styled.div`
  display: block;
  width: 400px;
  height: 250px;
  top: 12%;
  left: 7%;
  @media (max-width: 1023px) {
    width: 320px;
    top: 5%;
    left: 0;
    margin: 0 auto;
  }
`;

export const Picture = styled.img`
  top: 15%;
  width: 47%;
  left: 3%;
  @media (max-width: 1023px) {
    top: 0;
    left: 5%;
  }
`;

export const Name = styled.h1`
  color: #ffffff;
  top: -58%;
  left: 56%;
  font-weight: bold;
  font-size: 2.5vh;
  @media (max-width: 1023px) {
    font-size: min(5vw, 50px);
  }
`;

export const History = styled.p`
  top: -45%;
  left: 56%;
  color: white;
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 1023px) {
    font-size: min(2vw, 20px);
  }
`;

export const Address = styled.address`
  display: flex;
  top: -30%;
  width: 500px;
  height: 5vh;
  color: white;
  padding: 10px;
  gap: 15px;
  align-items: center;
  &.mobile {
    display: none;
  }

  @media (max-width: 1023px) {
    &.desktop {
      display: none;
    }
    &.mobile {
      display: flex;
      width: 320px;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      font-size: 10px;
    }
  }
`;

export const GalleryBox = styled.div`
  width: 100%;
  left: 5%;
  top: 25vh;
  display: flex;
  overflow-x: scroll;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Image = styled.img`
  border-radius: 50px;
  height: 30vh;
  margin: 15px;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.4);
  }
  //호버가안됨
`;
