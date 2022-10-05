import styled from 'styled-components';

export const NaverMapFooter = styled.a`
  width: 100%;
  height: min(100px, 7vh);
  background-color: #fff;
  border-radius: 10px;
  z-index: 1000;
  display: block;
  position: absolute;
  bottom: 0;
`;

export const IconBox = styled.span`
  position: absolute;
  width: min(100px, 17vw);
  right: 3%;
  top: 50%;
  transform: translateY(-50%);

  & i {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Reservation = styled.p`
  font-size: min(20px, 3vw);
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  color: #008000;
`;

export const Tel = styled.address`
  float: left;
  max-width: 50vw;
  color: #1d2a2b;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  font-size: min(20px, 2vw);

  @media (max-width: 450px) {
  }
`;
