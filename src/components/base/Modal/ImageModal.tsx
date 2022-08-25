import React, { FC, useRef } from 'react';
import Image from 'models/Image';
import * as $ from './ImageModal.styled';

export interface ImageModalProps {
  closeModal: () => void;
  show: boolean;
  currentImage: Image;
  clickImageChangeHandler: (targetId: number) => void;
}

const ImageModal: FC<ImageModalProps> = props => {
  const {
    clickImageChangeHandler,
    currentImage: { src, id },
    closeModal,
    show,
  } = props;

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
        <$.Image src={src} onClick={() => void clickImageChangeHandler(id)} />
      </$.Container>
    </$.Background>
  );
};

export default ImageModal;
