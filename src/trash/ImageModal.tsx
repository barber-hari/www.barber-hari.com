import React, { FC, useRef } from 'react';
import Image from 'models/Image';
import * as $ from './ImageModal.styled';

export interface ImageModalProps {
  closeModal: () => void;
  show: boolean;
  images: Image[];
  clickImageChangeHandler: (targetId: number) => void;
  currentImage: Image;
}

const ImageModal: FC<ImageModalProps> = props => {
  const {
    clickImageChangeHandler,
    images,
    closeModal,
    show,
    currentImage: { id },
  } = props;

  const backgroundRef = useRef<HTMLDivElement>(null);

  const closeBackgroundHandler = () => {
    closeModal();
  };

  return (
    <$.ModalContainer show={show} ref={backgroundRef}>
      <$.Background onClick={closeBackgroundHandler} />
      <$.Container>
        {images.map(({ src }, index) => (
          <$.Image
            key={`modal-image-${id}`}
            src={src}
            onClick={() => void clickImageChangeHandler(index)}
            index={index}
            currentIndex={id}
          />
        ))}
        {/* <$.Image src={src} onClick={() => void clickImageChangeHandler(id)} /> */}
      </$.Container>
    </$.ModalContainer>
  );
};

export default ImageModal;
