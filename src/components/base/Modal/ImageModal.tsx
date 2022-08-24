import React, { FC, useRef } from 'react';
import * as $ from './ImageModal.styled';
import { IImageList } from '../Image/ImageList';

export interface ImageModalProps {
  closeModal: () => void;
  show: boolean;
  currentImage: IImageList;
}

const ImageModal: FC<ImageModalProps> = props => {
  const { closeModal, show, currentImage } = props;

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
        <$.Image src={currentImage.image} />
      </$.Container>
    </$.Background>
  );
};

export default ImageModal;
