import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import * as $ from './SmallSlider.styled';
import { STYLES_IMAGES } from '../../models/Image';
import styled from 'styled-components';

export interface SmallSliderProps {
  children?: ReactNode;
}

const SmallSlider: FC<SmallSliderProps> = props => {
  const { children } = props;

  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  const [slideIndex, setSlideIndex] = useState(0);
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 24,
        navigation: {
          prevEl: prevRef.current, // 이전 버튼
          nextEl: nextRef.current, // 다음 버튼
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
        },
        scrollbar: { draggable: true, el: null },
        onBeforeInit: (swiper: SwiperCore) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }
          swiper.navigation.update();
        },
        loop: true,
      });
    }
  }, [swiperSetting]);

  return (
    <$.Container>
      {swiperSetting && (
        <Swiper {...swiperSetting} style={swiperStyle}>
          {STYLES_IMAGES.map(({ src, id }) => (
            <SwiperSlide key={id} style={swiperSlideStyle}>
              <$.Image src={src} />
            </SwiperSlide>
          ))}
          <$.ButtonContainer ref={prevRef}>
            <$.LeftButtonIcon />
          </$.ButtonContainer>
          <$.ButtonContainer ref={nextRef}>
            <$.RightButtonIcon />
          </$.ButtonContainer>
        </Swiper>
      )}

      {/*    <$.StyledSwiper {...swiperSetting}>
        {STYLES_IMAGES.map(({ src, id }) => (
          <$.StyledSwiperSlide key={id}>
            <$.Image src={src} />
          </$.StyledSwiperSlide>
        ))}
        <$.ButtonContainer ref={prevRef}>
          <$.LeftButtonIcon />
        </$.ButtonContainer>
        <$.ButtonContainer ref={nextRef}>
          <$.RightButtonIcon />
        </$.ButtonContainer>
      </$.StyledSwiper>*/}
    </$.Container>
  );
};

const swiperStyle = {
  backgroundColor: 'green',
};

const swiperSlideStyle = {
  backgroundColor: 'red',
};

export default SmallSlider;
