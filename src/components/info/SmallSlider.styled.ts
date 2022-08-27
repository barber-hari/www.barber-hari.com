import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

export const Container = styled.div`
  width: 80vw;
  height: 30vh;
  position: fixed;
  border-radius: 10px;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background-color: grey;

  @media (min-width: 904px) {
    display: none;
  }
`;

export const StyledSwiper = styled(Swiper)`
  backgroundcolor: 'green';
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  backgroundcolor: 'red';
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 250px;
`;

export const ButtonContainer = styled.button``;

export const LeftButtonIcon = styled(AiFillCaretLeft)`
  width: 40px;
  height: 40px;
  color: #fff;
`;
export const RightButtonIcon = styled(AiFillCaretRight)`
  width: 40px;
  height: 40px;
  color: #fff;
`;
