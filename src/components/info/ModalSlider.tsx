import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import Image from 'models/Image';
import * as $ from './ModalSlider.styled';
import 'swiper/swiper.min.css';
import Icon from '../base/Icon';

export interface ModalSliderProps {
  closeModal: () => void;
  show: boolean;
  targetId: number;
  INFO_IMAGES: Image[];
}

const ModalSlider: FC<ModalSliderProps> = props => {
  const { closeModal, show, targetId, INFO_IMAGES } = props;

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
        slidesPerView: 'auto',
        initialSlide: targetId,
      });
    }
  }, [swiperSetting]);

  return (
    <$.Wrapper>
      <$.Container>
        <$.Background onClick={() => closeModal()} show={show} />
        {swiperSetting && (
          <Swiper {...swiperSetting}>
            {INFO_IMAGES.map(({ src, id }) => (
              <SwiperSlide key={`modal-image-${id}`}>
                <$.ImageContainer>
                  <$.Image src={src} />
                </$.ImageContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <$.SwiperButton ref={prevRef} direction="left">
          <Icon iconType="LARROW" width="40px" />
        </$.SwiperButton>
        <$.SwiperButton ref={nextRef} direction="right">
          <Icon iconType="RARROW" width="40px" />
        </$.SwiperButton>
      </$.Container>
    </$.Wrapper>
  );
};

export default ModalSlider;
