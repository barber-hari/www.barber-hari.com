import React, { FC, useRef } from 'react';
import Image from 'models/Image';
import * as $ from './ImageModal.styled';

export interface ImageModalProps {
  closeModal: () => void;
  show: boolean;
  currentImage: Image;
}

const ImageModal: FC<ImageModalProps> = props => {
  const {
    closeModal,
    show,
    currentImage: { src },
  } = props;

  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      closeModal();
    }
  };

  return (
    <$.Background
      show={show}
      ref={backgroundRef}
      onClick={handleClickBackground}
    >
      <$.Container>
        <$.Image src={src} />
      </$.Container>
    </$.Background>
  );
};

export default ImageModal;
