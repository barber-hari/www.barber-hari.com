import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const swiperStyle = {
  backgroundColor: 'black',
  height: '100%',
};

const swiperSlideStyle = {
  borderRadius: '10px',
};

export const Container = styled.div`
  width: 80vw;
  height: 30vh;
  border-radius: 10px;
  margin-top: 70px;
  left: 50%;
  transform: translateX(-50%);
  background-color: grey;

  @media (max-width: 1439px) {
    height: 150px;
  }

  @media (max-width: 903px) {
    height: 30vh;
  }

  @media (min-width: 1440px) {
    display: none;
  }

  @media (min-width: 904px) {
    margin-top: 20px;
  }

  & .swiper-container {
    background-color: #000;
    height: 100%;
  }

  & .swiper-slide {
    /* border-radius: 10px; */
  }
`;

//스타일컴포넌트 사용시 적용이 안됨
export const StyledSwiper = styled(Swiper)`
  background-color: green;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: red;
`;
interface ButtonProps {
  direction: string;
}

export const Image = styled.img`
  /* border-radius: 10px; */
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonContainer = styled.button<ButtonProps>`
  top: -17vh;
  z-index: 1000;
  ${({ direction }) =>
    direction == 'right' &&
    css`
      float: right;
    `}
  &:hover {
    color: red;
  }
  @media (min-width: 904px) {
    top: -10vh;
  }
`;

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
