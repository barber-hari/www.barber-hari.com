import React, { FC } from 'react';
import Image from 'models/Image';
import * as $ from './ImageList.styled';

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
        <$.ImageBox key={id}>
          <$.Image
            height={height || width}
            width={width}
            src={src}
            onClick={() => void onClick(id)}
          />
        </$.ImageBox>
      ))}
    </>
  );
};

export default ImageList;
