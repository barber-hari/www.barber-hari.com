import React, { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import Icon from 'components/base/Icon';
import { useRecoilState } from 'recoil';
import { ModalState } from 'store/UIStore';
import * as $ from './ImageModal.styled';

const ImageModal: FC = () => {
  const [{ isVisible, modalImages, targetId }, setModalState] =
    useRecoilState(ModalState);

  SwiperCore.use([Navigation, Pagination, Scrollbar]);
  const swiperSetting = useRef<Swiper | null>(null);
  const $app = useRef<HTMLElement | null>(null);
  const closeModalHandler = () =>
    void setModalState(state => ({ ...state, isVisible: false }));

  useEffect(() => {
    swiperSetting.current = {
      spaceBetween: 24,
      navigation: {
        prevEl: '.swiper-btn-left', // 이전 버튼
        nextEl: '.swiper-btn-right', // 다음 버튼
      },
      scrollbar: { draggable: true, el: null },
      onBeforeInit: (swiper: SwiperCore) => {
        if (typeof swiper.params.navigation !== 'boolean') {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = '.swiper-btn-left';
            swiper.params.navigation.nextEl = '.swiper-btn-right';
          }
        }
        swiper.navigation.update();
      },
      loop: true,
      slidesPerView: 'auto',
      initialSlide: targetId,
    };
  }, [targetId]);

  useEffect(() => {
    $app.current = window.document.getElementById('__next');
  }, []);

  return $app.current && isVisible
    ? createPortal(
        <$.Wrapper role="dialog">
          <$.Container>
            <$.Background onClick={closeModalHandler} isVisible={isVisible} />
            {swiperSetting.current && (
              <Swiper {...swiperSetting.current}>
                {modalImages.map(({ src, id }) => (
                  <SwiperSlide key={`modal-image-${id}`}>
                    <$.ImageContainer>
                      <$.Image src={src} />
                    </$.ImageContainer>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <$.SwiperButton className="swiper-btn-left" direction="left">
              <Icon iconType="LARROW" width="40px" />
            </$.SwiperButton>
            <$.SwiperButton className="swiper-btn-right" direction="right">
              <Icon iconType="RARROW" width="40px" />
            </$.SwiperButton>
          </$.Container>
        </$.Wrapper>,
        $app.current
      )
    : null;
};

export default ImageModal;
