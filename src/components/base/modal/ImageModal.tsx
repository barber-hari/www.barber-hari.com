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
  const $app = useRef<HTMLElement | null>(null);
  const handleCloseModal = () =>
    void setModalState(state => ({ ...state, isVisible: false }));

  const getSwiperSetting = (initialSlide: number): Swiper => ({
    navigation: {
      prevEl: '.swiper-btn-left',
      nextEl: '.swiper-btn-right',
    },
    scrollbar: { draggable: true },
    loop: true,
    slidesPerView: 'auto',
    initialSlide,
  });

  useEffect(() => {
    $app.current = window.document.getElementById('__next');
  }, []);

  return $app.current && isVisible
    ? createPortal(
        <$.Wrapper role="dialog">
          <$.Container>
            <$.Background onClick={handleCloseModal} isVisible={isVisible} />
            <Swiper {...getSwiperSetting(targetId - 1)}>
              {modalImages.map(({ src, id }) => (
                <SwiperSlide key={`modal-image-${id}`}>
                  <$.ImageContainer>
                    <$.Image src={src} />
                  </$.ImageContainer>
                </SwiperSlide>
              ))}
            </Swiper>
            <$.SwiperButton className="swiper-btn-left" direction="left">
              <Icon iconType="LEFT_ARROW" width="40px" />
            </$.SwiperButton>
            <$.SwiperButton className="swiper-btn-right" direction="right">
              <Icon iconType="RIGHT_ARROW" width="40px" />
            </$.SwiperButton>
          </$.Container>
        </$.Wrapper>,
        $app.current
      )
    : null;
};

export default ImageModal;
