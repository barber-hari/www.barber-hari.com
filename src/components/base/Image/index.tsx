import React, { FC } from 'react';
import * as $ from './ImageList.styled';
import Images, { IImageList } from './ImageList';

interface ImageListProps {
  width?: string;
  height?: string;
  openModal?: () => void;
  closeModal?: () => void;
  onView: (id: number) => void;
  imageData: IImageList[];
}

const ImageList: FC<ImageListProps> = props => {
  const { width = '100%', height, onView, openModal, imageData } = props;

  const imageList = imageData.map(value => (
    <$.ImageBox onClick={openModal}>
      <$.Image
        height={height || width}
        width={width}
        src={value.image}
        key={value.id}
        onClick={() => onView(value.id)}
      />
    </$.ImageBox>
  ));
  return <>{imageList}</>;
};

export default ImageList;
