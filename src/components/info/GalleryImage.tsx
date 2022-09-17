import React, { FC } from 'react';
import { INFO_IMAGES } from 'models/Image';
import * as $ from './GalleryImage.styled';

interface GalleryImageProps {
  onClick: (targetId: number) => void;
}

const GalleryImage: FC<GalleryImageProps> = props => {
  const { onClick } = props;
  return (
    <>
      {INFO_IMAGES.map(({ src, id }) => (
        <$.ImageBox key={id}>
          <$.Image
            height="100%"
            width="100%"
            src={src}
            onClick={() => void onClick(id)}
            alt=""
          />
        </$.ImageBox>
      ))}
    </>
  );
};

export default GalleryImage;
