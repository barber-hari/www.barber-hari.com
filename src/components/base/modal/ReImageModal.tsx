import React, { FC, useRef, useState } from 'react';
import Image from 'models/Image';
import { log } from 'util';
import * as $ from './ReImageModal.styled';
import SlideButton from '../button/SlideButton';

export interface ImageModalProps {
  closeModal: () => void;
  show: boolean;
  images: Image[];
  targetIndex: number;
}

const ImageModal: FC<ImageModalProps> = props => {
  const { closeModal, show, images, targetIndex } = props;

  const [currentIndex, setCurrentIndex] = useState(targetIndex);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const closeBackgroundHandler = () => {
    closeModal();
  };

  const handleNextImage = (index: number) => {
    setCurrentIndex(index < images.length - 1 ? index + 1 : 0);
  };

  const handleNextButton = (index: number) => {
    setCurrentIndex(index < images.length ? index : 0);
  };

  const handleSlideButton = (direction: number) => {
    handleNextButton(currentIndex + direction);
  };

  return (
    <$.ModalContainer show={show} ref={backgroundRef}>
      <$.Background onClick={closeBackgroundHandler} />
      <$.Container onClick={() => void handleNextImage(currentIndex)}>
        {images.map(({ src, id }, index) => (
          <$.Image
            key={`modal-image-${id}`}
            src={src}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </$.Container>
      <SlideButton
        direction="direction-prev"
        onClick={() => void handleSlideButton(-1)}
      >
        <$.LeftButtonIcon />
      </SlideButton>
      <SlideButton
        direction="direction-next"
        onClick={() => void handleSlideButton(1)}
      >
        <$.RightButtonIcon />
      </SlideButton>
    </$.ModalContainer>
  );
};
export default ImageModal;
