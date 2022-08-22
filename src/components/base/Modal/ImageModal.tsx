import React, { FC, useRef } from 'react';
import * as $ from './ImageModal.styled';
import ImageList from '../Image';

export interface ImageModalProps {
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = props => {
  const { closeModal } = props;

  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      closeModal();
    }
  };

  return (
    <$.Background ref={backgroundRef} onClick={handleClickBackground}>
      <$.Container>
        <ImageList />
      </$.Container>
    </$.Background>
  );
};

export default ImageModal;
