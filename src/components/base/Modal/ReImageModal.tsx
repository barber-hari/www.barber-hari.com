import React, { FC, useRef, useState } from 'react';
import Image from 'models/Image';
import * as $ from './ReImageModal.styled';

export interface ImageModalProps {
  closeModal: () => void;
  show: boolean;
  images: Image[]
  targetIndex: number;
}

const ImageModal: FC<ImageModalProps> = props => {
  const {
    closeModal,
    show,
    images,
    targetIndex
  } = props;

  const [curruntIndex, setCurruntIndex] = useState(targetIndex);

  const backgroundRef = useRef<HTMLDivElement>(null);

  const closeBackgroundHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      closeModal();
    }
  };
  const handleNextImage = (index: number) => {
    setCurruntIndex(index === images.length - 1 ? 0 : index + 1);
  }
  return (
    <$.Background
      show={show}
      ref={backgroundRef}
      onClick={closeBackgroundHandler}
    >
      <$.Container>
        {
          images.map(({ src, id }, index) => (
            <$.Image key={`modal-image-${id}`} src={src} onClick={() => void handleNextImage(index)} index={index} curruntIndex={curruntIndex}/>
          ))
        }
        {/* <$.Image src={src} onClick={() => void clickImageChangeHandler(id)} /> */}
      </$.Container>
    </$.Background>
  );
};

export default ImageModal;
