import React, { FC, useRef } from 'react';
import * as $ from './ImageList.styled';
import Images from './ImageList';
import ImageModal from '../Modal/ImageModal';

interface ImageListProps {
  width?: string;
  height?: string;
  openModal?: () => void;
  closeModal?: () => void;
}

const ImageList: FC<ImageListProps> = props => {
  const { width = '100%', height, openModal, closeModal } = props;

  const imageList = Images.map((value, index) => (
    <$.ImageBox>
      <$.Image
        onClick={openModal}
        height={hei함ght || width}
        width={width}
        src={value.image}
        key={index}
      />
    </$.ImageBox>
  ));
  return <>{imageList}</>;
};

export default ImageList;
