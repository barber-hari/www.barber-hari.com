import React, { FC } from 'react';
import * as $ from './Artwork.styled';
import { STYLES_IMAGES } from '../../models/Image';

export interface ArtworkProps {}

const Artwork: FC<ArtworkProps> = () => {
  return (
    <$.Wrapper>
      <$.Container>
        <$.Masonry>
          {STYLES_IMAGES.map(({ src, id, tall }) =>
            tall === 2 ? (
              <$.Item
                key={`styles-image-${id}`}
                src={src}
                className="is-double"
              />
            ) : (
              <$.Item
                key={`styles-image-${id}`}
                src={src}
                className="is-triple"
              />
            )
          )}
        </$.Masonry>
      </$.Container>
    </$.Wrapper>
  );
};

export default Artwork;
