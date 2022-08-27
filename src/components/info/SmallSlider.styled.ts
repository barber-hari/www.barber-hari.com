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

//스타일컴포넌트 사용시 적용이 안됨
export const StyledSwiper = styled(Swiper)`
  backgroundcolor: 'green';
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  backgroundcolor: 'red';
`;
interface ButtonProps {
  direction: string;
}

export const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.button<ButtonProps>`
  justify-content: center;
  top: -150px;
  z-index: 1000;
  ${({ direction }) =>
    direction == 'right' &&
    css`
      float: right;
    `}
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
