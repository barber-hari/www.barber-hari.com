import React, { FC } from 'react';
import { ImagePlus } from 'models/Image';
import * as $ from './Artwork.styled';

export interface ArtworkProps {
  images: ImagePlus[];
}

const Artwork: FC<ArtworkProps> = props => {
  const { images } = props;

  return (
    <$.Wrapper>
      <$.Container>
        <$.Masonry>
          {images.map(({ id, src, title }) => (
            <$.Images key={id}>
              <$.Image
                src={`${process.env.REACT_APP_PUBLIC_URL}/images/styles/${src}`}
              />
              <div>{title}</div>
            </$.Images>
          ))}
        </$.Masonry>
      </$.Container>
    </$.Wrapper>
  );
};

export default Artwork;
