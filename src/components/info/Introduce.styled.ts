import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
`;

export const PictureBox = styled.div`
  position: absolute;
  width: 400px;
  height: 250px;
  top: 15%;
  left: 7%;

  @media (max-width: 1023px) {
    top: 1%;
  }
`;

export const Picture = styled.img`
  width: 47%;
  top: 13%;
  left: 2%;
`;

export const Name = styled.h1`
  color: #ffffff;
  top: -58%;
  left: 56%;
  font-weight: bold;
  font-size: 2.5vh;
`;

export const History = styled.p`
  top: -45%;
  left: 56%;
  color: white;
  font-size: 15px;
  font-weight: bold;
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
    }
    &:nth-child(2) {
    }
  }
`;

export const GalleryBox = styled.div`
  width: 55%;
  height: 700px;
  position: absolute;
  right: 5%;
  top: 10%;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Image = styled.img`
  top: 5%;
  left: 3%;
  display: inline-block;
  border-radius: 15%;
  width: 20%;
  height: 23%;
  margin: 15px;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.4);
  }
  //호버가안됨
`;
