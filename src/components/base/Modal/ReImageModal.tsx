import React, { FC, useRef, useState } from 'react';
import Image from 'models/Image';
import * as $ from './ReImageModal.styled';

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
    setCurrentIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <$.ModalContainer show={show} ref={backgroundRef}>
      <$.Background onClick={closeBackgroundHandler} />
      <$.Container>
        {images.map(({ src, id }, index) => (
          <$.Image
            key={`modal-image-${id}`}
            src={src}
            onClick={() => void handleNextImage(index)}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
        {/* <$.Image src={src} onClick={() => void clickImageChangeHandler(id)} /> */}
      </$.Container>
    </$.ModalContainer>
  );
};

export default ImageModal;
