import React, { FC, useRef } from 'react';
import Image from 'models/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, Pagination } from 'swiper';
import * as $ from './ImageModal.styled';

export interface ImageModalProps {
  closeModal: () => void;
  show: boolean;
  INFO_IMAGES: Image[];
  // currentImage: Image;
}

const ImageModal: FC<ImageModalProps> = props => {
  const {
    // currentImage: { src },
    closeModal,
    INFO_IMAGES,
    show,
  } = props;

  SwiperCore.use([Navigation, Scrollbar, Pagination]);

  // const prevRef = useRef<HTMLButtonElement>(null);
  // const nextRef = useRef<HTMLButtonElement>(null);

  const settings = {
    spaceBetween: 5,
    navigation: {},
    scrollbar: {
      draggable: true,
      el: null,
    },
    pagination: {
      clickable: true,
    },
    slidesPerView: 5,
  };

  const backgroundRef = useRef<HTMLDivElement>(null);

  const closeBackgroundHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      closeModal();
    }
  };

  return (
    <$.Background
      show={show}
      ref={backgroundRef}
      onClick={closeBackgroundHandler}
    >
      <$.Container>
        <Swiper {...settings}>
          {INFO_IMAGES.map(({ src, id }) => (
            <SwiperSlide key={id}>
              <$.Image src={src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </$.Container>
    </$.Background>
  );
};

export default ImageModal;
