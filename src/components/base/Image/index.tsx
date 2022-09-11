import React, { FC } from 'react';
import { INFO_IMAGES } from 'models/Image';
import * as $ from './ImageList.styled';

interface ImageListProps {
  onClick: (targetId: number) => void;
}

const ImageList: FC<ImageListProps> = props => {
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

export default ImageList;
