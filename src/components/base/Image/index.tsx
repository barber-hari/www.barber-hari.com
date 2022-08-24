import React, { FC } from 'react';
import * as $ from './ImageList.styled';
import Image from 'models/Image';

interface ImageListProps {
  width?: string;
  height?: string;
  onClick: (targetId: number) => void;
  images: Image[];
}

const ImageList: FC<ImageListProps> = props => {
  const { width = '100%', height, onClick, images } = props;

  return (
    <>
      {images.map(({ src, id }) => (
        <$.ImageBox>
          <$.Image
            height={height || width}
            width={width}
            src={src}
            key={id}
            onClick={() => void onClick(id)}
          />
        </$.ImageBox>
      ))}
    </>
  );
};

export default ImageList;
