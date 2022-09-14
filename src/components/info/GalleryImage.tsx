import React, { FC } from 'react';
import { INFO_IMAGES } from 'models/Image';
import Image from 'next/image';
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
          <Image
            layout="fill"
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
