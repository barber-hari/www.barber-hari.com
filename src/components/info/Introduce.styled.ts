import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: -10;
`;

export const PictureBox = styled.div`
  position: absolute;
  width: 400px;
  height: 250px;
  top: 15%;
  left: 7%;
  z-index: -5;
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
`;

export const GalleryBox = styled.div`
  width: 55%;
  height: 800px;
  z-index: -10;
  position: absolute;
  right: 5%;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Image = styled.img`
  top: 15%;
  left: 3%;
  display: inline-block;
  border-radius: 15px;
  width: 20%;
  height: 20%;
  margin: 15px;
  transition: 0.5s linear;
  z-index: 10;

  &:hover {
    display: none;
    background-color: #fff;
  }
  //호버가안됨
`;
