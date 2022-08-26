import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

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
  background-color: #000;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  color: #fff;
`;
