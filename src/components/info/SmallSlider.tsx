import React, { FC, useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { INFO_IMAGES } from 'models/Image';
import Icon from 'components/base/Icon';
import * as $ from './SmallSlider.styled';

interface smallSliderProps {
  onClick: (targetId: number) => void;
}
const SmallSlider: FC<smallSliderProps> = props => {
  const { onClick } = props;

  SwiperCore.use([Navigation, Pagination, Scrollbar]);
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
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
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
            <SwiperSlide key={id} onClick={() => void onClick(id)}>
              <$.Image src={src} />
            </SwiperSlide>
          ))}
          <$.SwiperButton ref={prevRef} direction="left">
            <Icon iconType="LARROW" width="40px" />
          </$.SwiperButton>
          <$.SwiperButton ref={nextRef} direction="right">
            <Icon iconType="RARROW" width="40px" />
          </$.SwiperButton>
        </Swiper>
      )}
    </$.Container>
  );
};

export default SmallSlider;
