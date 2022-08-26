import React, { FC, ReactNode } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as $ from './SmallSlider.styled';
import 'swiper/swiper-bundle.css';
import { STYLES_IMAGES } from '../../models/Image';
import Image from 'next/image';

export interface SmallSliderProps {
  children?: ReactNode;
}

const SmallSlider: FC<SmallSliderProps> = props => {
  const { children } = props;

  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  const settings = {
    navigation: true,
    loop: true,
  };
  return (
    <$.Container>
      <Swiper
        {...settings}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {STYLES_IMAGES.map(({ src }) => {
          return (
            <SwiperSlide>
              <Image src={src} width={300} height={300} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/*     <$.StyledSwiper
        {...settings}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <$.StyledSwiperSlide>Slide 1</$.StyledSwiperSlide>
        <$.StyledSwiperSlide>Slide 2</$.StyledSwiperSlide>
        <$.StyledSwiperSlide>Slide 3</$.StyledSwiperSlide>
        <$.StyledSwiperSlide>Slide 4</$.StyledSwiperSlide>
      </$.StyledSwiper>*/}
    </$.Container>
  );
};

export default SmallSlider;
