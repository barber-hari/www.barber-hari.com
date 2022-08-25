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
      closeModal();
  };

  const handleNextImage = (index: number) => {
    console.log(index)
    setCurruntIndex(index === images.length - 1 ? 0 : index + 1);
  }

  return (
    <$.ModalContainer
      show={show}
      ref={backgroundRef}
    >
      <$.Background onClick={closeBackgroundHandler}/>
      <$.Container onClick={(e ) => void handleNextImage(Number(e.target.dataset.index))}>
        {
          images.map(({ src, id }, index) => (
            <$.Image key={`modal-image-${id}`} src={src} data-index={index} index={index} curruntIndex={curruntIndex}/>
          ))
        }
        {/* <$.Image src={src} onClick={() => void clickImageChangeHandler(id)} /> */}
      </$.Container>
    </$.ModalContainer>
  );
};

export default ImageModal;
