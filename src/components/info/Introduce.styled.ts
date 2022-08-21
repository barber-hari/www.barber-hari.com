import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100vh;
  background-color: #000;
`;

export const BoxWrapper = styled.div`
  padding-top: 25px;
  display: flex;
  width: 100%;
  height: 300px;
`;
export const PictureBox = styled.div`
  padding-left: 15px;
  padding-top: 20px;
  width: 55%;
  @media (max-width: 1023px) {
  }
`;

export const Picture = styled.img`
  display: inline-block;
  margin-right: 20px;
  width: 250px;
  @media (max-width: 1023px) {
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
`;

export const Address = styled.address`
  margin-top: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 16px;
  color: white;
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
export const EmptyBox = styled.div`
  height: 150px;
`;
export const GalleryBox = styled.div`
  width: 100%;
  height: 400px;
`;

export const ImageColumns = styled.div`
  position: absolute;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 30px;
  width: 50%;
  &:nth-child(2) {
    left: 50%;
  }
  // TODO: 슬라이드 -> 자동으로 left 50% 추가되기
  // TODO: 클릭시 배경 페이드아웃 & 화면중앙에 이미지 띄우기
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 400px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
