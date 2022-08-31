import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import * as $ from './SmallSlider.styled';
import { INFO_IMAGES } from 'models/Image';

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
            slidesPerView: 4,
          },
          600: {
            slidesPerView: 6,
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
        <Swiper {...swiperSetting}>
          {INFO_IMAGES.map(({ src, id }) => (
            <SwiperSlide key={id}>
              <$.Image src={src} />
            </SwiperSlide>
          ))}
          <$.ButtonContainer ref={prevRef} direction={'left'}>
            <$.LeftButtonIcon />
          </$.ButtonContainer>
          <$.ButtonContainer ref={nextRef} direction={'right'}>
            <$.RightButtonIcon />
          </$.ButtonContainer>
        </Swiper>
      )}
    </$.Container>
  );
};

export default SmallSlider;
