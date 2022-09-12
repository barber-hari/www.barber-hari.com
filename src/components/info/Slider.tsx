import React, { FC, useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { INFO_IMAGES } from 'models/Image';
import Icon from 'components/base/Icon';
import * as $ from './Slider.styled';

interface smallSliderProps {
  onClick: (targetId: number) => void;
}
const Slider: FC<smallSliderProps> = props => {
  const { onClick } = props;
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);
  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  useEffect(() => {
    setSwiperSetting({
      spaceBetween: 24,
      navigation: {
        prevEl: '.small-slider-swiper-btn-left',
        nextEl: '.small-slider-swiper-btn-right',
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
            swiper.params.navigation.prevEl = '.small-slider-swiper-btn-left';
            swiper.params.navigation.nextEl = '.small-slider-swiper-btn-right';
          }
        }
        swiper.navigation.update();
      },
      loop: true,
    });
  }, []);

  return (
    swiperSetting && (
      <$.Container>
        <Swiper {...swiperSetting}>
          {INFO_IMAGES.map(({ src, id }) => (
            <SwiperSlide key={id} onClick={() => void onClick(id)}>
              <$.Image src={src} />
            </SwiperSlide>
          ))}
          <$.SwiperButton
            className="small-slider-swiper-btn-left"
            direction="left"
          >
            <Icon iconType="LARROW" width="40px" />
          </$.SwiperButton>
          <$.SwiperButton
            className="small-slider-swiper-btn-right"
            direction="right"
          >
            <Icon iconType="RARROW" width="40px" />
          </$.SwiperButton>
        </Swiper>
      </$.Container>
    )
  );
};

export default Slider;
