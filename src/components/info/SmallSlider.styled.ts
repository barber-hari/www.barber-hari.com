import styled, { css } from 'styled-components';
import 'swiper/swiper-bundle.css';

const swiperStyle = {
  backgroundColor: 'black',
  height: '100%',
};

const swiperSlideStyle = {
  borderRadius: '10px',
};

export const Container = styled.div`
  width: 100%;
  height: 30vh;
  border-radius: 10px;
  margin-top: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: grey;

  @media (max-width: 1439px) {
    height: 150px;
  }

  @media (max-width: 903px) {
  }

  @media (min-width: 1440px) {
    display: none;
  }

  @media (min-width: 904px) {
  }

  @media (max-width: 540px) {
    display: none;
  }

  & .swiper-container {
    background-color: #000;
    height: 100%;
  }

  & .swiper-slide {
    /* border-radius: 10px; */
  }
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

interface ButtonProps {
  direction: string;
}

export const SwiperButton = styled.button<ButtonProps>`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 1000;
  border: 4px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 100%;

  ${({ direction }) =>
    direction == 'right'
      ? css`
          right: 10px;
        `
      : css`
          left: 10px;
        `}
  & > i {
    opacity: 0.7;
  }
`;
